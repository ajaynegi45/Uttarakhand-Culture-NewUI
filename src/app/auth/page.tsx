"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./page.module.css";
import { toast } from "sonner";
import { loginSchema, signupSchema } from "@/lib/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import cross from "../../../public/cross.png";
import tick from "../../../public/tick.png"; 

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [password, setPassword] = useState("");
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const callback = searchParams.get("callbackUrl");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(isSignup ? signupSchema : loginSchema),
  });

  useEffect(() => {
    reset();
  }, [isSignup, reset]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    setValidations({
      length: newPassword.length >= 8,
      uppercase: /[A-Z]/.test(newPassword),
      lowercase: /[a-z]/.test(newPassword),
      number: /\d/.test(newPassword),
      special: /[^A-Za-z0-9]/.test(newPassword),
    });
  };

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
          success: () => "User registered, Verify Email.",
          error: (err) => `${err}`,
        });
      } catch (error: any) {
        console.log(error);
        toast.error(error.message || "Failed to register. Try again");
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        setIsLoading(true);
        const handler = new Promise((resolve, reject) => {
          signIn("credentials", {
            ...data,
            redirect: false,
          })
            .then((res) => {
              if (res?.error) {
                throw Error("Invalid credentials");
              } else {
                if (callback) {
                  router.push(callback);
                  resolve("");
                } else {
                  router.push("/");
                  resolve("");
                }
              }
            })
            .catch(reject);
        });

        toast.promise(handler, {
          loading: "Loading...",
          success: () => "Login success.",
          error: (err) => `${err}`,
        });
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

            <div className={styles.passwordField}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                disabled={isLoading}
                {...register("password")}
                value={password}
                onChange={handlePasswordChange}
                className={styles.input}
              />
              <button
                type="button"
                className={styles.showHideButton}
                onClick={togglePasswordVisibility}
                disabled={isLoading}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className={styles["password-check"]}>
              <div className={styles["check-length"]}>
                <img
                  src={validations.length ? tick.src : cross.src}
                  alt="Validation"
                />{" "}
                At least 8 characters Long
              </div>
              <div className={styles["check-uppercase"]}>
                <img
                  src={validations.uppercase ? tick.src : cross.src}
                  alt="Validation"
                />{" "}
                At least 1 uppercase letter (A-Z)
              </div>
              <div className={styles["check-lowercase"]}>
                <img
                  src={validations.lowercase ? tick.src : cross.src}
                  alt="Validation"
                />{" "}
                At least 1 lowercase letter (a-z)
              </div>
              <div className={styles["check-number"]}>
                <img
                  src={validations.number ? tick.src : cross.src}
                  alt="Validation"
                />{" "}
                At least 1 number (0-9)
              </div>
              <div className={styles["check-special"]}>
                <img
                  src={validations.special ? tick.src : cross.src}
                  alt="Validation"
                />{" "}
                At least 1 special character (@-$)
              </div>
            </div>

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

            <div className={styles.passwordField}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className={styles.input}
                disabled={isLoading}
              />
              <button
                type="button"
                className={styles.showHideButton}
                onClick={togglePasswordVisibility}
                disabled={isLoading}
              >
                {showPassword ? "Hide" : "Show"}
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
