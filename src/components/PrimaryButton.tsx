import { Link } from "react-router-dom";

interface PrimaryButtonProps {
   to: string;
   children: React.ReactNode;
   className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ to, children, className = "" }) => {
   return (
      <Link
         to={to}
         className={`hover:scale-[1.05] px-5 h-[47px] flex items-center justify-center w-fit py-[6px] bg-TwPrimaryPurple rounded-md text-center transition-transform text-white font-semibold ${className}`}
      >
         {children}
      </Link>
   );
};

export default PrimaryButton;
