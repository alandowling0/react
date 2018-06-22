import { connect } from 'react-redux';
import {Cart} from './Cart';

function mapStateToProps(state) {
  return  {
    cartItems: state.cartItems
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddProduct: (name, price) => dispatch(
      {
        type: "addProduct",
        payload: {
          name: name,
          price: price
        }
      }
    ),
    onDeleteProduct: (index) => dispatch(
      {
        type: "deleteProduct",
        payload: {
          index: index
        }
      }
    )
  }
}

let connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
export default connectedComponent;
