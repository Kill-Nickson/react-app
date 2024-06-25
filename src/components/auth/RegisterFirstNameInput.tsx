import { StandardTextFieldProps } from "@mui/material";
import { RegisterFormValues } from "@utils/validators/RegisterSchema";
import { FormikProps } from "formik";
import AuthInputErrorArea from "./AuthInputErrorArea";
import LabeledInput from "./LabeledInput";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<RegisterFormValues>;
}

const RegisterFirstNameInput = ({ formik }: Props) => {
    return (
        <div className="space-y-1">
            <LabeledInput
                htmlFor={'firstName'}
                labelText={'First Name'}
                inputId={'firstName'}
                inputName={'firstName'}
                inputType={'firstName'}
                inputPlaceholder={'John'}
                inputValue={formik.values.firstName}
                inputOnChange={formik.handleChange}
                inputError={!!formik.errors.firstName}
            />
            <AuthInputErrorArea error={formik.errors.firstName} />
        </div>
    )
}

export default RegisterFirstNameInput;