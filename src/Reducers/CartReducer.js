const initialState = {
    MenuList : []
}

const AddCartReducer = ( state = initialState, action) => {
    console.log("add to cart reducer",action?.payload?.Menu);
    switch (action.type) {
        case "ADD_MENU_ITEM":
            return{
                ...state,
                MenuList:[
                    ...state.MenuList,{
                        MenuList: action?.payload?.Menu
                    }
                ]
            }
            

        case "DELETE_MENU_ITEM" :
            const newMenuList = state?.MenuList?.filter((curElem) => 
            {
            console.log("curElem",curElem);
            return curElem?.MenuList?.id  !== action?.payload?.Menu?.MenuList?.id
            }
            )
            console.log("action list",action?.payload?.Menu);
            return {
                ...state,
                MenuList:newMenuList
            };

        case "CLEAR_MENU_ITEM" :
            return {
                ...state,
                MenuList:[]
            };


        case "TOTAL_PRICE" :
            const newPrice = state?.MenuList?.map((curElem) => {
                console.log("curelem", curElem)
                if(curElem?.MenuList?.id === action?.payload?.id){
                    return {
                        ...curElem,
                        Price : curElem?.MenuList?.Price * action?.payload?.quantity
                    }
                }
                // console.log("newPrice",newPrice)
                return curElem;
            })
            return{
                ...state,
                MenuList : newPrice
            }

           
    
        default:
            return state;
    }
}
export default AddCartReducer;