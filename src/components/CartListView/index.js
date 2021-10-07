import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const newCartList = localStorage.getItem('cartList')
      const parsedString = JSON.parse(newCartList)

      return (
        <ul className="cart-list">
          <div className="head-container">
            <p className="head-text">Items</p>
            <p className="head-text quantity">Quantity</p>
            <p className="head-text">Price</p>
          </div>
          <hr />
          {parsedString.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
