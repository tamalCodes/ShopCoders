import React, { useContext } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import DrawerComponents from './DrawerComponents';
import ShopContext from '../context/ShopContext';

const SideDrawer = () => {
    const context = useContext(ShopContext);
    const { anchor, state, setState } = context;

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(false);
    };

    return (
        <div>
            <React.Fragment key={anchor}>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onOpen={() => {
                        setState({ ...state, [anchor]: true })
                    }}

                    onClose={() => {
                        setState({ ...state, [anchor]: false })
                    }}
                >
                    <DrawerComponents anchor={anchor} />
                </Drawer>

            </React.Fragment>


        </div>
    );
}

export default SideDrawer