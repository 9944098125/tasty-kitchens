import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="empty-view-container">
    <img
      src="https://res.cloudinary.com/dqnh9af86/image/upload/v1633002313/cooking_1_hq3t74.png"
      className="empty-image"
      alt="empty cart"
    />
    <h1 className="empty-heading">No Orders Yet!</h1>
    <p className="empty-para">
      Your cart is empty. Add something from the menu.
    </p>

    <Link to="/">
      <button type="button" className="shop-now-btn">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
