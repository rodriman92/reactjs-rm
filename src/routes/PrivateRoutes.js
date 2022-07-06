import { Men } from '../components/Men/Men';
import { Women } from '../components/Women/Women';
import { Kids } from '../components/Kids/Kids';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { Sale } from '../components/Sale/Sale';
import { Contact } from '../components/Contact/Contact';
import { Cart } from '../components/Cart/Cart';
import { ItemListContainer } from '../components/itemListContainer/itemListContainer'
import { Banner }  from '../components/Banner/Banner';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from '../components/Navbar/NavBar';
import { Checkout } from '../components/Checkout/Checkout';
import { Footer } from '../components/Footer/Footer';
import { BackToTop } from '../components/BackToTop/BackToTop';
export const PrivateRoutes = () => {

    //defino las constantes con parametros para que cada seccion tenga un banner diferente
    const bannerNewRelease = {
        img: 'https://firebasestorage.googleapis.com/v0/b/snkrs-world.appspot.com/o/banners%2F1.png?alt=media&token=6034cfae-c960-4959-b1e1-f23c1f767873',
        title: 'NOVEDADES'
      }
    
      const bannerMen = {
        img: 'https://firebasestorage.googleapis.com/v0/b/snkrs-world.appspot.com/o/banners%2F2.png?alt=media&token=86ffaf2f-921e-487e-984c-4fae5c58e132',
        title:'HOMBRES'
      }
    
      const bannerWomen = {
        img: 'https://firebasestorage.googleapis.com/v0/b/snkrs-world.appspot.com/o/banners%2F6.png?alt=media&token=dcf37d89-d44c-4307-81d3-e7396c012dbf',
        title:'MUJERES'
      }
    
      const bannerKids = {
        img: 'https://firebasestorage.googleapis.com/v0/b/snkrs-world.appspot.com/o/banners%2F4.png?alt=media&token=1531e679-5ba3-4ef1-a97e-9b9eb7e54963',
        title:'NIÑOS'
      }
    
        const bannerSale = {
          img: 'https://firebasestorage.googleapis.com/v0/b/snkrs-world.appspot.com/o/banners%2F5.png?alt=media&token=c83c5a6f-42c3-4eb4-bc7a-163ff159b785',
          title:'OFERTAS'
        }
    return(
        <>
            <div className="App">
              <ToastContainer />
              <NavBar/>
              <Routes>
                  <Route path= '/' element={<Banner img={bannerNewRelease.img} title={bannerNewRelease.title} />} />
                  <Route path='/genre/men' element={<Banner img={bannerMen.img} title={bannerMen.title} />} />
                  <Route path='/genre/women' element={<Banner img={bannerWomen.img} title={bannerWomen.title} />} />
                  <Route path='/genre/kids' element={<Banner img={bannerKids.img} title={bannerKids.title} />} />
                  <Route path='/sale' element={<Banner img={bannerSale.img} title={bannerSale.title} /> } />
                  
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
              <BackToTop />
              <Footer />
            </div>
        </>
    )
}