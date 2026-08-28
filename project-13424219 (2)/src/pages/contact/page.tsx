import { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { ScrollReveal } from '@/components/base/GeometricElements';

const FORM_URL = 'https://readdy.ai/api/form/da8p9mktvq5lvgtnaq20';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = ((formData.get('website_alt') as string) || '').trim();
    if (honeypot) {
      setStatus('success');
      setErrorMsg('');
      form.reset();
      setCharCount(0);
      return;
    }
    formData.delete('website_alt');

    setStatus('submitting');
    setErrorMsg('');

    try {
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        if (typeof value === 'string') params.append(key, value);
      });

      const response = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; message?: string; meta?: { message?: string; detail?: string } } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const code = parsed?.code;
      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;

      if (response.ok && code === 'OK') {
        setStatus('success');
        form.reset();
        setCharCount(0);
      } else {
        setStatus('error');
        setErrorMsg(typeof serverMsg === 'string' ? serverMsg : 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background-50">
      <Header />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center overflow-hidden bg-primary-500">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20creative%20academy%20campus%20entrance%20with%20welcoming%20geometric%20architecture%20and%20Black%20African%20students%20walking%20together%2C%20bright%20natural%20lighting%2C%20deep%20navy%20and%20white%20color%20palette%2C%20clean%20inviting%20atmosphere%2C%20editorial%20photography%20style%2C%20contemporary%20educational%20building%20design%2C%20warm%20professional%20atmosphere&width=1920&height=800&seq=contact-hero-bg&orientation=landscape&nocache=true"
            alt="Contact Ikubari Academy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary-500/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
            Ready to start your journey, or partner with us? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Send us a message
            </h2>
            <p className="text-lg text-foreground-600 mb-6">
              Tell us a little about yourself and how we can help. We&apos;ll get back to you as soon as we can.
            </p>
            <a
              href="mailto:hello@ikubariacademy.com"
              className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-accent-500 transition-colors cursor-pointer"
            >
              <i className="ri-mail-line text-xl"></i>
              <span className="whitespace-nowrap">hello@ikubariacademy.com</span>
            </a>
            <div className="inline-flex items-center gap-2 text-foreground-600 mt-4 mb-10">
              <i className="ri-map-pin-line text-xl"></i>
              <span>Lagos, Nigeria</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} data-readdy-form className="space-y-6" noValidate={false}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-background-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-sm outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-background-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-sm outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground-700 mb-2">
                  I&apos;m reaching out about *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-background-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-sm outline-none cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="Join Ikubari (Learner)">Join Ikubari (Learner)</option>
                  <option value="Partnership Opportunities">Partnership Opportunities</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={500}
                  rows={6}
                  onChange={(e) => setCharCount(e.target.value.length)}
                  className="w-full px-4 py-3 border border-background-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent text-sm outline-none resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
                <p className="text-xs text-foreground-400 mt-2">{charCount}/500 characters</p>
              </div>

              {/* Honeypot (anti-spam) */}
              <div className="hp-protect" aria-hidden="true">
                <label htmlFor="website_alt">Website</label>
                <input
                  id="website_alt"
                  type="text"
                  name="website_alt"
                  tabIndex={-1}
                  autoComplete="off"
                  readOnly
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm font-semibold">Message sent successfully!</p>
                  <p className="text-green-700 text-sm mt-1">We&apos;ll get back to you as soon as we can.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm font-semibold">Something went wrong</p>
                  <p className="text-red-700 text-sm mt-1">{errorMsg}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-primary-500 text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}