import React, { Component } from 'react';
import './WTMB-Navbar.css'


//material-ui component importation
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


//material-ui icon importation
import SaveIcon from '@material-ui/icons/Save';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


class Navbar extends Component {

    testMatUIButtonEvents() {
        console.log('Button is pressed')
    };

    updatePrices() {
        console.log('Update prices button')
    };

    render() {
        return (
            <div className="navbar">

                <div className="navbarLeft">
                    <h1 className="navBarTitle">Work The Market Board</h1>
                </div>

                <div className="navbarRight">

                    <Box top="50%" display="inline-block" px={1}>
                        <Button 
                        onClick={() => {this.updatePrices()} } 
                        variant="contained" 
                        color="primary"
                        startIcon={<SaveIcon />}>
                            Price Update
                        </Button>
                    </Box>
                    
                    
                    <Box display="inline-block" px={1}>
                        <Button 
                        onClick={() => {this.testMatUIButtonEvents()} } 
                        variant="contained" 
                        color="primary"
                        startIcon={<MeetingRoomIcon />}>
                            Logout
                        </Button>
                    </Box>
                    

                </div>

                

            </div>

        )
    }
}

export default Navbar;