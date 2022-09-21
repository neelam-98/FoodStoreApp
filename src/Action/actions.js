//action for add to cart
export const addCartItem = (Menu) => {
    console.log("Add action for cart",Menu);
    return (dispatch) => {
        dispatch({
        type:"ADD_MENU_ITEM",
        payload : {
            Menu:Menu
        }
        })
    }
}

//action for delete from cart
export const deleteCartItem = (Menu) => {
    console.log("Delete action for cart",Menu); 
    return (dispatch) => {
        dispatch({
        type:"DELETE_MENU_ITEM",
        payload : {
            Menu:Menu
        }
        })
    }
}


//ction for clear cart
export const clearCartItem = (Menu) => {
    console.log("Clear action for cart",Menu); 
    return (dispatch) => {
        dispatch({
        type:"CLEAR_MENU_ITEM",
        payload : {
            Menu:Menu
        }
        })
    }
}

export const totalPrice = (quantity, id) => {
    console.log("quantity and id for total price",quantity, id); 
    return (dispatch) => {
        dispatch({
        type:"TOTAL_PRICE",
        payload : {
            quantity : quantity,
            id : id
            
        }
        })
    }
}