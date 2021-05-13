import React, { useEffect, useState } from "react";
import { dbService } from "../fbase.js";
import {Container, Col} from "reactstrap"
import {Link} from "react-router-dom"
import "./css/blog.css"
import {v4 as uuidv4} from "uuid";

const Blog = (props) => {
    //postTitle is for the title of the post
    const [postTitle, setPostTitle] = useState("");
    //post is for the content of the post
    const [text, setText] = useState("");
    //posts is for the array of posts in the db.
    const [posts, setPosts] = useState([]);
    //isWriting tells the machine if the user wants to write.
    const [isWriting, setIsWriting] = useState(false);

    const [userObj, setUserObj] = useState(null);

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
        setUserObj(props.userObj)
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


    const dateConverter = (dateString) => {
        const parstDate = dateString.split(" ")
        return (parstDate[1] + " " + parstDate[2] + ", "+ parstDate[3] + " " + parstDate[4] + " (KST)");
    }

    return (
        <Container>
            {() => {
                if (userObj) {
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
                            <input type="file" accept="image/*"/>
                            <input type = "button" value = "Cancel" onClick={()=>{setIsWriting(false)}} />
                        </form>
                        </Col>
                        </>
                        :
                            <button onClick={()=>{setIsWriting(true)}}>
                                Write Post
                            </button>
                        }
                }
            }}
            <h1>Hello this is blog site</h1>
            <div>

            <div id = "posting">Postings...</div>

            {/* Mapping the posts object */}

            {posts.map((post) => (
                    <div className = "post" key = {post.id}>
                    <Link to = {{
                        pathname: `/blog/${post.id}`,
                        state: post
                    }}>
                        <h2>{post.title}</h2>
                    </Link>
                    <h3>{post.post} </h3>
                    <h4>{dateConverter(new Date(post.createdAt).toString())}</h4>
                    </div>
                ))}
            <button onClick = {()=>{console.log(userObj)}}>console log userObj</button>
            </div>
        </Container>

    )

    
}


export default Blog;