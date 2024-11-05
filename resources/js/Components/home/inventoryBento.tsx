import React from "react";

const InventoryBento = () => {
    const articoli = [
        {
            id: 1,
            nome: "Sicily Woven Tote Bag",
            immagine: "images/borsa.jpg",
            quantita: 50,
            taglia: "UNI",
            colore: "Pelle",
        },
        {
            id: 2,
            nome: "Low-Top Sneakers",
            immagine: "images/scarpe.jpg",
            quantita: 20,
            taglia: "45",
            colore: "Nero",
        },
    ];

    return (
        <div className="px-4 pb-10 pt-10 md:pb-0 lg:px-6 lg:pt-12">
            <div className="flex cursor-default flex-col items-start gap-2 rounded-lg bg-gray-50 pb-1 pt-1 [mask-image:linear-gradient(to_bottom,black_75%,transparent)] w-full">
                <div className="w-full px-1">
                    <div className="flex w-full items-center justify-start gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2.5 shadow-[0_4px_12px_0_#00000012]">

                        <div className="font-display text-base font-bold tracking-wide leading-tight text-gray-600"># B021 D001 C011</div>
                    </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                    {articoli.map((articolo) => (
                        <div
                            key={articolo.id}
                            className="flex w-full items-center justify-start gap-[17px] px-3 py-2 transition-colors duration-100 hover:bg-gray-100"
                        >
                            <img
                                alt={articolo.nome}
                                width="36"
                                height="36"
                                className="blur-0 size-9 rounded-md"
                                src={articolo.immagine}
                            />
                            <div>
                                <div className="flex items-end justify-between">
                                    <div className="text-base font-semibold leading-tight text-gray-900">{articolo.nome}</div>
                                </div>
                                <div className="text-sm font-normal text-gray-700">
                                    Taglia: {articolo.taglia} | Colore: {articolo.colore}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InventoryBento;
