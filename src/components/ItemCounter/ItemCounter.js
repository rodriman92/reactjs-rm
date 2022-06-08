import { FaMinus, FaPlus } from 'react-icons/fa';  
  
  export const ItemCounter = ({max, counter, setCounter}) =>{

    const incrementar = () => {
        if(counter<max){ 
            setCounter(counter+1); 
        } 
      }
  
    const decrementar = () => {
        counter > 1 && setCounter(counter - 1)
      };

      return(
          <div>
              <button className="btn btn-dark btnCounter" onClick={decrementar}><FaMinus className="iconCounterButton"/></button>
                <span className="counterNumber">{counter}</span>
                <button className="btn btn-dark btnCounter" onClick={incrementar}><FaPlus className="iconCounterButton"/></button>
          </div>
      )
  }