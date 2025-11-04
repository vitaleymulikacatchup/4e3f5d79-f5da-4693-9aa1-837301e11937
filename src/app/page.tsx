"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Mail, Sparkles, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Artisan Bakery"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Fresh Baked Daily"
          description="Experience the finest artisan breads, pastries, and confections crafted with traditional methods and premium ingredients."
          tag="Artisan Quality"
          tagIcon={Award}
          buttons={[
            { text: "View Menu", href: "products" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/6314908/pexels-photo-6314908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Through glass of assorted delicious desserts with prices placed on metal display of bakery shop on street on blurred background"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded with a passion for traditional baking methods, we bring you the authentic taste of artisan breads and pastries.",
            "Every loaf is handcrafted using time-honored techniques and the finest locally-sourced ingredients."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Specialties"
          description="Discover our handcrafted selection of breads, pastries, and seasonal treats"
          tag="Fresh Daily"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              name: "Artisan Croissants",
              price: "$3.50",
              imageSrc: "https://images.pexels.com/photos/6205522/pexels-photo-6205522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Crop anonymous female employee in apron putting tasty pastries with tongs on plate in bakery"
            },
            {
              id: "2",
              name: "Sourdough Loaf",
              price: "$7.00",
              imageSrc: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Freshly sliced whole grain bread with oats and flour provides a rustic and nutritious appeal."
            },
            {
              id: "3",
              name: "Seasonal Pastries",
              price: "$4.25",
              imageSrc: "https://images.pexels.com/photos/2337772/pexels-photo-2337772.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Vibrant circus-themed dessert table with cakes and pastries, perfect for parties."
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from our valued customers"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Local Resident",
              company: "Downtown",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Positive young woman in uniform smiling while standing at counter desk in cafe"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Food Blogger",
              company: "Culinary Reviews",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A man enjoying a hair wash with his eyes closed, experiencing relaxation at a barber shop."
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Regular Customer",
              company: "Eastside",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3985083/pexels-photo-3985083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A father and daughter share a bonding moment choosing donuts at an indoor supermarket."
            },
            {
              id: "4",
              name: "David Kim",
              role: "Chef",
              company: "Local Restaurant",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Positive young woman in uniform smiling while standing at counter desk in cafe"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our bakery"
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Tuesday through Sunday, 7:00 AM to 6:00 PM. Closed Mondays for preparation."
            },
            {
              id: "2",
              title: "Do you take custom orders?",
              content: "Yes! We accept custom orders for cakes, bread, and pastries. Please place orders at least 48 hours in advance."
            },
            {
              id: "3",
              title: "What ingredients do you use?",
              content: "We use organic flour, locally sourced dairy, and seasonal ingredients whenever possible. All our products are made fresh daily."
            },
            {
              id: "4",
              title: "Do you offer gluten-free options?",
              content: "Yes, we have a selection of gluten-free breads and pastries available daily. Please ask our staff for current options."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated"
          description="Subscribe to receive updates about seasonal specials, new products, and baking tips from our master bakers."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our weekly newsletter. Unsubscribe at any time."
          imageSrc="https://images.pexels.com/photos/6314908/pexels-photo-6314908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Through glass of assorted delicious desserts with prices placed on metal display of bakery shop on street on blurred background"
          mediaPosition="left"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Bakery",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Products", href: "products" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "Hours", href: "hours" },
                { label: "Location", href: "location" },
                { label: "Catering", href: "catering" }
              ]
            }
          ]}
          copyrightText="© 2025 | Artisan Bakery"
        />
      </div>
    </ThemeProvider>
  );
}