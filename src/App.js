import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { CartProvider } from './context/CartContext';

import { AppRouter } from './routes/AppRouter';
import { LoginProvider } from './context/LoginContext';

function App() {

    return (

      <LoginProvider>
        <CartProvider>
          <AppRouter />  
        </CartProvider>
      </LoginProvider>
    );
}

export default App;
