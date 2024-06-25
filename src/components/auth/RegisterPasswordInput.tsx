import { StandardTextFieldProps } from "@mui/material";
import { RegisterFormValues } from "@utils/validators/RegisterSchema";
import { FormikProps } from "formik";
import AuthInputErrorArea from "./AuthInputErrorArea";
import LabeledInput from "./LabeledInput";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<RegisterFormValues>;
}

const RegisterPasswordInput = ({ formik }: Props) => {
    return (
        <div className="space-y-1">
            <LabeledInput 
                htmlFor={'password'}
                labelText={'Password'}
                inputId={'password'}
                inputName={'password'}
                inputType={'password'}
                inputPlaceholder={'veryStRoNgP@ssWord9example'}
                inputValue={formik.values.password}
                inputOnChange={formik.handleChange}
                inputError={!!formik.errors.password}
            />
            <AuthInputErrorArea error={formik.errors.password}/>
        </div>
    )
}

export default RegisterPasswordInput;