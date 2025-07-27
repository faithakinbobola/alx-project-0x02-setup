import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps, PostData } from "@/interfaces";
import { useState } from "react";

const Home: React.FC<CardProps[]> = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [cardForm, setCardForm] = useState<PostData[]>([]);

    const handleAddPost = (newPost: PostData) => {
        setCardForm((prev) => [...prev, newPost])
    }

    return (
        <div className="px-8 py-2">
            <div>
                <h1 className="pb-3">Home</h1>
                <div className="flex justify-between">
                    <h1 className="flex justify-between">Post Content</h1>
                    <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
                </div>
                <div className="pb-3">
                    <Card
                        title="Alx Project"
                        content="This project is a comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS. It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure. The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs."
                    />
                </div>
                <div className="pb-3">
                    <Card
                        title="Requirements"
                        content="Understand how to scaffold a Next.js application with TypeScript and Tailwind CSS"
                    />
                </div>
                <div className="pb-3">
                    {
                        cardForm?.map(({ title, content }: CardProps, key: number) => (
                            <Card title={title} content={content} key={key} />
                        ))
                    }
                </div>
            </div>
            
            {
                modalOpen && (
                    <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
                )
            }
        </div>
    )
}

export default Home;