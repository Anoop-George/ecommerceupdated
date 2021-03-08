import React from 'react';
import "../maincss.css";
import { Route, Switch } from "react-router-dom";
import PersistentDrawerLeft from "./appbar";
// const LandingPage = lazy(() => import("./landingPage"));
import LandingPage from './landingPage'
// const FooterComponent = lazy(() => import("./footer"));
import FooterComponent from './footer'
// const Productdetails = lazy(() => import("./productdetails"));
import Productdetails from './productdetails'
// const CartDetails = lazy(() => import("./cart/cartDetails"));
import CartDetails from './cart/cartDetails';
// const Payment = lazy(() => import("./cart/payment"));
import Payment from './cart/payment';
// const Orders = lazy(() => import("./cart/orders"));
import Orders from './cart/orders';
// const Addcomment = lazy(() => import("./cart/addcomment"));
import Addcomment from './cart/addcomment';
// const ProductReviews = lazy(() => import("./productReviews"));
import ProductReviews from './productReviews';
// const Polist = lazy(() => import("./backend/polist"));
import Polist from './backend/polist';
// const DetailsofPO = lazy(() => import("./backend/detailofPo"));
import DetailsofPO from './backend/detailofPo';
// const Search = lazy(() => import("./folder1/Search"));
import Search from './folder1/Search';
// const ProfileDetails = lazy(() => import("./backend/profileDetails"));
import ProfileDetails from './backend/profileDetails';
// const About = lazy(() => import("./folder1/about"));
import About from './folder1/about';
// const ProductMobile = lazy(() => import("./productMobile"));
import ProductMobile from './productMobile';

function Routing() {
  return (
    <React.Fragment>
      <PersistentDrawerLeft />
      {/* <Suspense fallback={<div style={{ margin: 20 }}>Loading...</div>}> */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/productDetails/:productid"
            component={Productdetails}
          />
          <Route exact path="/CartDetails" component={CartDetails} />
          <Route exact path="/Payment" component={Payment} />
          <Route exact path="/Orders" component={Orders} />
          <Route exact path="/Addcomment:id" component={Addcomment} />
          <Route exact path="/ProductReviews:id" component={ProductReviews} />
          <Route exact path="/Polist" component={Polist} />
          <Route exact path="/DetailsofPO:id" component={DetailsofPO} />
          <Route exact path="/Search:id" component={Search} />
          <Route exact path="/ProfileDetails:id" component={ProfileDetails} />
          <Route exact path="/About" component={About} />
          <Route exact path="/ProductsFilter:brand" component={ProductMobile} />
        </Switch>
        <FooterComponent />
      {/* </Suspense> */}
    </React.Fragment>
  );
}

export default Routing;
