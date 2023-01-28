import { useState } from "react";
import Post from "./Post";
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

const PostsList = ({isPosting, onStopPosting}) => {
const [enteredBody,setEnteredBody] = useState('')
const [enteredAuthor, setEnteredAuthor] = useState('')

const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value)
}

const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value)
}

return (
<>
{isPosting && 
<Modal onClose={onStopPosting}>
<NewPost 
onBodyChange={bodyChangeHandler} 
onAuthorChange={authorChangeHandler}
onCancel ={onStopPosting}    
/>
</Modal> 
}

<ul className={classes.posts}>
<Post author={enteredAuthor} body={enteredBody}/>
<Post author="John" body="Vue"/>
</ul>
</>
)
}

export default PostsList;