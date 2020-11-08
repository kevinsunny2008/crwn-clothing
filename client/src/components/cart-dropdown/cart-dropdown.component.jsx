import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { SelectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from '../../redux/cart/cart.action'
import {CartDropdownContainer, CartItemsContainer, EmptyMessageContainer} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CustomButton onClick={
      () => {
        history.push("/checkout");
        dispatch(toggleCartHidden())
      }
      }>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
