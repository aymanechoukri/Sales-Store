import { useNavigate } from "react-router-dom";
import CartPage from "../../Components/CartPage";
import { useEffect } from "react";

export default function ProductCart() {
    const navigate = useNavigate()
    const email = window.localStorage.getItem("email");
    
    useEffect(() => { 
        if(!email) {
            navigate("/login")
        }
    }, [email, navigate])

    if(!email) {
        return null
    }

    return <CartPage />
}