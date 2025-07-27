import { PostProps } from "@/interfaces"

const PostCard: React.FC<PostProps> =({ title, content, userId }) => {
    
    return (
        <div className="flex flex-col w-full bg-white rounded-l-lg">
            <h1>{title}</h1>
            <p>{content}</p>
            <p>UserID: {userId}</p>
        </div>
    )
}

export default PostCard;