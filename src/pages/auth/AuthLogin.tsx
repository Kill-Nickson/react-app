
import LoginEmailInput from "@components/auth/LoginEmailInput";
import LoginPasswordInput from "@components/auth/LoginPasswordInput";
import { CardFooter } from "@material-tailwind/react";
import { Card, CardContent, CircularProgress } from "@mui/material";
import { LoginSchema, loginInitialValues } from "@utils/validators/LoginSchema";
import { useFormik } from "formik";
import { useState } from "react";
import { useAppDispatch } from '@/app/hooks';
import { useNavigate } from "react-router-dom";
import { signIn } from "@store-services/auth/authSlice";
import ROUTE from "@utils/enums";
import AuthSubmitButton from "@components/auth/AuthSubmitButton";
import LoginFormHeader from "@components/auth/LoginHeader";
import AuthInputErrorArea from "@components/auth/AuthInputErrorArea";
import TextFollowedByLink from "@components/auth/TextFollowedByLink";

const AuthLogin = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [errorRes, setErrorRes] = useState({ errorText: '', waiting: false })

    const formik = useFormik({
        initialValues: loginInitialValues,
        onSubmit: async (values) => {
            setErrorRes({ ...errorRes, waiting: true });
            const { email, password } = values;

            await dispatch(signIn({ email: email.trim(), password: password.trim() }))
                .unwrap()
                .then(() => navigate(ROUTE.APP_ROOT))
                .catch(({ detail }) => {
                    setErrorRes(prevState => ({ ...prevState, errorText: detail }));
                })
                .finally(() => {
                    setErrorRes(prevState => ({ ...prevState, waiting: false }));
                });
        },
        enableReinitialize: false,
        validateOnBlur: false,
        validateOnChange: false,
        validateOnMount: false,
        validationSchema: LoginSchema
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Card className="max-w-md mx-auto my-24 p-5 bg-white rounded shadow-lg">
                <LoginFormHeader />
                <CardContent className="mx-auto space-y-4 mt-10">
                    <LoginEmailInput formik={formik} />
                    <LoginPasswordInput formik={formik} />
                </CardContent>
                <AuthInputErrorArea error={errorRes.errorText} />
                <CardFooter className="flex justify-center items-center">
                    {errorRes.waiting
                        ? <CircularProgress />
                        : <AuthSubmitButton text={'Login'} />
                    }
                </CardFooter>
                <TextFollowedByLink
                    text={"Don't have an account?"}
                    linkText={"Register here"}
                    route={ROUTE.AUTH_REGISTER}
                />
            </Card>
        </form>
    )
}

export default AuthLogin;