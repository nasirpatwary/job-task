import Link from "next/link";
import { IoLogoAmplify } from "react-icons/io5";

const Logo = () => {
  return <div className="flex items-center text-2xl">
    <IoLogoAmplify className="text-primary"/>
    <Link href="/">Nasir</Link>
  </div>;
};

export default Logo;
