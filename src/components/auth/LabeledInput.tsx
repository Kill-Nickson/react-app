import { Input } from "@mui/material"
import AuthInputLabel from "./AuthInputLabel"
import { ChangeEventHandler } from "react";

type Props = {
    htmlFor: string;
    labelText: string;
    inputId: string;
    inputName: string;
    inputType: string;
    inputPlaceholder: string | undefined;
    inputValue: string;
    inputOnChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    inputError: boolean;
}

const LabeledInput = ({
    htmlFor,
    labelText,
    inputId,
    inputName,
    inputType,
    inputPlaceholder,
    inputValue,
    inputOnChange,
    inputError
}: Props) => {
    return (
        <>
            <AuthInputLabel htmlFor={ htmlFor } text={labelText} />
            <Input
                id={inputId}
                name={inputName}
                type={inputType}
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={inputOnChange}
                error={inputError}
                className="w-full px-5 py-1 border border-gray-300 rounded-md hover:border-blue-500 transition-colors"
            />
        </>
    )
}

export default LabeledInput