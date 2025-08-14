export const siteConfig = {
  name: "EComShop", // Change this to your site name
  description: "An e-commerce website template with customizable features",
  logo: "/logo.svg", // Path to your logo
  url: "https://example.com", // Your website URL
  ogImage: "/og-image.png", // Open Graph image
  links: {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourusername",
  },
  contact: {
    email: "contact@example.com",
    phone: "+1 (123) 456-7890",
    address: "123 Main St, City, Country",
  },
  payment: {
    currency: "USD",
    currencySymbol: "$",
  },
  features: {
    categories: true,
    search: true,
    cart: true,
    wishlist: true,
    reviews: true,
    userAccounts: true,
  },
  shipping: {
    enabled: true,
    free: false,
    freeThreshold: 50, // Free shipping above $50
  },
  // Social media links
  social: [
    { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
  ],
} 