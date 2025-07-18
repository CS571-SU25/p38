import React, { useEffect, useState } from 'react';

export default function Countdown() {
  const eventDate = new Date('2025-09-01T08:00:00');
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = eventDate - new Date();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>Countdown to Run for Hope:</h3>
      <p>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
    </div>
  );
}
