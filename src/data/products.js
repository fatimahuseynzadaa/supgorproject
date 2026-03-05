
import bakery1 from '../assets/images/bakery-1.webp'
import bakery2 from '../assets/images/bakery-2.webp'
import bakery3 from '../assets/images/bakery-3.webp'
import bakery4 from '../assets/images/bakery-4.webp'
import bakery5 from '../assets/images/bakery-5.webp'
import baverage1 from '../assets/images/baverages-1.webp'
import baverage2 from '../assets/images/baverages-2.png'
import baverage3 from '../assets/images/baverages-3.webp'
import baverage4 from '../assets/images/baverages-4.webp'
import dairy1 from '../assets/images/dairy-1.webp'
import dairy2 from '../assets/images/dairy-2.webp'
import dairy3 from '../assets/images/dairy-3.webp'
import dairy4 from '../assets/images/dairy-4.webp'
import snacks1 from '../assets/images/snacks-1.webp'
import snacks2 from '../assets/images/snacks-2.png'
import snacks3 from '../assets/images/snacks-3.webp'
import snacks4 from '../assets/images/snacks-4.webp'
import frozen1 from '../assets/images/frozen-1.webp'
import frozen2 from '../assets/images/frozen-2.webp'
import frozen3 from '../assets/images/frozen-3.webp'
import health1 from '../assets/images/health-1.webp'
import health2 from '../assets/images/health-2.webp'
import health3 from '../assets/images/health-3.webp'
import meat1 from '../assets/images/meat-1.webp'
import meat2 from '../assets/images/meat-2.webp'
import meat3 from '../assets/images/meat-3.webp'
import meat4 from '../assets/images/meat-4.webp'
import deli1 from '../assets/images/deli-1.webp'
import deli2 from '../assets/images/deli-2.webp'
import deli3 from '../assets/images/deli-3.webp'

const products = [

  // ================= BAKERY =================
  {
    id: 1,
    title: "Cake Roll",
    price: 3.5,
    discountedPrice: 2.99,
    description: "Fresh cake roll",
    category: "bakery",
    image: bakery1,
    rating: { rate: 4.1 }
  },
  {
    id: 2,
    title: "Croissant",
    price: 2.4,
    discountedPrice: 1.99,
    description: "Butter croissant",
    category: "bakery",
    image: bakery2,
    rating: { rate: 4.3 }
  },
  {
    id: 3,
    title: "Hoagie Rolls",
    price: 10,
    discountedPrice: 8.5,
    description: "Fresh hoagie rolls",
    category: "bakery",
    image: bakery3,
    rating: { rate: 4.6 }
  },
  {
    id: 4,
    title: "Fresh Bread",
    price: 5,
    discountedPrice: 3.99,
    description: "Fresh baked bread",
    category: "bakery",
    image: bakery4,
    rating: { rate: 4.2 }
  },
  {
    id: 5,
    title: "Cheesecake",
    price: 4,
    discountedPrice: 3.29,
    description: "Homestyle cheesecake",
    category: "bakery",
    image: bakery5,
    rating: { rate: 4.0 }
  },

  // ================= BEVERAGES =================
  {
    id: 6,
    title: "Orange Juice",
    price: 4.0,
    discountedPrice: 3.29,
    description: "Freshly squeezed orange juice",
    category: "beverages",
    image: baverage2,
    rating: { rate: 4.4 }
  },
  {
    id: 7,
    title: "Cola Drink",
    price: 2.0,
    discountedPrice: 1.59,
    description: "Classic cola drink",
    category: "beverages",
    image: baverage3,
    rating: { rate: 4.1 }
  },
  {
    id: 8,
    title: "Mineral Water",
    price: 1.5,
    discountedPrice: 1.19,
    description: "Refreshing mineral water",
    category: "beverages",
    image: baverage4,
    rating: { rate: 4.3 }
  },
  {
    id: 9,
    title: "Iced Tea",
    price: 3.2,
    discountedPrice: 2.79,
    description: "Chilled lemon iced tea",
    category: "beverages",
    image: baverage1,
    rating: { rate: 4.2 }
  },
  {
    id: 10,
    title: "Apple Juice",
    price: 4.2,
    discountedPrice: 3.49,
    description: "Natural apple juice",
    category: "beverages",
    image: baverage1,
    rating: { rate: 4.5 }
  },

  // ================= DAIRY =================
  {
    id: 11,
    title: "Fresh Milk",
    price: 2,
    discountedPrice: 1.69,
    description: "Organic fresh milk",
    category: "dairy",
    image: dairy1,
    rating: { rate: 4.4 }
  },
  {
    id: 12,
    title: "Cheddar Cheese",
    price: 6,
    discountedPrice: 4.99,
    description: "Aged cheddar cheese",
    category: "dairy",
    image: dairy2,
    rating: { rate: 4.5 }
  },

  // ================= SNACKS =================
  {
    id: 13,
    title: "Potato Chips",
    price: 2,
    discountedPrice: 1.59,
    description: "Crispy potato chips",
    category: "snacks",
    image: snacks1,
    rating: { rate: 4.0 }
  },
  {
    id: 14,
    title: "Chocolate Bar",
    price: 1.5,
    discountedPrice: 1.19,
    description: "Milk chocolate bar",
    category: "snacks",
    image: snacks2,
    rating: { rate: 4.4 }
  },
  {
    id: 15,
    title: "Cookies",
    price: 3,
    discountedPrice: 2.29,
    description: "Chocolate cookies",
    category: "snacks",
    image: snacks3,
    rating: { rate: 4.3 }
  },
  {
    id: 16,
    title: "Popcorn",
    price: 2,
    discountedPrice: 1.49,
    description: "Butter popcorn",
    category: "snacks",
    image: snacks4,
    rating: { rate: 3.9 }
  },

  // ================= MEAT =================
  {
    id: 17,
    title: "Fresh Lamb Breast",
    price: 7,
    discountedPrice: 5.99,
    description: "Boneless lamb breast",
    category: "meat",
    image: meat3,
    rating: { rate: 4.5 }
  },
  {
    id: 18,
    title: "Beef Steak",
    price: 14,
    discountedPrice: 11.99,
    description: "Premium beef steak",
    category: "meat",
    image: meat1,
    rating: { rate: 4.7 }
  },
  {
    id: 19,
    title: "Salmon Fillet",
    price: 13,
    discountedPrice: 10.99,
    description: "Fresh salmon fillet",
    category: "meat",
    image: meat2,
    rating: { rate: 4.6 }
  },
  {
    id: 20,
    title: "Smoked Sausages",
    price: 6,
    discountedPrice: 4.79,
    description: "Smoked meat sausages",
    category: "meat",
    image: meat4,
    rating: { rate: 4.2 }
  },

  // ================= DELI =================
  {
    id: 21,
    title: "Bagel Bites",
    price: 7,
    discountedPrice: 5.99,
    description: "Pizza snacks",
    category: "deli",
    image: deli1,
    rating: { rate: 4.4 }
  },
  {
    id: 22,
    title: "Greek Yogurt",
    price: 6,
    discountedPrice: 4.99,
    description: "Creamy greek yogurt",
    category: "deli",
    image: deli2,
    rating: { rate: 4.3 }
  },
  {
    id: 23,
    title: "Vanilla Bean",
    price: 5,
    discountedPrice: 3.99,
    description: "Vanilla bean dessert",
    category: "deli",
    image: deli3,
    rating: { rate: 4.5 }
  },

  // ================= FROZEN =================
  {
    id: 24,
    title: "Frozen Pizza",
    price: 6,
    discountedPrice: 4.99,
    description: "Cheese frozen pizza",
    category: "frozen",
    image: frozen3,
    rating: { rate: 4.2 }
  },
  {
    id: 25,
    title: "Frozen Langostino",
    price: 4,
    discountedPrice: 3.29,
    description: "Frozen langostino lobster",
    category: "frozen",
    image: frozen1,
    rating: { rate: 4.1 }
  },
  {
    id: 26,
    title: "Frozen Broccoli",
    price: 3.5,
    discountedPrice: 2.89,
    description: "Frozen broccoli florets",
    category: "frozen",
    image: frozen2,
    rating: { rate: 4.3 }
  },

  // ================= HEALTHCARE =================
  {
    id: 27,
    title: "Heartburn Relief",
    price: 3.5,
    discountedPrice: 2.89,
    description: "Heartburn & gas chews",
    category: "healthcare",
    image: health1,
    rating: { rate: 4.0 }
  },
  {
    id: 28,
    title: "Nerve Health",
    price: 3.5,
    discountedPrice: 2.89,
    description: "Promotes healthy circulation",
    category: "healthcare",
    image: health2,
    rating: { rate: 4.6 }
  },
  {
    id: 29,
    title: "Manuka Honey",
    price: 3.5,
    discountedPrice: 2.89,
    description: "Aid for minor cuts",
    category: "healthcare",
    image: health3,
    rating: { rate: 4.9 }
  }

];

export default products;
