import { useTranslation } from "react-i18next"

const LoginFormHeader = () => {
    const { t } = useTranslation(); 

    return (
        <>
            <h2 className="text-3xl text-center font-semibold">{ t('auth.login.login_header') }</h2>
            <h5 className="text-center">{ t('auth.login.enter_creds') }</h5>
        </>
    )
}

export default LoginFormHeader