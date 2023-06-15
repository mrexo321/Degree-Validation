import React, { useEffect, useState } from "react";
import Fts from "../../../public/image/fts.png";
import Uika from "../../../public/image/uika.png";

export default function SideTemplate() {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);
    return (
        <div className="bg-blue-600 flex flex-col gap-y-24 p-8 w-full rounded-2xl">
            <div className>
                <span className="text-slate-50 text-sm font-semibold capitalize tracking-tight">
                    VAZAH
                </span>
            </div>
            <div className="w-3/4 flex flex-col gap-y-4">
                <div>
                    <h1 className="text-slate-50 text-lg md:text-4xl font-semibold tracking-tight">
                        Sistem validasi ijazah termudah
                    </h1>
                </div>
                <div className="text-gray-300 text-base md:text-lg  tracking-tight leading-relaxed">
                    <span>Sistem Applikasi</span>
                    <br />
                    <span>Validasi Ijazah Berbasis Website dan Mudah</span>
                    <br />
                    <span>UI/UX Friendly Untuk Siapapun</span>
                    <br />
                </div>
            </div>
            <div className="w-full flex justify-start gap-x-4 text-slate-50 text-sm">
                <div className="rounded-xl p-4 bg-white">
                    <img className="flex-shrink-0 w-32" src={Uika} alt="" />
                </div>
                <div className="rounded-xl p-4  bg-white">
                    <img className="flex-shrink-0 w-32" src={Fts} alt="" />
                </div>
            </div>
        </div>
    );
}
