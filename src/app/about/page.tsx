"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#0b1027_0%,#050316_45%,black_100%)] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-300 to-amber-300">
              About ALT
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            The future of booking. One platform for all your event needs.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-sky-400">Our Mission</h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-4">
            ALT was born from a simple idea: booking event services shouldn't be complicated. 
            We've created a seamless platform that connects you with the best venues, decorators, 
            caterers, DJs, and photographers—all in one place.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Whether you're planning a wedding, corporate event, birthday celebration, or any 
            special occasion, ALT makes it easy to discover, compare, and book the perfect 
            services for your event.
          </p>
        </motion.section>

        {/* What We Offer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-sky-300">For Event Organizers</h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Browse thousands of verified service providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Advanced filtering by location, price, ratings, and availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Read authentic reviews from past customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Secure booking and payment processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Manage all your bookings in one place</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-amber-300">For Service Providers</h3>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>List your services for free</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Showcase your work with photos and detailed descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Set your own pricing and availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Receive bookings from verified customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Build your reputation through customer reviews</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-amber-400">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Venues", desc: "Farmhouses, Villas, Banquet Halls, Studios & more" },
              { name: "Decorators", desc: "Floral, Luxury, Minimal, Boho & Theme-based designs" },
              { name: "Caterers", desc: "Indian, Continental, Italian, Asian Fusion & Custom menus" },
              { name: "DJs", desc: "Bollywood, EDM, House, Hip-Hop & Mixed genres" },
              { name: "Photographers", desc: "Candid, Cinematic, Drone, Fashion & Event coverage" },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{service.name}</h3>
                <p className="text-sm text-zinc-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose ALT */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-sky-400">Why Choose ALT?</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-emerald-400 flex items-center justify-center text-2xl">
                🔍
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Search</h3>
                <p className="text-zinc-300">
                  Find exactly what you're looking for with our advanced filtering system. 
                  Filter by location, price range, ratings, availability dates, and more.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-amber-400 flex items-center justify-center text-2xl">
                ⭐
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
                <p className="text-zinc-300">
                  Make informed decisions with authentic reviews and ratings from real customers 
                  who have used these services.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-sky-400 flex items-center justify-center text-2xl">
                🔒
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-zinc-300">
                  Your data and payments are protected with industry-standard security measures. 
                  Book with confidence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 via-emerald-400 to-amber-300 flex items-center justify-center text-2xl">
                🚀
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Easy Booking Process</h3>
                <p className="text-zinc-300">
                  From discovery to booking, our streamlined process makes planning your event 
                  simple and stress-free.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-sky-900/30 via-emerald-900/30 to-amber-900/30 border border-zinc-800 rounded-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
            Whether you're planning an event or offering services, ALT is here to help you 
            succeed. Join thousands of satisfied users today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search"
              className="px-6 py-3 bg-gradient-to-r from-sky-500 via-emerald-400 to-amber-300 text-black font-semibold rounded-full hover:shadow-lg transition"
            >
              Browse Services
            </Link>
            <Link
              href="/add-venue"
              className="px-6 py-3 bg-zinc-800 border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-700 transition"
            >
              List Your Service
            </Link>
          </div>
        </motion.section>

        {/* Contact/Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center text-zinc-400 text-sm"
        >
          <p>
            Have questions? <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline">Contact us</Link> or 
            check out our <Link href="/terms" className="text-sky-400 hover:text-sky-300 underline">Terms</Link> and{" "}
            <Link href="/privacy" className="text-sky-400 hover:text-sky-300 underline">Privacy Policy</Link>.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

