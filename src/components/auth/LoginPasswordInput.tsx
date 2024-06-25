import { StandardTextFieldProps } from "@mui/material";
import { LoginFormValues } from "@utils/validators/LoginSchema";
import { FormikProps } from "formik";
import AuthInputErrorArea from "./AuthInputErrorArea";
import LabeledInput from "./LabeledInput";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<LoginFormValues>;
}

const LoginPasswordInput = ({ formik }: Props) => {
    return (
        <div className="space-y-1">
            <LabeledInput
                htmlFor={'password'}
                labelText={'Password'}
                inputId={'password'}
                inputName={'password'}
                inputType={'password'}
                inputPlaceholder={"YourVeryStRoNgP@ssWord"}
                inputValue={formik.values.password}
                inputOnChange={formik.handleChange}
                inputError={!!formik.errors.password}
            />
            <AuthInputErrorArea error={formik.errors.password} />
        </div>
    )
}

export default LoginPasswordInput;