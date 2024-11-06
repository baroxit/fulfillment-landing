import React from "react";
import { Skeleton } from "@/components/ui/skeleton"



const PrintPickPack = () => {
    return (
        <div className="w-[170px] pb-6 px-2 border rounded-lg shadow-sm bg-white">

            <div>
                <label className="text-xs font-medium text-gray-500">From</label>
                <Skeleton className="w-[130px] h-[10px] rounded-sm" />
            </div>

            <div>
                <label className="text-xs font-medium text-gray-500">To</label>
                <Skeleton className="w-[150px] h-[10px] rounded-sm" />
                <Skeleton className="w-3/4 h-[10px] rounded-sm mt-1" />
            </div>

            <div className="mt-1">
                <label className="text-xs font-medium text-gray-500">Tracking</label>
                <Skeleton className="w-[130px] h-[30px] rounded-sm" />
            </div>
        </div>
    );
};

export default PrintPickPack;
