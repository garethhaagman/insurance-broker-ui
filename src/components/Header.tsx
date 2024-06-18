import { useState } from "react";

function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
      <>
        <header className="sticky top-0 z-50 w-full h-20">
        <div className="container flex items-center justify-between h-full max-w-6xl px-8 mx-auto xl:px-0">
            <a href="/" className="flex items-center h-full font-black leading-none">
                <span className="ml-3 text-xl text-gray-800">Testudo<span className="text-blue-500">.</span></span>
            </a>
            <nav className="hidden md:flex md:items-center md:space-x-8">
            <a href="#policies" className="font-bold text-gray-800 hover:text-blue-500">Policies</a>
            <a href="#pricing" className="font-bold text-gray-800 hover:text-blue-500">Pricing</a>
            </nav>
            <div id="nav-mobile-btn" className="cursor-pointer block md:hidden" onClick={toggleMobileMenu}>
                <span className="block w-6 h-1 bg-gray-800"></span>
                <span className="block w-6 h-1 mt-1 bg-gray-800"></span>
            </div>
        </div>
                    <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
                <nav className="flex flex-col items-center space-y-4 py-4">
                    <a href="#policies" className="font-bold text-gray-800 hover:text-blue-500">Policies</a>
                    <a href="#pricing" className="font-bold text-gray-800 hover:text-blue-500">Pricing</a>
                </nav>
            </div>
        </header>
    </>
  )
}
export default Header