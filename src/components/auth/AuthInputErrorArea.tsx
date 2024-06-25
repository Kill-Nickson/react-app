interface Props {
    error: string | undefined;
}

const AuthInputErrorArea = ({ error }: Props) => {
  return (
    <p className="text-red-600 text-sm text-center h-5">{error}</p>
  )
}

export default AuthInputErrorArea