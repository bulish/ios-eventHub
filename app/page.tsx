// app/page.js nebo app/page.tsx

'use client'

export default function Home({ searchParams }: any) {
    const { name, eventName, date } = searchParams;

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
