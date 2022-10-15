import React, { useContext } from 'react'
import { AppbarBrand, AppbarContainer, AppbarList, AppbarListItem } from '../../styles/appbar'
import AppbarDrawer from './AppbarDrawer'
import MenuIcon from '@mui/icons-material/Menu';
import ShopContext from '../../context/ShopContext';

const AppbarMobile = ({ matches }) => {
    const context = useContext(ShopContext);
    const { appbardrawer, setappbardrawer } = context;

    const handleOpenDrawer = () => {
        setappbardrawer(true);

    }

    return (
        <>

            <AppbarDrawer />
            <AppbarContainer>

                <AppbarBrand>
                    Admin Panel
                </AppbarBrand>

                {/* <button onClick={() => { handleOpenDrawer }}>
                    <MenuIcon sx={{ fontSize: "1.3rem" }} />
                </button> */}

                <MenuIcon sx={{ fontSize: "1.3rem" }} onClick={() => { handleOpenDrawer() }} />



            </AppbarContainer>
        </>
    )
}

export default AppbarMobile