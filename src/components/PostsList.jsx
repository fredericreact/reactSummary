import Post from "./Post";
import classes from './PostsList.module.css'
import NewPost from './NewPost'

const PostsList = () => {
return (
<>
<NewPost/>
<ul className={classes.posts}>
<Post author="Fred" body="react"/>
<Post author="John" body="Vue"/>
</ul>
</>
)
}

export default PostsList;