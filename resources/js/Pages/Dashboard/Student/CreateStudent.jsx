import FormLayout from "@/Components/FormLayout";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import Select from "react-select";
Select;

export default function Student(props) {
    console.log("students", props.programs.data);

    const { data, setData, post, processing, errors } = useForm({
        npm: "",
        name: "",
        address: "",
        city: "",
        program: "",
        faculty: "",
        gender: "",
    });

    const genders = [
        {
            name: "laki-laki",
        },
        {
            name: "perempuan",
        },
    ];

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("student.store"));
    };

    return (
        <FormLayout>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                    <p className="font-medium text-lg">Form Mahasiswa</p>
                    <p>Harap di isi dengan teliti :)</p>
                </div>
                <div className="lg:col-span-2">
                    <form
                        onSubmit={submitHandler}
                        className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                    >
                        <div className="md:col-span-5">
                            <label htmlFor="full_name">Nomor Mahasiswa</label>
                            <input
                                value={data.npm}
                                onChange={(e) => setData("npm", e.target.value)}
                                type="number"
                                name="npm"
                                id="full_name"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                            <InputError message={errors.npm} />
                        </div>
                        <div className="md:col-span-5">
                            <label htmlFor="email">Nama Mahasiswa</label>
                            <input
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                type="text"
                                name="name"
                                id="name"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                            <InputError message={errors.name} />
                        </div>
                        <div className="md:col-span-3">
                            <label htmlFor="address">Alamat </label>
                            <input
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                type="text"
                                name="address"
                                id="address"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                            <InputError message={errors.address} />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="city">Kota Lahir</label>
                            <input
                                value={data.city}
                                onChange={(e) =>
                                    setData("city", e.target.value)
                                }
                                type="text"
                                name="city"
                                id="city"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                            <InputError message={errors.city} />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="faculty">Fakultas</label>
                            <select
                                name="faculty"
                                className="select border border-black w-full max-w-xs"
                                onChange={(e) =>
                                    setData("faculty", e.target.value)
                                }
                            >
                                <option disabled selected>
                                    Pilih fakultas
                                </option>
                                {props.faculties.data.map((faculty, index) => {
                                    return (
                                        <>
                                            <option value={faculty.id}>
                                                {faculty.name}
                                            </option>
                                        </>
                                    );
                                })}
                            </select>
                            <InputError message={errors.faculty} />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="program">Program</label>
                            <select
                                name="program"
                                className="select border border-black w-full max-w-xs"
                                onChange={(e) =>
                                    setData("program", e.target.value)
                                }
                            >
                                <option disabled selected>
                                    Pilih program studi
                                </option>
                                {props.programs.data.map((program, index) => {
                                    return (
                                        <>
                                            <option
                                                key={index}
                                                value={program.id}
                                            >
                                                {program.name}
                                            </option>
                                        </>
                                    );
                                })}
                            </select>
                            <InputError message={errors.program} />
                        </div>
                        <div className="md:col-span-1">
                            <label htmlFor="gender">Jenis Kelamin</label>
                            <select
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                                className="select border border-black w-full max-w-xs"
                                name="gender"
                                id="gender"
                            >
                                <option disabled selected>
                                    Pilih jenis kelamin
                                </option>
                                {genders.map((gender, index) => {
                                    return (
                                        <>
                                            <option
                                                key={index}
                                                value={gender.name}
                                            >
                                                {gender.name}
                                            </option>
                                        </>
                                    );
                                })}
                            </select>
                            <InputError message={errors.gender} />
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
