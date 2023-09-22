import {Fragment,useEffect} from 'react';
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from './components/UI/Notification';

import { useSelector,useDispatch } from "react-redux";
import uiActions from './store/ui-slice';


function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  
  const notification=useSelector(state=>state.ui.notification)

 useEffect(()=>{
   const sendCartData=async()=>{
     dispatch(uiActions.showNotification({
       status:'pending',
       title:'Sending...',
       message:'Sending cart data!',
     }))
 const response=await fetch('https://profile-8d013-default-rtdb.firebaseio.com/cart.json',{
  method:"PUT",
  body:JSON.stringify(cart),
  headers:{
    'Content-Type':'application/json'
  }
}
)
if(!response.ok){
  throw new Error('Sending cart data failrd.');
}


 dispatch(uiActions.showNotification({
       status:'success',
       title:'Success!',
       message:'Sending cart data successfully',
     }))
   }

   sendCartData().catch(error=>{
     dispatch(uiActions.showNotification({
       status:'error',
       title:'Error!',
       message:'Sending cart data failed!',
     }))
   }
   });

 },[cart,dispatch]);


  return (
    <Fragment>
   {notification&&<Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
     <Fragment/>
  );
}

export default App;
