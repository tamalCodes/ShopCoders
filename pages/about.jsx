
import * as React from 'react';
import Navbar from '../components/Navbar'
import styles from "../styles/About.module.css"
import styleshome from "../styles/Home.module.css"
import Head from "next/head"

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import DrawerComponents from '../components/DrawerComponents';

const About = () => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            {['left', 'right', 'top', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <DrawerComponents anchor={anchor} />
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default About