"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Search,
  Instagram,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Star,
  Sparkles,
  ChevronRight,
  Scissors,
  Target,
  Zap,
  Users,
} from "lucide-react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import FloatingContact from "./components/FloatingContact";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─── Data ─── */
const services = [
  {
    icon: TrendingUp,
    title: "Conversion Optimisation",
    desc: "Turn website visitors into booked appointments with data-driven landing pages and booking flows.",
  },
  {
    icon: Search,
    title: "SEO & Local Visibility",
    desc: "Dominate Google Maps and local search so nearby clients find you first, every time.",
  },
  {
    icon: Instagram,
    title: "Instagram-to-Booking Funnels",
    desc: "Transform your social media presence into a consistent stream of new client bookings.",
  },
  {
    icon: BarChart3,
    title: "Revenue Growth Strategies",
    desc: "Increase average client value and lifetime retention through strategic digital touchpoints.",
  },
];

const caseStudies = [
  {
    salon: "Headmasters",
    metric: "+42%",
    metricLabel: "Booking Conversions",
    problem: "Low website-to-booking conversion rate despite strong foot traffic.",
    solution:
      "Redesigned the booking funnel with conversion-optimised landing pages and streamlined the online appointment system.",
    result:
      "42% increase in online bookings within 3 months, with 28% reduction in booking abandonment.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    salon: "TONI&GUY",
    metric: "+67%",
    metricLabel: "Local Search Traffic",
    problem:
      "Inconsistent local search presence across multiple London locations.",
    solution:
      "Implemented hyperlocal SEO strategy with optimised Google Business profiles and location-specific content.",
    result:
      "67% increase in local search visibility and 35% growth in direction requests.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },
  {
    salon: "Ezmir Jacob",
    metric: "+55%",
    metricLabel: "Instagram Conversions",
    problem:
      "Strong Instagram following but minimal conversion to actual appointments.",
    solution:
      "Built Instagram-to-booking funnel with optimised link-in-bio, story highlights, and retargeting campaigns.",
    result:
      "55% increase in Instagram-driven bookings and 3x ROI on social ad spend.",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
  },
];

const clients = [
  "Headmasters",
  "TONI&GUY",
  "Ezmir Jacob",
  "Prestige Hair",
];

const stats = [
  { value: "150+", label: "Campaigns Delivered" },
  { value: "42%", label: "Avg. Conversion Lift" },
  { value: "£2.4M", label: "Revenue Generated" },
  { value: "30+", label: "Salons Served" },
];

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingContact />

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=80"
            alt="Luxury hair salon interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-0 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              London&apos;s #1 Salon Marketing Specialist
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Helping London salons{" "}
              <span className="gradient-text">increase bookings</span> &
              revenue
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
            >
              Conversion-focused digital strategies that turn clicks into
              clients. SEO, social funnels, and booking optimisation tailored
              for the salon industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/25 text-base"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#results"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300 text-base"
              >
                See Our Results
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 flex items-center gap-6 text-white/60 text-sm"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <span>Trusted by 30+ London salons</span>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════ STATS BAR ══════════ */}
      <Section className="relative -mt-16 z-10 max-w-5xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          custom={0}
          className="glass rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                {s.value}
              </div>
              <div className="text-sm text-text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* ══════════ SERVICES ══════════ */}
      <Section
        id="services"
        className="max-w-6xl mx-auto px-6 py-24 md:py-32"
      >
        <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            <Target className="w-4 h-4" />
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Strategic services that{" "}
            <span className="gradient-text">drive results</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Every strategy is built specifically for the salon industry —
            because generic marketing doesn&apos;t fill appointment books.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={fadeUp}
              custom={i}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <svc.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
              <p className="text-text-muted leading-relaxed">{svc.desc}</p>
              <div className="mt-5 flex items-center gap-1 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════════ CASE STUDIES ══════════ */}
      <Section
        id="results"
        className="bg-section-alt py-24 md:py-32"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <Zap className="w-4 h-4" />
              Proven Results
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Real growth for{" "}
              <span className="gradient-text">real salons</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              See how we&apos;ve helped leading London salons transform their
              digital presence into measurable revenue.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.salon}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto min-h-70">
                    <Image
                      src={cs.image}
                      alt={`${cs.salon} salon`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent md:bg-linear-to-r md:from-transparent md:to-transparent" />
                    <div className="absolute bottom-4 left-4 md:top-4 md:left-4 md:bottom-auto">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-foreground">
                        {cs.salon}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-5xl font-bold text-accent">
                        {cs.metric}
                      </span>
                      <span className="text-text-muted font-medium">
                        {cs.metricLabel}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
                          Challenge
                        </div>
                        <p className="text-foreground/80">{cs.problem}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
                          Solution
                        </div>
                        <p className="text-foreground/80">{cs.solution}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
                          Result
                        </div>
                        <p className="text-foreground/90 font-medium">
                          {cs.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════ CLIENTS ══════════ */}
      <Section id="clients" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            <Scissors className="w-4 h-4" />
            Our Clients
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="gradient-text">leading salons</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            We work exclusively with ambitious hair salons across London who are
            ready to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              custom={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-lg hover:border-accent/20 transition-all duration-300"
            >
              <span className="text-xl font-bold text-foreground/80 tracking-tight">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-center"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-accent text-accent"
              />
            ))}
          </div>
          <blockquote className="text-lg md:text-xl text-foreground/80 italic max-w-3xl mx-auto mb-6 leading-relaxed">
            &ldquo;Since working with GeekGrin Growth Studio, our online bookings
            have increased by over 40%. They truly understand the salon industry
            and deliver strategies that actually work.&rdquo;
          </blockquote>
          <div className="font-semibold">Sarah Mitchell</div>
          <div className="text-sm text-text-muted">
            Marketing Director, Headmasters London
          </div>
        </motion.div>
      </Section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <Section className="bg-section-alt py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <Users className="w-4 h-4" />
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Three steps to{" "}
              <span className="gradient-text">salon growth</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We learn about your salon, your goals, and your current marketing challenges in a free 30-minute consultation.",
              },
              {
                step: "02",
                title: "Custom Strategy",
                desc: "We build a tailored growth plan covering SEO, conversion optimisation, and social media funnels specific to your brand.",
              },
              {
                step: "03",
                title: "Launch & Scale",
                desc: "We execute the strategy, track results, and continuously optimise to maximize your bookings and revenue.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                custom={i}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-6xl font-bold text-accent/10 absolute top-4 right-6">
                  {item.step}
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-accent font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════ CONTACT / CTA ══════════ */}
      <Section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1600&q=80"
            alt="Premium salon"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              Limited Availability
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to grow your{" "}
            <span className="gradient-text">salon&apos;s revenue?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed"
          >
            Book a free 30-minute consultation and discover how we can help you
            increase bookings, boost conversions, and grow your salon&apos;s
            digital presence.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL ?? "hello@geekgringrowth.com"}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/25 text-lg"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE ?? "+447123456789"}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300 text-lg"
            >
              Call Now
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm"
          >
            {[
              "Free consultation",
              "No obligation",
              "Results guaranteed",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-foreground text-white/60 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">GG</span>
              </div>
              <span className="font-semibold text-white text-lg">
                GeekGrin<span className="text-accent">Growth</span>
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a href="#services" className="hover:text-accent transition-colors">
                Services
              </a>
              <a href="#results" className="hover:text-accent transition-colors">
                Results
              </a>
              <a href="#clients" className="hover:text-accent transition-colors">
                Clients
              </a>
              <a href="#contact" className="hover:text-accent transition-colors">
                Contact
              </a>
            </div>

            <div className="text-sm">
              © {new Date().getFullYear()} GeekGrin Growth Studio. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
