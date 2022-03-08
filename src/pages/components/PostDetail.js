import React, { useEffect } from "react"
import {Container, Row} from "reactstrap"
import { dbService } from "../../fbase.js";
import "../css/postDetail.css"
import { useState } from "react"
import { Settings, useWindowDimensions } from "react-native";
const PostDetail = (props) => {
    const pid = props.match.params.id
    const [likes, setLikes] = useState(0)
    const [dislikes, setDisLikes] = useState(0)
    const [title, setTitle] = useState(null) 
    const [body, setBody] = useState(null) 
    const [date, setDate] = useState(null)
    const [attachment, setAttachment] = useState(null)


    const dateConverter = (dateString) => {
        const parstDate = dateString.split(" ")
        return (parstDate[1] + " " + parstDate[2] + ", "+ parstDate[3] + " " + parstDate[4] + " (KST)");
    }

    const getPosts = async () => {
        const dbPosts = await dbService.collection("posts").doc(pid).get();
        const postObj = {
            id : dbPosts.id,
            ...dbPosts.data(), 
        };
        if (isNaN(postObj.likes)) {
            dbService.collection("posts").doc(pid).update({likes: 1})
            setLikes(0)
        } else {
            setLikes(postObj.likes)      
        }
        if (isNaN(postObj.dislikes)) {
            dbService.collection("posts").doc(pid).update({dislikes: 1})
            setDisLikes(0)
        } else {
            setDisLikes(postObj.dislikes)      
        }
        setTitle(postObj.title)
        setBody(postObj.post)
        setDate(dateConverter(new Date(postObj.createdAt).toString()))
        setAttachment(postObj.attachmentUrl ? postObj.attachmentUrl 
        : null)
    }

    useEffect(() => {
        getPosts();
    },[])


    return (
        <>
            <Container className="postBox">
                <h1 className="post-title post-detail"  >{title}</h1>
                <h3 className="post-body post-detail" >{body}</h3>
                {attachment? <img src={attachment} className = "post-detail-photo post-detail" /> : null}
                <h5 className="post-date post-detail" >{date}</h5>
                <div>
                    <Row>
                    <button onClick={() => props.history.goBack()}
                            className="post-btn"      
                            >Go back to Blog</button>
                    <button onClick={() => {
                            dbService.collection("posts").doc(pid).update({likes: likes + 1});        // Increase Like by One
                            setLikes(likes + 1)
                                    }}
                            className="post-like" 
                            className="post-btn"    
                                    > Like | {likes} </button>
                    <button onClick={() => {
                            dbService.collection("posts").doc(pid).update({dislikes: dislikes + 1});        // Increase Like by One
                            setDisLikes(dislikes + 1)
                            }}
                            className="post-btn"    
                            > Dislike | {dislikes} </button>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default PostDetail