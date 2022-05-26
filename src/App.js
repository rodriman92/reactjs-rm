import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { NavBar } from './components/Navbar/NavBar';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { Banner }  from './components/Banner/Banner';
// import {Counter} from './ejemplos/Counter/Counter.js'
// import {Counter2} from './ejemplos/Counter2/Counter2'
import { ItemCount } from './components/ItemCount/ItemCount';
function App() {

  // const [mostrar, setMostrar] = useState(true);

  // const mostrarCounter = () =>{
  //   setMostrar(!mostrar);
  // }

  const bannerNewRelease = {
    title: 'NIKE AIR JORDAN 1 CLASSIC'
  }

  const sectionNewRelease = {
    titulo: 'NEW RELEASE',
    contenido: 'NEWS OF THE SEASON'
  }
  

  const product1 = {
    title: 'Nike Free Metcon 4',
    img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0229c52e-b87d-45a4-9738-d27cfe87a50b/free-metcon-4-womens-training-shoes-pxHVt9.png',
    legend: 'Flexibility and stability to help you in your training program.',
    genre: 'Women',
    price: '120',
    stockMin:1,
    stockMax: 5

  }
  const product2 = {
    title: 'Nike Airforce 1 07',
    img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png',
    legend: 'the b-ball icon that puts a fresh spin on what you know best',
    genre: 'Women',
    price: '100',
    stockMin:1,
    stockMax: 7

  }
  const product3 = {
    title: 'Nike AirMax 95',
    img:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eed1bb5a-ebdc-4a82-a030-dff057828b10/custom-nike-air-max-95-by-you.png',
    legend: 'Celebrate workwears wide appeal, By You',
    genre: 'Men',
    price: '190',
    stockMin:1,
    stockMax: 10

  }
  const product4 = {
    title: 'Nike Blazer Mid 77',
    img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5f83ee7d-f700-4f30-92a5-5b318127483e/blazer-mid-77-big-kids-shoes-4VfSTd.png',
    legend: 'old-school look of Nike basketball with a vintage touch.',
    genre: 'Unisex',
    price: '80',
    stockMin:1,
    stockMax: 3

  }
  const product5 = {
    title: 'Nike Pegasus Trail 3',
    img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/caa25160-c0bb-439f-97e6-28832414b8a9/pegasus-trail-3-gore-tex-mens-waterproof-trail-running-shoes-HG005k.png',
    legend: 'Created for run. Confort, lightness and design',
    genre: 'Unisex',
    price: '160',
    stockMin:1,
    stockMax: 4

  }


 
  return (
    <div className="App">
      <NavBar/>

      <Banner title={bannerNewRelease.title} />

      <ItemListContainer title={sectionNewRelease.titulo} content={sectionNewRelease.contenido} />

      <ItemCount title={product1.title} img={product1.img} legend={product1.legend} genre={product1.genre} price={product1.price} stockMin={product1.stockMin} stockMax={product1.stockMax} />

      <ItemCount title={product2.title} img={product2.img} legend={product2.legend} genre={product2.genre} price={product2.price} stockMin={product2.stockMin} stockMax={product2.stockMax} />

      <ItemCount title={product3.title} img={product3.img} legend={product3.legend} genre={product3.genre} price={product3.price} stockMin={product3.stockMin} stockMax={product3.stockMax} />

      <ItemCount title={product4.title} img={product4.img} legend={product4.legend} genre={product4.genre} price={product4.price} stockMin={product4.stockMin} stockMax={product4.stockMax} />

      <ItemCount title={product5.title} img={product5.img} legend={product5.legend} genre={product5.genre} price={product5.price} stockMin={product5.stockMin} stockMax={product5.stockMax} />

      {/* <button className='btn btn-dark' onClick={mostrarCounter}>Mostrar - Ocultar</button>

      {
        mostrar ? <Counter /> : <div />
      }

      <Counter2/> */}
    </div>
  );
}

export default App;
