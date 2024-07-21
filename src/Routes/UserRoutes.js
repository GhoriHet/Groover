import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Home from '../container/user/Home';
import About from '../container/user/About';
import Contact from '../container/user/Contact';
import Faq from '../container/user/Faq';
import Terms from '../container/user/Terms';
// import Error from '../container/user/Error';
import Blog from '../container/user/Blog';
import BlogDetail from '../container/user/BlogDetail';
import Cart from '../container/user/Cart';
import Checkout from '../container/user/Checkout';
import Register from '../container/user/Account/Register';
import Wishlist from '../container/user/Wishlist';
import TrackOrder from '../container/user/TrackOrder';
import ShopF from '../container/user/Shop_Version/ShopF';
import ShopS from '../container/user/Shop_Version/ShopS';
import ShopT from '../container/user/Shop_Version/ShopT';
import LostPass from '../container/user/LostPass';
import Confirmation from '../container/user/Confirmation';
import CustomDeal from '../container/user/CustomDeal';
import ShopDetail from '../container/user/ShopDetail';
import Shop from '../container/user/Shop';

function UserRoutes(props) {
    return (
        <>
            <Header />

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/productDetail/:_id' element={<ShopDetail />} />
                <Route path='/category/:categoryName' element={<Shop />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/terms' element={<Terms />} />
                {/* <Route path='*' element={<Error />} /> */}
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog-details' element={<BlogDetail />} />

                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/register' element={<Register />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/track-order' element={<TrackOrder />} />
                <Route path='/shopv1' element={<ShopF />} />
                <Route path='/shopv2' element={<ShopS />} />
                <Route path='/shopv3' element={<ShopT />} />

                <Route path='/forgot' element={<LostPass />} />
                <Route path='/checkout-confirmation' element={<Confirmation />} />
                <Route path='/custom-deal' element={<CustomDeal />} />

            </Routes>

            <Footer />
        </>
    );
}

export default UserRoutes;