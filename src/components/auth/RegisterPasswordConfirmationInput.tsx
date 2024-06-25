import { StandardTextFieldProps } from "@mui/material";
import { RegisterFormValues } from "@utils/validators/RegisterSchema";
import { FormikProps } from "formik";
import AuthInputErrorArea from "./AuthInputErrorArea";
import LabeledInput from "./LabeledInput";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<RegisterFormValues>;
}

const RegisterPasswordConfirmationInput = ({ formik }: Props) => {
    return (
        <div className="space-y-1">
            <LabeledInput
                htmlFor={'passwordConfirmation'}
                labelText={'Password Confirmation'}
                inputId={'passwordConfirmation'}
                inputName={'passwordConfirmation'}
                inputType={'password'}
                inputPlaceholder={'veryStRoNgP@ssWord9example'}
                inputValue={formik.values.passwordConfirmation}
                inputOnChange={formik.handleChange}
                inputError={!!formik.errors.passwordConfirmation}
            />
            <AuthInputErrorArea error={formik.errors.passwordConfirmation} />
        </div>
    )
}

export default RegisterPasswordConfirmationInput;