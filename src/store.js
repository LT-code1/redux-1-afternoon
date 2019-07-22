import { createStore } from "redux";


const initialState = {
    name:"",
    category:"",
    authorFirst: "",
    authorLast: "",
    ingredients: [],
    instructions: [],
    recipes: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const ADD_RECIPE = "ADD_RECIPE";

export const CLEAR_INGREDIENT = "CLEAR_INGREDIENT";
export const CLEAR_INSTRUCTION = "_INSTRUCTION";


function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_NAME:
            return{...state, name:payload }
        case UPDATE_CATEGORY:
            return {...state, category:payload}
        case UPDATE_AUTHOR_FIRST:
            return { ...state, authorFirst: payload };
        case UPDATE_AUTHOR_LAST:
            return { ...state, authorLast: payload };
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, payload];   //appends old ingredients with payload
            return { ...state, ingredients: newIngredients };         //sends state, and new list of ingredients
        case ADD_INSTRUCTION:
            const newInstructions = [...state.instructions, payload];
            return { ...state, instructions: newInstructions };
        case ADD_RECIPE:
            const {
              name,
              category,
              authorFirst,
              authorLast,
              ingredients,
              instructions
            } = state;            //destructure current state
            const recipe = {
              name,
              category,
              authorFirst,
              authorLast,
              ingredients,
              instructions
            };
            const newRecipes = [...state.recipes, recipe];    //add recipe to newRecipes
            return { ...state, recipes: newRecipes };         //return state and add newRecipes send to store
        case CLEAR_INSTRUCTION:
            return { ...state, instructions:[]};     //clear current instructions
        case CLEAR_INGREDIENT:
            return { ...state, ingredients:[] };     //clear current ingredients

      default:
        return state;
    }
  }

  export default createStore(reducer);


  
  




