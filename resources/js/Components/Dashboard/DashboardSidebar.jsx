import { Link, useForm } from "@inertiajs/react";
import React from "react";

export default function DashboardSidebar() {
    const menus = [
        { menu: "Tambah Mahasiswa", href: "/dashboard/student" },
        { menu: "Tambah Ijazah", href: "/dashboard/certificate" },
    ];

    const { post } = useForm({});

    const logoutHandler = (e) => {
        e.preventDefault();
        post(route("logout"));
    };

    return (
        <div className="fixed top-0 bottom-0 left-0 z-50 w-64  bg-gray-900 text-white">
            <div className="p-4">
                <Link
                    href={route("dashboard")}
                    className="text-2xl font-semibold decoration-slate-50 underline underline-offset-4"
                >
                    Dashboard
                </Link>
            </div>
            <div className="mt-5 flex flex-col ">
                {menus.map((menu, index) => {
                    return (
                        <Link
                            key={index}
                            className="p-4 font-semibold text-xl hover:bg-white hover:text-gray-900 transition duration-300"
                            href={menu.href}
                        >
                            {menu.menu}
                        </Link>
                    );
                })}
            </div>
            <div className="p-4 text-xl hover:bg-white hover:text-gray-900 transition duration-300 cursor-pointer font-semibold">
                <form onSubmit={logoutHandler}>
                    <button type="submit">Logout</button>
                </form>
            </div>
        </div>
    );
}
