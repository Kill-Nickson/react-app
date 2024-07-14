import { CardFooter } from "@material-tailwind/react";
import { Card, CardContent, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import ROUTE from "@utils/enums";
import RegisterFirstNameInput from "@components/auth/RegisterFirstNameInput";
import RegisterLastNameInput from "@components/auth/RegisterLastNameInput";
import RegisterPasswordConfirmationInput from "@components/auth/RegisterPasswordConfirmationInput";
import { RegisterSchema, registerInitialValues } from "@utils/validators/RegisterSchema";
import RegisterEmailInput from "@components/auth/RegisterEmailInput";
import RegisterPasswordInput from "@components/auth/RegisterPasswordInput";
import ApiService from "@/openapi/apiService";
import AuthSubmitButton from "@components/auth/AuthSubmitButton";
import { useState } from "react";
import TextFollowedByLink from "@components/auth/TextFollowedByLink";
import { useTranslation } from "react-i18next";

const AuthRegister = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    
    const [isWaitingRes, setIsWaitingRes] = useState<boolean>(false);
    const handleErrors = (details: { [key: string]: string[] }) => {
        Object.entries(details).forEach(([field, errors]: [string, string[]]) => {
            formik.setFieldError(field, errors[0]);
        });
    };

    const formik = useFormik({
        initialValues: registerInitialValues,
        onSubmit: async (values) => {
            const { email, firstName, lastName, password, passwordConfirmation } = values;

            setIsWaitingRes(true);
            await ApiService.accounts().accountsUsersCreate({
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
                password2: passwordConfirmation
            }).then(() => {
                setIsWaitingRes(false);
                navigate(ROUTE.AUTH_LOGIN);
            }).catch((e: unknown) => {
                setIsWaitingRes(false);
                if (e instanceof AxiosError && e?.response?.data.details) {
                    handleErrors(e.response.data.details);
                }
            });
        },
        enableReinitialize: false,
        validateOnBlur: false,
        validateOnChange: false,
        validateOnMount: false,
        validationSchema: RegisterSchema
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Card className="max-w-md mx-auto my-3 p-3 bg-white rounded shadow-lg">
                <h2 className="text-3xl text-center font-semibold">{ t('auth.register.register_header') }</h2>
                <CardContent className="mx-auto space-y-1 ">
                    <RegisterEmailInput formik={formik} />
                    <RegisterFirstNameInput formik={formik} />
                    <RegisterLastNameInput formik={formik} />
                    <RegisterPasswordInput formik={formik} />
                    <RegisterPasswordConfirmationInput formik={formik} />
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    {isWaitingRes
                        ? <div className="flex justify-center items-center">
                            <CircularProgress />
                        </div>
                        : <AuthSubmitButton text={ t('auth.register.register') } />
                    }
                </CardFooter>
                <TextFollowedByLink
                    text={ t('auth.register.already_have_acc') }
                    linkText={ t('auth.register.login_here') }
                    route={ROUTE.AUTH_LOGIN}
                />
            </Card>
        </form>
    )
}

export default AuthRegister;