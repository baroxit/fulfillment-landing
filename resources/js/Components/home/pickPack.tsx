import React from "react";
import NumberTicker from "@/components/ui/number-ticker";
import {cn} from "@/lib/utils";
import GridPattern from "@/Components/ui/grid-pattern";
import PickPickPack from "@/Components/home/pick-pack/PickPickPack";
import PackPickPack from "@/Components/home/pick-pack/PackPickPack";
import PrintPickPack from "@/Components/home/pick-pack/PrintPickPack";

const PickPack = () => {
    return (
        <div>
            <div className="relative mx-auto w-full max-w-[590px] pt-32 pb-12 text-center max-[590px]:px-2" id="pickpack">

                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    className={cn(
                        "z-[-1] absolute top-0 opacity-75 left-0 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />

                <p className="uppercase text-base text-gray-600 font-mono font-medium mb-2">Pick & Pack</p>
                {/* Title */}
                <h2 className="font-display text-4xl font-bold">Velocizza le operazioni di prelievo e imballo</h2>

                {/* Description */}
                <div className="mt-2 text-base text-gray-600">
                    La nostra tecnologia, disponibile anche su dispositivi mobili, guida i picker all'interno del magazzino attraverso un percorso ottimizzato, rendendo il processo di picking rapido, efficiente e privo di errori. La scansione dei codici a barre riduce il margine d'errore al 99,9%.
                </div>



            </div>

            <div className="mx-auto mt-4 w-full max-w-screen-lg divide-y divide-gray-200 border-y border-gray-200 bg-white/70 sm:[mask-image:linear-gradient(90deg,transparent,black_7%,black_93%,transparent)]">
                <div className="grid divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0 max-md:text-center">
                    <div className="flex flex-col gap-3 px-10 py-12 lg:px-20 lg:py-16">
                        <span className="text-sm font-medium uppercase text-gray-500">Ordini processati</span>
                        <span className="font-mono text-2xl font-semibold text-gray-800">
                                  <NumberTicker value={10000} />+</span>
                    </div>
                    <div className="flex flex-col gap-3 px-10 py-12 lg:px-20 lg:py-16">
                        <span className="text-sm font-medium uppercase text-gray-500">Livello di servizio</span>
                        <span className="font-mono text-2xl font-semibold text-gray-800"><NumberTicker value={99.9} decimalPlaces={1} />%</span>
                    </div>
                    <div className="flex flex-col gap-3 px-10 py-12 lg:px-20 lg:py-16">
                        <span className="text-sm font-medium uppercase text-gray-500">Tempo risparmiato</span>
                        <span className="font-mono text-2xl font-semibold text-gray-800">-<NumberTicker value={30} />%</span>
                    </div>
                </div>
                <div className="grid divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
                    <div className="px-4 pb-10 pt-10 md:pt-0 lg:px-16 lg:pb-16">
                        <div className="flex items-center justify-center pb-10 pt-6 md:pb-0 lg:pt-14 h-[180px] [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
                            <PickPickPack />
                        </div>
                        <h4 className="font-display mt-3 text-xl font-bold">Preleva</h4>
                        <p className="mt-1 text-pretty text-sm text-gray-500">Il terminale mostra in successione le varie visite da effettuare per il prelievo degli articoli dal magazzino, eliminando l'uso di supporti cartacei.
                        </p>
                    </div>
                    <div className="px-4 pb-10 pt-10 md:pt-0 lg:px-16 lg:pb-16">
                        <div className="flex items-center justify-center pb-10 pt-6 md:pb-0 lg:pt-9 h-[180px] [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
                            <PackPickPack />
                        </div>
                        <h4 className="font-display mt-3 text-xl font-bold">Imballa</h4>
                        <p className="mt-1 text-pretty text-sm text-gray-500">Scegli il tipo di imballaggio che preferisci utilizzare per la spedizione; in questo modo verranno registrate le dimensioni utilizzate poi per la creazione dell'etichetta.
                        </p>
                    </div>
                    <div className="px-4 pb-10 pt-10 md:pt-0 lg:px-16 lg:pb-16">
                        <div className="flex items-center justify-center pb-10 pt-8 md:pb-0 lg:pt-14 h-[180px] [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
                            <div className="flex justify-center">
                                <PrintPickPack />
                            </div>
                        </div>
                        <h4 className="font-display mt-3 text-xl font-bold">Stampa</h4>
                        <p className="mt-1 text-pretty text-sm text-gray-500">Una volta preparato l'ordine, le etichette e gli eventuali documenti necessari vengono inviati direttamente alle stampanti senza ulteriori azioni.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PickPack;
