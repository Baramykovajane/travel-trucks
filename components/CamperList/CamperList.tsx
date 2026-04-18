'use client';

import { useState } from 'react';
import { useCampers } from '@/lib/hooks/useCampers';
import { FilterParams } from '@/types/camper';
import CamperCard from '@/components/CamperCard/CamperCard';
import Filters from '@/components/Filters/Filters';
import styles from './CamperList.module.css';

export default function CamperList() {
  const [filters, setFilters] = useState<FilterParams>({});

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useCampers(filters);

  const campers = data?.pages
  .flatMap((page) => page.campers)
  .sort((a, b) => b.rating - a.rating) ?? [];

  const handleFilter = (newFilters: FilterParams) => {
    setFilters(newFilters);
  };

  return (
    <div className={styles.wrapper}>
      <Filters onFilter={handleFilter} />

      <div className={styles.content}>
        {isLoading && <p className={styles.message}>Loading...</p>}
        {isError && <p className={styles.message}>Something went wrong. Try again.</p>}

        {!isLoading && campers.length === 0 && (
          <p className={styles.message}>No campers found.</p>
        )}

        <ul className={styles.list}>
          {campers.map((camper) => (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>

       {hasNextPage && (
  <div className={styles.loadMoreWrapper}>
    <button
      className={styles.loadMore}
      onClick={() => fetchNextPage()}
      disabled={isFetchingNextPage}
    >
      {isFetchingNextPage ? 'Loading...' : 'Load more'}
    </button>
  </div>
)}
      </div>
    </div>
  );
}