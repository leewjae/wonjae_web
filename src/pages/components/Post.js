import { dbService, storageService } from "../../fbase";
import React, { useState } from "react"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import PostDetail from "./PostDetail";

/**Since Post Component does not require router, props should be passed manually using JSX syntax
 * props contains blog's props value, because Post will technically display in the blog component.
*/

const Post = ({postObj, props}) => {
    // console.log(props)
    const dateConverter = (dateString) => {
        const parstDate = dateString.split(" ")
        return (parstDate[1] + " " + parstDate[2] + ", "+ parstDate[3] + " " + parstDate[4] + " (KST)");
    }

    return (
        <div className = "post">
        <Router>
            <Link to = {props.match.path + "/"+ postObj.id}>
                <h2>{postObj.title}</h2>
            </Link>
            <Switch>
                <Route path = {props.match.path + "/"+ postObj.id}>
                    <PostDetail props = {props}/>
                </Route>
            </Switch>
        </Router>
        <h3>{postObj.post} </h3>
        <h4>{dateConverter(new Date(postObj.createdAt).toString())}</h4>
        </div>
    )
}

export default Post;