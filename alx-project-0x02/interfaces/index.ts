export interface CardProps {
    title: string;
    content: string;
}

export interface PostData {
    title: string;
    content: string;
}

export interface PostModalProps {
    onSubmit: (cardForm: PostModal) => void;
    onClose: () => void;
}