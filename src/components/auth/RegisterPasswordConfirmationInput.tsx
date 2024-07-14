import { StandardTextFieldProps } from "@mui/material";
import { RegisterFormValues } from "@utils/validators/RegisterSchema";
import { FormikProps } from "formik";
import AuthInputErrorArea from "./AuthInputErrorArea";
import LabeledInput from "./LabeledInput";
import { useTranslation } from "react-i18next";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<RegisterFormValues>;
}

const RegisterPasswordConfirmationInput = ({ formik }: Props) => {
    const { t } = useTranslation(); 

    return (
        <div className="space-y-1">
            <LabeledInput
                htmlFor={'passwordConfirmation'}
                labelText={ t('auth.register.password_confirmation') }
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