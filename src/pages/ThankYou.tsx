import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";

declare global {
  interface Window {
    fbq: (action: string, event: string, params?: Record<string, unknown>) => void;
  }
}

const ThankYou = () => {
  useEffect(() => {
    // Fire Facebook Pixel Lead event
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <CheckCircle className="w-24 h-24 text-coral mx-auto" />
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Thank You!
            </h1>

            <p className="text-lg text-muted-foreground mb-4">
              Your quote request has been successfully submitted.
            </p>

            <p className="text-muted-foreground mb-8">
              Our team will review your details and get back to you within 24 hours with a
              personalized quote for your event. We're excited to help make your celebration
              unforgettable!
            </p>

            <div className="bg-secondary/30 rounded-lg p-6 mb-8">
              <h2 className="font-display text-xl text-primary mb-3">What happens next?</h2>
              <ul className="text-left text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-coral font-semibold">1.</span>
                  We'll review your event details carefully
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral font-semibold">2.</span>
                  Our team will prepare a customized quote
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral font-semibold">3.</span>
                  You'll receive an email with your personalized proposal
                </li>
              </ul>
            </div>

            <Link to="/">
              <Button variant="coral" size="lg">
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
