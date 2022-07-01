import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { CartProvider } from './context/CartContext';

import { AppRouter } from './routes/AppRouter';

function App() {

    return (

      <CartProvider>
        <AppRouter />  
      </CartProvider>
    );
}

export default App;
