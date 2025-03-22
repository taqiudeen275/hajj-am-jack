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
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [mapLoaded, setMapLoaded] = useState(false);

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
      <section className="relative bg-green-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Find Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#f8fafc" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Map section */}
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-xl h-full">
                <CardHeader className="bg-gradient-to-r from-green-700 to-green-900 text-white">
                  <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                  <CardDescription className="text-green-100">
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
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <svg className="animate-spin h-10 w-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                      className="flex items-center justify-center w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors duration-300 shadow-md"
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
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-700 to-green-900 text-white">
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                    <CardDescription className="text-green-100">
                      Reach out through any of our contact channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="p-6 space-y-6">
                      <div className="grid gap-8">
                        {/* Phone numbers with call/WhatsApp options */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <Phone className="w-5 h-5 text-green-600 mr-2" />
                            Phone Numbers
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {phoneNumbers.map((phone, index) => (
                              <div 
                                key={index}
                                className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4"
                              >
                                <p className="text-lg font-medium text-gray-800 mb-3">{phone.number}</p>
                                <div className="flex space-x-2">
                                  <a 
                                    href={`tel:${phone.number}`}
                                    className="flex items-center justify-center flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                                  >
                                    <Phone className="mr-1 h-4 w-4" />
                                    Call
                                  </a>
                                  <a 
                                    href={`https://wa.me/${phone.whatsapp}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center flex-1 py-2 px-3 bg-green-500 hover:bg-green-600 text-white text-sm rounded transition-colors"
                                  >
                                    <MessageSquare className="mr-1 h-4 w-4" />
                                    WhatsApp
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <Mail className="w-5 h-5 text-green-600 mr-2" />
                            Email
                          </h3>
                          <div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4">
                            <p className="text-lg font-medium text-gray-800 mb-3">hajjmanan3@gmail.com</p>
                            <a 
                              href="mailto:hajjmanan3@gmail.com"
                              className="flex items-center justify-center py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded transition-colors w-full sm:w-auto inline-block"
                            >
                              <Send className="mr-2 h-4 w-4" />
                              Send Email
                            </a>
                          </div>
                        </div>

                        {/* Business Hours */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <Clock className="w-5 h-5 text-green-600 mr-2" />
                            Business Hours
                          </h3>
                          <div className="bg-white rounded-lg border border-gray-100 shadow-md p-4">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-gray-700">Monday - Friday</span>
                                <span className="font-medium">8:00 AM - 5:00 PM</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-700">Saturday</span>
                                <span className="font-medium">9:00 AM - 2:00 PM</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-700">Sunday</span>
                                <span className="font-medium">Closed</span>
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
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-700 to-green-900 text-white">
                    <CardTitle className="text-2xl">Connect With Us</CardTitle>
                    <CardDescription className="text-green-100">
                      Stay updated with our latest products and offerings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="py-4 flex justify-center space-x-6">
                      <Button variant="outline" size="lg" className="rounded-full p-0 w-14 h-14 flex items-center justify-center border-2 border-green-200 hover:border-green-600 hover:bg-green-50 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-green-600" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                      </Button>
                      <Button variant="outline" size="lg" className="rounded-full p-0 w-14 h-14 flex items-center justify-center border-2 border-green-200 hover:border-green-600 hover:bg-green-50 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-green-600" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </Button>
                      <Button variant="outline" size="lg" className="rounded-full p-0 w-14 h-14 flex items-center justify-center border-2 border-green-200 hover:border-green-600 hover:bg-green-50 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-green-600" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </Button>
                      <Button variant="outline" size="lg" className="rounded-full p-0 w-14 h-14 flex items-center justify-center border-2 border-green-200 hover:border-green-600 hover:bg-green-50 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-green-600" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
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
      <section className="bg-gradient-to-r from-green-700 to-green-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-slate-50" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}></div>
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-10" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-lg mb-8 text-green-100">
              Whether you're a buyer looking for quality agricultural commodities or a farmer seeking market access, 
              Hajj A.M JACK FI COMPANY LTD is your trusted partner in the agricultural supply chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0244900392" 
                className="bg-white text-green-800 hover:bg-green-100 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
              <a 
                href="mailto:hajjmanan3@gmail.com" 
                className="bg-green-600 hover:bg-green-500 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>
    </main>
  );
}