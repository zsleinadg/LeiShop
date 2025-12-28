import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export default function Header() {
    const { cartAmount } = useContext(CartContext)


    return (
        <header className="w-full p-1 bg-slate-200">
            <nav className="w-full flex items-center justify-between px-7 h-14">

                <div></div>

                <div>
                    <Link to={"/"} className="flex">
                        <h1 className=" text-white font-bold text-3xl">Lei
                            <span className="bg-linear-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent">Shop</span>
                        </h1>
                    </Link>
                </div>

                <Link className="relative" to={"/cart"}>
                    <FiShoppingCart size={24} color="#121212" />
                    {cartAmount > 0 && (
                        <span className="absolute -right-3 -top-3 bg-sky-500 rounded-full h-6 w-6 items-center justify-center flex text-white text-xs">
                            {cartAmount}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    )
}