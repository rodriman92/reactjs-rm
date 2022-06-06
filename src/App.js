import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { NavBar } from './components/Navbar/NavBar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Banner }  from './components/Banner/Banner';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Men } from './components/Men/Men';
import { Women } from './components/Women/Women';
import { Kids } from './components/Kids/Kids';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BannerMen } from './components/BannerMen/BannerMen';
import { BannerWomen } from './components/BannerWomen/BannerWomen';
import { BannerKids } from './components/BannerKids/BannerKids';

function App() {

  const sectionNewRelease = {
    titulo: 'NEW RELEASE',
    contenido: 'NEWS OF THE SEASON'
  }

  const sectionMen = {
    titulo: 'MEN',
    contenido: 'FOR HIM'
  }

  const sectionWomen = {
    titulo: 'WOMEN',
    contenido: 'FOR HER'
  }
  
  const sectionKids = {
    titulo: 'KIDS',
    contenido: 'FOR THEM'
  }

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
 
  return (
    <BrowserRouter>
      <div className="App">

        <ToastContainer />
        <NavBar/>
        <Routes>
          <Route path= '/' element={<Banner img={bannerNewRelease.img} />} />
          <Route path='/men' element={<BannerMen img={bannerMen.img} />} />
          <Route path='/women' element={<BannerWomen img={bannerWomen.img} />} />
          <Route path='/kids' element={<BannerKids img={bannerKids.img} />} />
        </Routes>
        
        <Routes>
          <Route path='/' element= { <ItemListContainer title={sectionNewRelease.titulo} content={sectionNewRelease.contenido} /> } />
          <Route path='/category/:categoryId' element= { <ItemListContainer title={sectionNewRelease.titulo} content={sectionNewRelease.contenido} /> } />
          <Route path='/item/:itemid' element = {<ItemDetailContainer />} />
          <Route path='/men' element= { <Men title={sectionMen.titulo} content={sectionMen.contenido} /> }/>
          <Route path='/women' element= { <Women title={sectionWomen.titulo} content={sectionWomen.contenido} /> } />
          <Route path='/kids' element= { <Kids title={sectionKids.titulo} content={sectionKids.contenido } /> } />
          <Route path='*' element= { <Navigate to={"/"} /> }/>
        </Routes>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
