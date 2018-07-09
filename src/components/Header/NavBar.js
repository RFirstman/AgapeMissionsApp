import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function NavBar() {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="primary">
                Agape Missions
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;