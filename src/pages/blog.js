import React, { useEffect, useState } from "react";
import { dbService, storageService } from "../fbase.js";
import {Container, Col, Row} from "reactstrap"
import {Link} from "react-router-dom"
import "./css/blog.css"
import {v4 as uuidv4} from "uuid";
import { Box, Grommet, Pagination, Text } from 'grommet';

const Blog = (props) => {
    //PostTitle is for the title of the post
    const [postTitle, setPostTitle] = useState("");
    //Text is for the content of the post
    const [text, setText] = useState("");
    //Posts is for the array of posts in the db.
    const [posts, setPosts] = useState([]);
    //Attachment is the file of the post.
    const [attachment, setAttachment] = useState("");
    //isWriting tells the machine if the user wants to write.
    //The default value is false
    const [isWriting, setIsWriting] = useState(false);

    //Userobject is the value of user info.
    const [userObj, setUserObj] = useState(null);

    //currentPostIndex represent what is the current post index number.
    //If you want to show n posts at once, set this state to n - 1
    const [currentPostIndex, setCurrentPostIndex] = useState(0);

    //Change this value to change number of posts in one view.
    const [numberOfPostsInOneView, setNumberOfPostsInOneView] = useState(10);

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
        window.scrollTo(0, 0)
    },[])

    //user post using webpage
    const onSubmit = async(event) => {

        //Prevents submission of nothing
        event.preventDefault();

        let attachmentUrl = "";

        if (attachment != "") {
            const attachmentRef = storageService
            .ref()
            .child(`test/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }

        const postObj = {
            createdAt : Date.now(),
            post : text,
            title : postTitle,
            topic : "default",
            likes : 0,
            views : 0,
            photo : "",
            attachmentUrl
        }

        await dbService.collection("posts").add(postObj);
        setText("");
        setPostTitle("");
        setAttachment();
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

    const onFileChange = (event) => {
        const {
            target: {files},
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };

    const onClearAttachment = (event) => {
        setAttachment(null);
    }

    return (
        <Container>
            <Container id = "post-view">
            <div id = "posting">Blog</div>
            <Row> 
            {posts.slice(currentPostIndex, (currentPostIndex + numberOfPostsInOneView)).map((post) => (
                    <div className = "post" key = {post.id}>
                    <Link to = {{
                        pathname: `/blog/${post.id}`,
                        state: post
                    }}>
                        {post.attachmentUrl ? <img src={post.attachmentUrl} className = "post-photo"/> 
                        :
                        <img src={require('./img/EECS-logo.png').default} className = "post-photo"/>}
                        {/* <div className = "timestamp">{dateConverter(new Date(post.createdAt).toString())}</div> */}
                    </Link>
                    </div>
                ))}
            </Row>

            {/* Pagination Section */}
            {
                <Box
                    pad={{ top: 'medium', bottom: 'medium', horizontal: 'medium' }}
                    id = "blog-pagination"
                >
                    <Text margin={{ bottom: 'small' }}>
                    Click the button below for navigating posts!        
                    </Text>
                    <Pagination onChange={(event)=>{<>
                    {setCurrentPostIndex(event.startIndex)}
                    </>}} numberItems={posts.length} step={numberOfPostsInOneView}/>
                </Box>
            }

            </Container>
            {userObj ? 
                <>
                {/* Super user login was successful */}
                        { isWriting ? 
                            <>
                                <Box>
                                    <textarea
                                            id = "title-box"
                                            type = "text"
                                            value = {postTitle}
                                            onChange = {onTitleChange}
                                            placeholder = "What is the title of your post?"
                                            cols = {50}
                                            rows = {1}
                                    />
                                </Box>
                                <Box direction="column">
                                <form onSubmit = {onSubmit}>
                                <textarea
                                        id = "writing-box"
                                        type="text"
                                        value={text}
                                        onChange={onTextChange}
                                        placeholder="What's on your mind?"
                                        cols = {80}
                                        rows = {10}
                                />
                                <input type="file" accept = "image/*" onChange = {onFileChange}/>
                                <input type="submit" value = "upload" />
                                </form>
                                {/* <input type="file" accept="image/*"/> */}
                                <input type = "button" value = "Cancel" onClick={()=>{setIsWriting(false)}} />
                                {attachment &&
                                    <div>
                                        <img src={attachment} width = "50px" height = "50px"/>
                                        <button onClick={onClearAttachment}>Clear</button>
                                        </div>
                                    }
                                </Box>
                            </>
                                :
                                <button onClick={()=>{setIsWriting(true)}}>
                                    Write Post
                                </button>
                        }
            </>
            :
                null
            }
        </Container>
    )

    
}


export default Blog;