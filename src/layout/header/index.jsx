import React from "react";
import logo from "../../assets/logo.png";
import { logoData } from "../../data/home";
import Burger from "../../assets/icons/list.svg";
import { Modal } from "../../components/ui/modal";
import { useTogglle } from "../../hooks/useTogglle";
import { navData } from "../../data/home";
import { Link } from "react-router-dom";

export const Header = () => {
  const { close, isOpen, togglle, open } = useTogglle();
  return (
    <>
      <Modal close={close} isOpen={isOpen}>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center justify-center h-[60vh] md:h-auto lg:h-auto lg:py-[52px] lg:px-[92px] overflow-scroll gap-5">
          {navData?.map((item) => (
            <>
              <Link to={item.path}>
                <p>{item.name}</p>
              </Link>
            </>
          ))}
        </div>
      </Modal>
      <div className="container flex items-center justify-between mt-[30px]">
        <h2 className="text-lg font-semibold">Protofolio</h2>
        <nav className=" items-center gap-[51px] hidden md:flex ">
          <ul className="flex items-center gap-[67px]">
            {navData.map((item) => (
              <>
                <Link to={item.path}>
                  <li key={item.id}>
                    <a className=" text-primary text-md hover:text-black">
                      {item.name}
                    </a>
                  </li>
                </Link>
              </>
            ))}
          </ul>
          <div className="hidden items-center gap-[20px] lg:flex">
            {logoData.map((item) => (
              <a href={item.path}>
                <img src={item.img} alt="img" className="w-[30px] h-[30px]" />
              </a>
            ))}
          </div>
        </nav>
        <img
          onClick={open}
          src={Burger}
          alt="img"
          className="w-[24px] h-[24px] md:hidden lg:hidden"
        />
      </div>
    </>
  );
};
