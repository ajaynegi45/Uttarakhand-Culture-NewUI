"use client";
import styles from "./page.module.css";
import React, {useEffect, useState} from "react";
import OtpInput from "react-otp-input";
import {toast} from "sonner";
import {useRouter, useSearchParams} from "next/navigation";

/**
 * Manages OTP verification and resending functionalities using state management and API calls.
 * @example
 * anonymousFunction()
 * Renders OTP input form with resend and submit functionalities.
 * @param {none} None - This function operates as a component without external arguments.
 * @returns {JSX.Element} Rendered OTP form for user interaction.
 * @description
 *   - Utilizes React hooks: useState and useEffect for managing component state and lifecycle.
 *   - Handles form submission by verifying OTP against server response and redirects based on callback URL.
 *   - Provides countdown timer for OTP resending functionality.
 *   - Displays feedback using toast notifications based on API call results.
 */
const OtpPage: React.FC = () => {
    const [otp, setOtp] = useState<string>("");
    const [isResending, setIsResending] = useState<boolean>(false);
    const [countdown, setCountdown] = useState<number>(30); // 30 seconds timer
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const handleChange = (otp: string) => {
        setOtp(otp);
    };

    const searchParams = useSearchParams();
    const callback = searchParams.get("callbackUrl");

    /**
     * Handles OTP verification process and redirects based on success or failure.
     * @example
     * sync(event)
     * undefined
     * @param {any} e - The event object from the form submission.
     * @returns {undefined} This function does not return a value.
     * @description
     *   - Prevents default form submission to handle OTP validation client-side.
     *   - Displays an error toast if OTP is not exactly 6 characters.
     *   - Sends OTP to server for verification using a POST request.
     *   - Handles server response, displays success or error messages, and redirects based on verification success.
     */
    const onSubmit = async (e: any) => {
        e.preventDefault();
        if (otp.length != 6) {
            toast.error("Please fill OTP wisely.");
            return;
        }
        try {
            setIsLoading(true);
            const response = await fetch("/api/auth/verify-otp", {
                method: "POST",
                body: JSON.stringify({otp}),
            });

            const data = await response.json();

            if (response.status != 200) throw new Error(data.error);

            toast.success("Email Verified!");

            if (callback) {
                router.push(`${callback}`);
            } else {
                router.push("/");
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    /**
    * Resends the OTP to the user's email if not already resending.
    * @example
    * sync()
    * undefined
    * @param {void} {} - No parameters required.
    * @returns {void} Doesn't return anything.
    * @description
    *   - If `isResending` is true, the function exits early.
    *   - Sets a 30-second countdown after triggering resend.
    *   - Shows success toast upon successful OTP resend.
    *   - Displays error toast if the fetch request fails.
    */
    const handleResendOtp = async () => {
        if (isResending) return;

        setIsResending(true);
        setCountdown(30);
        try {
            setIsLoading(true);
            const response = await fetch("/api/auth/resend-otp", {
                method: "POST",
            });

            const data = await response.json();

            if (response.status != 200) throw new Error(data.message);
            setOtp("");
            toast.success("OTP has been resent to your email.");
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isResending && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (countdown === 0) {
            setIsResending(false); // Allow resend after countdown
        }
    }, [isResending, countdown]);
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Enter OTP</h2>
            <form onSubmit={onSubmit} className={styles.form}>
                <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={6} // Number of OTP digits
                    inputStyle={{
                        width: "40px",
                        height: "50px",
                        margin: "5px",
                        fontSize: "20px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                    }}
                    renderInput={(props) => <input disabled={isLoading} {...props} />}
                    shouldAutoFocus
                    inputType="number"
                />

                <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={isResending || isLoading}
                    className={styles.label}
                >
                    {isResending ? `Resend OTP (${countdown}s)` : "Resend OTP"}
                </button>
                <button type="submit" className={styles.button} disabled={isLoading}>
                    Verify OTP
                </button>
            </form>
        </div>
    );
};

export default OtpPage;
