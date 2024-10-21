import { useState } from "react";
import CarouselInterface from "./CarouselInterface";
import "./Carousel.css";
import reportesBoton from '../../assets/imagen-interfaz-2.png'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import transferirBoton from '../../assets/imagen-interfaz-1.png'
import prestamoBoton from '../../assets/imagen-interfaz-3-prueba.png'

const interfaces = [
    {
        title: "Mantente al tanto",
        description: "Revisa las estadísticas de tu cuenta para tomar mejores decisiones",
        buttonText: "Ir a reportes",
        buttonLink: "/reportes/total-ingresos",
        image: reportesBoton,
    },
    {
        title: "Donde y cuando quieras",
        description: "Puedes pasar dinero a tus seres queridos totalmente gratis",
        buttonText: "Transferir dinero",
        buttonLink: "/transacciones/transferir-dinero",
        image: transferirBoton,
    },
    {
        title: "Te brindamos un impulso",
        description: "Solicita prestamos que se adapten a tus necesidades",
        buttonText: "Solicitar préstamo",
        buttonLink: "/prestamos/solicitar-prestamo",
        image: prestamoBoton,
    }
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(currentIndex);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? interfaces.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === interfaces.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel-container">
            <button className="arrow left-arrow" onClick={prevSlide}>
                <FaArrowAltCircleLeft />
            </button>
            <CarouselInterface {...interfaces[currentIndex]} />
            <button className="arrow right-arrow" onClick={nextSlide}>
                <FaArrowAltCircleRight />
            </button>
        </div>
    );
}



export default Carousel;




// function Carrusel({ opciones }) {
//     const [opcionSeleccionada, setOpcionSeleccionada] = useState(0);
//     console.log(opcionSeleccionada);
//     return (
//         <div className="carrusel-container">
//             <div className="opciones">
//                 {opciones.map((opcion, index) => (
//                     <button
//                         key={index}
//                         className={index === opcionSeleccionada ? 'active' : ''}
//                         onClick={() => setOpcionSeleccionada(index)}
//                     >
//                         {opcion.titulo}
//                     </button>
//                 ))}
//             </div>
//             <div className="contenido">
//                 {opciones[opcionSeleccionada].contenido}
//             </div>
//         </div>
//     );
// }

// export default Carrusel;