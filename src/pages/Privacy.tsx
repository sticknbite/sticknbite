import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | Stick'n'Bite";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-primary mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
              Last updated: September 10, 2026
            </p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <p>
                Stick'n'Bite LLC ("Stick'n'Bite," "we," "us," or "our") provides Brazilian BBQ
                catering services in San Diego County, Orange County, and Southern California.
                This Privacy Policy explains how we collect, use, and protect your information
                when you visit our website or submit a quote request.
              </p>

              <section>
                <h2 className="font-display text-2xl text-primary mb-4">
                  Information We Collect
                </h2>
                <p className="mb-4">
                  When you request a quote through our website, through a Facebook or Instagram
                  lead form, or by contacting us directly, we may collect:
                </p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your phone number</li>
                  <li>
                    Details about your event, including date, location, guest count, and package
                    preference
                  </li>
                  <li>
                    Any additional information you choose to share with us about your event
                  </li>
                </ul>
                <p className="mt-4">
                  We also automatically collect limited technical information when you visit our
                  website, including your IP address, browser type, device type, and pages viewed.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-4">
                  How We Use Your Information
                </h2>
                <p className="mb-4">We use the information you provide to:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Prepare and send you a customized catering quote</li>
                  <li>Contact you about your event and answer your questions</li>
                  <li>Coordinate and deliver catering services you have booked</li>
                  <li>
                    Send occasional updates about our services, if you have asked to receive them
                  </li>
                  <li>Improve our website and services</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information. We do not share it with third parties
                  for their own marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-4">
                  Advertising and Analytics
                </h2>
                <p className="mb-4">
                  Our website uses the Meta Pixel, a tool provided by Meta Platforms, Inc.
                  (Facebook and Instagram). This helps us understand how visitors use our site and
                  allows us to show relevant ads to people who have visited.
                </p>
                <p className="mb-4">
                  If you submit a lead form on Facebook or Instagram, Meta collects that
                  information and shares it with us so we can respond to your request. Meta's use
                  of your data is governed by Meta's own privacy policy, available at{" "}
                  <a
                    href="https://www.facebook.com/privacy/policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    facebook.com/privacy/policy
                  </a>
                  .
                </p>
                <p>
                  You can control how ads are personalized for you through your Facebook and
                  Instagram ad settings, and through your browser's privacy controls.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-4">Service Providers</h2>
                <p>
                  We use trusted third-party tools to run our business, including services for
                  website hosting, email, automation, and customer relationship management. These
                  providers only access your information as needed to perform their services for
                  us, and are required to keep it confidential.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-4">
                  How Long We Keep Your Information
                </h2>
                <p>
                  We keep quote requests and event details for as long as needed to serve you and
                  maintain our business records. If you would like us to delete your information,
                  contact us and we will do so, unless we are required to keep it for legal or
                  accounting reasons.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-4">Your Choices</h2>
                <p className="mb-4">You may:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Ask us what personal information we hold about you</li>
                  <li>Ask us to correct or delete your information</li>
                  <li>Ask us to stop contacting you</li>
                  <li>
                    Unsubscribe from any email we send, using the link in that email
                  </li>
                </ul>
                <p className="mt-4">
                  To make any of these requests, email us at{" "}
                  <a
                    href="mailto:contact@sticknbite.com"
                    className="text-gold hover:underline"
                  >
                    contact@sticknbite.com
                  </a>
                  . We will respond within 30 days.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-4">Children's Privacy</h2>
                <p>
                  Our services are intended for adults. We do not knowingly collect personal
                  information from anyone under 18. If you believe a child has provided us
                  information, please contact us and we will delete it.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-4">Security</h2>
                <p>
                  We take reasonable steps to protect the information you share with us. However,
                  no method of transmission over the internet is completely secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-4">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will revise
                  the "Last updated" date at the top of this page.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have questions about this Privacy Policy or how we handle your
                  information:
                </p>
                <div className="bg-secondary/30 rounded-lg p-6 space-y-1">
                  <p className="font-semibold text-primary">Stick'n'Bite LLC</p>
                  <p>
                    <a
                      href="mailto:contact@sticknbite.com"
                      className="text-gold hover:underline"
                    >
                      contact@sticknbite.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+16197937006" className="text-gold hover:underline">
                      (619) 793-7006
                    </a>
                  </p>
                  <p>3425 Hancock St, Ste 23</p>
                  <p>San Diego, CA 92110</p>
                </div>
              </section>
            </div>

            <div className="mt-12">
              <Link to="/">
                <Button variant="coral" size="lg">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
