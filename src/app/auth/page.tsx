"use client";

import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import styles from "./page.module.css";
import {toast} from "sonner";
import {loginSchema, signupSchema} from "@/lib/zod";
import {signIn} from "next-auth/react";
import {useRouter, useSearchParams} from "next/navigation";
import eye from "../../../public/eye.png";
import hide from "../../../public/eye-hide.png";
import Image from 'next/image';
import type { SignInResponse } from "next-auth/react";
import GoogleSignIn from './GoogleSignIn';
import {never} from "zod"; // import GoogleSignIn component

/**
 * Handles user authentication by providing a form for sign-up and login.
 * @example
 * Auth()
 * React component that renders authentication form
 * @param {none} No parameters are taken directly by this component.
 * @returns {JSX.Element} A section containing the authentication form.
 * @description
 *   - Switches between login and signup modes using state management.
 *   - Uses React Hook Form, Zod for form validation, and Next.js routing.
 *   - Utilizes `fetch` for API calls and `signIn` for handling sign-in process.
 *   - Displays errors and success messages with toast notifications.
 */
export default function Auth() {
    const [isSignup, setIsSignup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [confirmHidden, setConfirmHidden] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams();
    const callback = searchParams.get("callbackUrl");

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: zodResolver(isSignup ? signupSchema : loginSchema),
    });

    useEffect(() => {
        reset();
    }, [isSignup, reset]);

    /**
    * Handles user registration or login based on the signup flag.
    * @example
    * sync({ email: "user@example.com", password: "password123" })
    * Success or error message related to registration or login process.
    * @param {object} data - User details needed for sign up or login, including email and password.
    * @returns {Promise<void>} Resolves successfully with a toast message or throws an error toast message.
    * @description
    *   - Utilizes toast to handle asynchronous operations with loading, success, and error messages.
    *   - Redirects the user upon successful registration to email verification page.
    *   - Redirects the user to a callback route or home upon successful login.
    */
    const onSubmit = async (data: any) => {
        if (isSignup) {
            try {
                setIsLoading(true);

                const handler = new Promise((resolve, reject) => {
                    fetch("/api/auth/register", {
                        method: "POST",
                        body: JSON.stringify(data),
                    })
                        .then((res) => {
                            res
                                .json()
                                .then((ms) => {
                                    if (res.status !== 200) {
                                        reject(new Error(ms.error));
                                    } else {
                                        signIn("credentials", {
                                            loginIdentifier: data.email,
                                            password: data.password,
                                            redirect: false,
                                        })
                                            .then((m) => {
                                                if (m?.error) throw Error();
                                                router.push("/auth/verify");
                                                resolve("");
                                            })
                                            .catch(reject);
                                    }
                                })
                                .catch(reject);
                        })
                        .catch(reject);
                });

                toast.promise(handler, {
                    loading: "Loading...",
                    success: () => {
                        return "User registered, Verify Email.";
                    },
                    error: (err) => `${err}`,
                });
            } catch (error: any) {
                toast.error(error.message || "Failed to register. Try again");
            } finally {
                setIsLoading(false);
            }
        } else {
            try {
                setIsLoading(true);

                await toast.promise(
                    (async () => {
                        const res = await signIn("credentials", {
                            ...data,
                            redirect: false,
                        }) as unknown as SignInResponse;

                        if (res?.error) {
                            throw new Error("Invalid credentials");
                        }

                        router.push(callback ?? "/");
                    })(),
                    {
                        loading: "Loading...",
                        success: () => "Login success.",
                        error: (err) => `${err.message || err}`,
                    }
                );



                // const handler = new Promise((resolve, reject) => {
                //     setIsLoading(true);
                //
                //     signIn("credentials", {
                //         ...data,
                //         redirect: false,
                //     })
                //         // .then((res) => {
                //         .then((res: SignInResponse | undefined) => {
                //             if (res?.error) {
                //                 throw Error("Invalid credentials");
                //             }
                //
                //             else {
                //                 if (callback) {
                //                     router.push(callback);
                //                     resolve("");
                //                 } else {
                //                     router.push("/");
                //                     resolve("");
                //                 }
                //             }
                //         })
                //         .catch(reject);
                // });
                //
                //
                //
                // await toast.promise(handler, {
                //     loading: "Loading...",
                //     success: () => {
                //         return "Login success.";
                //     },
                //     error: (err) => `${err}`,
                // });

            } catch (error) {
                toast.error("Check your credentials and Try again");
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <section className={styles.authenticationContainer}>
        <div className={styles.container}>
            <h2 className={styles.title}>{isSignup ? "Sign Up" : "Login"}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                {isSignup && (
                    <>
                        {/* Signup fields */}
                        <input
                            type="text"
                            disabled={isLoading}
                            placeholder="Username"
                            {...register("username")}
                            className={styles.input}
                        />
                        {errors.username && (
                            <p className={styles.errors}>
                                {errors.username.message?.toString()}
                            </p>
                        )}

                        <input
                            type="text"
                            disabled={isLoading}
                            placeholder="Name"
                            {...register("name")}
                            className={styles.input}
                        />
                        {errors.name && (
                            <p className={styles.errors}>{errors.name.message?.toString()}</p>
                        )}

                        <input
                            type="email"
                            disabled={isLoading}
                            placeholder="Email"
                            {...register("email")}
                            className={styles.input}
                        />
                        {errors.email && (
                            <p className={styles.errors}>
                                {errors.email.message?.toString()}
                            </p>
                        )}
                        <div className={styles.passwordContainer}>
                            <input
                                type={hidden ? "password" : "text"}
                                placeholder="Password"
                                disabled={isLoading}
                                {...register("password")}
                                className={styles.input}
                            />
                            <button className={styles.passwordToggle} onClick={(e) => {
                                e.preventDefault();
                                setHidden(!hidden);
                            }}>
                                {hidden ? <Image className={styles.image} src={hide} alt="My Image"/> :
                                    <Image className={styles.image} src={eye} alt="My Image"/>}
                            </button>
                        </div>
                        {errors.password && (
                            <p className={styles.errors}>
                                {errors.password.message?.toString()}
                            </p>
                        )}

                        <div className={styles.passwordContainer}>
                            <input
                                type={confirmHidden ? "password" : "text"}
                                placeholder="Confirm Password"
                                {...register("confirmPassword")}
                                className={styles.input}
                                disabled={isLoading}
                            />
                            <button className={styles.passwordToggle} onClick={(e) => {
                                e.preventDefault();
                                setConfirmHidden(!confirmHidden);
                            }}>
                                {confirmHidden ? <Image className={styles.image} src={hide} alt="My Image"/> :
                                    <Image className={styles.image} src={eye} alt="My Image"/>}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className={styles.errors}>
                                {errors.confirmPassword.message?.toString()}
                            </p>
                        )}

                        <div className={styles.alerts}>
                            <input
                                id="alerts-checkbox"
                                disabled={isLoading}
                                type="checkbox"
                                {...register("alerts")}
                            />
                            <label className={styles.label} htmlFor="alerts-checkbox">
                                Get Upcoming Uttarakhand Festival & Fair Alerts!
                            </label>
                        </div>
                    </>
                )}

                {/* Login fields */}
                {!isSignup && (
                    <>
                        <input
                            type="text"
                            placeholder="Email or Username"
                            {...register("loginIdentifier")}
                            className={styles.input}
                            disabled={isLoading}
                        />
                        {errors.loginIdentifier && (
                            <p className={styles.errors}>
                                {errors.loginIdentifier.message?.toString()}
                            </p>
                        )}
                        <div className={styles.passwordContainer}>
                            <input
                                type={hidden ? "password" : "text"}
                                placeholder="Password"
                                {...register("password")}
                                className={styles.input}
                                disabled={isLoading}
                            />
                            <button className={styles.passwordToggle} onClick={(e) => {
                                e.preventDefault();
                                setHidden(!hidden);
                            }}>
                                {hidden ? <Image className={styles.image} src={hide} alt="My Image"/> :
                                    <Image className={styles.image} src={eye} alt="My Image"/>}
                            </button>
                        </div>
                        {errors.password && (
                            <p className={styles.errors}>
                                {errors.password.message?.toString()}
                            </p>
                        )}
                    </>
                )}

                <button className={styles.button} disabled={isLoading} type="submit">
                    {isSignup ? "Sign Up" : "Login"}
                </button>
            </form>

            {/* Google Sign-In */}
            {/*<GoogleSignIn/>*/}

            <p
                onClick={() => {
                    if (!isLoading) {
                        setIsSignup(!isSignup);
                    }
                    setHidden(true);
                }}
                className={styles.toggle}
            >
                {isSignup
                    ? "Already have an account? Login"
                    : "Don't have an account? Sign Up"}
            </p>
        </div>
        </section>
    );
}
