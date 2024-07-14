import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="flex justify-center items-center">
          <p className="text-sm text-center">&copy; 2024 ReactApp. { t('footer.all_rights_reserved') }</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;