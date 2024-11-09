import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Demo() {
    useEffect(()=>{
        (async function () {
            const cal = await getCalApi({"namespace":"demo"});
            cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"week_view"});
        })();
    }, [])
    return (

    <div className="w-full pt-20 pb-52 text-center px-44">
        <h1 className="max-w-lg sm:max-w-2xl mx-auto mb-10 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-5xl sm:leading-[1.05]">Solo
            <span className="bg-gradient-to-r from-[#956AFF] via-[#D76D77] to-[#fc5713] bg-clip-text text-transparent"> 15 minuti </span>
            per scoprire come migliorare le tue operazioni.
        </h1>

        <div className="rounded-xl p-2 shadow-sm ring-1 ring-black/5">
            <div className="border rounded-lg">
                <Cal namespace="demo"
                     calLink="giacomo-barilari/demo"
                     style={{width:"100%",height:"100%",overflow:"scroll"}}
                     config={{"layout":"week_view","theme":"light"}}
                     className="rounded-lg"
                />
            </div>
        </div>

    </div>
    );
};
