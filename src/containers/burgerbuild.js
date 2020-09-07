import React,{Component} from 'react'
import Burger from './burger/burger'
import Controls from './controls/controls'
let Price={
    salad:5,
    bacon:3,
    meat:10,
    cheese:8
};



class BurgerBuild extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0

        },
        price:20

    }
    AddHandler=(type)=>{
        var oldcount=this.state.ingredients[type];
        oldcount=oldcount+1;
        var price=this.state.price;
        price=price+Price[type];
        var use={
            ...this.state.ingredients

        }
        use[type]=oldcount;
        this.setState({
            ingredients:use,
            price:price

        })


        //console.log(this.state.price)
    }

    removeHandler=(type)=>{
        var oldcount=this.state.ingredients[type];
        if(oldcount<=0)
        return;
        oldcount=oldcount-1;
       
        var price=this.state.price;
        price=price-Price[type];
        var use={
            ...this.state.ingredients

        }
        use[type]=oldcount;
        this.setState({
            ingredients:use,
            price:price

        })


        //console.log(this.state.price)
    }







    render(){
        return (
            <div>
                <Burger ingredients={this.state.ingredients}></Burger>
                <div>
                   <Controls Added={this.AddHandler} Subtract={this.removeHandler} price={this.state.price} items={this.state.ingredients}></Controls>
                </div>
            </div>



        )
    }



}
export default BurgerBuild
