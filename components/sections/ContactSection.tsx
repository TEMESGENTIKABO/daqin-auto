"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    vehicleType: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-light">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t.contact?.title || "Get In Touch"}
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            {t.contact?.subtitle ||
              "Contact us for vehicle inquiries, pricing, or partnership opportunities"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gold-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">
                    {t.contact?.methods?.call?.title || "Call Us"}
                  </h4>
                  <p className="text-sm text-gray-dark">
                    {t.contact?.methods?.call?.available || "Available 24/7"}
                  </p>
                </div>
              </div>
              <a
                href={`tel:${t.common.phone.replace(/[^0-9+]/g, "")}`}
                className="text-xl font-bold text-gold-primary hover:text-gold-dark transition-colors"
              >
                {t.common.phone}
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gold-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">
                    {t.contact?.methods?.email?.title || "Email"}
                  </h4>
                  <p className="text-sm text-gray-dark">
                    {t.contact?.methods?.email?.purpose ||
                      "For detailed inquiries"}
                  </p>
                </div>
              </div>
              <a
                href="mailto:contact@daqinauto.com"
                className="text-xl font-bold text-gold-primary hover:text-gold-dark transition-colors"
              >
                {t.common.email}
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">
                    {t.contact?.methods?.location?.title || "Location"}
                  </h4>
                  <p className="text-sm text-gray-dark">
                    {t.contact?.methods?.location?.purpose || "Headquarters"}
                  </p>
                </div>
              </div>
              <p className="text-gray-dark">{t.common.address}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {t.contact?.form?.success?.title || "Thank You!"}
                  </h3>
                  <p className="text-gray-dark mb-8">
                    {t.contact?.form?.success?.message ||
                      "Your inquiry has been received. Our team will contact you within 24 hours."}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    {t.contact?.form?.success?.another ||
                      "Send Another Message"}
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-black mb-6">
                    {t.contact?.form?.title || "Send Inquiry"}
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          {t.contact?.form?.fields?.name || "Full Name"} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 outline-none transition-all"
                          placeholder={
                            t.contact?.form?.fields?.name || "Your name"
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          {t.contact?.form?.fields?.email || "Email Address"} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          {t.contact?.form?.fields?.phone || "Phone Number"} *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 outline-none transition-all"
                          placeholder="+1234567890"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-2">
                          {t.contact?.form?.fields?.country || "Country"} *
                        </label>
                        <input
                          type="text"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 outline-none transition-all"
                          placeholder={
                            t.contact?.form?.fields?.country || "Your country"
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-dark mb-2">
                        {t.contact?.form?.fields?.vehicleType ||
                          "Vehicle Type Interest"}
                      </label>
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 outline-none transition-all"
                      >
                        <option value="">
                          {t.contact?.form?.vehicleTypes?.[0] ||
                            "Select vehicle type"}
                        </option>
                        <option value="EV">
                          {t.contact?.form?.vehicleTypes?.[1] ||
                            "Electric Vehicles (EV)"}
                        </option>
                        <option value="PHEV">
                          {t.contact?.form?.vehicleTypes?.[2] ||
                            "Plug-in Hybrid (PHEV)"}
                        </option>
                        <option value="REEV">
                          {t.contact?.form?.vehicleTypes?.[3] ||
                            "Range Extended EV (REEV)"}
                        </option>
                        <option value="Petrol">
                          {t.contact?.form?.vehicleTypes?.[4] ||
                            "Petrol Vehicles"}
                        </option>
                        <option value="multiple">
                          {t.contact?.form?.vehicleTypes?.[5] ||
                            "Multiple Types"}
                        </option>
                        <option value="notsure">
                          {t.contact?.form?.vehicleTypes?.[6] || "Not Sure Yet"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-dark mb-2">
                        {t.contact?.form?.fields?.message || "Your Message"} *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 outline-none transition-all resize-none"
                        placeholder={
                          t.contact?.form?.fields?.message ||
                          "Tell us about your vehicle requirements, quantity, timeline, etc."
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center space-x-2 group"
                    >
                      <span>{t.contact?.form?.button || "Send Inquiry"}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-sm text-gray-dark text-center">
                      {t.contact?.form?.privacy ||
                        "By submitting this form, you agree to our Privacy Policy. We'll contact you within 24 hours."}
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  label: t.contact?.info?.response || "Response Time",
                  value: "Within 24 hours",
                },
                {
                  label: t.contact?.info?.support || "Support Hours",
                  value: t.common.available,
                },
                {
                  label: t.contact?.info?.languages || "Languages",
                  value: "EN, AR, RU, ZH",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/50 rounded-lg p-4 text-center"
                >
                  <div className="text-sm text-gray-dark">{item.label}</div>
                  <div className="font-semibold text-black">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
