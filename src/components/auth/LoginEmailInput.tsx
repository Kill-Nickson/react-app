import { StandardTextFieldProps } from "@mui/material";
import { LoginFormValues } from "@utils/validators/LoginSchema";
import { FormikProps } from "formik";
import AuthInputErrorArea from "./AuthInputErrorArea";
import LabeledInput from "./LabeledInput";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<LoginFormValues>;
}

const LoginEmailInput = ({ formik }: Props) => {
    return (
        <div className="space-y-1">
            <LabeledInput
                htmlFor={'email'}
                labelText={'Email'}
                inputId={'email'}
                inputName={'email'}
                inputType={'email'}
                inputPlaceholder={'johndoe@example.com'}
                inputValue={formik.values.email}
                inputOnChange={formik.handleChange}
                inputError={!!formik.errors.email}
            />
            <AuthInputErrorArea error={formik.errors.email} />
        </div>
    )
}

export default LoginEmailInput;