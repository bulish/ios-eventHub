// app/page.js nebo app/page.tsx

'use client'

import { useSearchParams } from 'next/navigation';

export default function Home() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || "Unknown User";
    const eventName = searchParams.get('eventName') || "Unknown Event";
    const date = searchParams.get('date') || "To Be Announced";

    return (
        <div className="container">
            <h1 className="title">Event<span>Hub</span></h1>
            <h2 className="subtitle">You're Invited!</h2>
            
            <div className="infoBox">
                <p className="label">👤 Name:</p>
                <p className="value">{name || "Unknown User"}</p>
            </div>

            <div className="infoBox">
                <p className="label">🎉 Event:</p>
                <p className="value">{eventName || "Unknown Event"}</p>
            </div>

            <div className="infoBox">
                <p className="label">📅{" "}Date:</p>
                <p className="value">{date || "To Be Announced"}</p>
            </div>

        </div>
    );
}
