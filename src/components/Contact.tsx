import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-lg text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="prose prose-lg">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Have questions about our services or need assistance with your booking?
                Our team is here to help you create the perfect stay experience.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-600">info@luxstay.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-600">123 Luxury Avenue, Paradise City, PC 12345</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}