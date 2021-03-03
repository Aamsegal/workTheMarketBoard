import React, { Component } from 'react';
import RecipeCreation from '../Recipe-Creation-WTMB/Recipe-Creation-WTMB';
import './WTMB-RecipeList.css'

//material-ui component importation
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

//material-ui icon importation
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

class RecipeList extends Component {

    state = {
        savedRecipes: ['Test', 'test2', 'test3'],
        craftingMaterials: []
    }

    addNewRecipe() {
        console.log('Add new recipe function clicked')
        document.getElementById('RecipeCreationContainer').style.display = 'block';
        document.getElementById('RecipeInputContainer').style.display = 'none';
    }

    deleteRecipe(recipeToDelete) {

        let tempRecipes = [...this.state.savedRecipes];

        tempRecipes.splice(recipeToDelete, 1);

        this.setState({savedRecipes: tempRecipes})
    }

    renderRecipeList() {
        let recipeHtml = [];
        let recipeList = this.state.savedRecipes;

        for(let i = 0; i < recipeList.length; i++) {
            recipeHtml.push(
                <div className="craftingRecipe" id={`${recipeList[i]}+${i}`}>

                    <div className="craftingRecipeName">
                        <p className="craftingRecipeNameText">{recipeList[i]}</p>
                    </div>

                    <div className="craftingRecipeDeleteButton">
                        <Button 
                            onClick={() => {this.deleteRecipe(i)} } 
                            variant="contained" 
                            color="primary">
                            <DeleteIcon />
                        </Button>
                    </div>
                </div>
            )
        }

        return recipeHtml;
    }

    render() {
        return (
            <div className="RecipeListContainer">
                <h2>Recipes</h2>
                
                <RecipeCreation />

                <div className="RecipeInputContainer" id="RecipeInputContainer">

                    {this.renderRecipeList()}

                    <Button 
                        onClick={() => {this.addNewRecipe()} } 
                        variant="contained" 
                        color="primary"
                        startIcon={<AddIcon />}>
                            New Recipe
                    </Button>
                </div>

            </div>
            
        )
    }
}

export default RecipeList;