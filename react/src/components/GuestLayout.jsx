import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";


export default function GuestLayout() {

    const { userToken } = useStateContext();

    if(userToken){
        return <Navigate to='/'/>
    }

    return(
        <div>
           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="mx-auto h-10 w-auto"
            />
            </div>
            <Outlet/>
        </div>
    )
}