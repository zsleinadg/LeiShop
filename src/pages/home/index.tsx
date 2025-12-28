import { BsCartPlus } from "react-icons/bs";
import { useState, useEffect } from "react";

import { api } from "../../services/api";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router";

export interface ProductsProps {
    id: number,
    title: string,
    description: string,
    price: number,
    cover: string
}


export default function Home() {
    const [products, setProducts] = useState<ProductsProps[]>([])
    const {cart, addItemCart } = useContext(CartContext)

    useEffect(() => {
        async function getProducts() {
            const response = await api.get("/products")
            setProducts(response.data)
        }

        getProducts()


    }, [])

    function handleAddCartItem(product: ProductsProps) {
        addItemCart(product)
        console.log(cart)
        toast.success("Item adicionado ao carrinho.", {
            style: {
                borderRadius: 10,
                backgroundColor: "#000",
                color: "#FFF"
            }
        })
    }



    return (
        <div>
            <main className="w-full max-w-7xl mx-auto px-4">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    {products.map((product) => (
                        <section key={product.id} className="w-full flex flex-col justify-between items-center">
                            <Link to={`/products/${product.id}`}>
                                <img
                                    className="w-full rounded-lg max-h-70 max-w-70 mb-2"
                                    src={product.cover}
                                    alt={`logo do ${product.title}`}
                                />
                                <p className="text-center font-medium mt-1 mb-2">{product.title}</p>
                            </Link>

                            <div className="flex gap-3 items-center">
                                <strong className="text-zinc-700/90">
                                    {product.price.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </strong>
                                <button className="bg-zinc-900 p-1 rounded cursor-pointer" onClick={() => handleAddCartItem(product)}>
                                    <BsCartPlus size={20} color="#FFF" />
                                </button>
                            </div>
                        </section>
                    ))}

                </div>
            </main>
        </div>
    )
}