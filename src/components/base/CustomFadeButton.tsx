import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const CustomFadeButton = ({ children, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${className} w-full px-4 h-12 2xl:h-12 text-[28px] leading-[30px] 2xl:text-[28px] 2xl:leading-[34px] whitespace-nowrap flex items-center justify-center gap-2  bg-gradient-to-r from-[#e86104] to-[#ee8610] rounded-[50px] font-medium text-white dark:text-black hover:scale-105`}
    >
      {children}
    </button>
  );
};

export default CustomFadeButton;