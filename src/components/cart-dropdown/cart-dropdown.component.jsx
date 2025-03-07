import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import CartItem from "../cart-item/cart-item.container";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => {

  const cartItem = useSelector(selectCartItems)

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className=" cart-dropdown-container">
      <div className=" cart-items">
        
        { cartItem.length >= 1 ?  cartItem.map((cartitem) => {
          return <CartItem key={cartitem.id} cartItem={cartitem} />;
        }) :  <h1>No items here</h1> }

      </div>

      <Button onClick={goToCheckoutHandler} buttonType="inverted">
        CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropDown;
