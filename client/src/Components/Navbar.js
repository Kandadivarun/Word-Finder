function Navbar() {
    return (
        <nav className="flex items-center container p-6 mx-auto">
            <div className="text-lg text-gray-600 hidden lg:flex">
                <a
                    href="#"
                    className="block mt-4 lg:inline-block text-teal-600 lg:mt-0 mr-10"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
                >
                    Services
                </a>
                <a
                    href="#"
                    className="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
                >
                    Portfolio
                </a>
                <a
                    href="#"
                    className="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0 mr-10"
                >
                    Company
                </a>
                <a
                    href="#"
                    className="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0"
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
