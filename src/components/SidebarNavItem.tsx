import { SvgIconComponent } from '@mui/icons-material';
import ROUTE from '@utils/enums';
import { NavLink } from 'react-router-dom';

type Props = {
    text: string;
    Icon: SvgIconComponent;
    route?: string
};

const SidebarNavItem = ({ text, Icon, route = ROUTE.APP_ROOT }: Props) => {
    return (
        <li className="mb-2">
            <NavLink
                to={route}
                className="block py-2 px-4 rounded transition-colors duration-200 hover:bg-gray-600 hover:text-white"
            >
                   <Icon className='pb-1 mr-1' />
                {text}
            </NavLink>
        </li>
    );
};

export default SidebarNavItem;