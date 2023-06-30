import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLBRElement> {
  children: ReactNode;
  icon?: ReactElement;
}

export const Button = ({ children, icon }: IButtonProps) => {
  return (
    <button className="rounded-md font-bold flex justify-center item-center gap-3 py-2 bg-primary text-1xl mt-4 mb-4 px-4">
      <span>{children}</span>
      {icon}
    </button>
  );
};

export default Button;
