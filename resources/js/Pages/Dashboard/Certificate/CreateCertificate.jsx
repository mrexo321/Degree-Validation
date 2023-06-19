import React from "react";
import FormLayout from "@/Components/FormLayout";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function CreateCertificate(props) {
    const { data, post, setData, errors, processing } = useForm({
        student: "",
        certificate: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("dashboard.certificate.store"));
        console.log("berhasil");
    };
    console.log("data Certif", props);
    return (
        <FormLayout>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                    <p className="font-medium text-lg">Form Ijazah</p>
                    <p>Harap di isi dengan teliti :)</p>
                </div>
                <div className="lg:col-span-2">
                    <form
                        onSubmit={submitHandler}
                        className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                    >
                        <div className="md:col-span-5">
                            <label htmlFor="certificate">Nomor Ijazah</label>
                            <input
                                value={data.certificate}
                                onChange={(e) =>
                                    setData("certificate", e.target.value)
                                }
                                type="number"
                                name="certificate"
                                id="certificate"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                            <InputError message={errors.certificate} />
                        </div>
                        <div className="md:col-span-3">
                            <label htmlFor="faculty">Mahasiswa</label>
                            <select
                                name="student"
                                className="select border border-black w-full max-w-xs"
                                onChange={(e) =>
                                    setData("student", e.target.value)
                                }
                            >
                                <option disabled selected>
                                    Pilih Mahasiswa
                                </option>
                                {props.students.data.map((student, index) => {
                                    return (
                                        <>
                                            <option
                                                key={index}
                                                value={student.npm}
                                            >
                                                {`${student.npm} - ${student.faculty.name} - ${student.program.name}`}
                                            </option>
                                        </>
                                    );
                                })}
                            </select>
                            <InputError message={errors.student} />
                        </div>
                        <div className="md:col-span-5 text-right mt-4">
                            <div className="inline-flex items-end">
                                <button
                                    disabled={processing}
                                    type="submit"
                                    className="bg-gray-900 hover:bg-blue-700 transition duration-200 text-white font-bold py-2 px-4 rounded-lg"
                                >
                                    Tambah
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </FormLayout>
    );
}
