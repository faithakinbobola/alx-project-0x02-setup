import Link from "next/link";

const Header: React.FC = () => {
    return (
        <div className="flex justify-between py-3">
            <Link href="/home">Home</Link>
            <div className="flex gap-2">
                <Link href="/about">About</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/users">Users</Link>
            </div>
        </div>
    )
}

export default Header;