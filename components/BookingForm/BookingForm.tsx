'use client';

import { useState } from 'react';
import { useBooking } from '@/lib/hooks/useBooking';
import styles from './BookingForm.module.css';

interface BookingFormProps {
  camperId: string;
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const { mutate, isPending, isSuccess, isError } = useBooking(camperId);

  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ name: form.name, email: form.email });
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Book your camper van now</h3>
      <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="name"
          type="text"
          placeholder="Name*"
          required
          value={form.name}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="email"
          type="email"
          placeholder="Email*"
          required
          value={form.email}
          onChange={handleChange}
          className={styles.input}
        />

        <button type="submit" className={styles.button} disabled={isPending}>
          {isPending ? 'Sending...' : 'Send'}
        </button>

        {isSuccess && (
          <p className={styles.success}>
            ✅ Booking successful! We will contact you soon.
          </p>
        )}
        {isError && (
          <p className={styles.error}>
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}