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


 const onSubmit = async (data: any) => {
    if (isSignup) {
      // ----- SIGNUP FLOW -----
      try {
        setIsLoading(true);
        const toastId = toast.loading("Creating account...");

        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = await res.json();
        toast.dismiss(toastId);

        if (!res.ok) {
          toast.error(result.error || "Signup failed. Try again.");
          return;
        }

        toast.success("Signup successful! Please verify your email via OTP.");
        if (result.redirectTo) {
            router.push(result.redirectTo);
        } else {
             router.push(`/auth/verify?email=${data.email}`);
        }
        // window.location.href = `/auth/verify?email=${data.email}`;
      } catch (err: any) {
        toast.dismiss();
        toast.error(err.message || "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      // ----- LOGIN FLOW -----
      try {
        setIsLoading(true);
        const toastId = toast.loading("Signing in...");

        const res = (await signIn("credentials", {
          ...data,
          redirect: false,
        })) as unknown as SignInResponse;

        toast.dismiss(toastId);

       if (res?.error) {
        if (res.error.includes("unverified")) {
            toast.error("You were unverified earlier. Please create an account again with a verified email.");
        } else {
            toast.error(res.error || "Invalid credentials. Please try again.");
        }
         return;
        }


        toast.success("Login successful!");
        router.push(callback ?? "/");
      } catch (err: any) {
        toast.dismiss();
        toast.error(err.message || "Login failed. Please try again.");
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
