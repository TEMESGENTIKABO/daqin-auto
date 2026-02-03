"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  Package,
  Users,
  Globe,
  Clock,
  Trophy
} from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/bg5.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-screen flex items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.hero.tagline}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-6 md:py-4 bg-gradient-to-b from-gray-950 to-black relative -mt-2 z-20">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#D4AF37_1px,transparent_0)] bg-[length:60px_60px]"></div>
        </div>

        {/* Title */}
        <div className="px-4 md:px-6 mb-4 md:mb-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-base md:text-lg font-bold text-[#D4AF37]">
              10 {t.hero.years}
            </span>
            <span className="text-xs md:text-sm text-[#F4D03F] opacity-80 hidden sm:inline">
              | {t.hero.premiumExport}
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-[#D4AF37] to-transparent ml-2 hidden sm:block"></div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="md:hidden px-4">
          <div className="flex space-x-3 overflow-x-auto pb-4 snap-x snap-mandatory">
            {[
              {
                icon: ShieldCheck,
                number: t.hero.statsNumbers.quality,
                text: t.hero.statsDescriptions.quality
              },
              {
                icon: Package,
                number: t.hero.statsNumbers.supply,
                text: t.hero.statsDescriptions.supply
              },
              {
                icon: Users,
                number: t.hero.statsNumbers.team,
                text: t.hero.statsDescriptions.team
              },
              {
                icon: Globe,
                number: t.hero.statsNumbers.logistics,
                text: t.hero.statsDescriptions.logistics
              },
              {
                icon: Clock,
                number: t.hero.statsNumbers.support24,
                text: t.hero.statsDescriptions.support24
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex-shrink-0 w-44 p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/20 snap-start"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center">
                      <Icon className="w-4 h-4 text-black" />
                    </div>
                    <div className="text-xl font-bold text-[#D4AF37]">
                      {item.number}
                    </div>
                  </div>
                  <div className="text-xs text-[#F4D03F]/90 font-medium">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Stats */}
        <div className="hidden md:block px-6">
          <div className="grid grid-cols-5 gap-3 max-w-6xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                number: t.hero.statsNumbers.quality,
                text: t.hero.statsDescriptions.quality
              },
              {
                icon: Package,
                number: t.hero.statsNumbers.supply,
                text: t.hero.statsDescriptions.supply
              },
              {
                icon: Users,
                number: t.hero.statsNumbers.team,
                text: t.hero.statsDescriptions.team
              },
              {
                icon: Globe,
                number: t.hero.statsNumbers.logistics,
                text: t.hero.statsDescriptions.logistics
              },
              {
                icon: Clock,
                number: t.hero.statsNumbers.support24,
                text: t.hero.statsDescriptions.support24
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="relative p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-[#D4AF37]/70" />
                    <div className="text-2xl font-bold text-[#D4AF37]">
                      {item.number}
                    </div>
                  </div>
                  <div className="text-xs text-[#F4D03F]/90 font-medium">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Line */}
        <div className="px-4 md:px-6 mt-6 md:mt-3">
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        </div>
      </section>
    </>
  );
}
