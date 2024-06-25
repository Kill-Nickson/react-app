import { Button } from "@mui/material";

interface Props {
    text: string;
}

const AuthSubmitButton = ({ text }: Props) => {
    return (
        <Button variant="outlined" type='submit' className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
            {text}
        </Button>
    )
}

export default AuthSubmitButton;