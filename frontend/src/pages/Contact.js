import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const API = process.env.REACT_APP_BACKEND_URL;

const PROJECT_TYPES = [
  { value: 'new-pool-tiling', label: 'New Pool Tiling' },
  { value: 'renovation-retiling', label: 'Pool Renovation / Retiling' },
  { value: 'mosaic-feature', label: 'Luxury Mosaic Feature' },
  { value: 'stone-surround', label: 'Stone Surround / Coping' },
  { value: 'waterline-band', label: 'Waterline Tile Band' },
  { value: 'unsure', label: "I'm not sure yet" },
];

const TILE_TYPES = [
  { value: 'glass-mosaic', label: 'Glass Mosaic' },
  { value: 'natural-stone', label: 'Natural Stone (Travertine / Limestone)' },
  { value: 'porcelain', label: 'Porcelain' },
  { value: 'marble', label: 'Marble' },
  { value: 'undecided', label: 'Undecided — need advice' },
];

const BUDGETS = [
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 – $25,000' },
  { value: '25k-50k', label: '$25,000 – $50,000' },
  { value: '50k-100k', label: '$50,000 – $100,000' },
  { value: 'over-100k', label: '$100,000+' },
  { value: 'unsure', label: 'Unsure — please advise' },
];

const contactInfo = [
  { Icon: MapPin, title: 'Location', lines: ['35 Mannion Way, Kardinya WA 6163'] },
  { Icon: Phone, title: 'Phone', lines: ['(08) 9331 8998', 'Mobile: 0488 040 150'] },
  { Icon: Mail, title: 'Email', lines: ['hello@primopools.com.au'] },
  { Icon: Clock, title: 'Hours', lines: ['Mon–Fri: 7:00am – 5:00pm', 'Sat: 8:00am – 12:00pm'] },
];

const INIT = { firstName: '', lastName: '', email: '', phone: '', suburb: '', projectType: '', tileInterest: '', budget: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (form.phone.replace(/\D/g, '').length < 8) e.phone = 'Valid phone required';
    if (!form.suburb.trim()) e.suburb = 'Required';
    if (!form.projectType) e.projectType = 'Please select a project type';
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Please add more detail (min 10 chars)';
    return e;
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm(INIT);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen section-dark pt-20">
      {/* Header */}
      <div className="py-20 text-center section-navy border-b border-[rgba(240,237,232,0.07)]">
        <span className="section-label">Get In Touch</span>
        <h1 className="section-title mt-2">Start Your Pool Journey</h1>
        <div className="gold-line mx-auto" />
        <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: 'rgba(240,237,232,0.55)' }}>
          Request a free on-site consultation. We'll visit your property, assess your pool, and provide a detailed quote at no cost.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT: Info + Map */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map(({ Icon, title, lines }) => (
              <div key={title} className="glass-card p-5 flex gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,164,74,0.12)' }}>
                  <Icon size={18} style={{ color: '#C9A44A' }} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#C9A44A' }}>{title}</p>
                  {lines.map((l) => <p key={l} className="text-sm" style={{ color: 'rgba(240,237,232,0.7)' }}>{l}</p>)}
                </div>
              </div>
            ))}

            <div className="glass-card overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.6926842942973!2d115.80243627589374!3d-32.05686497399969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a0d0c0a8e6ad%3A0x4f4a5b2c1d8e9f0a!2s35%20Mannion%20Way%2C%20Kardinya%20WA%206163!5e0!3m2!1sen!2sau!4v1699520000000!5m2!1sen!2sau"
                width="100%" height="220" style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen loading="lazy" title="Primo Pools Location"
              />
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="glass-card p-10 text-center flex flex-col items-center" data-testid="contact-success">
                <CheckCircle size={56} style={{ color: '#C9A44A' }} className="mb-4" />
                <h2 className="font-serif text-2xl text-[#F0EDE8] mb-2">Request Received!</h2>
                <p className="text-sm" style={{ color: 'rgba(240,237,232,0.6)' }}>
                  Thank you for reaching out. One of our consultants will contact you within 24 hours to arrange a free site visit.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-gold mt-6 text-xs">
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <div className="glass-card p-6 lg:p-8">
                <h2 className="font-serif text-2xl text-[#F0EDE8] mb-1">Request a Free Quote</h2>
                <p className="text-sm mb-7" style={{ color: 'rgba(240,237,232,0.45)' }}>
                  Fill in the details below and we'll prepare a tailored proposal for your project.
                </p>

                {status === 'error' && (
                  <div className="mb-5 p-4 rounded border border-red-500/30 bg-red-500/10 text-sm text-red-400" data-testid="contact-error">
                    Something went wrong. Please call us on (08) 9331 8998.
                  </div>
                )}

                <form onSubmit={submit} className="space-y-4" data-testid="contact-form">
                  <div className="grid grid-cols-2 gap-4">
                    {['firstName', 'lastName'].map((k) => (
                      <div key={k}>
                        <label className="block text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.45)' }}>
                          {k === 'firstName' ? 'First Name' : 'Last Name'}
                        </label>
                        <input data-testid={`contact-${k}`} className="input-luxury" value={form[k]} onChange={set(k)}
                          placeholder={k === 'firstName' ? 'James' : 'Williams'} />
                        {errors[k] && <p className="text-red-400 text-xs mt-1">{errors[k]}</p>}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[['email', 'Email', 'james@example.com', 'email'], ['phone', 'Phone', '0400 123 456', 'tel']].map(([k, label, ph, type]) => (
                      <div key={k}>
                        <label className="block text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.45)' }}>{label}</label>
                        <input data-testid={`contact-${k}`} className="input-luxury" type={type} value={form[k]} onChange={set(k)} placeholder={ph} />
                        {errors[k] && <p className="text-red-400 text-xs mt-1">{errors[k]}</p>}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.45)' }}>Suburb</label>
                    <input data-testid="contact-suburb" className="input-luxury" value={form.suburb} onChange={set('suburb')} placeholder="e.g. Cottesloe" />
                    {errors.suburb && <p className="text-red-400 text-xs mt-1">{errors.suburb}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.45)' }}>Project Type</label>
                    <select data-testid="contact-projectType" className="input-luxury" value={form.projectType} onChange={set('projectType')}>
                      <option value="">Select a project type</option>
                      {PROJECT_TYPES.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                    {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.45)' }}>Tile Interest</label>
                      <select data-testid="contact-tileInterest" className="input-luxury" value={form.tileInterest} onChange={set('tileInterest')}>
                        <option value="">Optional</option>
                        {TILE_TYPES.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.45)' }}>Budget Range</label>
                      <select data-testid="contact-budget" className="input-luxury" value={form.budget} onChange={set('budget')}>
                        <option value="">Optional</option>
                        {BUDGETS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: 'rgba(240,237,232,0.45)' }}>Project Details</label>
                    <textarea data-testid="contact-message" className="input-luxury resize-none h-28" value={form.message} onChange={set('message')}
                      placeholder="Tell us about your pool — size, current state, what you're hoping to achieve..." />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button data-testid="contact-submit-btn" type="submit" disabled={status === 'loading'}
                    className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'loading' ? 'Sending…' : 'Request Free Consultation'}
                  </button>

                  <p className="text-center text-xs" style={{ color: 'rgba(240,237,232,0.25)' }}>
                    No obligation · Free on-site visit · Response within 24 hours
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
