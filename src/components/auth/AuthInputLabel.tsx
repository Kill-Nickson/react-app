import { InputLabel } from "@mui/material"

interface Props {
    htmlFor: string;
    text: string;
}

const AuthInputLabel = ({ htmlFor, text}: Props) => {
    return (
        <InputLabel htmlFor={htmlFor} className="text-sm font-medium text-gray-600">
            {text}
        </InputLabel>
    )
}

export default AuthInputLabel