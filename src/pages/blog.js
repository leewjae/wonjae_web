import React, { useEffect, useState } from "react";
import { dbService } from "../fbase.js";
import Post from "./components/Post"
import {Container, Row, Col} from "reactstrap"
import "./css/blog.css"

const Blog = (props) => {
    //postTitle is for the title of the post
    const [postTitle, setPostTitle] = useState("");
    //post is for the content of the post
    const [text, setText] = useState("");
    //posts is for the array of posts in the db.
    const [posts, setPosts] = useState([]);
    //isWriting tells the machine if the user wants to write.
    const [isWriting, setIsWriting] = useState(false);

    const getPosts = async () => {
        const dbPosts = await dbService.collection("posts").orderBy("createdAt", "asc").get();
        dbPosts.forEach((document) => {
            const postObj = {
                id : document.id,
                ...document.data(), 
            };
            setPosts((prev) => [postObj, ...prev])
        });
    }

    //useEffect will run when the page is loaded.
    useEffect(() => {
        getPosts();
    },[])

    //user post using webpage
    const onSubmit = async(event) => {

        //Prevents submission of nothing
        event.preventDefault();

        const postObj = {
            createdAt : Date.now(),
            post : text,
            title : postTitle
        }

        await dbService.collection("posts").add(postObj);
        setText("");
        setPostTitle("");
    }

    //display changed value (example: change in 
    //title, content, etc
    //
    const onTextChange = (event) => {
        const {target : {value}, } = event;
        setText(value);
    }

    const onTitleChange = (event) => {
        const {target : {value}, } = event;
        setPostTitle(value);
    }

    return (
        <Container>
            <h1>Hello this is blog site</h1>
            <h1>If you want to see all thing, please let me know</h1>
            <div className = "Nweets">
                { isWriting ? 
                <>
                <Col>
                <form onSubmit = {onSubmit}>
                    <textarea
                        id = "title-box"
                        type = "text"
                        value = {postTitle}
                        onChange = {onTitleChange}
                        placeholder = "What is the title of your post?"
                        cols = {30}
                        rows = {1}
                    />
                    <textarea
                        id = "content-box"
                        type="text"
                        value={text}
                        onChange={onTextChange}
                        placeholder="What's on your mind?"
                    />
                    <input type="submit" value = "upload"/>
                    <input type = "button" value = "Cancel" onClick={()=>{setIsWriting(false)}} />
                </form>
                </Col>
                </>
                :
                    <button onClick={()=>{setIsWriting(true)}}>
                        Write Post
                    </button>
                }
            <div id = "posting">Postings...</div>
            {posts.map((post) => (
                <Post 
                    key = {post.id}
                    postObj={post} 
                    props = {props}
                />
                ))}
            </div>
        </Container>

    )
}

export default Blog;