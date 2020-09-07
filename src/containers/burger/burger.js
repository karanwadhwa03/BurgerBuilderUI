import React from 'react'
import BurgerIngredient from './burgerindegriendents'
import './height.css'

function Burger(props){
    var required=Object.keys(props.ingredients)
    .map(
        keey=>{
           return [...Array(props.ingredients[keey])].map(
            (_,i)=>{
                return <BurgerIngredient type={keey} key={keey+i}></BurgerIngredient>

            }


           )

        }


    ).reduce((arr,el)=>{
        return arr.concat(el)


    },[])
    if(required.length===0)
    required=<h5 className="text-center">Please Add Some Ingredients</h5>

    return (
        <div className="row justify-content-center mt-3">
        <div className="col-md-4  height ">
        <BurgerIngredient type="bread-top"></BurgerIngredient>
            {required}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
            

        </div>
        </div>
    )


}
export default Burger