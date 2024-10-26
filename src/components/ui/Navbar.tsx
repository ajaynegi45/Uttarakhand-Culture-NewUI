"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const session = useSession();
    const router = useRouter();

    const handleAvatarClick = () => {
        router.push("/profile");
    };
    return (
        <>
            <div className={styles["navbar-container"]}>
                <nav className={styles["navbar"]}>
                    <Link href="/" className={styles["heading"]}>
                        <h3 className={styles["title"]}>UTTARAKHAND CULTURE</h3>
                    </Link>
                    {session.status == "authenticated" ? (
                        <div
                            className={styles["avatar-container"]}
                            onClick={handleAvatarClick}
                            style={{cursor: "pointer"}}
                        >
                            <Image src={session.data?.user?.image || "/default-avatar.png"}
                                   alt="User Avatar"
                                   className={styles["avatar"]}
                                   width={250} height={250}/>

                        </div>
                    ) : (
                        <Link href="/auth" className={styles.link}>
                            LOGIN
                        </Link>
                    )}
                </nav>
            </div>
            <div className={styles["fade-navbar-effect"]}></div>
            <div className={styles["empty-navbar"]}></div>
        </>
    );
}
