import React from "react"
import {Container} from "reactstrap"
const PostDetail = (props) => {
    const post = props.location.state;

    const dateConverter = (dateString) => {
        const parstDate = dateString.split(" ")
        return (parstDate[1] + " " + parstDate[2] + ", "+ parstDate[3] + " " + parstDate[4] + " (KST)");
    }

    console.log(props)

    return (
        <>
            <Container>
                <h1>{post.title}</h1>
                <h3>{post.post}</h3>
                <h5>{dateConverter(new Date(post.createdAt).toString())}</h5>
                <div>
                    <button onClick={() => props.history.goBack()}>Go back to Blog</button>
                </div>
            </Container>
        </>
    )
}

export default PostDetail