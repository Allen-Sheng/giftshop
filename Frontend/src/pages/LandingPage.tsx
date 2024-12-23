import React, { useState, useEffect } from "react";

export default function LandingPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (
        <div>
        <h1>Landing Page</h1>
        <p>{data}</p>
        </div>
    );
}