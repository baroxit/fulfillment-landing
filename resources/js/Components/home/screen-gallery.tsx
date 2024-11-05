import React, { useState } from "react";
import { ShoppingCartIcon } from '@heroicons/react/24/outline'


const ScreenGallery = () => {
    // Stato per tracciare l'immagine attualmente visibile
    const [activeIndex, setActiveIndex] = useState(0);

    // Array delle immagini
    const images = [
        { id: "ordini", src: "images/ordini.png", alt: "Ordini", text:"Ordini", icon: <ShoppingCartIcon className="size-4 text-black" strokeWidth={2}/>},
        { id: "giacenza", src: "images/giacenza.png", alt: "Giacenza", text:"Giacenza", icon:""},
        { id: "spedizioni", src: "images/spedizioni.png", alt: "Spedizioni", text:"Spedizioni", icon:""},
        { id: "operazioni", src: "images/operazioni.png", alt: "Operazioni", text:"Operazioni", icon:""},
        { id: "pianifica", src: "images/pianifica.png", alt: "Pianifica", text:"Pianifica", icon:""},
    ];

    // Funzione per aggiornare l'indice dell'immagine visibile
    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="mt-12 mb-12 mx-auto max-w-6xl">
            {/* Pulsanti per cambiare immagine */}
            <div className="mb-5 flex items-center justify-start gap-2 overflow-x-auto px-3 scrollbar-hide min-[510px]:justify-center">
                {images.map((image, index) => (
                    <button
                        key={image.id}
                        onClick={() => handleButtonClick(index)}
                        className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium text-gray-800 transition-colors duration-75 animate-slide-up-fade [--offset:10px] [animation-delay:var(--delay)] [animation-duration:1s] [animation-fill-mode:both] ${
                            activeIndex === index ? "bg-gray-700/10" : "hover:bg-gray-700/5"
                        }`}
                    >
                        {image.icon}
                        {image.text}
                    </button>


                ))}


            </div>

            {/* Contenitore immagini */}
            <div
                style={{ width: 1002, height: 668 }}
                className="h-[16rem] sm:h-auto sm:w-[30rem] mx-auto relative aspect-[var(--width)/var(--height)] [--radius:theme(borderRadius.xl)]"
            >
                <div className="absolute -inset-[var(--padding)] rounded-[calc(var(--radius)+var(--padding))] shadow-sm ring-1 ring-black/5 [--padding:theme(spacing.2)]"></div>

                {/* Rendering delle immagini con visibilità basata sull'indice attivo */}
                {images.map((image, index) => (
                    <img
                        key={image.id}
                        id={image.id}
                        alt={image.alt}
                        src={image.src}
                        className={`absolute h-full rounded-[var(--radius)] shadow-md ring-1 ring-black/10 transition-opacity duration-300 ${
                            activeIndex === index ? "opacity-1" : "opacity-0"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScreenGallery;
