import React, { useState } from "react";
import AppRouter from "@/AppRouter";
import { SidebarProvider } from "@/components/ui/sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MdMenuOpen, MdSportsSoccer } from "react-icons/md";
import logo from "@/assets/images/logo.png";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import SidebarCustomMenuItem from "@/components/ui/common/SidebarCustomMenuItem";

type SidebarMenuItemProps = {
  name: string;
  icon: React.ReactNode;
  to: string;
};

const sidebarMenuItems: SidebarMenuItemProps[] = [
  {
    name: "Main",
    icon: <FaHome />,
    to: "/",
  },
  {
    name: "Settings",
    icon: <IoSettings />,
    to: "/settings",
  },
  {
    name: "My Matches",
    icon: <MdSportsSoccer />,
    to: "/my-matches",
  },
  {
    name: "My Invites",
    icon: <BsFillEnvelopeFill />,
    to: "/my-invites",
  },
  // {
  //   name: "Exit",
  //   icon: <FaSignOutAlt />,
  //   to: "/",
  // },
];

const PageLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      {/* Sidebar Section */}
      <aside
        className={`fixed bg-[#8621d7] w-64 p-4 top-4 bottom-4 z-50 transition-transform duration-300 overflow-y-auto overflow-x-hidden  ${
          open
            ? "translate-x-0 rounded-md  h-auto  left-4 right-4 "
            : "-translate-x-full rounded-md  left-0 "
        }`}
      >
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <hr className="h-[2px] border-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        <div className="my-3">
          {sidebarMenuItems.map((item, index) => {
            return (
              <SidebarCustomMenuItem
                key={index}
                to={item.to}
                name={item.name}
                icon={item.icon}
                onClick={() => {
                  setOpen(false);
                }}
              />
            );
          })}
          <SidebarCustomMenuItem
            to={"/"}
            name={"Exit"}
            icon={<FaSignOutAlt />}
            navLinkClassName="bg-transparent"
            isApplyActive={false}
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 w-full">
        {/* Breadcrumb */}
        <div className="w-full z-10 sticky top-0 backdrop-blur-md bg-opacity-30 flex justify-center p-4 mx-auto">
          <div className="flex justify-between w-full max-w-[500px]">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold">
                    Analytics
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <MdMenuOpen
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
                size={30}
              />
            </div>
          </div>
        </div>
        <main className="p-4 overflow-y-auto">
          <AppRouter />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default PageLayout;
