import Button from "@/components/common/Button";
import { ButtonProps } from "@/interfaces";

const About: React.FC<ButtonProps>= () => {
    return (
        <div>
            <h1>About</h1>
            <Button
                label="Small Rounded-sm"
                size="small"
                shape="rounded-sm"
                onClick={() => alert('Small Button Clicked')}
            />

            <Button
                label="Medium Rounded-md"
                size="medium"
                shape="rounded-md"
                onClick={() => alert('Medium Button Clicked')}
            />

            <Button
                label="Large Rounded-lg"
                size="large"
                shape="rounded-full"
                onClick={() => alert('Large Button Clicked')}
            />
        </div>
    )
}

export default About;