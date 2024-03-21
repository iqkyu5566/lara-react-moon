import { useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        // console.log(data);
        post(route("register"));
    };

    return (
        <>
            <Head title="Sign Up " />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        className="text-base block mb-2 text-white"
                                        value={"Fullname"}
                                    />
                                    <TextInput
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        autoComplete="name"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full "
                                        placeholder="Your fullname..."
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        className="text-base block mb-2 text-white"
                                        value={"Email"}
                                    />

                                    <TextInput
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full "
                                        placeholder="Your Email Address"
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        className="text-base block mb-2 text-white"
                                        value={"Password"}
                                    />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full "
                                        placeholder="Your Password"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        className="text-base block mb-2 text-white"
                                        value="Confirm Password"
                                    />
                                    <TextInput
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full "
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Your Password"
                                        required
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <PrimaryButton
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-2xl bg-alerange py-[13px] text-center"
                                >
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </PrimaryButton>

                                <Link href={route("login")}>
                                    <PrimaryButton className="rounded-2xl bg-alerange py-[13px] text-center">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
