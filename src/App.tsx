"use client";
import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Menu,
  X,
  Star,
  ChevronRight,
  Heart,
  Users,
  Shield,
  Coffee,
} from "lucide-react";

export default function RiverFrontCafe() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("varanasi");

  const menuCategories = {
    varanasi: [
      {
        name: "Poori Sabzi",
        description: "Fluffy pooris served with spicy potato curry",
        price: "₹120",
      },
      {
        name: "Bati Choka",
        description:
          "Traditional baked wheat balls with mashed potato and brinjal",
        price: "₹150",
      },
      {
        name: "Sattu Paratha",
        description: "Stuffed paratha with roasted gram flour filling",
        price: "₹90",
      },
      {
        name: "Traditional Thali",
        description:
          "Complete meal with 3 vegetables, dal, rice, chapati, and dessert",
        price: "₹220",
      },
    ],
    chaap: [
      {
        name: "Soya Chaap Curry",
        description: "Tender soya chaap in rich gravy",
        price: "₹180",
      },
      {
        name: "Afghani Chaap",
        description: "Creamy, mildly spiced chaap",
        price: "₹200",
      },
      {
        name: "Tandoori Chaap",
        description: "Grilled chaap with spices",
        price: "₹190",
      },
      {
        name: "Malai Chaap",
        description: "Chaap in rich cashew and cream sauce",
        price: "₹210",
      },
    ],
    northIndian: [
      {
        name: "Aloo Tikki",
        description: "Crispy potato patties with chutneys",
        price: "₹80",
      },
      {
        name: "Pav Bhaji",
        description: "Spicy vegetable mash with buttered buns",
        price: "₹130",
      },
      {
        name: "Chole Bhature",
        description: "Chickpea curry with fluffy fried bread",
        price: "₹150",
      },
      {
        name: "Samosa Chat",
        description: "Crushed samosa with yogurt and chutneys",
        price: "₹90",
      },
    ],
    southIndian: [
      {
        name: "Masala Dosa",
        description: "Crispy crepe with spiced potato filling",
        price: "₹110",
      },
      {
        name: "Uttapam",
        description: "Savory pancake with vegetables",
        price: "₹100",
      },
      {
        name: "Sambhar Vada",
        description: "Lentil donuts in tangy sambhar",
        price: "₹90",
      },
      {
        name: "Idli",
        description: "Steamed rice cakes with sambhar and chutney",
        price: "₹80",
      },
    ],
    indoChinese: [
      {
        name: "Veg Manchurian",
        description: "Vegetable balls in tangy sauce",
        price: "₹160",
      },
      {
        name: "Hakka Noodles",
        description: "Stir-fried noodles with vegetables",
        price: "₹140",
      },
      {
        name: "Fried Rice",
        description: "Indian-style vegetable fried rice",
        price: "₹130",
      },
      {
        name: "Chilli Paneer",
        description: "Cottage cheese in spicy sauce",
        price: "₹170",
      },
    ],
    beverages: [
      { name: "Masala Chai", description: "Spiced Indian tea", price: "₹40" },
      {
        name: "Special Coffee",
        description: "South Indian filter coffee",
        price: "₹50",
      },
      {
        name: "Lassi",
        description: "Sweet or salty yogurt drink",
        price: "₹60",
      },
      {
        name: "Fresh Juice",
        description: "Seasonal fruit juices",
        price: "₹80",
      },
    ],
  };

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Food Blogger",
      content:
        "The authentic Varanasi flavors took me back to my childhood. The riverside ambiance is simply magical!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Local Resident",
      content:
        "We come here every weekend. The soya chaap is the best in Lucknow, and the service is always warm.",
      rating: 5,
    },
    {
      name: "Amit Singh",
      role: "Tourist from Delhi",
      content:
        "Found this gem while exploring Lucknow. The bati choka was incredible, and the riverside view made our evening special.",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      role: "Food Enthusiast",
      content:
        "As a pure vegetarian, I appreciate their commitment to quality ingredients. The poori sabzi is perfection!",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF5E6]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#164c56]">
                River Front Cafe
              </h1>
              <span className="ml-2 text-sm text-[#FF7900]">
                <p>
                  Where Tradition Meets Taste by the Riverside 
                </p>
                <p>
                  Subah-e-Banaras, Shaam-e-Awadh
                </p>  
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-[#164c56] hover:text-[#FF7900] transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-[#164c56] hover:text-[#FF7900] transition-colors"
              >
                About
              </a>
              <a
                href="#menu"
                className="text-[#164c56] hover:text-[#FF7900] transition-colors"
              >
                Menu
              </a>
              <a
                href="#gallery"
                className="text-[#164c56] hover:text-[#FF7900] transition-colors"
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                className="text-[#164c56] hover:text-[#FF7900] transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-[#164c56] hover:text-[#FF7900] transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#164c56]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-3">
                <a
                  href="#home"
                  className="text-[#164c56] hover:text-[#FF7900] transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-[#164c56] hover:text-[#FF7900] transition-colors"
                >
                  About
                </a>
                <a
                  href="#menu"
                  className="text-[#164c56] hover:text-[#FF7900] transition-colors"
                >
                  Menu
                </a>
                <a
                  href="#gallery"
                  className="text-[#164c56] hover:text-[#FF7900] transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="#testimonials"
                  className="text-[#164c56] hover:text-[#FF7900] transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-[#164c56] hover:text-[#FF7900] transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#164c56]/80 to-[#FF7900]/60 z-0"></div>
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a22dac27-e713-4083-8e63-658bdc3c3ba0.png"
          alt="Riverside dining area at River Front Cafe with traditional Indian decor and scenic views"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />

        <div className="container relative mx-auto px-4 z-10">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Authentic Varanasi Cuisine by the Riverside
            </h1>
            <p className="text-xl text-white mb-8">
              Experience the timeless flavors of Varanasi in the heart of
              Lucknow, surrounded by the serene beauty of the river.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://riverfrontcafe.dotpe.in/" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#FF7900] hover:bg-[#e56d00] text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                View Menu <ChevronRight className="ml-2" size={20} />
              </button>
              </a>
              <a href="https://riverfrontcafe.dotpe.in/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white hover:bg-gray-100 text-[#164c56] font-bold py-3 px-6 rounded-lg transition-colors">
                Order Now
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#164c56] mb-4">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-[#FF7900] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="MyCafeAI.png"
                alt="Founders of River Front Cafe standing outside the restaurant with the river in the background"
                className="rounded-lg shadow-md"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#164c56] mb-4">
                Where Tradition Meets the Riverside
              </h3>
              <p className="text-gray-700 mb-4">
                River Front Cafe was established with a simple vision: to bring
                the authentic flavors of Varanasi to the beautiful riverside
                location in Lucknow. Our founders, hailing from Varanasi, wanted
                to share the culinary heritage of their hometown with food
                lovers in a serene, family-friendly environment.
              </p>
              <p className="text-gray-700 mb-4">
                Nestled by the river, our cafe offers not just delicious food
                but an experience that connects you with nature and tradition.
                We take pride in using fresh ingredients and traditional cooking
                methods that have been passed down through generations.
              </p>
              <p className="text-gray-700">
                Every dish we serve is prepared with love and respect for the
                authentic flavors that make Varanasi cuisine so special. We
                invite you to join us for a meal that will transport your taste
                buds to the ghats of the holy city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideology Section */}
      <section className="py-16 bg-[#4A90A4]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#164c56] mb-4">
              Our Philosophy
            </h2>
            <div className="w-20 h-1 bg-[#FF7900] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#FFE5CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#FF7900]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#164c56] mb-2">
                Food with Love
              </h3>
              <p className="text-gray-700">
                Every dish is prepared with care and passion, honoring
                traditional recipes and techniques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#FFE5CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#FF7900]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#164c56] mb-2">
                Community Focus
              </h3>
              <p className="text-gray-700">
                We believe in creating a space where families and friends gather
                to share meals and make memories.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#FFE5CC] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#FF7900]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#164c56] mb-2">
                Pure Vegetarian
              </h3>
              <p className="text-gray-700">
                Committed to serving 100% vegetarian cuisine with fresh,
                high-quality ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#164c56] mb-4">
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-[#FF7900] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 place-items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#164c56] mb-4">
                Authentic Varanasi Specialties
              </h3>
              <p className="text-gray-700 mb-6">
                Our menu features time-honored Varanasi dishes like poori sabzi,
                bati choka, and sattu paratha - prepared exactly as they are in
                the narrow lanes of the holy city. Each recipe has been
                carefully perfected to deliver an authentic taste experience.
              </p>

              <h3 className="text-2xl font-semibold text-[#164c56] mb-4">
                Diverse Vegetarian Cuisine
              </h3>
              <p className="text-gray-700 mb-6">
                Beyond Varanasi specialties, we offer a wide range of North
                Indian snacks, South Indian delights, and Indo-Chinese fusion
                dishes. Our soya chaap varieties have become legendary among our
                regular customers.
              </p>

              <h3 className="text-2xl font-semibold text-[#164c56] mb-4">
                Riverside Dining Experience
              </h3>
              <p className="text-gray-700">
                Enjoy your meal with a view of the gently flowing river. Our
                outdoor seating area provides the perfect ambiance for a
                relaxing meal with family and friends, especially during sunset
                hours.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/IMG_6045.png"
                alt="Traditional Varanasi thali with poori, sabzi, and accompaniments arranged on a brass plate"
                className="rounded-lg shadow-md"
              />
              <img
                src="IMG_6031.png"
                alt="Soya chaap curry served in traditional bowl with garnishes"
                className="rounded-lg shadow-md"
              />
              <img
                src="/IMG_6030.png"
                alt="Riverside dining setup with customers enjoying meals at wooden tables"
                className="rounded-lg shadow-md"
              />
              <img
                src="IMG_6044.png"
                alt="Chef preparing fresh dosa at the restaurant kitchen"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#2C5F2D] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <Coffee className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-200">
                "To bring the authentic taste of Varanasi's timeless culinary
                traditions to Lucknow, creating a warm, welcoming riverside
                destination where families and friends gather to enjoy pure
                vegetarian cuisine served with love and hospitality."
              </p>
            </div>

            <div className="text-center">
              <Star className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-200">
                "To become Lucknow's premier riverside dining destination,
                recognized for our commitment to authentic flavors, exceptional
                service, and creating memorable experiences that connect people
                through the joy of traditional Indian cuisine."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-[#FAF5E6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#164c56] mb-4">
              What Our Customers Say
            </h2>
            <div className="w-20 h-1 bg-[#FF7900] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#F9C309] fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/40d63758-6f5d-463c-8f2d-04d7b159dfab.png"
                    alt={`Portrait of ${testimonial.name}, a satisfied customer at River Front Cafe`}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-[#164c56]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#164c56] mb-4">
              Our Gallery
            </h2>
            <div className="w-20 h-1 bg-[#FF7900] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3cd61789-8330-4589-89d2-e14f029a8c78.png"
              alt="Cozy interior of River Front Cafe with traditional decor and comfortable seating"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fcc7eaf6-44cc-46c7-aa11-61a41a3868c5.png"
              alt="Exterior view of River Front Cafe showing the riverside location and outdoor seating"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/98cfb116-55c1-462d-bedf-379aa0aef1a4.png"
              alt="Close-up of delicious Varanasi poori sabzi plated beautifully with accompaniments"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d13b3e24-326f-40dc-93de-b0a62e457efa.png"
              alt="Chef preparing fresh food in the clean, modern kitchen at River Front Cafe"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/da35f28f-6947-4659-aeaa-f5644a4f151e.png"
              alt="Family enjoying meals together at the riverside seating area during sunset"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50ade18a-c900-4f28-85e1-f0241310e029.png"
              alt="Scenic view of the river from the cafe during golden hour with beautiful reflections"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fb545f20-c1e5-455b-94ef-a3513f5240d7.png"
              alt="Variety of chaap dishes displayed attractively on traditional servingware"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46bcccda-28ed-44e4-b57f-051d000b16a2.png"
              alt="Staff members serving customers with warm smiles and professional hospitality"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-[#FAF5E6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#164c56] mb-4">Our Menu</h2>
            <div className="w-20 h-1 bg-[#FF7900] mx-auto"></div>
          </div>

          {/* Menu Tabs */}
          <div className="flex overflow-x-auto mb-8 pb-2">
            <button
              onClick={() => setActiveTab("varanasi")}
              className={`px-6 py-2 whitespace-nowrap ${
                activeTab === "varanasi"
                  ? "bg-[#FF7900] text-white"
                  : "bg-white text-[#164c56]"
              }`}
            >
              Varanasi Specialties
            </button>
            <button
              onClick={() => setActiveTab("chaap")}
              className={`px-6 py-2 whitespace-nowrap ${
                activeTab === "chaap"
                  ? "bg-[#FF7900] text-white"
                  : "bg-white text-[#164c56]"
              }`}
            >
              Chaap Varieties
            </button>
            <button
              onClick={() => setActiveTab("northIndian")}
              className={`px-6 py-2 whitespace-nowrap ${
                activeTab === "northIndian"
                  ? "bg-[#FF7900] text-white"
                  : "bg-white text-[#164c56]"
              }`}
            >
              North Indian
            </button>
            <button
              onClick={() => setActiveTab("southIndian")}
              className={`px-6 py-2 whitespace-nowrap ${
                activeTab === "southIndian"
                  ? "bg-[#FF7900] text-white"
                  : "bg-white text-[#164c56]"
              }`}
            >
              South Indian
            </button>
            <button
              onClick={() => setActiveTab("indoChinese")}
              className={`px-6 py-2 whitespace-nowrap ${
                activeTab === "indoChinese"
                  ? "bg-[#FF7900] text-white"
                  : "bg-white text-[#164c56]"
              }`}
            >
              Indo-Chinese
            </button>
            <button
              onClick={() => setActiveTab("beverages")}
              className={`px-6 py-2 whitespace-nowrap ${
                activeTab === "beverages"
                  ? "bg-[#FF7900] text-white"
                  : "bg-white text-[#164c56]"
              }`}
            >
              Beverages
            </button>
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 gap-6">
            {menuCategories[activeTab as keyof typeof menuCategories].map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#164c56]">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-bold text-[#FF7900] ml-4">
                    {item.price}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Order Now Section */}
      <section className="py-16 bg-[#FF7900] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Taste Tradition?</h2>
          <p className="text-xl mb-8">
            Order now for delivery or reserve a table by the riverside
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://riverfrontcafe.dotpe.in/" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-[#FF7900] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Order Online
            </button>
            </a>
            <a href="https://riverfrontcafe.dotpe.in/" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#164c56] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#0f363e] transition-colors">
              Reserve Table
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#164c56] mb-4">Visit Us</h2>
            <div className="w-20 h-1 bg-[#FF7900] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#164c56] mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-[#FF7900] mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-700">
                      Shop 5A, Marine Drive, Gomti River Front, Lucknow, Uttar
                      Pradesh 226001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-[#FF7900] mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-700">+91 9026926217</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-[#FF7900] mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-700">contact@riverfrontcafe.in</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-[#FF7900] mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-700">
                      Monday-Sunday: 2:00 PM - 12:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#164c56] mb-4">
                Find Us on Map
              </h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                {/* <p className="text-gray-600">https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1058.2825056503802!2d80.97200531410353!3d26.851913384725535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd268b7e93df%3A0xe1dc57a80c8f5410!2sRiver%20Front%20Cafe!5e0!3m2!1sen!2sin!4v1764787889575!5m2!1sen!2sin</p> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1058.2825056503802!2d80.97200531410353!3d26.851913384725535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd268b7e93df%3a0xe1dc57a80c8f5410!2sriver%20front%20cafe!5e0!3m2!1sen!2sin!4v1764787889575!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#164c56] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">River Front Cafe</h3>
              <p className="text-gray-300">
                Where Tradition Meets Taste by the Riverside
              </p>
              <p className="text-gray-300 mt-4">  
                Subah-e-Banaras, Shaam-e-Awadh
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Subscribe for updates and special offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-[#2C5F2D] text-white rounded-l-lg focus:outline-none flex-1"
                />
                <button className="bg-[#FF7900] px-3 py-2 rounded-r-lg hover:bg-[#e56d00] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-[#2C5F2D] mt-8 pt-8 text-center text-gray-300">
            <p>© 2025 River Front Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
