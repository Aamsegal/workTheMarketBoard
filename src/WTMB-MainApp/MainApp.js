import React, { Component } from 'react';
import './MainApp.css'

import RecipeList from '../WTMB-RecipeList/WTMB-RecipeList';
import MarketBoardInfo from '../MarketBoardInfo/MarketBoardInfo'

class MainApp extends Component {

    // Test state format
    state = {
        savedRecipes: ['Test', 'test2', 'test3'],
        craftingMaterials: []
    }

    deleteRecipe(recipeToDelete) {

        let tempRecipes = [...this.state.savedRecipes];

        tempRecipes.splice(recipeToDelete, 1);

        this.setState({savedRecipes: tempRecipes})
    }

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


// Test dataset formatting

//DATABASE

/*  
    User table -> Crafting Recipe Table -> Crafting Recipe Ingredient table (references the recipe in the parent table) -> cost table (references both the recipe and the ingredient tables {maybe})

    Item Table (including full item)
        uniqueId, userId, itemName, date, time, timeOfDay, cost, server(if needed)
*/



//STATE

/*
    
*/
