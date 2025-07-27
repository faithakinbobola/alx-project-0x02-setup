import { UserCardProps } from "@/interfaces";
import { getStaticProps } from "@/pages/posts";

 const UserCard: React.FC<UserCardProps> = ({ id, name, address, phone, website, company, email, username }) => {
    return ( 
        <div>
            <p>{id}</p>
            <p>{username}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p> {address.street}, {address.suite}, {address.city} </p>
            <p> {address.zipcode} </p>
            <p>{address.geo.lat}, {address.geo.lng}</p>
            <p>{company.name}</p>
            <p>{company.catchPhrase}</p>
            <p>{company.bs}</p>
            <p>{website}</p>
        </div>
     );
}
 
export default UserCard;