import { StandardTextFieldProps } from "@mui/material";
import { RegisterFormValues } from "@utils/validators/RegisterSchema";
import { FormikProps } from "formik";
import AuthInputErrorArea from "./AuthInputErrorArea";
import LabeledInput from "./LabeledInput";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<RegisterFormValues>;
}

const RegisterLastNameInput = ({ formik }: Props) => {
    return (
        <div className="space-y-1">
            <LabeledInput
                htmlFor={'lastName'}
                labelText={'Last Name'}
                inputId={'lastName'}
                inputName={'lastName'}
                inputType={'lastName'}
                inputPlaceholder={'Doe'}
                inputValue={formik.values.lastName}
                inputOnChange={formik.handleChange}
                inputError={!!formik.errors.lastName}
            />
            <AuthInputErrorArea error={formik.errors.lastName} />
        </div>
    )
}

export default RegisterLastNameInput;