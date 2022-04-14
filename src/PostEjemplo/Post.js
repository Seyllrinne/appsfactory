const Post = ({postTitle, author,children}) => {
    return (

    <div>
        <h1>{postTitle}</h1>
        <h2>{author}</h2>
        <p>{children}</p>
    </div>
)
}

export default Post;