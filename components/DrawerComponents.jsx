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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FlagIcon from '@mui/icons-material/Flag';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Router from 'next/router'


const DrawerComponents = () => {

    const context = useContext(ShopContext);
    const { anchor, state, setState } = context;
    const { user, error, isLoading } = useUser();
    const [creds, setcreds] = useState("");



    useEffect(() => {

        if (user) {
            const useremail = localStorage.getItem("useremail");
            setcreds(useremail);
        }


    }, [user]);


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleLogin = async (e) => {
        await Router.push("/api/auth/login");


    }



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
                            <ShoppingBagIcon />
                        </ListItemIcon>
                        <ListItemText primary="T-Shirts" className={styles.drawerlistitems} style={{ fontFamily: "Ubuntu" }} />
                    </ListItem>
                </Link>

                <Link href={"/products/shophoodies"} passHref>
                    <ListItem button key="Hoodies">
                        <ListItemIcon>
                            <ShoppingBagIcon />
                        </ListItemIcon>
                        <ListItemText primary="Hoodies" className={styles.drawerlistitems} />
                    </ListItem>
                </Link>

                <Link href={"/products/shopmugs"} passHref>
                    <ListItem button key="Mugs">
                        <ListItemIcon>
                            <ShoppingBagIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mugs" className={styles.drawerlistitems} />
                    </ListItem>
                </Link>

                <Link href={"/products/shopstickers"} passHref>
                    <ListItem button key="Stickers">
                        <ListItemIcon>
                            <ShoppingBagIcon />
                        </ListItemIcon>
                        <ListItemText primary="Stickers" className={styles.drawerlistitems} />
                    </ListItem>
                </Link>

            </List>

            <Divider />

            <List>



                <Link href={"/products/shophoodies"} passHref>
                    <ListItem button key="Home">
                        <ListItemIcon>
                            <ShoppingBagIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" className={styles.drawerlistitems} />
                    </ListItem>
                </Link>

                <Link href={"/products/shopmugs"} passHref>
                    <ListItem button key="About Us">
                        <ListItemIcon>
                            <ShoppingBagIcon />
                        </ListItemIcon>
                        <ListItemText primary="About Us" className={styles.drawerlistitems} />
                    </ListItem>
                </Link>

                <Link href={"/products/shopstickers"} passHref>
                    <ListItem button key=" Our products">
                        <ListItemIcon>
                            <ShoppingBagIcon />
                        </ListItemIcon>
                        <ListItemText primary=" Our products" className={styles.drawerlistitems} />
                    </ListItem>
                </Link>

            </List>




            <Divider />

            {/* //* USER SECTION */}

            {user ? <List>
                <Link href={`/user/userprofile/${creds}`} passHref>
                    <ListItem button key="Your Profile">
                        <ListItemIcon>
                            <ManageAccountsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Your Profile" className={styles.drawerlistitems} />
                    </ListItem>
                </Link>

                <Link href={`/usercart/${creds}`} passHref>
                    <ListItem button key="Your Cart">
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Your Cart" className={styles.drawerlistitems} />
                    </ListItem>
                </Link>



                <Link href={"/user/userorders"} passHref>

                    <ListItem button key="Your Orders">
                        <ListItemIcon>
                            <BorderColorIcon />
                        </ListItemIcon>
                        <ListItemText primary="Your Orders" className={styles.drawerlistitems} />
                    </ListItem>

                </Link>


                <Link href={"/user/userreports"} passHref>

                    <ListItem button key="Report">
                        <ListItemIcon>
                            <FlagIcon />
                        </ListItemIcon>
                        <ListItemText primary="Report" className={styles.drawerlistitems} />
                    </ListItem>

                </Link>

                <Link href={`/user/sellproducts/${creds}`} passHref>

                    <ListItem button key="Sell products">
                        <ListItemIcon>
                            <FlagIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sell products" className={styles.drawerlistitems} />
                    </ListItem>

                </Link>


                <Link href={"/api/auth/logout"} passHref>

                    <ListItem button key="Logout">
                        <ListItemIcon>

                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" className={styles.drawerlistitems} />
                    </ListItem>

                </Link>


            </List> :
                <List>


                    <ListItem button key="Login" onClick={(e) => handleLogin(e)}>
                        <ListItemIcon>

                            <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" className={styles.drawerlistitems} />
                    </ListItem>


                </List>}



        </Box >
    )
}

export default DrawerComponents