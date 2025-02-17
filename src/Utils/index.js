// // get all products from local storage
// const getCart = () => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || []; // Get the cart from localStorage or an empty array if it doesn't exist
//     return cart;
// }

import toast from "react-hot-toast";
import { data, useNavigate } from "react-router-dom";

// // add a product to the cart in local storage
// const addToCart = (product) => {
//     const cart = getCart();  // Get the existing cart
//     cart.push(product);      // Add the new product to the cart
//     localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to localStorage
//     console.log('Product added to cart:', product);  // Log the product that was added to the cart
// }

// // remove a product from local storage
// const removeFromCart = (productId) => {
//     const cart = getCart(); // Get the current cart
//     const updatedCart = cart.filter(item => item.product_id !== productId); // Remove the product with the matching id
//     localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save the updated cart
//     console.log('Product removed from cart:', productId); // Log the product removed
// }

// export { addToCart, removeFromCart };










// // get all product from localstorage
// const getAllCart = () => {
//     const all = localStorage.getItem("cart");
//     if (all) {
//         const cart = JSON.parse(all);
//         console.log(cart);
//         return cart;
//     }
//     else {
//         console.log([])
//         return [];
//     }

// }



// // add to cart
// const addToCart = product => {
//     // get all data
//     const cart = getAllCart();
//     const isExist = cart.find(item => item.id === product.id)
//     if (!isExist) return alert("already exist")
//     console.log(cart);
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart))
// }

// export { getAllCart, addToCart }



// export const addToCart = data => {
//     let saveData = JSON.parse(localStorage.getItem("cart")) || [];
//     const existing = saveData.find(item => item.product_id === data.product_id);
//     if (!existing) {
//         saveData.push(data);
//         localStorage.setItem("cart", JSON.stringify(saveData));
//         toast.success("product save succesfully");

//     } else {
//         toast.error("product already exist")
//     }
// }

// export const getAllCart = () => {
//     const saveData = JSON.parse(localStorage.getItem("cart")) || [];
//     return saveData;
// }

// export const removeCart  = id =>{
//     const cart = getAllCart()
//     const remaining = cart.filter( product => product.id !=id)
//     localStorage.setItem("cart", JSON.stringify(remaining));
//     toast.success("product Remove succesfully");

// }


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
