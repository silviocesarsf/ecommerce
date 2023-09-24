import Input from "../Input/Input";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { useState } from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <header className="w-full h-16 bg-zinc-100 flex items-center justify-between py-2 px-paddingX">
        {/* Logo */}
        <div className="flex items-center justify-center text-2xl">
          <h1 className="font-medium text-black/80">SF</h1>
          <p className="font-thin text-black/50">.com</p>
        </div>
        {/* Search input */}
        <Input />
        {/* Account details */}
        <div className="flex items-center justify-center space-x-4 text-zinc-500 text-xl">
          <AiOutlineShoppingCart className="cursor-pointer" />
          <AiOutlineHeart className="cursor-pointer" />
          <ProfilePhoto />
        </div>
      </header>
      {/* Links navbar */}
      <div
        style={{
          borderBottom: "1px solid #F4F4F5",
        }}
        className="py-3 px-paddingX w-full flex items-center justify-between"
      >
        <nav className="space-x-3 text-sm text-zinc-500 duration-75 font-medium">
          <a href="#" className="hover:text-black">
            Mulher
          </a>
          <a href="#" className="hover:text-black">
            Homem
          </a>
          <a href="#" className="hover:text-black">
            Crianças
          </a>
          <a href="#" className="hover:text-black">
            Esportes
          </a>
          <a href="#" className="hover:text-black">
            Calçados
          </a>
          <a href="#" className="hover:text-black">
            Promoção
          </a>
          <a href="#" className="text-[#ff5b5b] hover:text-[#df4949]">
            Novo
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
