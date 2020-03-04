import React from 'react'
import {Link} from 'react-router-dom'

const API_ID = '4e2b9f2f'
const API_KEY = '3754163bcce3124533b8aa56f5594b48'

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe
        const req = await fetch(`http://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
        const res = await req.json()
        this.setState({ activeRecipe: res.hits[0].recipe})
        console.log(this.state.activeRecipe)
    }

    render() {
        const recipe = this.state.activeRecipe
        return (
            <div className="container">
                {this.state.activeRecipe.length !== 0 && 
                    <div className="active_recipe">
                    <img className="active_recipe__img" src={recipe.image} alt={recipe.label }/>
                    <h3 className="active_recipe__title">{recipe.label}</h3>
                    <p className="active_recipe__website">Website: <span><a href={recipe.url}>{recipe.url}</a></span></p>
                    <button className="active_recipe__button">
                        <Link to="/">Go Home </Link>
                    </button>
                </div>
                }
            </div>  
        )
    }
}

export default Recipe 