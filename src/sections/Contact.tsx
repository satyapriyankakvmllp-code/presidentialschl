
import {
  useState,
  type FormEvent,
  type ReactNode,
} from 'react';

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

import { Reveal } from '@/components/Reveal';
import { SectionBackdrop } from '@/components/SectionBackdrop';
import { images } from '@/config/images';

// Backend URL: set VITE_API_URL at build time (see .env.example). Dev falls back to localhost.

import {
  branding,
  whatsappLink,
} from '../../public/branding/branding';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSending(true);
    setError('');

    try {
      // Send enquiry to backend
      const formData = new FormData();

formData.append(
  'access_key',
  import.meta.env.VITE_WEB3FORMS_KEY
);



formData.append('subject', "Presidential School Admission Enquiry");
formData.append('name', form.name);
formData.append('email', form.email);
formData.append('phone', form.phone);
formData.append('grade', form.grade);
formData.append('message', form.message);


const response = await fetch(
  'https://api.web3forms.com/submit',
  {
    method: 'POST',
    body: formData,
  }
);

const data = await response.json();

if (!response.ok || !data.success) {
  throw new Error(
    data.message || 'Failed to send enquiry.'
  );
}
      // Prepare WhatsApp message
      const lines = [
  '* NEW ADMISSION ENQUIRY*',
  '',
  '* Parent / Guardian Name:* ' + form.name,
  '* Phone Number:* ' + form.phone,
  '* Email Address:* ' + form.email,
  '* Grade Applying For:* ' + form.grade,
];

if (form.message) {
  lines.push('*💬 Message:* ' + form.message);
}

      if (form.message) {
        lines.push('Message: ' + form.message);
      }

      // Open WhatsApp
      // window.open(
      //   whatsappLink(lines.join('\n')),
      //   '_blank',
      //   'noopener,noreferrer'
      // );
      const whatsappUrl = whatsappLink(lines.join('\n'));

if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  window.location.href = whatsappUrl;
} else {
  window.open(whatsappUrl, '_blank');
}

      // Show success message
      setSubmitted(true);

    } catch (error) {
      console.error(
        'Enquiry submission error:',
        error
      );

      setError(
        'Unable to send your enquiry right now. Please try again.'
      );
    } finally {
      setSending(false);
    }
  };

  const info = [
    {
      icon: MapPin,
      title: 'Visit Us',
      lines: [
        branding.contact.addressLine1,
        branding.contact.addressLine2,
      ],
      href: branding.contact.mapsUrl,
      external: true,
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: [branding.contact.phone],
      href: branding.contact.phoneHref,
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: [branding.contact.email],
      href: 'mailto:' + branding.contact.email,
    },
    {
      icon: Clock,
      title: 'Office Hours',
      lines: [
        'Mon–Fri: 8:00 AM – 4:00 PM',
        'Sat: 9:00 AM – 1:00 PM',
      ],
    },
  ];

  return (
    <section
      id="contact"
      className="py-10 lg:py-12 relative overflow-hidden"
    >
      <SectionBackdrop image={images.library} side="left" tone="tint" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-accent-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Get in Touch
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
            We'd Love to Hear From You
          </h2>

          <p className="text-primary-600 text-base sm:text-lg leading-relaxed">
            Have a question about admissions, curriculum or campus visits?
            Send us a message.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Contact Information */}
          <Reveal
            direction="left"
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {info.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-primary-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <item.icon
                      size={22}
                      className="text-primary-700"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">
                      {item.title}
                    </h3>

                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className="text-sm text-primary-600"
                      >
                        {item.href ? (
                          <a
                            href={item.href}
                            {...(
                              'external' in item
                                ? {
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                  }
                                : {}
                            )}
                            className="hover:text-accent-600 transition-colors break-words"
                          >
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Enquiry Form */}
          <Reveal
            direction="right"
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-primary-100">

              {submitted ? (
                <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-12 text-center">

                  <div className="w-16 h-16 rounded-full bg-success-100 flex items-center justify-center mb-4 animate-scale-in">
                    <CheckCircle2
                      size={32}
                      className="text-success-600"
                    />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">
                    Thank You!
                  </h3>

                  <p className="text-sm text-primary-600">
                    Thanks for submitting the enquiry form. Our admissions team will get back to you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', grade: '', message: '' });
                    }}
                    className="mt-6 text-sm font-semibold text-accent-700 underline underline-offset-4 hover:text-accent-800"
                  >
                    Send another enquiry
                  </button>

                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  <div className="grid sm:grid-cols-2 gap-5">

                    <Field
                      label="Parent / Guardian Name"
                      required
                    >
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            name: e.target.value,
                          })
                        }
                        className="input"
                        placeholder="Your full name"
                      />
                    </Field>

                    <Field
                      label="Phone Number"
                      required
                    >
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            phone: e.target.value,
                          })
                        }
                        className="input"
                        placeholder="+91 98765 43210"
                      />
                    </Field>

                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">

                    <Field
                      label="Email Address"
                      required
                    >
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            email: e.target.value,
                          })
                        }
                        className="input"
                        placeholder="you@example.com"
                      />
                    </Field>

                    <Field
                      label="Grade Applying For"
                      required
                    >
                      <select
                        required
                        value={form.grade}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            grade: e.target.value,
                          })
                        }
                        className="input"
                      >
                        <option value="">
                          Select grade
                        </option>

                        <option>
                          Pre-Primary
                        </option>

                        <option>
                          Primary (I–V)
                        </option>

                        <option>
                          Middle (VI–VIII)
                        </option>

                        <option>
                          Secondary (IX–X)
                        </option>

                        <option>
                          Senior Secondary (XI–XII)
                        </option>
                      </select>
                    </Field>

                  </div>

                  <Field label="Message">
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message: e.target.value,
                        })
                      }
                      className="input resize-none"
                      placeholder="Tell us about your child or any questions you have..."
                    />
                  </Field>

                  {error && (
                    <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <div className="space-y-3">

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 disabled:opacity-60 disabled:cursor-not-allowed text-primary-950 font-semibold py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-accent-500/30"
                    >
                      <MessageCircle size={18} />

                      {sending
                        ? 'Sending Enquiry...'
                        : 'Send Enquiry'}
                    </button>

                  </div>

                </form>
              )}

            </div>
          </Reveal>

        </div>
      </div>

    
<style>
  {'.input { width: 100%; padding: 0.75rem 1rem; border-radius: 0.75rem; border: 1px solid #b9cdeb; background: #eef3fb; font-size: 0.875rem; color: #0c2249; transition: all 0.2s; } .input:focus { outline: none; border-color: #c9a227; background: white; box-shadow: 0 0 0 3px rgba(201, 162, 39, 0.2); } .input::placeholder { color: #8aa9d9; }'}
</style>

    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-primary-800 mb-1.5">
        {label}{' '}
        {required && (
          <span className="text-accent-500">
            *
          </span>
        )}
      </span>

      {children}
    </label>
  );
}
