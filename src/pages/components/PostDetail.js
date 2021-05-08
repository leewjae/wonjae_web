import react from "react"
import { ProcessBubbleType } from "tsparticles"

const PostDetail = ({props}) => {
    console.log(props)
    return (
        <h1>{props.match.path}</h1>
    )
}

export default PostDetail