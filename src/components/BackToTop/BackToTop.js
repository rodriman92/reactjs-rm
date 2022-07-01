import "./BackTopTop.scss"
import {FaArrowUp} from 'react-icons/fa'
import { useEffect, useState } from "react"


export const BackToTop = () => {


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.scrollY > 300) {
            setIsVisible(true)
        } else{
            setIsVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect( () => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }    
    },[]);



    return(
        <div className="containerButtonScroll">
            <button className="btn btn-primary btnScroll" onClick={scrollToTop} style={{
                opacity : isVisible ? 1 : 0 
            }}>
                <FaArrowUp className="iconScroll" />
            </button>
        </div>
    )
}