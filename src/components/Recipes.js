import React from 'react'
import { Link  } from 'react-router-dom'

const Recipes = props => (
    <div className="container">
      <div className="row">
      { props.recipes.map((item) => {
        return (
          <div key={item.recipe.label} className="col-md-4" style={{ marginBottom:"2rem" }}>
            <div className="recipes__box">
              <img 
                className="recipe__box-img" 
                src={item.recipe.image} 
                alt={item.recipe.label}/>
                <div className="recipe__text">
                    <h5>{item.recipe.label.length < 20 ? `${item.recipe.label}` : `${item.recipe.label.substring(0, 25)}...`}</h5>
                    <button className="active-recipe__button">
                        <Link to={{ 
                            pathname: `/recipe/${item.recipe.label}`,
                            state: {recipe: item.recipe.label}
                        }}>View Recipe</Link>
                    </button>
                </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
  

export default Recipes

