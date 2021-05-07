import React, { useEffect, useState } from "react";
import { dbService } from "../fbase.js";
import Post from "./components/Post"



const Blog = () => {
    //postTitle is for the title of the post
    const [postTitle, setPostTitle] = useState("");
    //post is for the content of the post
    const [post, setPost] = useState("");
    //posts is for the array of posts in the db.
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const dbPosts = await dbService.collection("posts").get();
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

    return (
        <>
        <h1>Hello this is blog site</h1>
        <div className = "Nweets">
            {posts.map((post) => (
            <Post 
            key = {post.id}
            postObj={post} 
            />))}
        </div>
        </>
    )
}

export default Blog