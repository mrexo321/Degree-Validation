import { Link } from "@inertiajs/react";
import React from "react";

export default function FormTitle({ title, linkTitle = "", link }) {
    return (
        <div className="px-8 pt-6 pb-8 flex flex-col gap-y-8 tracking-tight">
            <h1 className="text-4xl font-semibold text-gray-900">{title}</h1>
            <Link className="underline decoration-indigo-700" href={link}>
                {linkTitle}
            </Link>
        </div>
    );
}
