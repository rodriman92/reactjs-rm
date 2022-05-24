import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { NavBar } from './components/Navbar/NavBar';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
function App() {

  const sectionNewRelease = {
    titulo: 'NEW RELEASE',
    contenido: 'WELCOME TO THE NEW RELEASE SECTION'
  }

  const sectionMen = {
    titulo: 'MEN',
    contenido: 'WELCOME TO THE MEN SECTION'
  }

  const sectionWomen = {
    titulo: 'WOMEN',
    contenido: 'WELCOME TO THE WOMEN SECTION'
  }

  const sectionKids = {
    titulo: 'KIDS',
    contenido: 'WELCOME TO THE KIDS SECTION'
  }

  const sectionSale = {
    titulo: 'SALE!',
    contenido: 'WELCOME TO THE SALE SECTION'
  }
 
  return (
    <div className="App">
      <NavBar/>

      <ItemListContainer title={sectionNewRelease.titulo} content={sectionNewRelease.contenido} />
      <ItemListContainer title={sectionMen.titulo} content={sectionMen.contenido} />
      <ItemListContainer title={sectionWomen.titulo} content={sectionWomen.contenido} />
      <ItemListContainer title={sectionKids.titulo} content={sectionKids.contenido} />
      <ItemListContainer title={sectionSale.titulo} content={sectionSale.contenido} />

    </div>
  );
}

export default App;
