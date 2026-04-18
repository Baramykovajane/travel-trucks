'use client';

import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CamperForm, Engine, FilterParams, Transmission } from '@/types/camper';
import styles from './Filters.module.css';
import { IoClose } from 'react-icons/io5';

/* =========================
   OPTIONS
========================= */

const BODY_TYPES: { value: CamperForm; label: string }[] = [
  { value: 'alcove', label: 'Alcove' },
  { value: 'panel_van', label: 'Panel Van' },
  { value: 'integrated', label: 'Integrated' },
  { value: 'semi_integrated', label: 'Semi Integrated' },
];

const ENGINE_TYPES: { value: Engine; label: string }[] = [
  { value: 'diesel', label: 'Diesel' },
  { value: 'petrol', label: 'Petrol' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'electric', label: 'Electric' },
];

const TRANSMISSION_TYPES: { value: Transmission; label: string }[] = [
  { value: 'automatic', label: 'Automatic' },
  { value: 'manual', label: 'Manual' },
];

/* =========================
   PROPS
========================= */

interface FiltersProps {
  onFilter: (filters: FilterParams) => void;
}

/* =========================
   COMPONENT
========================= */

export default function Filters({ onFilter }: FiltersProps) {
  const [location, setLocation] = useState('');
  const [form, setForm] = useState<CamperForm | ''>('');
  const [engine, setEngine] = useState<Engine | ''>('');
  const [transmission, setTransmission] = useState<Transmission | ''>('');

  /* =========================
     TOGGLE (одиночний вибір)
  ========================= */

  const toggleForm = (value: CamperForm) => {
    setForm((prev) => (prev === value ? '' : value));
  };

  const toggleEngine = (value: Engine) => {
    setEngine((prev) => (prev === value ? '' : value));
  };

  const toggleTransmission = (value: Transmission) => {
    setTransmission((prev) => (prev === value ? '' : value));
  };

  /* =========================
     ACTIONS
  ========================= */

  const handleSearch = () => {
  const formattedLocation = location
    ? `Ukraine, ${location}`
    : undefined;

  onFilter({
    location: formattedLocation,
    form: form || undefined,
    engine: engine || undefined,
    transmission: transmission || undefined,
  });
};

  const handleClear = () => {
    setForm('');
    setEngine('');
    setTransmission('');
    setLocation('');
    onFilter({});
  };

  /* =========================
     UI
  ========================= */

  return (
    <aside className={styles.filters}>
      <div className={styles.section}>
        <label className={styles.label}>Location</label>
        <div className={styles.inputWrapper}>
          <FaMapMarkerAlt className={styles.inputIcon} />
<input
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
  className={styles.input}
  placeholder="Kyiv"
/>
        </div>
      </div>

      <div className={styles.divider} />
      <p className={styles.filterTitle}>Filters</p>

      <div className={styles.section}>
        <p className={styles.groupLabel}>Vehicle type</p>
        <div className={styles.options}>
          {BODY_TYPES.map((item) => (
            <button
              key={item.value}
              className={`${styles.option} ${form === item.value ? styles.active : ''}`}
              onClick={() => toggleForm(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.groupLabel}>Engine</p>
        <div className={styles.options}>
          {ENGINE_TYPES.map((item) => (
            <button
              key={item.value}
              className={`${styles.option} ${engine === item.value ? styles.active : ''}`}
              onClick={() => toggleEngine(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.groupLabel}>Transmission</p>
        <div className={styles.options}>
          {TRANSMISSION_TYPES.map((item) => (
            <button
              key={item.value}
              className={`${styles.option} ${transmission === item.value ? styles.active : ''}`}
              onClick={() => toggleTransmission(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
        <button className={styles.clearButton} onClick={handleClear}>
  <IoClose /> Clear
</button>
      </div>
    </aside>
  );
}