import { useState } from "react";
import Post from "./Post";
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

const PostsList = ({isPosting, onStopPosting}) => {
const [posts,setPosts] = useState({})

const addPostHandler = (postData) => {
    setPosts((existingPosts)=>[postData, ...existingPosts])
}

return (
<>
{isPosting && 
<Modal onClose={onStopPosting}>
<NewPost 

onCancel ={onStopPosting}    
onAddPost={addPostHandler}
/>
</Modal> 
}

<ul className={classes.posts}>
<Post author="John" body="Vue"/>
</ul>
</>
)
}

export default PostsList;