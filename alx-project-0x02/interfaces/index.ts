export interface CardProps {
    title: string;
    content: string;
}

export interface PostData {
    title: string;
    content: string;
}

export interface PostModalProps {
    onSubmit: (cardForm: PostData) => void;
    onClose: () => void;
}

export interface ButtonProps {
    label: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    onClick?: () => void;
}

export interface PostProps {
    title: string;
    content: string;
    userId: number;
}

export interface UserCardProps {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}
