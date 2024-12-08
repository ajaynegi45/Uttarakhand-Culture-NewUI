"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './ContactForm.module.css';
import {toast} from "sonner";

interface FormData {
    name: string;
    email: string;
    reason: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        reason: '',
        message: '',
    });

    const [status, setStatus] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        //
        // try {
        //     const res = await fetch('/api/contact', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(formData),
        //     });
        //
        //     if (res.ok) {
        //         toast.success("Thank you for contacting us! Your message has been sent.");
        //         setFormData({ name: '', email: '', reason: '', message: '' });
        //     } else {
        //         toast.error("There was a problem sending the message. Please try again");
        //     }
        // } catch (error) {
        //     toast.error("An unexpected error occurred. Please try again.");
        // }


    };
    toast.info("Currently Working on this form!");

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Contact Form</h1>
                <p className={styles.subtitle}>Please complete the form below to get in touch with us.</p>
                <p className={styles.lastsubtitle} >We’re here to help! ❤️</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="reason" className={styles.label}>
                            Reason
                        </label>
                        <input
                            type="text"
                            id="reason"
                            name="reason"
                            placeholder="Enter the reason for contacting us (Subject)"
                            className={styles.input}
                            value={formData.reason}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="message" className={styles.label}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Provide more details about your inquiry or request"
                            className={styles.textarea}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className={styles.button}>Send</button>
                </form>

                {status && <p className={styles.status}>{status}</p>}
            </div>
        </div>
    );
}
