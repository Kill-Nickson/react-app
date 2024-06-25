import { Link } from 'react-router-dom'

type Props = {
    text: string;
    linkText: string;
    route: string;
}

const TextFollowedByLink = ({ text, route, linkText }: Props) => {
  return (
    <h6 className="text-center mt-5">
            {text}
            <Link className="ml-1 underline text-blue-500" to={route}>
                {linkText}
            </Link>
        </h6>
  )
}

export default TextFollowedByLink