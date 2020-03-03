import React from 'react'

const Recipes = props => {
    return (
        <div className="container">
            <div className="row">
            {props.recipes.map((item) => {
                return (
                    <div className="col-md-4">
                        <div className="recipe__box">
                            <div key={item.recipe.label}>
                                <img 
                                className="recipe__box-img"
                                src={item.recipe.image} 
                                alt="recipe-img"
                                />
                                <p>{item.recipe.label}</p>
                            </div>
                        </div>
                    </div>
        )})
     }
            </div>

        </div>
    )
}

export default Recipes