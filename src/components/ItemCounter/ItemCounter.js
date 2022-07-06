import { FaMinus, FaPlus } from 'react-icons/fa';  
  
  export const ItemCounter = ({max, counter, setCounter}) =>{

    const incrementar = () => {
      counter < max && setCounter(counter + 1)
          
      }
  
    const decrementar = () => {
        counter > 1 && setCounter(counter - 1)
      };

    if(max === 0) {
      return(
        <div>
          <p className='alert alert-warning'>No hay stock del producto</p>
        </div>
      )
    }

      return(
          <div>
                <button className=
                        {counter === 1 ? "btnCounterDisabled" : "btnCounter"}
                         disabled={counter < 1}
                         onClick={decrementar}>
                          <FaMinus className="iconCounterButton"/>
                </button>
                <span className="counterNumber">{counter}</span>
                <button 
                  className={counter === max ?  "btnCounterDisabled" : "btnCounter" }
                  disabled={counter === max}
                  onClick={incrementar}>
                  <FaPlus className="iconCounterButton"/>
                </button>
          </div>
      )
  }