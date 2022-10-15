import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppbarMobile from './AppbarMobile';
import AppbarDesktop from './AppbarDesktop';

const AdminAppbar = () => {

    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('430'));

    return (
        <>
            {matches ? <AppbarMobile /> : <AppbarDesktop />}
        </>
    )
}

export default AdminAppbar