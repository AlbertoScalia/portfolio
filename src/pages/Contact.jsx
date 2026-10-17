import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAIL = ''; // inserisci la tua email: se vuota non viene mostrata
const LOCATION = 'Acireale, CT, Italy';

// Se definisci le variabili VITE_EMAILJS_* in .env vengono usate quelle; altrimenti restano i valori attuali
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_7lo9nij';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_79tdtxs';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'UFPDLKi81rCshxD1I';

const empty = { name: '', email: '', subject: '', message: '', website: '' };

function Field({ label, as: Tag = 'input', ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="text-sm text-white/80">{label}</label>
      <Tag
        {...props}
        required
        className="border-b border-white/30 bg-transparent py-3 text-lg text-white transition-colors placeholder:text-white/45 focus:border-[#EC3814] focus:shadow-[0_1px_0_0_#EC3814] focus:outline-none"
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status !== 'sending') setStatus('idle');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.website) return setStatus('success'); // honeypot: i bot compilano il campo nascosto
    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: form.name, email: form.email, subject: form.subject, message: form.message, current_time: new Date().toLocaleString('en-US') },
        PUBLIC_KEY
      );
      setForm(empty);
      setStatus('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <main id="main" className="mx-auto min-h-screen max-w-[1600px] px-6 pb-24 pt-40 lg:px-12">
      <header className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-12">
        <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:col-span-7 md:text-9xl">Let's talk</h1>
        <p className="text-lg leading-relaxed text-white/80 md:col-span-4 md:col-start-9 md:self-end">
          I'm open to freelance projects and full-time roles, especially where design and strategy overlap. Use the form
          {EMAIL ? ' or write to me directly' : ''}.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
        <aside className="lg:col-span-4">
          <dl className="divide-y divide-white/15 border-y border-white/15">
            {EMAIL && (
              <div className="py-5">
                <dt className="mb-1 text-sm text-white/60">Email</dt>
                <dd className="text-lg"><a href={`mailto:${EMAIL}`} className="underline decoration-[#EC3814] underline-offset-4 hover:text-[#EC3814]">{EMAIL}</a></dd>
              </div>
            )}
            <div className="py-5">
              <dt className="mb-1 text-sm text-white/60">Location</dt>
              <dd className="text-lg">{LOCATION}</dd>
            </div>
            <div className="py-5">
              <dt className="mb-1 text-sm text-white/60">Phone</dt>
              <dd className="text-lg">Available upon request</dd>
            </div>
          </dl>
        </aside>

        <form onSubmit={onSubmit} className="flex flex-col gap-10 lg:col-span-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <Field label="Name" id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={onChange} placeholder="Your name or company" />
            <Field label="Email" id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} placeholder="Where can I reply?" />
          </div>
          <Field label="Subject" id="subject" name="subject" type="text" value={form.subject} onChange={onChange} placeholder="What do you want to talk about?" />
          <Field label="Message" id="message" name="message" as="textarea" rows={5} value={form.message} onChange={onChange} placeholder="Tell me about your project" />

          {/* Honeypot anti-spam: invisibile a chi usa il sito */}
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={onChange} /></label>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-fit items-center gap-3 bg-[#EC3814] px-8 py-4 text-lg font-medium text-black transition-colors hover:bg-white disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p role="status" aria-live="polite" className={status === 'error' ? 'text-red-300' : 'text-white/85'}>
              {status === 'success' && 'Message sent. Thank you, I will get back to you.'}
              {status === 'error' && `Your message wasn't sent. Check your connection and try again${EMAIL ? `, or write to ${EMAIL}` : ''}.`}
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}