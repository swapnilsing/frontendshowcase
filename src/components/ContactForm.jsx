import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = { name: form.get('name'), email: form.get('email'), message: form.get('message') };

    try {
      setStatus('sending');
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok) { setStatus('sent'); e.target.reset(); }
      else { setStatus('error'); console.error(data); }
    } catch (err) {
      setStatus('error'); console.error(err);
    }
  };

  return (
    <section id="contact" className="container-max py-10">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Send a quick message — form posts to a serverless function.</p>

      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <input name="name" placeholder="Your name" className="p-3 border rounded-lg col-span-1 md:col-span-1" required />
        <input name="email" type="email" placeholder="Email" className="p-3 border rounded-lg col-span-1 md:col-span-1" required />
        <textarea name="message" placeholder="Message" className="p-3 border rounded-lg md:col-span-2" rows={5} required />

        <div className="md:col-span-2">
          <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-lg">Send message</button>
          <div className="mt-2 text-sm text-gray-500">
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && 'Message sent — thanks!'}
            {status === 'error' && 'There was an error sending your message.'}
          </div>
        </div>
      </form>
    </section>
  );
}
