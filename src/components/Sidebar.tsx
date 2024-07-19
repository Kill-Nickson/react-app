import SidebarNavItem from "./SidebarNavItem";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ROUTE from "@utils/enums";
import { useTranslation } from "react-i18next";

type Props = {
  isOpen: boolean;
  drawerWidth: number;
};

const Sidebar = ({ isOpen, drawerWidth }: Props) => {
  const { t } = useTranslation();

  const sidebarClasses = `w-1/5 transition-all bg-gray-700 text-white h-full fixed top-0 left-0 transform relative z-100 ${isOpen ? 'translate-x-0 duration-700' : '-translate-x-full duration-300'}`;

  type Content = {
    home: string;
    products: string;
    about: string;
    support: string;
  }
  
  const translateContent: Content = t("sideBar", { returnObjects: true })
  
  const navItems = [
    { text: translateContent.home, Icon: HomeRoundedIcon },
    { text: translateContent.products, Icon: AppsRoundedIcon, route: ROUTE.PRODUCTS_LIST },
    { text: translateContent.about, Icon: InfoRoundedIcon },
    { text: translateContent.support, Icon: ContactSupportRoundedIcon },
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
