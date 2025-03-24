"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Image from "next/image";

export default function ContactPage() {
  const [mapLoaded, setMapLoaded] = useState(false);

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] // Custom cubic bezier for smooth acceleration/deceleration
      }
    }
  };

  // Phone numbers with WhatsApp links
  const phoneNumbers = [
    { number: "0244900392", whatsapp: "233244900392" },
    { number: "0243781222", whatsapp: "233243781222" },
    { number: "0209711112", whatsapp: "233209711112" },
    { number: "0266624277", whatsapp: "233266624277" }
  ];
  const facebookLink = "#";

  // Google Maps integration
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {/* Hero section with background image */}
   
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/background/cashew.jpg" 
            alt="Agricultural fields"
            width={1920}
            height={600}
            className="object-cover w-full h-full opacity-20 dark:opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background"></div>
        </div>
        
        <div className="container relative z-10 pt-24 pb-16 mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
         <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90 mb-8">
              Connect with Hajj A.M JACK FI COMPANY LTD for all your agricultural commodity needs. 
              Our team is ready to assist you with any inquiries.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Find Us
              </Button>

          </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Main content */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Map section */}
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-none h-max">
                <CardHeader>
                  <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                  <CardDescription className="">
                    We're located in a convenient location for our farming partners
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full h-full min-h-[400px]">
                    {mapLoaded ? (
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2453.723855983478!2d-0.8332744392263001!3d9.374765128280933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjInMjguOSJOIDDCsDQ5JzU5LjYiVw!5e1!3m2!1sen!2sgh!4v1742665351000!5m2!1sen!2sgh" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-muted flex items-center justify-center">
                        <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <a 
                      href="https://maps.app.goo.gl/71wugryrS9VG2Xox9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors duration-300 shadow-md"
                    >
                      <MapPin className="mr-2 h-5 w-5" />
                      Open in Google Maps
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact information */}
            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <Card className="border-none overflow-hidden shadow-none">
                  <CardHeader className="">
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                    <CardDescription className="">
                      Reach out through any of our contact channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="p-6 space-y-6">
                      <div className="grid gap-8">
                        {/* Phone numbers with call/WhatsApp options */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                            <Phone className="w-5 h-5 text-primary mr-2" />
                            Phone Numbers
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {phoneNumbers.map((phone, index) => (
                              <div 
                                key={index}
                                className="transition-shadow p-4"
                              >
                                <p className="text-lg font-bold text-card-foreground mb-3 ">{phone.number}</p>
                                <div className="flex space-x-2">
                                  <a 
                                    href={`tel:${phone.number}`}
                                    className="flex items-center justify-center flex-1 py-2 px-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm rounded transition-colors"
                                  >
                                    <Phone className="mr-1 h-4 w-4" />
                                    Call
                                  </a>
                                  <a 
                                    href={`https://wa.me/${phone.whatsapp}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center flex-1 py-2 px-3 bg-accent hover:bg-accent/90 text-accent-foreground text-sm rounded transition-colors"
                                  >
                                    <IconBrandWhatsapp className="mr-1 h-4 w-4" />
                                    WhatsApp
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                            <Mail className="w-5 h-5 text-primary mr-2" />
                            Email
                          </h3>
                          <div className="transition-shadow p-4">
                            <p className="text-lg font-medium text-card-foreground mb-3">hajjmanan3@gmail.com</p>
                            <a 
                              href="mailto:hajjmanan3@gmail.com"
                              className="flex items-center justify-center py-2 px-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded transition-colors w-full sm:w-auto"
                            >
                              <Send className="mr-2 h-4 w-4" />
                              Send Email
                            </a>
                          </div>
                        </div>

                        {/* Business Hours */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                            <Clock className="w-5 h-5 text-primary mr-2" />
                            Business Hours
                          </h3>
                          <div className="p-4">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Monday - Friday</span>
                                <span className="font-medium text-card-foreground">8:00 AM - 5:00 PM</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Saturday</span>
                                <span className="font-medium text-card-foreground">9:00 AM - 5:00 PM</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Sunday</span>
                                <span className="font-medium text-card-foreground">Closed</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={itemVariants}>
                <Card className="border-none shadow-none overflow-hidden">
                  <CardHeader className="">
                    <CardTitle className="text-2xl">Connect With Us</CardTitle>
                    <CardDescription className="">
                      Stay updated with our latest products and offerings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="py-4 flex justify-center space-x-6">
                      <Button variant="outline" size="lg" className="rounded-full p-0 w-14 h-14 flex items-center justify-center border-2 border-secondary/50 hover:border-primary hover:bg-secondary/20 transition-all duration-300">
                      <a href={`https://wa.me/${phoneNumbers[1].whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                        </a>
                      </Button>
                    
                      <Button variant="outline" size="lg" className="rounded-full p-0 w-14 h-14 flex items-center justify-center border-2 border-secondary/50 hover:border-primary hover:bg-secondary/20 transition-all duration-300">
                        <a href={facebookLink}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                       
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-background/0 to-background py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-muted" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}></div>
        <div 
          className="absolute inset-0 bg-cover bg-center  opacity-10" 
          style={{ backgroundImage: "url('/background/cashew.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-lg mb-8 text-foreground/80">
              Whether you're a buyer looking for quality agricultural commodities or a farmer seeking market access, 
              Hajj A.M JACK FI COMPANY LTD is your trusted partner in the agricultural supply chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0244900392" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
              <a 
                href="mailto:hajjmanan3@gmail.com" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>
    </main>
  );
}