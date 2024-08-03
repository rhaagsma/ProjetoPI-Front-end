import React from "react"
import "./Item.css"

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>R$ {props.price}</p>
            <button onClick={() => props.addToCart(props.id)}>Adicionar ao carrinho</button>
        </div>
    )
}

export default Item