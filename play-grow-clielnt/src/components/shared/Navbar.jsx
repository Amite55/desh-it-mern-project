import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchBar, setSearchBar] = useState(false);

    return (
        <nav className="bg-[#f7f3f0] p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Website Name */}
                <div className="flex items-center gap-1">
                    <IoIosMailOpen className="text-yellow-700" size={32} />
                    <h1 className="text-2xl  uppercase">newslatter</h1>
                </div>

                {/* Desktop Links Centered */}
                <div className="hidden md:flex flex-grow justify-center space-x-8">
                    <a href="#" className="hover:text-gray-400 uppercase font-thin">Home</a>
                    <a href="#" className="hover:text-gray-400 uppercase font-thin">Pages</a>
                    <a href="#" className="hover:text-gray-400 uppercase font-thin">shop</a>
                    <a href="#" className="hover:text-gray-400 uppercase font-thin">blog</a>
                </div>

                {/* Icons at the End */}
                <div className="hidden md:flex space-x-4 items-center">
                    <button 
                    onClick={() => setSearchBar(!searchBar)}
                    className="hover:text-gray-400 flex  items-center gap-2">
                        <FaSearch /> <span>Search</span>
                    </button>
                    <FaFacebookF className="cursor-pointer hover:text-gray-400" />
                    <FaTwitter className="cursor-pointer hover:text-gray-400" />
                    <FaInstagram className="cursor-pointer hover:text-gray-400" />
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#f7f3f0] p-4 space-y-4 text-center">
                    <a href="#" className="block hover:text-gray-400">Home</a>
                    <a href="#" className="block hover:text-gray-400">About</a>
                    <a href="#" className="block hover:text-gray-400">Services</a>
                    <a href="#" className="block hover:text-gray-400">Contact</a>
                </div>
            )}

            {/* search bar */}
            {
                searchBar && (
                    <div className=" bg-[#f7f3f0] p-4 space-y-4 text-center">
                        <input className="border-b-2 bg-transparent w-3/6 h-10 px-4 rounded focus:outline-none focus:border-b-yellow-200" type="text" name="search" placeholder="Search..." id="" />
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;