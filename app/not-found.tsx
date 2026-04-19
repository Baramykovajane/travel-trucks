import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 – Page Not Found | TravelTrucks',
  description: 'Sorry, the page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 72px)',
        padding: '40px 64px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '120px',
          fontWeight: 700,
          color: '#607D75',
          lineHeight: 1,
          marginBottom: '16px',
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: '32px',
          fontWeight: 600,
          color: '#101828',
          marginBottom: '16px',
        }}
      >
        Page not found
      </h2>
      <p
        style={{
          fontSize: '18px',
          color: '#6C7278',
          marginBottom: '40px',
          maxWidth: '480px',
          lineHeight: 1.6,
        }}
      >
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          padding: '16px 40px',
          background: '#607D75',
          color: '#ffffff',
          borderRadius: '200px',
          fontSize: '16px',
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'background-color 0.2s',
        }}
      >
        Go to Home
      </Link>
    </div>
  );
}