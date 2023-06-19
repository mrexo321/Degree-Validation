import React from "react";
import Input from "@/Components/Input";
import SideTemplate from "@/Components/SideTemplate";
import MainLayout from "@/Layouts/MainLayout";
import { Link, useForm } from "@inertiajs/react";
import FormTitle from "@/Components/FormTitle";

const Homepage = (props) => {
    const { data, setData, post, processing, errors } = useForm({
        npm: "",
        certificate: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("certificate.validate"));
    };
    console.log("props", props);
    return (
        <div className="min-h-full flex flex-col gap-y-4">
            <FormTitle
                title="Validasi Ijazah"
                linkTitle="Login disini"
                link={route("login")}
            />
            <form
                onSubmit={submitHandler}
                className="h-full flex flex-col justify-center rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Nomor Pokok Mahasiswa (NPM)
                        </label>
                        <Input
                            required
                            name="npm"
                            value={data.npm}
                            onChange={(e) => setData("npm", e.target.value)}
                            id="npm"
                            type="number"
                            placeholder={221106043035}
                        />
                        {errors.npm && <div>{errors.npm}</div>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nomor Ijazah
                        </label>
                        <Input
                            required
                            id="certificate"
                            name="certificate"
                            value={data.certificate}
                            onChange={(e) =>
                                setData("certificate", e.target.value)
                            }
                            type="text"
                            placeholder="118993-H4-D/13919-411-2009"
                        />
                        {errors.certificate && (
                            <div> {errors.certificate} </div>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-600 py-3 px-6 text-slate-50 font-semibold rounded-xl"
                            name="validate"
                            type="submit"
                            disabled={processing}
                        >
                            Validasi Ijazah
                        </button>
                    </div>
                </div>
            </form>
            {props.flash.message && (
                <div className="alert alert-success fixed bottom-0 w-72 text-gray-900 text-xl font-semibold right-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>{props.flash.message}</span>
                </div>
            )}
        </div>
    );
};

Homepage.layout = (page) => <MainLayout children={page} />;

export default Homepage;
