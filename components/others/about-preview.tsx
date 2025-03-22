"use client";
import { Bean, Leaf, Truck, Users, ShoppingBag } from "lucide-react";
import { GlowingEffect } from "../acernity/glowing-effects";

export function CompanyAboutPreview() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">About Hajj A.M JACK FI COMPANY LTD</h2>
      
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[38rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Bean className="h-5 w-5 text-primary dark:text-primary" />}
          title="Premium Agricultural Products"
          description="We source and supply the highest quality sheanut, cashew nuts, groundnut, maize, soybeans, and cowpeas to local and international markets."
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Leaf className="h-5 w-5 text-primary dark:text-primary" />}
          title="Supporting Local Farmers"
          description="We work directly with farming communities to ensure fair prices and sustainable agricultural practices while maintaining consistent product quality."
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Users className="h-5 w-5 text-primary dark:text-primary" />}
          title="Our Experienced Team"
          description="With years of industry expertise, our team brings deep knowledge of agricultural commodities and supply chain management to every transaction."
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Truck className="h-5 w-5 text-primary dark:text-primary" />}
          title="Reliable Distribution Network"
          description="Our established logistics network ensures timely delivery of commodities to buyers while providing reliable market access for farmers."
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<ShoppingBag className="h-5 w-5 text-primary dark:text-primary" />}
          title="Commitment to Quality"
          description="Every product undergoes rigorous quality control to meet or exceed international standards, building trust with our customers worldwide."
        />
      </ul>
      
      <div className="mt-10 text-center">
        <a href="/about" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Learn More About Us
        </a>
      </div>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-0.75 p-6 bg-card shadow-sm dark:shadow-md">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-primary/30 bg-primary/10 p-3">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-semibold font-sans -tracking-tight md:text-2xl text-balance text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm md:text-base text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};