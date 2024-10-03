"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./page.module.css";
import toast from "react-hot-toast";
import { loginSchema, signupSchema } from "@/lib/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(isSignup ? signupSchema : loginSchema),
  });

  const onSubmit = async (data: any) => {
    if (isSignup) {
      try {
        setIsLoading(true);
        const res = await fetch("/api/auth/register", {
          method: "POST",
          body: JSON.stringify(data),
        });

        const ms = await res.json();

        if (res.status != 200) throw new Error(ms.error);

        toast.success("User registered, Verify Email.");

        setIsSignup(false);
      } catch (error: any) {
        console.log(error);
        toast.error(error.message || "Failed to register. Try again");
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        setIsLoading(true);
        const res = await signIn("credentials", {
          ...data,
          redirect: false,
        });

        if (res?.error) throw new Error("Invalid credentials");
        toast.success("Login success.");
        router.push("/explore");
      } catch (error) {
        toast.error("Check your credentials and Try again");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isSignup && (
          <>
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

            <input
              type="password"
              placeholder="Password"
              disabled={isLoading}
              {...register("password")}
              className={styles.input}
            />
            {errors.password && (
              <p className={styles.errors}>
                {errors.password.message?.toString()}
              </p>
            )}

            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className={styles.input}
              disabled={isLoading}
            />
            {errors.confirmPassword && (
              <p className={styles.errors}>
                {errors.confirmPassword.message?.toString()}
              </p>
            )}

            <div className={styles.alerts}>
              <input
                disabled={isLoading}
                type="checkbox"
                {...register("alerts")}
              />
              <label className={styles.label}>
                Get Upcoming Uttarakhand Festival & Fair Alerts!
              </label>
            </div>
          </>
        )}
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

            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className={styles.input}
              disabled={isLoading}
            />
            {errors.password && (
              <p className={styles.errors}>
                {errors.password.message?.toString()}
              </p>
            )}
          </>
        )}
        <button className={styles.button} disabled={isLoading} type="submit">
          {isLoading ? "Working..." : <>{isSignup ? "Sign Up" : "Login"}</>}
        </button>
      </form>
      <p
        onClick={() => {
          if (!isLoading) {
            setIsSignup(!isSignup);
          }
        }}
        className={styles.toggle}
      >
        {isSignup
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
}
