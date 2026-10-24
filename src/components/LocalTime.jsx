import { useEffect, useState } from 'react';

// Ora locale di Acireale, aggiornata ogni 30 secondi (non annunciata dagli screen reader)
export default function LocalTime({ className }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  const time = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Rome' }).format(now);
  return (
    <time dateTime={now.toISOString()} className={`tabular-nums ${className ?? ''}`}>
      {time}
    </time>
  );
}
