"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./profile.module.css";
import Link from "next/link";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/auth"); // Redirect to login if unauthenticated
    return null;
  }

  return (
    <div className={styles["profile-container"]}>
      <h1 className={styles["profile-heading"]}>User Profile</h1>
      <div className={styles["profile-details"]}>
        <img
          src={session?.user?.image || "/default-avatar.png"}
          alt="User Avatar"
          className={styles["profile-avatar"]}
        />
        <p>
          <strong>Name:</strong> {session?.user?.name || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {session?.user?.email || "N/A"}
        </p>
      </div>
      <Link href={"/auth/logout"} className={styles["logout-button"]}>
        Logout
      </Link>
    </div>
  );
}
