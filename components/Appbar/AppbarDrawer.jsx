import { createTheme, Drawer, ListItemButton } from '@mui/material'
import React, { useContext } from 'react'
import { AppbarList, AppbarListItem } from '../../styles/appbar'
import { styled } from "@mui/system";
import ShopContext from '../../context/ShopContext';
import CloseIcon from '@mui/icons-material/Close';

const AppbarDrawer = () => {
    const listItems = ['Home', 'Product', 'Sales', 'Logout'];


    const context = useContext(ShopContext);
    const { appbardrawer, setappbardrawer } = context;


    const handleOpenDrawer = () => {
        setappbardrawer(false);

    }


    return (
        <>
            <Drawer open={appbardrawer} >
                <CloseIcon onClick={() => { handleOpenDrawer() }} sx={{ position: "absolute", right: "10px", top: "10px" }} />
                <AppbarList>
                    {listItems.map((item, index) => (
                        <AppbarListItem key={index}> {item} </AppbarListItem>
                    ))}
                </AppbarList>


            </Drawer>
        </>
    )
}

export default AppbarDrawer