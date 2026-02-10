import React from 'react';

const ThyroidTreatmentCamp: React.FC = () => {
    const handleWhatsAppShare = () => {
        const message = encodeURIComponent('Check out this upcoming Thyroid Treatment Camp!');
        const url = `https://wa.me/?text=${message}`;
        window.open(url, '_blank');
    };

    return (
        <div>
            <h1>Thyroid Treatment Camp</h1>
            <p>Join us for a special camp focusing on thyroid health. We will provide screenings, consultations, and personalized treatment plans.</p>
            <button onClick={handleWhatsAppShare}>Share on WhatsApp</button>
        </div>
    );
};

export default ThyroidTreatmentCamp;