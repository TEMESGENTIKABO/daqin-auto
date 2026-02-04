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
      {/* Hero Section - Clean & Simple */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/bg5.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 h-screen flex items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.hero.heroTitle}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Premium Stats Section - Gold Theme */}
      <section className="py-6 md:py-4 bg-gradient-to-b from-gray-950 to-black relative -mt-2 z-20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#D4AF37_1px,transparent_0)] bg-[length:60px_60px]"></div>
        </div>

        {/* Title in Left Corner - Single Line */}
        <div className="px-4 md:px-6 mb-4 md:mb-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Trophy className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base md:text-lg font-bold text-[#D4AF37] tracking-tight">
                10 {t.hero.years}
              </span>
              <span className="text-xs md:text-sm text-[#F4D03F] opacity-80 hidden sm:inline">
                | {t.hero.premiumExport}
              </span>
            </div>
            <div className="w-8 h-px bg-gradient-to-r from-[#D4AF37] to-transparent ml-2 hidden sm:block"></div>
          </div>
        </div>

        {/* Mobile: Improved Horizontal Scroll for Stats */}
        <div className="md:hidden">
          <div className="px-4">
            <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {/* Stat 1 - Quality */}
              <div className="flex-shrink-0 w-44 p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/20 snap-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-xl font-bold text-[#D4AF37]">100%</div>
                </div>
                <div className="text-xs text-[#F4D03F]/90 leading-tight font-medium">
                  {t.hero.rigorousQC}
                </div>
              </div>

              {/* Stat 2 - Supply */}
              <div className="flex-shrink-0 w-44 p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/20 snap-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                    <Package className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-xl font-bold text-[#D4AF37]">10,000+</div>
                </div>
                <div className="text-xs text-[#F4D03F]/90 leading-tight font-medium">
                  {t.hero.stableSupply}
                </div>
              </div>

              {/* Stat 3 - Team */}
              <div className="flex-shrink-0 w-44 p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/20 snap-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-xl font-bold text-[#D4AF37]">50,000+</div>
                </div>
                <div className="text-xs text-[#F4D03F]/90 leading-tight font-medium">
                  {t.hero.expertTeam}
                </div>
              </div>

              {/* Stat 4 - Logistics */}
              <div className="flex-shrink-0 w-44 p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/20 snap-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                    <Globe className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-xl font-bold text-[#D4AF37]">20+</div>
                </div>
                <div className="text-xs text-[#F4D03F]/90 leading-tight font-medium">
                  {t.hero.globalLogistics}
                </div>
              </div>

              {/* Stat 5 - Support */}
              <div className="flex-shrink-0 w-44 p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/20 snap-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-xl font-bold text-[#D4AF37]">24/7</div>
                </div>
                <div className="text-xs text-[#F4D03F]/90 leading-tight font-medium">
                  {t.hero.globalSupport}
                </div>
              </div>
            </div>
            
            {/* Scroll indicator for mobile */}
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/50"></div>
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/50"></div>
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/50"></div>
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]/50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:block px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {/* Stat 1 - Quality */}
            <div className="group relative p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-3 h-3 text-black" />
              </div>
              <div className="pl-1">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]/70" />
                  <div className="text-2xl font-bold text-[#D4AF37]">100%</div>
                </div>
                <div className="text-xs text-[#F4D03F]/90 leading-tight font-medium">
                  {t.hero.rigorousQC}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#F4D03F]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#F4D03F]/5 rounded-xl transition-all duration-300"></div>
            </div>

            {/* Stat 2 - Supply */}
            <div className="group relative p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                <Package className="w-3 h-3 text-black" />
              </div>
              <div className="pl-1">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-5 h-5 text-[#D4AF37]/70" />
                  <div className="text-2xl font-bold text-[#D4AF37]">10,000+</div>
                </div>
                <div className="text-xs text-[#F4D03F]/90 leading-tight font-medium">
                  {t.hero.stableSupply}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#F4D03F]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#F4D03F]/5 rounded-xl transition-all duration-300"></div>
            </div>

            {/* Stat 3 - Team */}
            <div className="group relative p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-3 h-3 text-black" />
              </div>
              <div className="pl-1">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-[#D4AF37]/70" />
                  <div className="text-2xl font-bold text-[#D4AF37]">50,000+</div>
                </div>
                <div className="text-xs text-[#F4D03F]/90 leading-tight font-medium">
                  {t.hero.expertTeam}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#F4D03F]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#F4D03F]/5 rounded-xl transition-all duration-300"></div>
            </div>

            {/* Stat 4 - Logistics */}
            <div className="group relative p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                <Globe className="w-3 h-3 text-black" />
              </div>
              <div className="pl-1">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-[#D4AF37]/70" />
                  <div className="text-2xl font-bold text-[#D4AF37]">20+</div>
                </div>
                <div className="text-xs text-[#F4D03F]/90 leading-tight font-medium">
                  {t.hero.globalLogistics}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#F4D03F]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#F4D03F]/5 rounded-xl transition-all duration-300"></div>
            </div>

            {/* Stat 5 - Support */}
            <div className="group relative p-4 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                <Clock className="w-3 h-3 text-black" />
              </div>
              <div className="pl-1">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#D4AF37]/70" />
                  <div className="text-2xl font-bold text-[#D4AF37]">24/7</div>
                </div>
                <div className="text-xs text-[#F4D03F]/90 leading-tight font-medium">
                  {t.hero.globalSupport}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#F4D03F]/0 group-hover:from-[#D4AF37]/5 group-hover:to-[#F4D03F]/5 rounded-xl transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Decorative gold line */}
        <div className="px-4 md:px-6 mt-6 md:mt-3">
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        </div>
      </section>
    </>
  );
}