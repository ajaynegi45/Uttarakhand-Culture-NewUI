"use client";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import styles from "./profile.module.css";
import Image from "next/image";

/**
* Renders the user's profile page based on their authentication status.
* @example
* Profile()
* Returns a user profile component or redirects to login.
* @param {Object} useSession - Object containing session data and status.
* @param {Object} useRouter - Router instance used for navigation.
* @returns {JSX.Element | null} JSX Element representing user profile or null if redirecting.
* @description
*   - Handles redirection to the login page if the user is unauthenticated.
*   - Displays a loading message while authentication status is being determined.
*   - Renders the user's profile information including avatar, name, and email.
*/
export default function Profile() {
    const {data: session, status} = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "unauthenticated") {
        router.push("/"); // Redirect to login if unauthenticated
        return null;
    }

    return (
        <div className={styles["profile-container"]}>
            <h1 className={styles["profile-heading"]}>User Profile</h1>
            <div className={styles["profile-details"]}>
                <Image
                    src={session?.user?.image || "/default-avatar.png"}
                    alt="User Avatar"
                    className={styles["profile-avatar"]}
                    width={250}
                    height={250}
                />
                <p>
                    <strong>Name:</strong> {session?.user?.name || "N/A"}
                </p>
                <p>
                    <strong>Email:</strong> {session?.user?.email || "N/A"}
                </p>
            </div>
            <button
                onClick={() => signOut({redirect: false})}
                className={styles["logout-button"]}
            >
                Logout
            </button>
        </div>
    );
}
