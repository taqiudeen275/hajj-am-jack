"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Users, 
  Building, 
  Target, 
  Heart, 
  ShieldCheck, 
  GanttChartSquare, 
  HandHeart, 
  BarChart4
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/background/maize.jpg" 
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
            <Badge className="mb-4" variant="outline">About Us</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
              Our Journey in Agricultural Excellence
            </h1>
            <p className="text-xl text-muted-foreground">
              Connecting farmers and markets through quality agricultural commodities since our founding.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-muted/30 px-4">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col justify-center"
            >
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hajj A.M JACK FI COMPANY LTD was founded with a vision to create sustainable market access for agricultural products in our region. What began as a small trading operation has grown into a respected name in the commodity supply industry.
                </p>
                <p>
                  Our journey started by working directly with local farmers, helping them access larger markets for their quality produce. As we grew, we expanded our product range to include sheanut, cashew nuts, groundnut, maize, soybeans, cowpeas, and various other agricultural commodities.
                </p>
                <p>
                  Today, we take pride in being a vital link between farming communities and markets, ensuring fair prices for farmers while supplying high-quality agricultural products to our customers.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative min-h-[400px]"
            >
              <Image
                src="/api/placeholder/800/600" 
                alt="Hajj A.M JACK FI company history"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl text-foreground">
              Our Mission & Values
            </h2>
            <p className="text-xl text-muted-foreground">
              Driven by a commitment to agricultural excellence and community support
            </p>
          </motion.div>
          
          <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
              <TabsTrigger value="values">Our Values</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mission" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    <span>Our Mission</span>
                  </CardTitle>
                  <CardDescription>What drives us every day</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    At Hajj A.M JACK FI COMPANY LTD, our mission is to provide high-quality agricultural commodities while supporting local farming communities and ensuring fair trade practices throughout our supply chain.
                  </p>
                  <p>
                    We strive to:
                  </p>
                  <ul className="pl-6 space-y-2 list-disc">
                    <li>Connect farmers with profitable markets for their produce</li>
                    <li>Deliver exceptional quality products to our buyers</li>
                    <li>Promote sustainable agricultural practices</li>
                    <li>Contribute to rural economic development</li>
                    <li>Build long-term relationships based on trust and reliability</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="values" className="mt-6">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-6 md:grid-cols-2"
              >
                <ValueCard 
                  icon={<ShieldCheck className="w-6 h-6 text-primary" />}
                  title="Quality Assurance"
                  description="We maintain strict quality control standards for all our agricultural commodities, ensuring only the best products reach our customers."
                />
                <ValueCard 
                  icon={<HandHeart className="w-6 h-6 text-primary" />}
                  title="Farmer Partnerships"
                  description="We believe in ethical sourcing and fair compensation, working closely with farmers to improve their livelihoods."
                />
                <ValueCard 
                  icon={<Heart className="w-6 h-6 text-primary" />}
                  title="Customer Satisfaction"
                  description="We deliver products that meet or exceed expectations, building lasting relationships with our clients."
                />
                <ValueCard 
                  icon={<Leaf className="w-6 h-6 text-primary" />}
                  title="Sustainability"
                  description="We promote environmentally responsible farming practices that preserve natural resources for future generations."
                />
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl text-foreground">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet the experts who drive our vision forward
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <TeamMember
              name="A.M. Jack"
              position="Founder & CEO"
              imageSrc="/background/ceo.jpg"
              bio="With over 10 years of experience in agricultural trade, our founder has built Hajj A.M JACK FI COMPANY LTD on the principles of quality and integrity."
            />
            
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            <StatCard number="5+" text="Years of Experience" />
            <StatCard number="50+" text="Farmer Partners" />
            <StatCard number="10+" text="Retailers Served" />
            <StatCard number="2,500+" text="Tons Supplied Annually" />
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl p-8 mx-auto text-center rounded-2xl bg-card shadow-sm"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl text-foreground">
              Become Our Partner
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Whether you're a farmer looking to sell your produce or a buyer seeking quality agricultural commodities, we'd love to work with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-6 py-3 text-lg font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors">
                Contact Us
              </a>
            
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Component for individual value cards
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <motion.div variants={fadeIn} className="p-6 rounded-xl bg-card shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-primary/10">
          {icon}
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Component for team members
interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
  bio: string;
}

const TeamMember = ({ name, position, imageSrc, bio }: TeamMemberProps) => {
  return (
    <motion.div variants={fadeIn} className="overflow-hidden rounded-xl bg-card shadow-sm">
      <div className="relative h-64">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-xl font-bold text-foreground">{name}</h3>
        <p className="mb-4 text-primary">{position}</p>
        <p className="text-muted-foreground">{bio}</p>
      </div>
    </motion.div>
  );
};

// Component for stat cards
interface StatCardProps {
  number: string;
  text: string;
}

const StatCard = ({ number, text }: StatCardProps) => {
  return (
    <motion.div 
      variants={fadeIn}
      className="p-8 text-center rounded-xl bg-card shadow-sm"
    >
      <div className="text-4xl font-bold text-primary">{number}</div>
      <p className="mt-2 text-lg text-muted-foreground">{text}</p>
    </motion.div>
  );
};

// Leaf icon component for Values section
const Leaf = ({ className }: { className: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
};