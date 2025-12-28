import { Link } from "react-router";

export default function NotFound(){
    return(
        <div className=" w-full h-full flex items-center pt-50 flex-col">
            <h1 className=" font-medium text-5xl">404</h1>
            <p className=" text-2xl">Página não encontrada</p>
            <Link to={"/"} className="font-medium text-purple-700">Ver produtos</Link>
        </div>
    )
}