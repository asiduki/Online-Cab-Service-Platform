import { createContext, useState  } from "react"
export const userContext = createContext() 

const Context = (props)=> {
        const [isLogin , setisLogin] = useState(false) ;
        const value = {
            isLogin,
            setisLogin,
        }
    return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
)
}

export default Context ;