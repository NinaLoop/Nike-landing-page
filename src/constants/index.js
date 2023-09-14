import {
  facebook,
  twitter,
  instagram,
  pinterest,
  truckFast,
  securePayment,
  supportAgent,
} from "../assets/Icons";

import {
  HeroImg,
  Shoe1,
  Shoe2,
  Shoe3,
  Shoe1Big,
  Shoe2Big,
  Shoe3Big,
} from "../assets/Images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#sales", label: "Sales" },
  { href: "#contact-us", label: "Contact Us" },
];

export const products = [
  {
    thumbnail: Shoe1,
    imgURL: Shoe1Big,
    name: "Nike Air XXX",
    price: "$200",
  },
  {
    thumbnail: Shoe2,
    imgURL: Shoe2Big,
    name: "Nike Force XXX",
    price: "$220",
  },
  {
    thumbnail: Shoe3,
    imgURL: Shoe3Big,
    name: "Nike Air XXX",
    price: "$199",
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "200+", label: "Shops" },
  { value: "700k+", label: "Customers" },
];
export const links = [
  {
    title: "Customer Service",
    links: [
      "Contact us",
      "FAQs",
      "Orders and delivery",
      "Returns and refunds",
      "Payment and pricing",
      "Privacy policy",
    ],
  },
  {
    title: "About Nike",
    links: ["About us", "Careers", "Nike apps"],
  },
];
export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
  { src: pinterest, alt: "pinterest logo" },
];

export const reviews = [
  {
    name: "Sarah",
    rating: "5",
    feedback:
      "I absolutely love my new Nike shoes! They are not only stylish but also incredibly comfortable",
  },
  {
    name: "James",
    rating: "4.9",
    feedback:
      "I've been a fan of Nike for years, and their shoes never disappoint. The latest pair I bought is no exception. The design is on point, and the build quality is top-notch",
  },
  {
    name: "Emily",
    rating: "4.5",
    feedback:
      "I'm always on my feet at work, and comfort is crucial for me. That's why I trust Nike shoes. They offer the best combination of support and style",
  },
];
export const features = [
  {
    imgURL: truckFast,
    title: "Free Shipping",
    decription: "Make your shopping experience even more budget-friendly",
  },
  {
    imgURL: securePayment,
    title: "Secure Payment",
    decription: "Ensure your financial information stays safe",
  },
  {
    imgURL: supportAgent,
    title: "Support",
    decription:
      "Our dedicated support agents are here 24/7 to assist you with any questions or concerns",
  },
];
