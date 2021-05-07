import { dbService, storageService } from "../../fbase";
import React, { useState } from "react"

const Post = ({postObj}) => {

    return (
        <div className = "Nweet">
        <h5>{postObj.title}</h5>
        <h4>{postObj.post} </h4>
        <h5>{new Date(postObj.createdAt).toString()}</h5>
        </div>
    )
}

export default Post;