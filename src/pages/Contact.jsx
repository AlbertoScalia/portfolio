import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, CheckCircle, Copy } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import Magnetic from '../components/Magnetic';
import RollText from '../components/RollText';
import LocalTime from '../components/LocalTime';
import usePageTitle from '../hooks/usePageTitle';
import { CV_FILE, CV_URL, EMAIL, SOCIALS } from '../utils/site';

const LOCATION = 'Acireale, CT, Italy';

// Se definisci le variabili VITE_EMAILJS_* in .env vengono usate quelle; altrimenti restano i valori attuali
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_7lo9nij';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_79tdtxs';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'UFPDLKi81rCshxD1I';

const empty = { name: '', email: '', subject: '', message: '', website: '' };

function Field({ label, number, as: Tag = 'input', ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="text-sm text-[#364b9b]/80">
        <span aria-hidden="true" className="mr-3 font-medium">{number}</span>
        {label}
      </label>
      <Tag
        {...props}
        required
        className="border-b border-[#364b9b]/70 bg-transparent py-3 text-lg text-[#364b9b] transition-colors placeholder:text-[#364b9b]/80 hover:border-[#364b9b] focus:border-[#EC3814] focus:shadow-[0_1px_0_0_#EC3814] focus:outline-none"
      />
    </div>
  );
}

export default function Contact() {
  usePageTitle(
    'Contact — Alberto Scalia',
    'Get in touch with Alberto Scalia for freelance projects and full-time roles in visual, brand and interface design.'
  );
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  // Copia l'indirizzo negli appunti (il link mailto resta disponibile)
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* appunti non disponibili: si può usare il link */
    }
  };

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status !== 'sending') setStatus('idle');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.website) return setStatus('success'); // honeypot: i bot compilano il campo nascosto
    setStatus('sending');
    try {
      // La libreria di invio si carica solo quando serve: la pagina parte più leggera
      const { default: emailjs } = await import('@emailjs/browser');
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
    <main id="main" className="mx-auto min-h-screen max-w-[1600px] px-6 pb-24 pt-40 text-[#364b9b] lg:px-12">
      <Reveal as="p" className="mb-6 text-sm font-medium text-[#364b9b]/80">
        03 / Contact
      </Reveal>

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
                <dd className="flex flex-wrap items-center gap-3 text-lg">
                  <a href={`mailto:${EMAIL}`} className="underline decoration-[#EC3814] underline-offset-4 hover:text-[#EC3814]">{EMAIL}</a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#364b9b]/40 px-3 py-1 text-sm font-medium transition-colors hover:border-[#EC3814] hover:text-[#EC3814]"
                  >
                    {copied ? <Check size={14} weight="bold" aria-hidden="true" /> : <Copy size={14} weight="bold" aria-hidden="true" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  <span role="status" aria-live="polite" className="sr-only">{copied ? 'Email address copied' : ''}</span>
                </dd>
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
            <div className="py-5">
              <dt className="mb-1 text-sm text-[#364b9b]/90">Resume</dt>
              <dd>
                <a
                  href={CV_URL}
                  download={CV_FILE}
                  className="group inline-flex items-center gap-2 text-lg transition-colors hover:text-[#EC3814]"
                >
                  <RollText>Download CV</RollText>
                  <span className="sr-only">(PDF)</span>
                  <ArrowDown size={16} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </dd>
            </div>
            <div className="pb-1 pt-5">
              <dt className="mb-3 text-sm text-[#364b9b]/90">Elsewhere</dt>
              <dd>
                <ul className="flex flex-col gap-2">
                  {SOCIALS.map(({ name, href }) => (
                    <li key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} (opens in a new tab)`}
                        className="group inline-flex items-center gap-2 text-lg transition-colors hover:text-[#EC3814]"
                      >
                        <RollText>{name}</RollText>
                        <ArrowUpRight size={16} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-45" />
                      </a>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal as="form" aria-label="Contact form" delay={0.25} onSubmit={onSubmit} className="flex flex-col gap-10 lg:col-span-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <Field number="01" label="Name" id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={onChange} placeholder="Your name or company" />
            <Field number="02" label="Email" id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} placeholder="Where can I reply?" />
          </div>
          <Field number="03" label="Subject" id="subject" name="subject" type="text" value={form.subject} onChange={onChange} placeholder="What do you want to talk about?" />
          <Field number="04" label="Message" id="message" name="message" as="textarea" rows={5} value={form.message} onChange={onChange} placeholder="Tell me about your project" />

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