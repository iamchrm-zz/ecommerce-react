import { Fragment } from "react";
import Logo from "../../assets/img/1.svg";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  return (
    <>
      <Popover className="relative bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto sm:h-11" src={Logo} alt="" />
              </a>
            </div>
            <div className="flex justify-center lg:w-0 lg:flex-1">
              <a href="#">
                <h1 className="font-bold">Nombre tienda</h1>
              </a>
            </div>
            <div className="flex justify-end lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                {/* className="flex-shrink-0 h-6 w-6 text-gray-400" */}
                <ShoppingBagIcon
                  className="flex-shrink-0 h-6 w-6 text-white "
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
}

export default Navbar;
