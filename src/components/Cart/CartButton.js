import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uI-slice";

const CartButton = (props) => {
  //useSelector((state) => state.ui.cartIsVisisble);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
