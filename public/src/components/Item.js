import React from 'react'
import { formatPrice } from '../helpers'

const item = (props) =>{
    const { details, id } = props
    const isAvailable = details.status === 'available'
    const buttonText = isAvailable ? 'Add To Order' : 'Sold out' 
    return(
        <li className="menu-list__item">
            <img className="item__img" src={ details.image } alt={ details.name }/>
            <h3 className="item__name">
                { details.name}
                <span className="item__price">
                    { formatPrice(details.price) }
                </span>
            </h3>
            <p className="item__text">
                { details.desc }
            </p>
            <button 
                className="item__btn"
                onClick={() => this.props.addToOrder(id) } 
                type={ !isAvailable ? 'disabled' : '' } 
                disabled={ !isAvailable }>{ buttonText }
        </button>
        </li>
    )
}

export default item;