import "./BackTopTop.scss"
import {FaArrowUp} from 'react-icons/fa'
import { useEffect, useState } from "react"


export const BackToTop = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.pageYOffset > 1000) {
            setShowButton(true);
            document.getElementById('btnTop').style.visibility="visible";
        } else {
            document.getElementById('btnTop').style.visibility="hidden";
            setShowButton(false);
        }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };

    return(
        <div className="containerButtonScroll">
            <button className="btn btn-primary btnScroll" id="btnTop" onClick={scrollToTop}>
                <FaArrowUp className="iconScroll" />
            </button>
        </div>
    )
}