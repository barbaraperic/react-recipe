import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import Recipes from './components/Recipes'

const API_ID = '4e2b9f2f'
const API_KEY = '3754163bcce3124533b8aa56f5594b48'

const App = () => {

  const [recipes, setRecipes] = useState([ ])

  const getRecipe = async (e) => {
  e.preventDefault()
  const recipeName = e.target.elements.recipeName.value
  const api_call = await fetch(`http://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
  const data = await api_call.json()
  console.log('data', data.hits)
  setRecipes(data.hits)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe={getRecipe}/>
      <Recipes recipes={recipes}/>
     
    </div>
  );
}

export default App;
