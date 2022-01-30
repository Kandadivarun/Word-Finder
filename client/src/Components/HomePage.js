import Logo from "./Logo";
import Navbar from "./Navbar";

function HomePage() {
    return (
        <div>
            <nav className="flex items-center p-6 mx-auto container">
                {/* <Logo></Logo> */}
                <Navbar></Navbar>
            </nav>
            <h1>Hello</h1>
            <h2 className="bg-black"> hi</h2>
        </div>
    );
}

export default HomePage;
