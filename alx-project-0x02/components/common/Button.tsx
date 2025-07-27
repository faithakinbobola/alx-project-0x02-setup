import { ButtonProps } from "@/interfaces";

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    };

const Button: React.FC<ButtonProps> = ({ label, size='medium', shape='rounded-md', onClick }) => {

    return (
        <div>
            <button
                type="button"
                onClick={onClick}
                className={`bg-amber-600 text-white ${sizes[size]} ${shape} hover:bg-amber-400 transition m-2`}
            >
                {label}
            </button>
        </div>
    )
}

export default Button;