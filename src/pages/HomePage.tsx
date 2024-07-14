import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-[300px] flex justify-center items-center gap-4">
      { t('home_page') }
    </div>
  );
};

export default HomePage;