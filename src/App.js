import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { NavBar } from './components/Navbar/NavBar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Banner }  from './components/Banner/Banner';
import { ToastContainer } from 'react-toastify';
function App() {


  const bannerNewRelease = {
    title: 'NIKE AIR JORDAN 1 CLASSIC'
  }

  const sectionNewRelease = {
    titulo: 'NEW RELEASE',
    contenido: 'NEWS OF THE SEASON'
  }
  
 
  return (
    <div className="App">

      <ToastContainer />
      <NavBar/>

      <Banner title={bannerNewRelease.title} />

      <ItemListContainer title={sectionNewRelease.titulo} content={sectionNewRelease.contenido} />

    </div>
  );
}

export default App;
