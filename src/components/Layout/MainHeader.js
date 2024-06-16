import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { uiActions } from '../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={showCartHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
