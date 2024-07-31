import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Home,LogOut } from "lucide-react";
import { NavItems } from "./constants/constants";
import { useGSAP } from "@gsap/react";
import NavRouts from "./Routes/NavRouts";
import gsap from "gsap";
import Userimg from "./Assets/pngegg.png";
function App() {
  let [open, change] = useState(false);
  let end = () => {
    change(false);
  };

  let toggle = () => {
    change(!open);
  };
  useGSAP(() => {
    gsap.from(".nav", {
      opacity: 0,
      x: -20,
      duration: 0.5,
      stagger: 0.1,
    });
    gsap.from(".div ", {
      opacity: 30,
      x: -80,
      duration: 0.7,
    });
  });

  return (
    <div className="w-full h-screen no-scrollbar overflow-hidden">
      <div className="bg-gray-600 md:m-1">
        <div className="w-full h-[6.3rem] flex flex-col ">
          <div className="bg-gray-200 flex w-full items-center justify-center border-t-2 border-b-[1px] border-red-700  h-[50%] md:justify-between">
          <img className="w-36 ml-6 h-10" src="https://www.kluniversity.in/img/logo9.png" alt="kl logo" />
          <h1 className=" text-2xl font-bold hidden md:flex  tracking-wide text-red-800">Student Portal<i className=" text-blue-500 font-sans">-ERP</i> </h1>
          <div className="md:flex hidden md:space-x-3 ">
            <img className="size-9" src={Userimg} alt="icon" />
            <h1 className="font-bold">2300031042</h1>
          </div>
          </div>
          <div className="bg-red-700  border-b-[1px] border-red-700 flex w-full justify-between items-center h-[50%]">
            <div  className="w-32 h-full text-center flex items-center justify-center text-white font-bold bg-blue-500">
              <a href="#">KLU ERP</a>
              </div>
              
            <div className="mr-16 ">
              <a href="#" className="text-white hover:cursor-pointer font-bold hidden md:flex "> <LogOut />Logout</a>
            </div>
          <button onClick={toggle} className="md:hidden flex   mx-3 px-3 py-6">
            {open ? <X size={"2.5em"} /> : <Menu size={"2.5em"} />}
          </button>
          </div>
        </div>
        <div className=" vishnu w-full h-auto grid grid-cols-9 bg-white overflow-hidden ">
          <div className="bg-white div h-full col-span-2 md:flex hidden overflow-hidden ">
            <div className="  InnerSidebar   ">
              
              <ul className="flex flex-col h-[88%]  justify-center  m-[1.8px]  ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? " Active  nav   border-b-[1px] border-white " : "SidebarNavlink nav  border-b-[1px] border-t-[1px] border-white"} `
                  }
                >
                  <div className="ml-4">
                    <Home />
                  </div>
                  <div className="  ml-3 ">
                    <p className="">Home</p>
                  </div>
                </NavLink>
                {NavItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    className={({ isActive }) =>
                      `${
                        isActive ? " Active  nav  border-b-[1px] border-white " : "SidebarNavlink nav border-b-[1px] border-white"
                      }`
                    }
                  >
                    <div className="ml-4">{item.icon}</div>
                    <div className="  ml-3 ">
                      <p className="">{item.lable}</p>
                    </div>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white-400 h-full  col-span-9 overflow-hidden  md:col-span-7">
            {open && (
              <div className="z-40 fixed w-full h-screen bg-black md:hidden flex-col  text-2xl">
                <ul className="">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive ? " Active nav border-b-[1px] border-white  " : "SidebarNavlink  nav border-b-[1px] border-white "
                      } `
                    }
                    onClick={end}
                  >
                    <div className="ml-8">
                      <Home />
                    </div>
                    <div className="  ml-3 ">
                      <p className="">Home</p>
                    </div>
                  </NavLink>
                  {NavItems.map((items, index) => (
                    <NavLink
                      key={index}
                      to={items.to}
                      className={({ isActive }) =>
                        `${
                          isActive ? " Active nav border-b-[1px] border-white " : "SidebarNavlink  nav border-b-[1px] border-white "
                        } `
                      }
                      onClick={end}
                    >
                      <div className="ml-8">{items.icon}</div>
                      <div className="  ml-5 ">
                        <p className="">{items.lable}</p>
                      </div>
                    </NavLink>
                  ))}
                </ul>
              </div>
            )}

            <NavRouts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
