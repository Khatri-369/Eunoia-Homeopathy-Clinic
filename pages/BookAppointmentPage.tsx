import React, { useState } from 'react';
import { Video, MapPin, Calendar, Clock, CheckCircle, ArrowLeft, ArrowRight, User, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO } from '../constants';

// ⚠️ REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
// Get these from https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // e.g., 'service_xyz'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g., 'template_abc'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // e.g., 'user_123'

const BookAppointmentPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState<'online' | 'offline' | null>(null);
  const [details, setDetails] = useState({ name: '', date: '', time: '', phone: '' });
  const [isSending, setIsSending] = useState(false);

  const handleConfirm = async () => {
    setIsSending(true);
    const typeLabel = bookingType === 'online' ? 'Video Consultation' : 'In-Clinic Visit';

    // 1. Send Email via EmailJS
    try {
      if (EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID') {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            to_name: 'Dr. Hetal',
            from_name: details.name,
            phone: details.phone,
            date: details.date,
            time: details.time,
            type: typeLabel,
            message: `New Appointment Request: ${typeLabel} on ${details.date} at ${details.time}`,
          },
          EMAILJS_PUBLIC_KEY
        );
      } else {
        console.warn('EmailJS credentials are not set. Skipping email send.');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email notification. Proceeding to WhatsApp.');
    } finally {
      setIsSending(false);
    }

    // 2. Open WhatsApp (Existing Flow)
    const message = `Hello Dr. Hetal,

I would like to book a *${typeLabel}*.

*Patient Details:*
Name: ${details.name}
Phone: ${details.phone}
Preferred Date: ${details.date}
Preferred Time: ${details.time}

Please confirm the slot. Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918141327947?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setStep(3);
  };

  return (
    <div className="bg-neutral min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative z-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${step >= s ? 'bg-primary text-white shadow-lg scale-110' : 'bg-gray-200 text-gray-500'}`}>
                {s}
              </div>
            ))}
          </div>
          <div className="absolute top-[84px] left-0 w-full h-1 bg-gray-200 -z-0 hidden md:block max-w-3xl mx-auto right-0"></div>
          {/* Note: Simplified styling for progress line context */}
          <div className="flex justify-between mt-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <span>Method</span>
            <span>Details</span>
            <span>Confirm</span>
          </div>
        </div>

        {/* STEP 1: METHOD */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h1 className="text-3xl font-serif font-bold text-gray-900 text-center mb-2">Select Consultation Type</h1>
            <p className="text-gray-500 text-center mb-10">Choose how you want to connect with Dr. Hetal.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => { setBookingType('online'); setStep(2); }}
                className="relative bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-secondary hover:shadow-xl transition-all group text-left"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Video size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Video Consultation</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">Secure video call via WhatsApp. Ideal for follow-ups or distance patients.</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-secondary group-hover:translate-x-1 transition-transform">
                  Select Online <ArrowRight size={16} />
                </span>
              </button>

              <button
                onClick={() => { setBookingType('offline'); setStep(2); }}
                className="relative bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-primary hover:shadow-xl transition-all group text-left"
              >
                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">In-Clinic Visit</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">Face-to-face diagnosis at our Gotri clinic. Recommended for new cases.</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                  Select Clinic Visit <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: DETAILS */}
        {step === 2 && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-8">
              <button onClick={() => setStep(1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeft size={20} className="text-gray-500" />
              </button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Your Details</h2>
                <p className="text-sm text-gray-500">
                  Booking for: <span className="font-bold text-primary uppercase">{bookingType === 'online' ? 'Video Consult' : 'Clinic Visit'}</span>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <User size={16} /> Patient Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Full Name"
                    value={details.name}
                    onChange={e => setDetails({ ...details, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <User size={16} /> Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="10-digit mobile number"
                    value={details.phone}
                    onChange={e => {
                      const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
                      if (value.length <= 10) {
                        setDetails({ ...details, phone: value });
                      }
                    }}
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                  />
                  {details.phone && details.phone.length !== 10 && (
                    <p className="text-xs text-red-500">Please enter exactly 10 digits</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Calendar size={16} /> Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
                    value={details.date}
                    onChange={e => setDetails({ ...details, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Clock size={16} /> Preferred Time
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
                    value={details.time}
                    onChange={e => setDetails({ ...details, time: e.target.value })}
                  >
                    <option value="">Select Slot</option>
                    <option value="evening">Evening (5:30 PM - 8:30 PM)</option>
                    {bookingType === 'online' && <option value="morning">Morning (By Request)</option>}
                  </select>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                disabled={!details.name || !details.phone || details.phone.length !== 10 || isSending}
                className="w-full bg-primary hover:bg-rose-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex justify-center items-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Processing Request...
                  </>
                ) : (
                  'Confirm Booking Request'
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: SUCCESS */}
        {step === 3 && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 text-center animate-fade-in-up">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Request Received</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-gray-900">{details.name}</span>. <br />
              We have noted your request for a {bookingType === 'online' ? 'Video Consultation' : 'Clinic Visit'}.
              <br /><br />
              <span className="text-sm text-gray-400">Our team will call you shortly to confirm the exact slot.</span>
            </p>

            <a
              href="/"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors"
            >
              Back to Home
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

export default BookAppointmentPage;