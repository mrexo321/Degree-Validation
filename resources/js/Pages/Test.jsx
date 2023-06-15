import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetcertificate }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        npm: "",
        certificate: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("certificate");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("certificate.validate"));
    };

    return (
        <GuestLayout>
            <Head title="Validasi Ijazah" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="certificate" value="certificate" />

                    <TextInput
                        id="certificate"
                        type="certificate"
                        name="certificate"
                        value={data.certificate}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("certificate", e.target.value)}
                    />

                    <InputError message={errors.certificate} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="npm" value="npm" />

                    <TextInput
                        id="npm"
                        type="npm"
                        name="npm"
                        value={data.npm}
                        className="mt-1 block w-full"
                        autoComplete="npm"
                        isFocused={true}
                        onChange={(e) => setData("npm", e.target.value)}
                    />

                    <InputError message={errors.npm} className="mt-2" />
                </div>
            </form>
        </GuestLayout>
    );
}
