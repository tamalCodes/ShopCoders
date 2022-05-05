import react from "react";
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
    return (<ShopContext.Provider value={{ bramhins, setBramhins, drawerOpen, setDrawerOpen, anchor, state, setState }}>

        {props.children};

    </ShopContext.Provider>)

}


export default ShopState;