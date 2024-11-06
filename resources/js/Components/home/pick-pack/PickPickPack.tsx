import React from "react";

const PickPickPack = () => {

    return (
        <div className="w-full pb-6 mx-2 px-2 pt-2 border rounded-lg shadow-sm bg-white">
            <div className="w-full py-1 border rounded-md text-center">
                <div className="font-display text-sm font-semibold leading-tight text-gray-600"># B021 D001 C011</div>
            </div>
            <div className="w-full text-center px-2">
                    <img
                        width="38"
                        height="38"
                        className="blur-0 size-12 rounded-md mx-auto"
                        src="images/borsa.jpg"
                    />
                    <div>
                    <div className="text-sm font-semibold leading-tight text-gray-900">Sicily Woven Tote</div>
                </div>

            </div>

            <div className="w-full flex mt-2">
                <div>
                    <div className="rounded-md w-9 h-9 transition-all duration-100 ease-in-out border text-xl font-medium shadow-sm border-black bg-black text-center py-0.5 text-white hover:bg-gray-800">-</div>
                </div>
                <div className="font-display text-xl font-bold leading-tight text-black w-full text-center border rounded-sm mx-2 py-1">2</div>
                <div>
                    <div className="rounded-md w-9 h-9 transition-all duration-100 ease-in-out border text-xl font-medium shadow-sm border-black bg-black text-center py-0.5 text-white hover:bg-gray-800">+</div>
                </div>
            </div>
        </div>
    );
};

export default PickPickPack;
