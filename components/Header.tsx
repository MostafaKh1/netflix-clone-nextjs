import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { BsSearch } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import useAuth from "./../hooks/useAuth";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#141414]"} py-0 `}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/Netflix-logo.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="header-link">Home</li>
          <li className="header-link">TV Show</li>
          <li className="header-link">Movies</li>
          <li className="header-link">New & Popular</li>
          <li className="header-link">My List</li>
        </ul>
      </div>
      <div className="flex items-center  space-x-4  text-sm font-light ">
        <BsSearch className="hidden sm:inline " size={32} />
        <p className="hidden lg:inline">Kids</p>
        <BsBellFill size={32} />
        <Link href="/account">
          <img
            onClick={logout}
            className="w-8 cursor-pointer "
            src="/Netflix-avatar.png "
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
