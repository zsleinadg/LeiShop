import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router"

export default function Cart() {
    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext)

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

            {cart.length === 0 && (
                <div className=" flex flex-col items-center justify-center">
                    <p className=" font-medium">Ops... Seu carrinho está vázio</p>
                    <Link to={"/"} className=" bg-purple-700 my-3 p-1 px-3 font-medium text-white rounded">
                    Veja os produtos em alta
                    </Link>
                </div>
            )}

            {cart.map((product) => (
                <section key={product.id} className="flex items-center justify-between border-b-2 border-gray-300 pb-3">
                    <img
                        src={product.cover}
                        alt={`Logo do ${product.title}`}
                        className="w-28"
                    />
                    <strong>Preço: {product.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}</strong>

                    <div className="flex items-center justify-center gap-3">
                        <button onClick={() => removeItemCart(product)} className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer select-none">
                            -
                        </button>
                        {product.amount}
                        <button onClick={() => addItemCart(product)} className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer select-none">
                            +
                        </button>
                    </div>

                    <strong className="float-right">
                        SubTotal: {product.total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>
                </section>
            ))}

            {cart.length !== 0 && (<p className="font-bold mt-4">Total: {total}</p>)}

        </div>
    )
}