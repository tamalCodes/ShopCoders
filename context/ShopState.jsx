import react, { useState } from "react";
import ShopContext from "./ShopContext";

const ShopState = (props) => {
    const [cart, setcart] = react.useState([]);
    const [bramhins, setBramhins] = react.useState("Welcome");
    const [drawerOpen, setDrawerOpen] = react.useState(true);
    const anchor = "right";
    const [state, setState] = react.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [userEmail, setuserEmail] = useState("");

    const [productdetails, setproductdetails] = useState({
        name: "",
        qty: "",
        size: "",
        slug: "",
        price: "",
        category: "",
        desc: "",
        img: "",
    });

    return (
        <ShopContext.Provider
            value={{
                bramhins,
                setBramhins,
                drawerOpen,
                setDrawerOpen,
                anchor,
                state,
                setState,
                productdetails,
                setproductdetails,
                userEmail, setuserEmail
            }}
        >
            {props.children};
        </ShopContext.Provider>
    );
};

export default ShopState;
