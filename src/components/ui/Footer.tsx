"use client"; 

import { useState } from 'react';
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(''); 
    setLoading(true); 

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Only send the email
      });

      const data = await res.json();

      if (res.status === 200) {
        setMessage('Thank you for subscribing! A welcome email has been sent.'); 
      } else {
        setMessage(data.error || 'Something went wrong'); 
      }
    } catch (error) {
      console.error(error);
      setMessage('Something went wrong'); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["newsletter-container"]}>
        <div className={styles["newsletter-left-container"]}>
          <h3>Join the newsletter</h3>
          <p>Get the latest insights and updates straight to your inbox.</p>
        </div>
        <div className={styles["newsletter-right-container"]}>
          <div className={styles["newsletter-email-container"]}>
            <form onSubmit={handleSubmit}> 
              <input 
                id="email-input"
                type="email" 
                placeholder="Enter Your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
              <button type="submit" id='subscribe-btn'>
                {loading ? 'Submitting...' : 'Subscribe'}
              </button>
            </form>
            {message && <p>{message}</p>}
          </div>
          <div><p>Your privacy is important. We never share your email.</p></div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className={styles["footer"]}>
        {/* Left part of the footer */}
        <div className={styles["footer-left-container"]}>
          <h2>UTTARAKHAND CULTURE</h2>
          <p>Our aim is to ensure that this invaluable heritage is passed down to future generations.</p>
        </div>

        {/* Right part of the footer */}
        <div className={styles["footer-right-container"]}>
          <div className={styles["footer-right-link-container"]}>
            <p>Socials</p>
            <Link href="https://www.linkedin.com/company/uttarakhandculture?trk=public_post_follow-view-profile">LinkedIn</Link>
            <Link href="https://github.com/Uttarakhand-Culture">Github</Link>
            <Link href="https://ukculture.netlify.app/contact">Contact us</Link>
          </div>
          <div className={styles["footer-right-link-container"]}>
            <p>Contribution</p>
            <Link href="">Issues</Link>
            <Link href="https://github.com/Uttarakhand-Culture/Frontend/blob/main/README.md">About us</Link>
            <Link href="">Contribution</Link>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className={styles["copyright-container"]}>
        <p>© 2024 Uttarakhand Culture. All rights reserved.</p>
      </div>
    </footer>
  );
}
