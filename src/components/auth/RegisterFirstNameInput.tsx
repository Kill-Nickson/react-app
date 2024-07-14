import { StandardTextFieldProps } from "@mui/material";
import { RegisterFormValues } from "@utils/validators/RegisterSchema";
import { FormikProps } from "formik";
import AuthInputErrorArea from "./AuthInputErrorArea";
import LabeledInput from "./LabeledInput";
import { useTranslation } from "react-i18next";

interface Props extends StandardTextFieldProps {
    formik: FormikProps<RegisterFormValues>;
}

const RegisterFirstNameInput = ({ formik }: Props) => {
    const { t } = useTranslation(); 

    return (
        <div className="space-y-1">
            <LabeledInput
                htmlFor={'firstName'}
                labelText={ t('auth.register.first_name') }
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