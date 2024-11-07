'use client'

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export function Home() {
    // Použití useSearchParams pro načtení parametrů z URL
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || "Unknown User";
    const eventName = searchParams.get('eventName') || "Unknown Event";
    const date = searchParams.get('date') || "To Be Announced";

    return (
        <div className="container">
            <h1 className="title">Event<span>Hub</span></h1>
            <h2 className="subtitle">You&apos;re Invited!</h2>
            
            <div className="infoBox">
                <p className="label">👤 Name:</p>
                <p className="value">{name}</p>
            </div>

            <div className="infoBox">
                <p className="label">🎉 Event:</p>
                <p className="value">{eventName}</p>
            </div>

            <div className="infoBox">
                <p className="label">📅{" "}Date:</p>
                <p className="value">{date}</p>
            </div>
        </div>
    );
}

export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
