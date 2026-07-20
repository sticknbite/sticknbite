import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import cateringImage from "@/assets/carousel-5.jpg";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address (e.g., name@example.com)").max(255),
  phone: z.string().trim().min(1, "Phone is required").regex(/^\d+$/, "Phone number must contain only numbers").max(20),
  guests: z.string().trim().min(1, "Number of guests is required"),
  eventDate: z.string().min(1, "Event date is required"),
  location: z.string().trim().min(1, "Location is required").max(200),
  package: z.string().min(1, "Package is required"),
  barCatering: z.string().min(1, "Please select an option"),
  message: z.string().trim().min(1, "Please tell us about your event").max(1000),
});

// Generate random math challenge
const generateMathChallenge = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { num1, num2, answer: num1 + num2 };
};

const QuoteForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    eventDate: "",
    location: "",
    package: "",
    barCatering: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Math captcha state
  const [mathChallenge, setMathChallenge] = useState(generateMathChallenge);
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  // Capture UTM parameters
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  useEffect(() => {
    setUtmParams({
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_term: searchParams.get("utm_term") || "",
      utm_content: searchParams.get("utm_content") || "",
    });
  }, [searchParams]);

  const handleChange = (field: string, value: string) => {
    // For phone field, only allow numbers
    if (field === "phone") {
      value = value.replace(/\D/g, "");
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate math captcha first
    const userAnswer = parseInt(captchaAnswer, 10);
    if (isNaN(userAnswer) || userAnswer !== mathChallenge.answer) {
      setErrors({ captcha: "Incorrect answer. Please try again." });
      // Generate new challenge on wrong answer
      setMathChallenge(generateMathChallenge());
      setCaptchaAnswer("");
      return;
    }

    // Validate form
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Validate minimum guests
    const guestsNum = parseInt(formData.guests, 10);
    if (isNaN(guestsNum) || guestsNum < 20) {
      setErrors({ guests: "Minimum 20 guests required" });
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        ...formData,
        ...utmParams,
        timestamp: new Date().toISOString(),
        page_url: window.location.href,
      };

      await fetch("https://hook.us1.make.com/8x6i8jk6991n9uhwrmcuwmy1w5t9fq2t", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      // Navigate to confirmation page
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="quote" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Get Your Quote Now
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Let us help you create the event of your dreams with our exclusive catering
              service. Provide some details and we'll send you a tailored quote.
            </p>
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <img
                src={cateringImage}
                alt="Professional catering service"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <Label htmlFor="name" className="text-foreground">
                Name <span className="text-coral">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="mt-1 bg-secondary/50 border-secondary"
                placeholder="Your full name"
              />
              {errors.name && <p className="text-coral text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">
                Email <span className="text-coral">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="mt-1 bg-secondary/50 border-secondary"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-coral text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground">
                Phone number <span className="text-coral">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="mt-1 bg-secondary/50 border-secondary"
                placeholder="5551234567"
              />
              {errors.phone && <p className="text-coral text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Label htmlFor="guests" className="text-foreground">
                Number of guests (minimum 20) <span className="text-coral">*</span>
              </Label>
              <Input
                id="guests"
                type="number"
                min="20"
                value={formData.guests}
                onChange={(e) => handleChange("guests", e.target.value)}
                className="mt-1 bg-secondary/50 border-secondary"
                placeholder="20"
              />
              {errors.guests && <p className="text-coral text-sm mt-1">{errors.guests}</p>}
            </div>

            <div>
              <Label htmlFor="eventDate" className="text-foreground">
                Event date <span className="text-coral">*</span>
              </Label>
              <Input
                id="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => handleChange("eventDate", e.target.value)}
                className="mt-1 bg-secondary/50 border-secondary"
              />
              {errors.eventDate && <p className="text-coral text-sm mt-1">{errors.eventDate}</p>}
            </div>

            <div>
              <Label htmlFor="location" className="text-foreground">
                Location <span className="text-coral">*</span>
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                className="mt-1 bg-secondary/50 border-secondary"
                placeholder="Event location"
              />
              {errors.location && <p className="text-coral text-sm mt-1">{errors.location}</p>}
            </div>

            <div>
              <Label htmlFor="package" className="text-foreground">
                Package <span className="text-coral">*</span>
              </Label>
              <Select
                value={formData.package}
                onValueChange={(value) => handleChange("package", value)}
              >
                <SelectTrigger className="mt-1 bg-secondary/50 border-secondary">
                  <SelectValue placeholder="Select a package" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic ($45/person)</SelectItem>
                  <SelectItem value="classic">Classic ($60/person)</SelectItem>
                  <SelectItem value="premium">Premium ($75/person)</SelectItem>
                </SelectContent>
              </Select>
              {errors.package && <p className="text-coral text-sm mt-1">{errors.package}</p>}
            </div>

            <div>
              <Label className="text-foreground">
                Are you interested in receiving a bar catering quote from our partner? <span className="text-coral">*</span>
              </Label>
              <Select
                value={formData.barCatering}
                onValueChange={(value) => handleChange("barCatering", value)}
              >
                <SelectTrigger className="mt-1 bg-secondary/50 border-secondary">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes, please">Yes, please</SelectItem>
                  <SelectItem value="Not at this time">Not at this time</SelectItem>
                </SelectContent>
              </Select>
              {errors.barCatering && <p className="text-coral text-sm mt-1">{errors.barCatering}</p>}
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground">
                Tell us a bit more about your event <span className="text-coral">*</span>
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="mt-1 bg-secondary/50 border-secondary min-h-[120px]"
                placeholder="Tell us about your event, special requests, dietary restrictions..."
              />
              {errors.message && <p className="text-coral text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Math Captcha */}
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <Label htmlFor="captcha" className="text-foreground font-medium">
                Security check <span className="text-coral">*</span>
              </Label>
              <p className="text-muted-foreground text-sm mt-1 mb-3">
                Please solve: <span className="font-semibold text-foreground">{mathChallenge.num1} + {mathChallenge.num2} = ?</span>
              </p>
              <Input
                id="captcha"
                type="number"
                value={captchaAnswer}
                onChange={(e) => {
                  setCaptchaAnswer(e.target.value);
                  if (errors.captcha) {
                    setErrors((prev) => ({ ...prev, captcha: "" }));
                  }
                }}
                className="bg-secondary/50 border-secondary w-32"
                placeholder="Answer"
              />
              {errors.captcha && <p className="text-coral text-sm mt-1">{errors.captcha}</p>}
            </div>

            <Button
              type="submit"
              variant="coral"
              size="xl"
              className="w-full md:w-auto"
              disabled={isLoading}
            >
              {isLoading ? "SUBMITTING..." : "SUBMIT"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
