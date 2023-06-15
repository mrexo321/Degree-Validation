import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Certif from "@/Components/Certif";

export default function Certificate(props) {
    console.log(props);

    return (
        <div className="bg-gray-300">
            <Certif data={props.value} />
        </div>
    );
}
