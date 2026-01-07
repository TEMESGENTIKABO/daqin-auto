import { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import { Award, Globe, Users, Shield, Target, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Daqin Auto",
  description:
    "Learn about Daqin Auto's mission, vision, and values as a leading Chinese automotive exporter with over a decade of experience.",
};

export default function AboutPage() {
  // You can use t from useLanguage if needed, or hardcode content
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="section-container px-4 py-6">
        <Breadcrumb items={[{ label: "About", href: "/about" }]} />
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-black to-gray-900 py-16 md:py-24">
        <div className="section-container px-4 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent"></div>
            <Target className="w-6 h-6 text-gold-primary" />
            <div className="w-10 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Daqin Auto
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for Chinese automotive exports with over a
            decade of experience
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-dark mb-8">
                Daqin Auto, under Xi'an Daqin Daorui International Trade Co.,
                Ltd., is an independent automobile supplier and exporter based
                in China.
              </p>
            </div>

            {/* Mission, Vision, Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-gray-light to-white p-8 rounded-2xl border border-gray-200 hover:border-gold-primary transition-all hover:shadow-xl">
                <div className="inline-flex items-center justify-center p-3 bg-gold-primary/10 rounded-xl mb-4">
                  <Target className="w-8 h-8 text-gold-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-dark text-lg">
                  To provide quality vehicles at competitive prices with
                  exceptional service, making automotive exports from China
                  accessible and reliable for partners worldwide.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-light to-white p-8 rounded-2xl border border-gray-200 hover:border-gold-primary transition-all hover:shadow-xl">
                <div className="inline-flex items-center justify-center p-3 bg-gold-primary/10 rounded-xl mb-4">
                  <Globe className="w-8 h-8 text-gold-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-dark text-lg">
                  To become the most trusted and innovative automotive export
                  partner from China, recognized globally for quality,
                  integrity, and customer satisfaction.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-light to-white p-8 rounded-2xl border border-gray-200 hover:border-gold-primary transition-all hover:shadow-xl">
                <div className="inline-flex items-center justify-center p-3 bg-gold-primary/10 rounded-xl mb-4">
                  <Heart className="w-8 h-8 text-gold-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Our Values
                </h3>
                <p className="text-gray-dark text-lg">
                  Integrity, quality assurance, customer focus, continuous
                  improvement, and sustainable partnerships built on trust and
                  mutual success.
                </p>
              </div>
            </div>

            {/* Additional Content Sections */}
            <div className="space-y-16">
              {/* Why Choose Us */}
              <div className="bg-gray-light rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                  Why Choose Daqin Auto
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gold-primary/10 rounded-lg">
                      <Award className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Experience
                      </h3>
                      <p className="text-gray-dark">
                        Over 10 years of expertise in automotive exports,
                        understanding market needs across different regions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gold-primary/10 rounded-lg">
                      <Shield className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Quality Assurance
                      </h3>
                      <p className="text-gray-dark">
                        Rigorous vehicle inspection and quality control
                        processes to ensure only the best vehicles reach our
                        clients.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gold-primary/10 rounded-lg">
                      <Globe className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Global Reach
                      </h3>
                      <p className="text-gray-dark">
                        Established logistics network and partnerships for
                        seamless shipping to destinations worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gold-primary/10 rounded-lg">
                      <Users className="w-6 h-6 text-gold-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Customer Support
                      </h3>
                      <p className="text-gray-dark">
                        24/7 multilingual support team dedicated to assisting
                        clients throughout the entire process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-black to-gray-900">
        <div className="section-container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied partners worldwide who trust Daqin Auto
            for their automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/models"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all"
            >
              View Our Models
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
