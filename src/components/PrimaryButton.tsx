import { Link } from "react-router-dom";

interface PrimaryButtonProps {
   to: string;
   children: React.ReactNode;
   className?: string;
   onClick?: any
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ to, children, onClick, className = "" }) => {
   return (
      <Link
         to={to}
         onClick={onClick}
         className={`hover:scale-[1.05] px-5 h-[47px] flex items-center justify-center w-fit py-[6px] bg-TwPrimaryPurple rounded-md text-center transition-transform text-white font-semibold ${className}`}
      >
         {children}
      </Link>
   );
};

export default PrimaryButton;
