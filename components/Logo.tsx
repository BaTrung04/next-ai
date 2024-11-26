import { cn } from "@/lib/utils";
import { BrainCircuit } from "lucide-react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "700", subsets: ["latin"] });
interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = () => {
  return (
    <div className={cn("flex items-center")}>
      <BrainCircuit color="#0ea5e9" size={40} />
      <span className={cn("ml-2 font-bold text-3xl")}>Brainfast</span>
    </div>
  );
};

export default Logo;
