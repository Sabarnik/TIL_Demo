'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Linkedin, Globe, Send } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-[#F1B434]" />,
      title: "Email",
      description: "Have questions? Email us directly",
      details: "info@tilindia.com",
      link: "mailto:info@tilindia.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-[#F1B434]" />,
      title: "Phone",
      description: "Call us during business hours",
      details: "+91 33 1234 5678",
      link: "tel:+913312345678"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#F1B434]" />,
      title: "Headquarters",
      description: "Visit our corporate office",
      details: "TIL House, 1 Taratolla Road, Kolkata - 700088, India",
      link: "https://maps.google.com"
    }
  ];

  const regionalOffices = [
    {
      city: "Delhi",
      address: "123 Industrial Area, Sector 62, Noida - 201301",
      phone: "+91 11 2345 6789"
    },
    {
      city: "Mumbai",
      address: "456 Business Park, Andheri East, Mumbai - 400069",
      phone: "+91 22 3456 7890"
    },
    {
      city: "Bangalore",
      address: "789 Tech Park, Whitefield, Bangalore - 560066",
      phone: "+91 80 4567 8901"
    },
    {
      city: "Chennai",
      address: "101 Industrial Estate, Guindy, Chennai - 600032",
      phone: "+91 44 5678 9012"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/contast-us.jpg`}
          alt="Contact TIL"
          className="w-full h-full object-cover"
        />

        {/* Left-to-right overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

        {/* Content Container */}
        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            >
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-sm font-bold tracking-tight mb-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                GET IN TOUCH
              </motion.span>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                TIL <span className="text-[#F1B434]">Contact</span>
              </motion.h1>
              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-full mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.p
                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                We're here to help. Reach out to us for inquiries, support, or partnership opportunities.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
        {/* Contact Methods */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-[#F1B434]/30"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#F1B434]/10 rounded-lg">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{method.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <a 
                    href={method.link} 
                    className="text-[#F1B434] font-medium hover:underline inline-flex items-center"
                  >
                    {method.details}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-xl shadow-lg p-8 text-white"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Business Hours</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-1">Monday - Friday</p>
                <p>9:00 AM - 6:00 PM IST</p>
              </div>
              <div>
                <p className="font-medium mb-1">Saturday - Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Form and Map */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434] transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434] transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434] transition-all"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-[#F1B434] text-black font-medium rounded-lg shadow-sm hover:shadow-md transition-all hover:bg-[#FFE352]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SEND MESSAGE
                  <Send className="w-5 h-5 ml-2" />
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="h-96 bg-gray-100 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.771715738138!2d88.3273143153639!3d22.54504098520075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7f3d3095d%3A0x2a8f5a9e7a1a0b1d!2sTIL%20Limited!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://linkedin.com/company/til-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-full hover:bg-[#F1B434]/10 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-[#F1B434]" />
                  </a>
                  <a
                    href="https://tilindia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-full hover:bg-[#F1B434]/10 transition-colors"
                  >
                    <Globe className="w-6 h-6 text-[#F1B434]" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Regional Offices */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Regional Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regionalOffices.map((office, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-[#F1B434]/30"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#F1B434] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#F1B434]" />
                      <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-gray-600 text-sm hover:text-[#F1B434]">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Page;