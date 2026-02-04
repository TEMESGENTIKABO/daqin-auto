"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { FaWhatsapp, FaWeixin, FaTelegram, FaQq } from "react-icons/fa";

export default function ContactSection() {
  const { t } = useLanguage();

  // Social media links
  const socialLinks = {
    whatsapp: "https://wa.me/+8615594634955",
    wechat: "weixin://dl/chat?daqinauto",
    telegram: "https://t.me/+8615594634955",
    phone: "tel:+8615594634955",
    email: "mailto:contact@daqinauto.com",
  };

  // Contact methods data
  const contactMethods = [
    {
      id: "phone",
      icon: Phone,
      title: t.contact.directCall,
      description: t.contact.available247,
      value: t.contactDetails.phoneDisplay,
      link: socialLinks.phone,
      color: "from-blue-500/20 to-blue-600/20",
      hoverColor: "hover:bg-blue-500/10",
      textColor: "text-blue-300",
      borderColor: "border-blue-500/30",
    },
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      title: t.contact.whatsapp,
      description: t.contact.instantMessaging,
      value: t.contactDetails.whatsapp,
      link: socialLinks.whatsapp,
      color: "from-green-500/20 to-green-600/20",
      hoverColor: "hover:bg-green-500/10",
      textColor: "text-green-300",
      borderColor: "border-green-500/30",
    },
    {
      id: "wechat",
      icon: FaWeixin,
      title: t.contact.wechat,
      description: t.contact.scanQRCode,
      value: t.contactDetails.wechatId,
      link: socialLinks.wechat,
      color: "from-emerald-500/20 to-emerald-600/20",
      hoverColor: "hover:bg-emerald-500/10",
      textColor: "text-emerald-300",
      borderColor: "border-emerald-500/30",
    },
    {
      id: "telegram",
      icon: FaTelegram,
      title: t.contact.telegram,
      description: t.contact.secureMessaging,
      value: t.contactDetails.telegramId,
      link: socialLinks.telegram,
      color: "from-sky-500/20 to-sky-600/20",
      hoverColor: "hover:bg-sky-500/10",
      textColor: "text-sky-300",
      borderColor: "border-sky-500/30",
    },
    {
      id: "email",
      icon: Mail,
      title: t.contact.email,
      description: t.contact.businessInquiries,
      value: t.contactDetails.email,
      link: socialLinks.email,
      color: "from-gold-primary/20 to-yellow-500/20",
      hoverColor: "hover:bg-gold-primary/10",
      textColor: "text-gold-light",
      borderColor: "border-gold-primary/30",
    },
    {
      id: "address",
      icon: MapPin,
      title: t.contact.officeAddress,
      description: t.contact.visitOurShowroom,
      value: t.contactDetails.address,
      link: "#",
      color: "from-purple-500/20 to-purple-600/20",
      hoverColor: "hover:bg-purple-500/10",
      textColor: "text-purple-300",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-12 md:py-20 bg-gray-light overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-gold-primary/5"></div>

      {/* Full-width background section */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black py-12 md:py-20">
        {/* Diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 via-transparent to-gold-primary/10"></div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: "300px 300px",
            }}
          ></div>
        </div>

        <div className="relative z-10 section-container px-4">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent"></div>
              <MessageSquare className="w-6 h-6 text-gold-primary animate-pulse" />
              <div className="w-10 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.id}
                    href={method.link}
                    target={method.id !== "address" ? "_blank" : undefined}
                    rel={
                      method.id !== "address"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`
                      group relative overflow-hidden rounded-xl p-5 md:p-6 
                      backdrop-blur-sm border ${method.borderColor}
                      bg-gradient-to-br from-black/40 ${method.color}
                      transition-all duration-300 hover:scale-[1.02] 
                      hover:shadow-2xl hover:shadow-black/30
                      ${method.hoverColor}
                    `}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-primary/30 rounded-tl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-primary/30 rounded-br-xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`p-3 rounded-lg bg-black/30 backdrop-blur-sm border ${method.borderColor}`}
                        >
                          <Icon className={`w-6 h-6 ${method.textColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                            {method.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {method.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-base md:text-lg font-semibold text-white truncate">
                          {method.value}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs md:text-sm text-gray-400">
                            {method.id === "address" 
                              ? t.contact.clickToViewLocation 
                              : t.contact.clickToContact}
                          </span>
                          <div className="text-xs px-2 py-1 rounded bg-black/30 text-gray-300">
                            {method.id === "address" 
                              ? t.contact.location 
                              : t.contact.instant}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-10 md:mt-14 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-6 md:p-8 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-md rounded-2xl border border-gold-primary/20">
                <div className="text-left">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {t.contact.preferToSpeakDirectly}
                  </h4>
                  <p className="text-gray-300">
                    {t.contact.salesTeamAvailable}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={socialLinks.phone}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-dark text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-gold-primary/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-pulse" />
                    <span className="text-lg">{t.contact.callNow}</span>
                    <span className="text-sm opacity-80">(24/7)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-8 md:mt-10 text-center">
              <div className="inline-flex items-center gap-3 text-gray-400 text-sm md:text-base">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-primary to-transparent"></div>
                <span>
                  {t.contact.businessHours}
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-primary to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}