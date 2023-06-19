import React from "react";
import Uika from "../../../public/image/uika.png";
import { useForm } from "@inertiajs/react";
import NotFound from "./NotFound";

export default function Certif({ data }) {
    const { post } = useForm();

    const exitHandler = (e) => {
        e.preventDefault();
        post(route("exit"));
    };
    console.log("certif_data", data);

    const certificateExist = ({ data }) => {
        return (
            <>
                {data.map((value, i) => {
                    return (
                        <div
                            key={i}
                            className="min-h-screen justify-center flex flex-col items-center"
                        >
                            <div className="flex justify-center flex-col items-center container mx-auto w-full bg-white rounded-2xl p-4 shadow-xl">
                                <div className="bg-gray-900 flex flex-col justify-center items-center gap-y-8 p-8 w-full rounded-2xl">
                                    <div className="flex flex-col gap-y-4 justify-center items-center">
                                        <img
                                            className="w-32 flex-shrink-0"
                                            src={Uika}
                                            alt=""
                                        />
                                        <span className="text-slate-50 text-5xl font-semibold capitalize tracking-tight">
                                            Universitas Ibnu Khaldun
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-slate-50">
                                        <span className="text-lg">
                                            Memberikan Kepada
                                        </span>
                                        <h1 className="text-4xl font-bold">
                                            {value.student.name}
                                        </h1>
                                        <span className="flex gap-x-1">
                                            <p>Lahir pada</p>
                                            <p>{value.student.birth_date}</p>
                                            <p className="font-bold">
                                                di {value.student.birth_place}
                                            </p>
                                        </span>
                                    </div>
                                    <div className="w-full flex flex-col justify-center items-center gap-y-2">
                                        <div>
                                            <h1 className="text-slate-50 text-lg md:text-5xl font-bold capitalize tracking-tight">
                                                {
                                                    value.student.faculty.degree
                                                        .name
                                                }
                                                (
                                                {
                                                    value.student.faculty.degree
                                                        .title
                                                }
                                                )
                                            </h1>
                                        </div>
                                        <div className="text-slate-100 text-base md:text-lg tracking-tight flex flex-col items-center">
                                            <span className="font-bold">
                                                Program Studi
                                                {value.student.program.name}
                                                {/*?= $value['prodi_name'] ?*/}
                                            </span>
                                            <span className="font-bold">
                                                {value.student.faculty.name}
                                                {/*?= $value['faculty_name'] ?*/}
                                            </span>
                                            <span>
                                                Dengan segala hak dan kewajiban
                                                yang berhubungan dengan gelar
                                                akademik ini.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-between gap-x-4 text-slate-50 text-sm items-center">
                                        <div className="flex flex-col items-center justify-center gap-y-4">
                                            <h1>Rektor</h1>
                                            <span className="font-semibold">
                                                Tanda Tangan Disini
                                            </span>
                                            <span className="font-bold">
                                                {value.rector.name}
                                            </span>
                                        </div>
                                        <div className>
                                            <img
                                                className="flex-shrink-0 w-32"
                                                src={Uika}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-y-4">
                                            <h1>Dekan</h1>
                                            <span className="font-semibold">
                                                Tanda Tangan Disini
                                            </span>
                                            <span className="font-bold">
                                                {value.dean.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <form onSubmit={exitHandler}>
                                        <button className="py-2 px-4 rounded-lg bg-blue-700 text-slate-50 font-semibold">
                                            Kembali
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    };

    const certificateNull = () => {
        return (
            <>
                <NotFound />
            </>
        );
    };

    if (data.length > 0) {
        return certificateExist({ data });
    }
    return certificateNull();
}
