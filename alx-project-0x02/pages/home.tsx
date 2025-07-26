import Card from "@/components/common/Card";

const Home: React.FC = () => {
    return (
        <div className="px-8 py-2">
            <h1 className="pb-3">Home</h1>
            <div className="pb-3">
                <Card
                    title="Alx Project"
                    content="This project is a comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS. It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure. The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs."
                />
            </div>
            <div>
                <Card
                    title="Requirements"
                    content="Understand how to scaffold a Next.js application with TypeScript and Tailwind CSS"
                />
            </div>


        </div>
    )
}

export default Home;