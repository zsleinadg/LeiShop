import { useEffect, useState, useContext } from "react"
import { BsCartPlus } from "react-icons/bs"
import { useNavigate, useParams } from "react-router"
import { api } from "../../services/api"
import { type ProductsProps } from "../home"
import { CartContext } from "../../contexts/CartContext"
import toast from "react-hot-toast"

export default function Products() {
    const { id } = useParams()
    const [product, setProduct] = useState<ProductsProps | null >(null)
    const {addItemCart} = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        async function getProduct() {
            const response = await api.get(`/products/${id}`)
            setProduct(response.data)
        }
        getProduct()
    }, [id])

    function handleAddItemCart(product: ProductsProps){
        addItemCart(product)
        toast.success("Item adicionado ao carrinho.", {
            style: {
                borderRadius: 10,
                backgroundColor: "#000",
                color: "#FFF"
            }
        })
        navigate("/cart")
    }

    if(!product){
        return(
            <div className="flex justify-center font-medium mt-2">
                <h1>Carregando...</h1>
            </div>
        )
    }


    return (
        <div className=" w-full max-w-7xl mx-auto h-full flex justify-center pt-10 flex-col lg:flex-row">
            <div className="flex-1 flex items-center justify-center">
                <img src={product.cover}
                    alt={`Logo do ${product.title}`}
                    className=" h-100 w-100" />
            </div>

            <div className="flex flex-col flex-1 gap-3 p-4">
                <h1 className="font-medium text-2xl">{product.title}</h1>

                <p>{product.description}</p>

                <div className="flex gap-3 items-center">
                    <strong className="text-zinc-700/90">
                        {product.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>
                    <button className="bg-zinc-900 p-1 rounded cursor-pointer" onClick={() => handleAddItemCart(product)}>
                        <BsCartPlus size={20} color="#FFF" />
                    </button>
                </div>
            </div>
        </div>
    )
}