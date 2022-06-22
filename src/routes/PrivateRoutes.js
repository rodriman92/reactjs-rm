import { Men } from '../components/Men/Men';
import { Women } from '../components/Women/Women';
import { Kids } from '../components/Kids/Kids';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { BannerMen } from '../components/BannerMen/BannerMen';
import { BannerWomen } from '../components/BannerWomen/BannerWomen';
import { BannerKids } from '../components/BannerKids/BannerKids';
import { BannerSale } from '../components/BannerSale/BannerSale';
import { Sale } from '../components/Sale/Sale';
import { Contact } from '../components/Contact/Contact';
import { Cart } from '../components/Cart/Cart';
import { ItemListContainer } from '../components/itemListContainer/itemListContainer'
import { Banner }  from '../components/Banner/Banner';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from '../components/Navbar/NavBar';
import { UserInfo } from '../components/UserInfo/UserInfo';
import { Checkout } from '../components/Checkout/Checkout';
export const PrivateRoutes = () => {

    //defino las constantes con parametros para que cada seccion tenga un banner diferente
    const bannerNewRelease = {
        img: '../assets/banners/new_release.png'
      }
    
      const bannerMen = {
        img: '../assets/banners/men_banner.png'
      }
    
      const bannerWomen = {
        img: '../assets/banners/women.png'
      }
    
      const bannerKids = {
        img: '../assets/banners/kids.png'
      }
    
        const bannerSale = {
          img: '../assets/banners/sale.png'
        }
    return(
        <>
            <div className="App">
              <ToastContainer />
              <NavBar/>
              <UserInfo />
              <Routes>
                  <Route path= '/' element={<Banner img={bannerNewRelease.img} />} />
                  <Route path='/genre/men' element={<BannerMen img={bannerMen.img} />} />
                  <Route path='/genre/women' element={<BannerWomen img={bannerWomen.img} />} />
                  <Route path='/genre/kids' element={<BannerKids img={bannerKids.img} />} />
                  <Route path='/sale' element={<BannerSale img={bannerSale.img} />} />
              </Routes>
              <Routes>
                  <Route path='/' element= { <ItemListContainer />  } />
                  <Route path='/category/:categoryId' element= { <ItemListContainer /> } />
                  <Route path='/item/:itemid' element = {<ItemDetailContainer />} />
                  <Route path='/genre/:genreId' element= { <Men /> }/>
                  <Route path='/genre/:genreId' element= { <Women  /> } />
                  <Route path='/genre/:genreId' element= { <Kids /> } />
                  <Route path='/sale' element= { <Sale /> } /> 
                  <Route path='/contact' element= { <Contact /> } />             
                  <Route path='/cart' element= { <Cart /> } /> 
                  <Route path='/checkout' element= {<Checkout />} />
                  <Route path='*' element= { <Navigate to={"/"} /> }/>
              </Routes>
            </div>
        </>
    )
}