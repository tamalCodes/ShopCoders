import React from 'react'
import { useUser } from "@auth0/nextjs-auth0";


const Userreports = () => {
    const { user, error, isLoading } = useUser();

    return (
        <>
            {user ? <div>user reports</div> : <div>please login</div>}
        </>
    )
}

export default Userreports