import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Format data for WhatsApp message with emojis
    const name = formData.get('from_name');
    const email = formData.get('reply_to');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    // Create formatted WhatsApp message - English only, no emojis
    const whatsappMessage = `*New Contact Form Submission*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Subject:* ${subject}

*Message:*
${message}

*Submitted on:* ${timestamp}

━━━━━━━━━━━━━━━━━━━━━━━━

_Eunoia Homoeopathy - Dr. Hetal Pandav_
_Healing with Harmony_`;
    try {
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Create WhatsApp URL (remove + from phone number for the URL)
      const whatsappNumber = CONTACT_INFO.phone.replace(/\+/g, '').replace(/\s/g, '');
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new window
      window.open(whatsappUrl, '_blank');

      // Show success message
      setSubmitted(true);
      form.reset();
    } catch (err: any) {
      console.error('WhatsApp Error:', err);
      setError(`Failed to open WhatsApp. Please contact us directly at ${CONTACT_INFO.phone}`);
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: CONTACT_INFO.address,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: CONTACT_INFO.phone,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: CONTACT_INFO.email,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Timings',
      content: CONTACT_INFO.timings,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50 pt-12 pb-20 relative overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-16 relative z-10">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg animate-fade-in-down">
            We're Here to Help
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-gray-900 via-rose-900 to-gray-900 bg-clip-text text-transparent mb-6 animate-fade-in-up">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Have questions about your health or our treatments? Our team is ready to assist you on your journey to wellness.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                    {item.title === 'Visit Us' ? (
                      <a
                        href={CONTACT_INFO.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm leading-relaxed hover:text-rose-500 transition-colors block"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl animate-fade-in-left" style={{ animationDelay: '400ms' }}>
              <h4 className="text-white font-bold text-lg mb-4">Follow Us</h4>
              <p className="text-gray-400 text-sm mb-6">Stay updated with health tips and wellness insights</p>
              <div className="flex gap-3">
                <a
                  href={CONTACT_INFO.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="text-white" size={20} />
                </a>
                <a
                  href={CONTACT_INFO.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 rounded-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-gray-100 animate-fade-in-right">
              {submitted ? (
                <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce-in shadow-2xl">
                    <CheckCircle className="text-white" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-8 text-lg">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                    <p className="text-gray-500">Fill out the form below and we'll respond as soon as possible</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 relative">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        Name
                        {focusedField === 'name' && <span className="text-rose-500 animate-pulse">*</span>}
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-5 py-4 bg-gray-50 rounded-xl border-2 border-gray-200 focus:bg-white focus:border-rose-500 outline-none transition-all duration-300 hover:border-gray-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2 relative">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        Email
                        {focusedField === 'email' && <span className="text-rose-500 animate-pulse">*</span>}
                      </label>
                      <input
                        type="email"
                        name="reply_to"
                        required
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-5 py-4 bg-gray-50 rounded-xl border-2 border-gray-200 focus:bg-white focus:border-rose-500 outline-none transition-all duration-300 hover:border-gray-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 relative">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        Phone
                        {focusedField === 'phone' && <span className="text-rose-500 animate-pulse">*</span>}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
                          if (value.length <= 10) {
                            e.target.value = value;
                          } else {
                            e.target.value = value.slice(0, 10);
                          }
                        }}
                        pattern="[0-9]{10}"
                        maxLength={10}
                        className="w-full px-5 py-4 bg-gray-50 rounded-xl border-2 border-gray-200 focus:bg-white focus:border-rose-500 outline-none transition-all duration-300 hover:border-gray-300"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        Subject
                        {focusedField === 'subject' && <span className="text-rose-500 animate-pulse">*</span>}
                      </label>
                      <select
                        name="subject"
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-5 py-4 bg-gray-50 rounded-xl border-2 border-gray-200 focus:bg-white focus:border-rose-500 outline-none transition-all duration-300 hover:border-gray-300 cursor-pointer"
                      >
                        <option>General Inquiry</option>
                        <option>Appointment Booking</option>
                        <option>Treatment Details</option>
                        <option>Follow-up Consultation</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      Message
                      {focusedField === 'message' && <span className="text-rose-500 animate-pulse">*</span>}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-5 py-4 bg-gray-50 rounded-xl border-2 border-gray-200 focus:bg-white focus:border-rose-500 outline-none transition-all duration-300 hover:border-gray-300 resize-none"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex justify-center items-center gap-3 transform hover:scale-[1.02] group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    We typically respond within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Add custom animations to global styles */}
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;