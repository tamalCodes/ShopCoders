import React from 'react'
import { useUser } from "@auth0/nextjs-auth0";


const Userorders = () => {
    const { user, error, isLoading } = useUser();
    return (

        <>
            {user ? <div>user cart</div> : <div>please login</div>}
        </>

    )
}

export default Userorders