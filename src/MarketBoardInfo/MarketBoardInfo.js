import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import WTMB_Ingredients from '../WTMB-Ingredients/WTMB-Ingredients';
import WTMB_History from '../WTMB-History/WTMB-History';
import WTMB_Graph from '../WTMB-Graph/WTMB-Graph';
import WTMB_CraftingCost from '../WTMB-CraftingCost/WTMB-CraftingCost';
import './MarketBoardInfo.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

//  This is used to define the style for the tabs
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    border: 1,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="MarketBoardInfoContainer">
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Ingredients" {...a11yProps(0)} />
                <Tab label="History" {...a11yProps(1)} />
                <Tab label="Graph" {...a11yProps(2)} />
                <Tab label="Crafting Cost" {...a11yProps(3)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <WTMB_Ingredients />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <WTMB_History />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <WTMB_Graph />
            </TabPanel>

            <TabPanel value={value} index={3}>
                <WTMB_CraftingCost />
            </TabPanel>
        </div>
    </div>
    
  );
}