import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link'
import { useContext } from 'react';
import ShopContext from '../context/ShopContext';
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Drawer.module.css";


const DrawerComponents = () => {

    const context = useContext(ShopContext);
    const { anchor, state, setState } = context;
    const { user, error, isLoading } = useUser();
    const [creds, setcreds] = useState("");

    useEffect(() => {
        const useremail = localStorage.getItem("useremail");
        setcreds(useremail);
        console.log(useremail);

    }, []);


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <p className={styles.welcomediv}>Explore</p>

                <Link href={"/products/shoptshirts"} passHref>
                    <ListItem button key="T-Shirts">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="T-Shirts" />
                    </ListItem>
                </Link>

                <Link href={"/products/shophoodies"} passHref>
                    <ListItem button key="Hoodies">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Hoodies" />
                    </ListItem>
                </Link>

                <Link href={"/products/shopmugs"} passHref>
                    <ListItem button key="Mugs">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mugs" />
                    </ListItem>
                </Link>

                <Link href={"/products/shopstickers"} passHref>
                    <ListItem button key="Stickers">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Stickers" />
                    </ListItem>
                </Link>

            </List>
            <Divider />



            {/* //* USER SECTION */}

            {user ? <List>
                <Link href={`/usercart/${creds}`} passHref>
                    <ListItem button key="Your Cart">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Your Cart" />
                    </ListItem>
                </Link>


                <Link href={"/user/userorders"} passHref>

                    <ListItem button key="Your Orders">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Your Orders" />
                    </ListItem>

                </Link>


                <Link href={"/user/userreports"} passHref>

                    <ListItem button key="Report">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Report" />
                    </ListItem>

                </Link>


                <Link href={"/api/auth/logout"} passHref>

                    <ListItem button key="Logout">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>

                </Link>


            </List> :
                <List>

                    <Link href={"/api/auth/login"} passHref>
                        <ListItem button key="Login">
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </Link>


                </List>}



        </Box >
    )
}

export default DrawerComponents