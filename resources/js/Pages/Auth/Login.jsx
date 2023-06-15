import { useForm } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import FormTitle from "@/Components/FormTitle";
import Input from "@/Components/Input";

export default function Login(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
    });

    console.log("data", props);

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("authenticate"));
    };

    return (
        <div className="min-h-full flex flex-col gap-y-4">
            <FormTitle
                title="Halaman Login"
                linkTitle="Validasi disini"
                link={route("homepage")}
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
                            username
                        </label>
                        <Input
                            required
                            name="username"
                            value={data.username}
                            onChange={(e) =>
                                setData("username", e.target.value)
                            }
                            id="username"
                            type="text"
                            placeholder="Isyoursan_"
                        />
                        {errors.username && <div>{errors.username}</div>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <Input
                            required
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                            placeholder="118993-H4-D/13919-411-2009"
                        />
                        {errors.password && <div> {errors.password} </div>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-600 py-3 px-6 text-slate-50 font-semibold rounded-xl"
                            name="login"
                            type="submit"
                            disabled={processing}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
Login.layout = (page) => <MainLayout children={page} />;
