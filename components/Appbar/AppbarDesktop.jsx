import { ListItemText } from '@mui/material'
import React from 'react'
import { AppbarBrand, AppbarContainer, AppbarList, AppbarListItem } from '../../styles/appbar'

const AppbarDesktop = ({ matches }) => {
    const listItems = ['Home', 'Product', 'Sales', 'Logout']
    return (
        <>
            <AppbarContainer>

                <AppbarBrand>
                    Admin Panel
                </AppbarBrand>

                <AppbarList>

                    {listItems.map((item, index) => (
                        <AppbarListItem key={index}> {item} </AppbarListItem>
                    ))}



                </AppbarList>
            </AppbarContainer>
        </>
    )
}

export default AppbarDesktop