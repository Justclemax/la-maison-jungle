import React from "react";

function Cart(){
    const product = "Mangue"
    const price = "100 FCFA"
    
    return (
        <div>
            <ul>
                <li>{product}</li>
                <li>{price}</li>
            </ul>
        </div>
    )

}
export default Cart