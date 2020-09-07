import React from 'react'
import Control from './control'
import axios from 'axios'
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


function Controls (props){
    return(
        <div className="bg-success p-2">
        <h4 className="text-center">Total Price: {props.price}</h4>
        {controls.map(el=>{

            return (
             <Control type={el.label} key={el.type} 
             Added={()=>props.Added(el.type)} Subtract={()=>props.Subtract(el.type)}
            

    
    ></Control>

)

})}

<div className="text-center">
<button type="button" class="btn btn-dark btn-lg" data-toggle="modal" data-target="#exampleModal">
  ORDER NOW
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ORDER SUMMARY</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div>
            

            
            {
                Object.keys(props.items)
                .map(igkey=>{
                    return(
                        <div>

                       <h4 className="text-uppercase" key={igkey}> {igkey} : {props.items[igkey]} </h4>
                        </div>
                    )

                })
            }
        
           <h3> Total Price:{props.price} </h3>

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" >CANCEL</button>
        <button type="button" class="btn btn-primary" >CONTINUE</button>
      </div>
    </div>
  </div>
</div>

</div>


        </div>
        )
    
    
}
export default Controls