import SidebarNavItem from "./SidebarNavItem";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ROUTE from "@utils/enums";

type Props = {
  isOpen: boolean;
};

const drawerWidth = 160;

const Sidebar = ({ isOpen }: Props) => {
  const sidebarClasses = `transition-all duration-300 ease-in-out bg-gray-700 text-white h-full fixed top-0 left-0 transform relative ${isOpen ? 'translate-x-0' : '-translate-x-full'}`;

  const navItems = [
    { text: 'Home', Icon: HomeRoundedIcon },
    { text: 'Products', Icon: AppsRoundedIcon, route: ROUTE.PRODUCTS_LIST },
    { text: 'About', Icon: InfoRoundedIcon },
    { text: 'Support', Icon: ContactSupportRoundedIcon },
  ]

  return (
    <div className={`transition-all duration-300 ease-in-out`} style={{ width: isOpen ? drawerWidth : 0 }}>
      <div className={sidebarClasses} style={{ width: drawerWidth }}>
        <div className="p-4 h-full flex flex-col justify-between">
          <nav>
            <ul>
              {navItems.map(item => (
                <SidebarNavItem key={item.text} text={item.text} Icon={item.Icon} route={item.route} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
