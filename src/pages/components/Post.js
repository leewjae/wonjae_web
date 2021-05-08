import { dbService, storageService } from "../../fbase";
import React, { useState } from "react"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const Post = ({postObj}) => {

    const dateConverter = (dateString) => {
        const parstDate = dateString.split(" ")
        return (parstDate[1] + " " + parstDate[2] + ", "+ parstDate[3] + " " + parstDate[4] + " (KST)");
    }

    return (
        <div className = "post">
        <h2>{postObj.title}</h2>
        <h3>{postObj.post} </h3>
        <h4>{dateConverter(new Date(postObj.createdAt).toString())}</h4>
        </div>
    )
}

export default Post;