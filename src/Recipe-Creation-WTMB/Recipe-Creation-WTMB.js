import React, { Component } from 'react';
import './Recipe-Creation-WTMB.css'

// Material UI import
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Material UI icons import
import SaveIcon from '@material-ui/icons/Save';

const RecipeIngredient = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 30,
        lineHeight: 1.5,
        // height: 10,
      },
    })(TextField);

class RecipeCreation extends Component {

    state = {
        recipeName: '',
        RecipeIngredients: []
    }

    //CONTINUE WORKING ON RECIPE SAVING FUNCTION

    saveRecipeFunction() {
        console.log('SaveRecipeFunction is called')
        document.getElementById('RecipeCreationContainer').style.display = 'none';
        document.getElementById('RecipeInputContainer').style.display = 'block';
    }



    render() {
        return (
            <div className="RecipeCreationContainer" id="RecipeCreationContainer" style={{display: "none"}}>
                
                <div className="RecipeCreationFormContainer">
                    <div className="RecipeCreationName">
                        <TextField id="recipeCreationNameId" label="Recipe Name" variant="standard"/>
                    </div>
                    <RecipeIngredient id="standard" label="Standard" variant="filled"/>
                </div>

                <Button 
                    margin-bottom="1.5%"
                    onClick={() => {this.saveRecipeFunction()} } 
                    variant="contained" 
                    color="primary"
                    startIcon={<SaveIcon />}>
                    Save Recipe
                </Button>

            </div>
            
        )
    }
}

export default RecipeCreation;