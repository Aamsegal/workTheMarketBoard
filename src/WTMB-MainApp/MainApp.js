import React, { Component } from 'react';
import './MainApp.css'

import RecipeList from '../WTMB-RecipeList/WTMB-RecipeList';
import MarketBoardInfo from '../MarketBoardInfo/MarketBoardInfo'

class MainApp extends Component {
    render() {
        return (
            <div className="MainAppContainer">

                <div className="RecipeListContainerLeft">
                     <RecipeList />
                </div>

                <div className="MarketBoardInfoContainerRight">
                    <MarketBoardInfo />
                </div>
               
            </div>
            
        )
    }
}

export default MainApp;