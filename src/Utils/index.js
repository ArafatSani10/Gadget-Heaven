
import toast from "react-hot-toast";
import { data, useNavigate } from "react-router-dom";



export const addToCart = data => {
    let saveData = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = saveData.find(item => item.product_id === data.product_id);
    if (!existing) {
        saveData.push(data);
        localStorage.setItem("cart", JSON.stringify(saveData));
        toast.success("Product saved successfully");
    } else {
        toast.error("Product already exists");
    }
}

export const getAllCart = () => {
    const saveData = JSON.parse(localStorage.getItem("cart")) || [];
    return saveData;
}

export const removeCart = productId => {
    const cart = getAllCart();
    const remaining = cart.filter(product => product.product_id !== productId);
    localStorage.setItem("cart", JSON.stringify(remaining));
    toast.success("Product removed successfully");
}
