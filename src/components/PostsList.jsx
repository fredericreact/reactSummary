import { useState } from "react";
import Post from "./Post";
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

const PostsList = () => {
const [modalIsVisible, setModalIsVisible] = useState(true);
const [enteredBody,setEnteredBody] = useState('')
const [enteredAuthor, setEnteredAuthor] = useState('')

const hideModalHandler =() => {
    setModalIsVisible(false)
}

const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value)
}

const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value)
}

return (
<>
{modalIsVisible && 
<Modal onClose={hideModalHandler}>
<NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
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