import React from "react";
import NumberTicker from "@/components/ui/number-ticker";
import {cn} from "@/lib/utils";
import GridPattern from "@/Components/ui/grid-pattern";

const PickPack = () => {
    return (
        <div>
            <div className="relative mx-auto w-full max-w-[590px] py-12 text-center max-[590px]:px-2">

                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    className={cn(
                        "z-[-1] absolute top-0 left-0 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
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
                <div className="grid divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
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
            </div>
        </div>

    );
};

export default PickPack;
