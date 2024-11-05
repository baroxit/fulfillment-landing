import React from "react";

const PickPickPack = () => {

    return (
        <div className="flex cursor-default flex-col items-start gap-2 rounded-lg bg-gray-50 pb-1 pt-1 w-full">
            <div className="w-full px-1">
                <div className="flex w-full items-center justify-start gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 shadow-[0_4px_12px_0_#00000012]">
                    <div className="font-display text-sm font-semibold leading-tight text-gray-600"># B021 D001 C011</div>
                </div>
            </div>
                <div
                    className="w-full text-center px-2"
                >
                        <img
                            width="38"
                            height="38"
                            className="blur-0 size-12 rounded-md mx-auto"
                            src="images/borsa.jpg"
                        />
                        <div>
                        <div className="text-sm font-semibold leading-tight text-gray-900">Sicily Woven Tote</div>
                        <div className="text-xs font-normal text-gray-700 mt-1">
                            Taglia: UNI | Colore: Pelle
                        </div>
                    </div>
                    <button className="mt-2 w-full rounded-md border px-5 py-1.5 text-sm font-display font-semibold tracking-wider shadow-sm transition-all disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-gray-200 border-black bg-gray-900 text-white hover:bg-gray-700">
                        Prelevato
                    </button>
                </div>
        </div>
    );
};

export default PickPickPack;
