"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

const phone = process.env.NEXT_PUBLIC_PHONE ?? "+447123456789";
const email = process.env.NEXT_PUBLIC_EMAIL ?? "hello@geekgringrowth.com";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? "447123456789";

const contactOptions = [
  {
    icon: Phone,
    label: "Call us",
    href: `tel:${phone}`,
    color: "bg-green-500 hover:bg-green-600",
    delay: 0.1,
  },
  {
    icon: Mail,
    label: "Email us",
    href: `mailto:${email}`,
    color: "bg-blue-500 hover:bg-blue-600",
    delay: 0.15,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: `https://wa.me/${whatsapp}?text=Hi%2C%20I%27d%20like%20to%20discuss%20marketing%20for%20my%20salon.`,
    color: "bg-emerald-500 hover:bg-emerald-600",
    delay: 0.2,
  },
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-3 mb-2"
          >
            {contactOptions.map((option) => (
              <motion.a
                key={option.label}
                href={option.href}
                target={option.label === "WhatsApp" ? "_blank" : undefined}
                rel={
                  option.label === "WhatsApp"
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, x: 20, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.5 }}
                transition={{
                  duration: 0.2,
                  delay: option.delay,
                  ease: "easeOut",
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-full text-white shadow-lg ${option.color} transition-all duration-200 group`}
              >
                <option.icon className="w-5 h-5" />
                <span className="text-sm font-medium whitespace-nowrap">
                  {option.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-foreground text-background"
            : "bg-accent text-white pulse-ring"
        }`}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
