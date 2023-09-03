import { counterSlice } from "./appSlice";


export const { setAuth,
    setOrder,
    setAddress,
    setUser, 
    setLoading, 
    setSearchQ, 
    setTagQ, 
    setCategoryQ,
    setAddToCart
} = counterSlice.actions;