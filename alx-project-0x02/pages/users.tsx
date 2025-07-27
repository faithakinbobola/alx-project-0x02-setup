import UserCard from "@/components/common/UserCard";
import { UserCardProps } from "@/interfaces";

const Users: React.FC<UserCardProps[]> = ({ users }) => {
    return ( 
        <div>
            {
                users.map(( { id, name, address, phone, website, company, email, username }: UserCardProps, key: number ) => (
                    <UserCard id={id} name={name} address={address} phone={phone} website={website} company={company} email={email}username={username} key={key} />
                ))
            }
        </div>
     );
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return {
        props: { 
            users
        }
    }

}
 
export default Users;