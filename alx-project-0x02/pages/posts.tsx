import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { title } from "process";

const Posts: React.FC<PostProps[]> =({ posts }) => {
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-2 gap-2 bg-amber-200">
                {
                    posts?.map(({ title, content, userId }: PostProps, key: number) => (
                        <PostCard title={title} content={content} userId={userId} key={key} />
                    ))
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const response = await
    fetch ('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const posts = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
    }))

    return {
        props: { posts },
    }
}

export default Posts;