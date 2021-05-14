import React, { useEffect, useState } from "react";
import { dbService } from "../fbase.js";
import {Container, Col} from "reactstrap"
import {Link} from "react-router-dom"
import "./css/blog.css"
import {v4 as uuidv4} from "uuid";
import { Box, Grommet, Pagination, Text } from 'grommet';

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
    //currentPostIndex represent what is the current post index number.
    //If you want to show n posts at once, set this state to n - 1
    const [currentPostIndex, setCurrentPostIndex] = useState(0);

    const [numberOfPostsInOneView, setNumberOfPostsInOneView] = useState(3);
    //
    const [maximumVisibleWordLength, setMaximumVisibleWordLength] = useState(50);

    //This will update the state "posts"
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
        // setPostsInOneView(posts.slice(currentPostIndex, (currentPostIndex + numberOfPostsInOneView - 1)))
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

    const nextPosts = () => {
        console.log(currentPostIndex)
        {
            ((currentPostIndex + numberOfPostsInOneView) < posts.length)
            ?
            setCurrentPostIndex(currentPostIndex + numberOfPostsInOneView)
            :
            window.alert("You cannot move forward")
        }
    }

    const previousPosts = () => {
        console.log(currentPostIndex)
        {
            ((currentPostIndex - numberOfPostsInOneView) >= 0)
            ?
            setCurrentPostIndex(currentPostIndex - numberOfPostsInOneView)
            :
            window.alert("You cannot move backward")
        }
    }

    return (
        <Container>
            {userObj ? 
                <>
                {/* Super user login was successful */}
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
            
            
            
            </>
            :
            <h1></h1>}
            <h1>Hello</h1>
            <div>

            <div id = "posting">Postings...</div>

            {/* Mapping the posts object */}
            {posts.slice(currentPostIndex, (currentPostIndex + numberOfPostsInOneView)).map((post) => (
                    <div className = "post" key = {post.id}>
                    <Link to = {{
                        pathname: `/blog/${post.id}`,
                        state: post
                    }}>
                        <h2>{post.title}</h2>
                    </Link>
                    {/* If the content of the post is too long, it will print ... instead. */}
                    {
                        (post.post.length > maximumVisibleWordLength) ? 
                        
                        <h3>{post.post.slice(0,maximumVisibleWordLength) + "..."} </h3>
                        :
                        
                        <h3>{post.post} </h3>
                    }
                    <div className = "timestamp">{dateConverter(new Date(post.createdAt).toString())}</div>
                    </div>
                ))}
            </div>
            {/* <button onClick = {()=>{console.log(posts.slice(0,3))}}>console log posts</button> */}
            {
                (posts.length > numberOfPostsInOneView) 
                ?
                // number of posts is greater than number of max posts
                <>
                <button onClick={previousPosts}>
                    Previous Posts
                </button>
                <button onClick={nextPosts}>
                    Next Posts
                </button>
                <Box
                    align="center"
                    pad={{ top: 'medium', bottom: 'medium', horizontal: 'medium' }}
                >
                    <Text margin={{ bottom: 'small' }}>
                    Custom Theme via theme.pagination.button
                    </Text>
                    <Pagination onChange={(event)=>{<>
                    {console.log(event.page)}
                    {console.log(event.startIndex)}
                    {console.log(event.endIndex)}
                    {setCurrentPostIndex(event.startIndex)}
                    </>}} numberItems={posts.length} step={3}/>
                </Box>
                </>
                :
                // number of posts is smaller than number of max posts
                null
            }
        </Container>
    )

    
}


export default Blog;