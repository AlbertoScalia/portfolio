import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowUpRight, CheckCircle } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import Magnetic from '../components/Magnetic';
import RollText from '../components/RollText';
import LocalTime from '../components/LocalTime';
import usePageTitle from '../hooks/usePageTitle';

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
      <label htmlFor={props.id} className="text-sm text-[#364b9b]/80">{label}</label>
      <Tag
        {...props}
        required
        className="border-b border-[#364b9b]/70 bg-transparent py-3 text-lg text-[#364b9b] transition-colors placeholder:text-[#364b9b]/80 hover:border-[#364b9b] focus:border-[#EC3814] focus:shadow-[0_1px_0_0_#EC3814] focus:outline-none"
      />
    </div>
  );
}

export default function Contact() {
  usePageTitle('Contact — Alberto Scalia');
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
    <main id="main" className="relative mx-auto min-h-screen max-w-[1600px] px-6 pb-24 pt-40 text-[#364b9b] lg:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute -right-[14%] top-24 aspect-square w-[42%] rounded-full border border-[#EC3814]/25" />

      <header className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
        <Reveal as="h1" className="text-6xl leading-[0.95] md:col-span-7 md:text-9xl">
          <span className="font-semibold text-[#364b9b]">Let's </span>
          <span className="font-light text-[#EC3814]">talk</span>
        </Reveal>
        <Reveal as="p" delay={0.1} className="text-lg leading-relaxed text-[#364b9b]/80 md:col-span-4 md:col-start-9">
          I'm open to freelance projects and full-time roles, especially where design and strategy overlap. Use the form
          {EMAIL ? ' or write to me directly' : ''}.
        </Reveal>
      </header>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
        <Reveal as="aside" delay={0.15} className="bg-[#F3F5FB] p-6 md:p-8 lg:col-span-4 lg:self-start">
          <dl className="divide-y divide-[#364b9b]/15">
            {EMAIL && (
              <div className="py-5">
                <dt className="mb-1 text-sm text-[#364b9b]/90">Email</dt>
                <dd className="text-lg"><a href={`mailto:${EMAIL}`} className="underline decoration-[#EC3814] underline-offset-4 hover:text-[#EC3814]">{EMAIL}</a></dd>
              </div>
            )}
            <div className="py-5">
              <dt className="mb-1 text-sm text-[#364b9b]/90">Location</dt>
              <dd className="text-lg">{LOCATION}</dd>
            </div>
            <div className="py-5">
              <dt className="mb-1 text-sm text-[#364b9b]/90">Local time</dt>
              <dd className="text-lg"><LocalTime /></dd>
            </div>
            <div className="py-5">
              <dt className="mb-1 text-sm text-[#364b9b]/90">Phone</dt>
              <dd className="text-lg">Available upon request</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal as="form" aria-label="Contact form" delay={0.25} onSubmit={onSubmit} className="flex flex-col gap-10 lg:col-span-8">
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
              aria-busy={status === 'sending'}
              className="group inline-flex items-center gap-4 text-lg font-medium text-[#364b9b] disabled:opacity-60"
            >
              <span className="transition-colors duration-300 group-hover:text-[#EC3814]">
                <RollText>{status === 'sending' ? 'Sending…' : 'Send message'}</RollText>
              </span>
              <Magnetic>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#364b9b] transition-colors duration-300 group-hover:border-[#EC3814] group-hover:bg-[#EC3814] group-hover:text-white">
                  <ArrowUpRight size={20} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </Magnetic>
            </button>
            <p role="status" aria-live="polite" className="flex items-center gap-2 text-[#364b9b]/85">
              {status === 'success' && (
                <>
                  <CheckCircle size={22} weight="fill" aria-hidden="true" className="shrink-0 text-[#364b9b]" />
                  Message sent. Thank you, I will get back to you.
                </>
              )}
            </p>
            {status === 'error' && (
              <p role="alert" className="text-red-700">
                {`Your message wasn't sent. Check your connection and try again${EMAIL ? `, or write to ${EMAIL}` : ''}.`}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </main>
  );
}