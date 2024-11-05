import React from "react";
import InventoryBento from "@/Components/home/inventoryBento";
import {OrdersBento} from "@/Components/home/ordersBento";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import GridPattern from "@/Components/ui/grid-pattern";
import {cn} from "@/lib/utils";
import {Input} from "@/Components/ui/input";
const Software = () => {
    const items = Array(7).fill('a');

    return (
        <div>
            <div className="relative mx-auto w-full max-w-[590px] py-12 text-center">

                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    className={cn(
                        "z-[-1] absolute top-0 left-0 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />

                <p className="uppercase text-base text-gray-600 font-mono font-medium mb-2">Software</p>
                {/* Title */}
                <h2 className="font-display text-4xl font-bold">Sviluppato da operatori per operatori</h2>

                {/* Description */}
                <div className="mt-2 text-base text-gray-600">
                    Dopo anni di test su tutto ciò che il mercato offriva, abbiamo capito che c'era un modo migliore. Così, abbiamo creato da zero un software per aumentare la produttività, ridurre i costi e garantire la massima accuratezza in tutte le operazioni.
                </div>
            </div>
            <div className="mx-auto mt-2 w-full max-w-screen-lg divide-y divide-gray-200 border-y border-gray-200 bg-white/70 sm:[mask-image:linear-gradient(90deg,transparent,black_7%,black_93%,transparent)]">

            <div className="grid divide-y divide-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="px-4 pb-10 pt-10 md:pt-0 lg:px-16 lg:pb-16">
                <InventoryBento />
                <h4 className="font-display mt-3 text-xl font-bold">Inventario</h4>
                <p className="mt-1 text-pretty text-sm text-gray-500">Scegli e memorizza le posizioni degli articoli all'interno dei tuoi magazzini. Effettua dei conteggi ciclici della merce per verificare le incongruenze e noi penseremo ad aggiornare i livelli di scorta nel tuo store online.
                </p>
            </div>

            <div className="px-4 pb-10 pt-10 md:pt-0 lg:px-16 lg:pb-16">
                <OrdersBento />
                <h4 className="font-display mt-3 text-xl font-bold">Ordini e resi</h4>
                <p className="mt-1 text-pretty text-sm text-gray-500">Ci integriamo direttamente con il tuo store online per rendere la gestione degli ordini e dei resi più semplice che mai. La scelta del magazzino di evasione e del corriere viene effettuata in base alle tue regole pre-impostate.
                </p>
            </div>
            </div>
                <div className="grid divide-y divide-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0">
                    <div className="px-4 pb-10 pt-10 md:pt-0 lg:px-16 lg:pb-16">
                        <div className="flex items-center justify-center pb-10 pt-8 md:pb-0 lg:pt-12 h-[218px] [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
                            <div className="flex justify-center">

                                <div className="flex">
                                    <div className="border border-gray-300 divide-y divide-gray-300 shadow-sm">
                                        {items.map((_, index) => (
                                            <div className="w-4 h-6">

                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        {items.map((_, index) => (
                                            <div className="w-6 h-6">

                                            </div>
                                        ))}
                                    </div>
                                    <div className="border border-gray-300 divide-y divide-gray-300 shadow-sm">
                                        {items.map((_, index) => (
                                            <div className="w-4 h-6">

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="border-t border-r border-b border-gray-300 divide-y divide-gray-300 shadow-sm">
                                        {items.map((_, index) => (
                                            <div className="w-4 h-6">

                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        {items.map((_, index) => (
                                            <div className="w-6 h-6">

                                            </div>
                                        ))}
                                    </div>
                                    <div className="border border-gray-300 divide-y divide-gray-300 shadow-sm">
                                        {items.map((_, index) => (
                                            <div className="w-4 h-6">

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="border-t border-r border-b border-gray-300 divide-y divide-gray-300 shadow-sm">
                                        {items.map((_, index) => (
                                            <div className="w-4 h-6">

                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="w-6 h-6">

                                        </div>
                                        <div className="w-6 h-6">

                                        </div>

                                        <div className="space-y-1.5 mt-2">
                                            <span className="relative flex h-3 w-3 mx-auto">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                                            </span>
                                            <div className="w-[3px] h-4 bg-blue-600 mx-auto rounded opacity-90"></div>
                                            <div className="w-[3px] h-4 bg-blue-600 mx-auto rounded opacity-75"></div>
                                            <div className="w-[3px] h-4 bg-blue-600 mx-auto rounded opacity-50"></div>
                                            <div className="w-[3px] h-4 bg-blue-600 mx-auto rounded opacity-25"></div>

                                        </div>


                                    </div>
                                    <div className="border border-gray-300 divide-y divide-gray-300">
                                        {items.map((_, index) => (
                                            <div className="w-4 h-6">

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="border-t border-r border-b border-gray-300 divide-y divide-gray-300 shadow-sm">
                                        {items.map((_, index) => (
                                            <div className="w-4 h-6">

                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        {items.map((_, index) => (
                                            <div className="w-6 h-6">

                                            </div>
                                        ))}
                                    </div>
                                    <div className="border border-gray-300 divide-y divide-gray-300 shadow-sm">
                                        {items.map((_, index) => (
                                            <div className="w-4 h-6">

                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <h4 className="font-display mt-3 text-xl font-bold">Mappatura del magazzino</h4>
                        <p className="mt-1 text-pretty text-sm text-gray-500">Il software memorizza la posizione esatta di ogni articolo nel magazzino, creando una mappa virtuale.  Quando devi prelevare un prodotto, il sistema analizza la mappa e calcola il percorso più breve ed efficiente per raggiungere l'ubicazione desiderata.
                        </p>
                    </div>

                    <div className="px-4 pb-10 pt-10 md:pt-0 lg:px-16 lg:pb-16">
                        <div className="pb-10 pt-10 md:pb-0 lg:pt-16 h-[218px] space-x-2">

                            <div className="grid w-full max-w-xs items-center gap-1.5 mx-auto mt-8">
                                <Label htmlFor="address">Indirizzo di spedizione</Label>
                                <Input type="text" id="address" placeholder="Indirizzo" value="Via Rossi 35, Milano 20157" className="text-green-700 ring-1 ring-green-400 border border-green-600 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-600 focus:shadow" />
                            </div>
                        </div>
                        <h4 className="font-display mt-3 text-xl font-bold">Validazione degli indirizzi</h4>
                        <p className="mt-1 text-pretty text-sm text-gray-500">Individua gli indirizzi errati e non residenziali prima della spedizione. Per ogni indirizzo otterrai una percentuale di accuratezza e se è accettato dal corriere. In questo modo eviti blocchi durante l'evasione, riducendo i tempi totali di spedizione.
                        </p>
                    </div>
                </div>

            </div>

        </div>
        );
};

export default Software;
