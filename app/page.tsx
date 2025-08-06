import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Car, MapPin, Phone, Mail, ArrowRight, Wind, Sparkles } from "lucide-react"
import Image from "next/image"

export default function GoldberWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Goldber Real Estate</h1>
                <p className="text-sm text-slate-600">s.r.o.</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                About Us
              </a>
              <a href="#real-estate" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                Real Estate
              </a>
              <a href="#green-energy" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                Green Energy
              </a>
              <a href="#luxury-cars" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                Luxury Cars
              </a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60 z-10"></div>
        <Image src="/luxury-green-city.png" alt="Hero Background" fill className="object-cover" priority />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Investment Excellence
            <span className="block text-lime-400">Across Europe</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200">
            Premium real estate, sustainable energy projects, and luxury automotive experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-3">
              Explore Investments
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Business Overview - Focus Areas Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <p className="text-sm font-medium text-slate-500 mb-4 tracking-wide uppercase">OUR BUSINESS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 max-w-4xl">
              Three dynamic sectors driving sustainable growth and exceptional returns.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Real Estate */}
            <Card className="bg-slate-900 text-white p-8 rounded-3xl border-0 hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12">
                  <Building2 className="w-full h-full text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Real Estate Investments</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Strategic property investments across European markets, focusing on premium developments and 
                    sustainable growth opportunities in prime locations.
                  </p>
                  <button className="flex items-center space-x-2 text-white hover:text-slate-200 transition-colors group">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>

            {/* Green Energy */}
            <Card className="bg-lime-500 text-slate-900 p-8 rounded-3xl border-0 hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12">
                  <Wind className="w-full h-full text-slate-900" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Green Energy</h3>
                  <p className="text-slate-800 leading-relaxed mb-6">
                    Investments in renewable energy projects including solar farms and wind parks, driving the transition 
                    to sustainable power generation.
                  </p>
                  <button className="flex items-center space-x-2 text-slate-900 hover:text-slate-700 transition-colors group">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>

            {/* Luxury Cars */}
            <Card className="bg-orange-500 text-slate-900 p-8 rounded-3xl border-0 hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12">
                  <Car className="w-full h-full text-slate-900" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Luxury Car Rentals</h3>
                  <p className="text-slate-800 leading-relaxed mb-6">
                    Premium automotive experiences featuring our exclusive fleet of Ferrari, McLaren, and Lamborghini 
                    supercars for discerning clients.
                  </p>
                  <button className="flex items-center space-x-2 text-slate-900 hover:text-slate-700 transition-colors group">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section - With Stats */}
      <section id="about" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-lime-600 text-white">About Goldber</Badge>
              <h2 className="text-4xl font-bold mb-6">Czech Roots, European Vision</h2>
              <p className="text-xl text-slate-300 mb-6">
                Founded with a commitment to excellence, Goldber Real Estate s.r.o. represents the pinnacle of 
                investment expertise across three dynamic sectors.
              </p>
              <p className="text-slate-300 mb-8">
                Our Czech heritage combined with European market knowledge allows us to identify and capitalize on 
                premium investment opportunities. We believe in sustainable growth, environmental responsibility, and 
                delivering exceptional experiences to our clients.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-lime-400 mb-2">15+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lime-400 mb-2">€50M+</div>
                  <div className="text-sm text-slate-400">Assets Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lime-400 mb-2">25+</div>
                  <div className="text-sm text-slate-400">Active Projects</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/prague-office-building.png"
                alt="Goldber Office"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
            {/* News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <p className="text-sm font-medium text-slate-500 mb-4 tracking-wide uppercase">LATEST NEWS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Market Updates & Insights
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Stay informed about the latest developments in our investment sectors and market opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real Estate News */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/prague-office-building.png"
                  alt="Prague Real Estate Market"
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3 text-slate-600 border-slate-200">
                  Real Estate
                </Badge>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-lime-600 transition-colors">
                  Prague Market Reaches Record Highs
                </h3>
                <p className="text-slate-600 mb-4">
                  The Czech capital's commercial real estate market continues to attract international investors 
                  with strong fundamentals and growth potential.
                </p>
                <p className="text-sm text-slate-500">March 2024</p>
              </CardContent>
            </Card>

            {/* Green Energy News */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder-2edxb.png"
                  alt="Solar Energy Development"
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3 text-slate-600 border-slate-200">
                  Green Energy
                </Badge>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-lime-600 transition-colors">
                  EU Solar Investments Surge 40%
                </h3>
                <p className="text-slate-600 mb-4">
                  European renewable energy sector sees unprecedented growth as governments accelerate 
                  green transition policies and incentives.
                </p>
                <p className="text-sm text-slate-500">March 2024</p>
              </CardContent>
            </Card>

            {/* Luxury Cars News */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/yellow-lamborghini-race-track.png"
                  alt="Luxury Car Market"
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3 text-slate-600 border-slate-200">
                  Luxury Cars
                </Badge>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-lime-600 transition-colors">
                  Supercar Rental Market Expands
                </h3>
                <p className="text-slate-600 mb-4">
                  Premium automotive experiences see increased demand as luxury travel rebounds 
                  and experiential consumption grows across Europe.
                </p>
                <p className="text-sm text-slate-500">February 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Estate Projects */}
      <section id="real-estate" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <p className="text-sm font-medium text-slate-500 mb-4 tracking-wide uppercase">REAL ESTATE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Investment Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Strategic property investments across European and Czech markets, focusing on premium developments 
              and sustainable growth opportunities.
            </p>
          </div>

          {/* Project 1 - Prague Residential */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">FEATURED PROJECT</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Prague Residential Complex</h2>
                <p className="text-slate-600 text-lg">2024</p>

                <p className="text-slate-600 leading-relaxed text-lg max-w-lg">
                  A premium residential development in Prague's prime location, featuring modern apartments with 
                  sustainable design principles and high-end amenities for discerning residents.
                </p>

                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Location</p>
                    <p className="text-slate-900 font-medium">Prague, Czech Republic</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Size</p>
                    <p className="text-slate-900 font-medium">15,000m²</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Type</p>
                    <p className="text-slate-900 font-medium">Residential, Commercial</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/prague-residential-complex.png"
                  alt="Prague Residential Complex"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Project 2 - Vienna Commercial */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-2">
                <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">COMMERCIAL PROJECT</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Vienna Office Tower</h2>
                <p className="text-slate-600 text-lg">2023</p>

                <p className="text-slate-600 leading-relaxed text-lg max-w-lg">
                  Modern office complex in Vienna's business district, providing premium workspace solutions with 
                  advanced technology infrastructure and sustainable building practices.
                </p>

                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Location</p>
                    <p className="text-slate-900 font-medium">Vienna, Austria</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Size</p>
                    <p className="text-slate-900 font-medium">22,000m²</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Type</p>
                    <p className="text-slate-900 font-medium">Office, Retail</p>
                  </div>
                </div>
              </div>

              <div className="relative lg:order-1">
                <Image
                  src="/vienna-office-building.png"
                  alt="Vienna Office Tower"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Energy Projects */}
      <section id="green-energy" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <p className="text-sm font-medium text-slate-500 mb-4 tracking-wide uppercase">GREEN ENERGY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sustainable Energy Investments
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Leading the transition to renewable energy through strategic investments in solar farms and wind parks 
              across Europe.
            </p>
          </div>

          {/* Solar Project */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">SOLAR PROJECT</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Czech Solar Farm</h2>
                <p className="text-slate-600 text-lg">2024</p>

                <p className="text-slate-600 leading-relaxed text-lg max-w-lg">
                  Large-scale solar installation in South Moravia, generating clean energy for thousands of households 
                  while contributing to Czech Republic's renewable energy goals.
                </p>

                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Location</p>
                    <p className="text-slate-900 font-medium">South Moravia, CZ</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Capacity</p>
                    <p className="text-slate-900 font-medium">25MW</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Technology</p>
                    <p className="text-slate-900 font-medium">Solar PV, Grid-tied</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder-2edxb.png"
                  alt="Czech Solar Farm"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Wind Project */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-2">
                <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">WIND PROJECT</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Alpine Wind Park</h2>
                <p className="text-slate-600 text-lg">2023</p>

                <p className="text-slate-600 leading-relaxed text-lg max-w-lg">
                  Strategic wind energy installation in the Austrian Alps, harnessing mountain winds to generate 
                  sustainable electricity for the regional power grid.
                </p>

                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Location</p>
                    <p className="text-slate-900 font-medium">Austrian Alps</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Capacity</p>
                    <p className="text-slate-900 font-medium">30MW</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Technology</p>
                    <p className="text-slate-900 font-medium">Wind Turbines</p>
                  </div>
                </div>
              </div>

              <div className="relative lg:order-1">
                <Image
                  src="/placeholder-mvmp7.png"
                  alt="Alpine Wind Park"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Car Rentals */}
      <section id="luxury-cars" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <p className="text-sm font-medium text-slate-500 mb-4 tracking-wide uppercase">LUXURY CARS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Premium Automotive Experience
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Exclusive access to the world's most prestigious supercars. Ferrari, McLaren, and Lamborghini vehicles 
              available for rental with premium service.
            </p>
          </div>

          {/* Ferrari Collection */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">FERRARI COLLECTION</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Italian Excellence</h2>
                <p className="text-slate-600 text-lg">Available Now</p>

                <p className="text-slate-600 leading-relaxed text-lg max-w-lg">
                  Experience the pinnacle of Italian automotive engineering with our curated Ferrari collection, 
                  featuring the latest models and classic favorites.
                </p>

                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Fleet Size</p>
                    <p className="text-slate-900 font-medium">8 Vehicles</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Models</p>
                    <p className="text-slate-900 font-medium">488 GTB, F8 Tributo</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Location</p>
                    <p className="text-slate-900 font-medium">Prague</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/red-ferrari-showroom.png"
                  alt="Ferrari Collection"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* McLaren Collection */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-2">
                <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">MCLAREN COLLECTION</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">British Precision</h2>
                <p className="text-slate-600 text-lg">Available Now</p>

                <p className="text-slate-600 leading-relaxed text-lg max-w-lg">
                  Discover the perfect blend of Formula 1 technology and luxury with our McLaren supercar collection, 
                  engineered for ultimate performance.
                </p>

                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Fleet Size</p>
                    <p className="text-slate-900 font-medium">6 Vehicles</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Models</p>
                    <p className="text-slate-900 font-medium">720S, Artura</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Location</p>
                    <p className="text-slate-900 font-medium">Prague</p>
                  </div>
                </div>
              </div>

              <div className="relative lg:order-1">
                <Image
                  src="/orange-mclaren-garage.png"
                  alt="McLaren Collection"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-slate-500 mb-4 tracking-wide uppercase">CONTACT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-600">
              Ready to start your green energy journey? Contact us today.
            </p>
          </div>

          <Card className="border-0 shadow-lg max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">First Name</label>
                  <Input placeholder="John" className="border-slate-300 focus:border-green-500" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Last Name</label>
                  <Input placeholder="Doe" className="border-slate-300 focus:border-green-500" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" className="border-slate-300 focus:border-green-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Interest</label>
                <select className="w-full p-3 border border-slate-300 rounded-md focus:border-green-500 focus:outline-none">
                  <option>Green Energy Solutions</option>
                  <option>Hydropower Projects</option>
                  <option>Wind Park Development</option>
                  <option>Solar Energy Systems</option>
                  <option>Battery Storage Solutions</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Message</label>
                <textarea
                  className="w-full p-3 border border-slate-300 rounded-md h-32 resize-none focus:border-green-500 focus:outline-none"
                  placeholder="Tell us about your green energy project needs..."
                ></textarea>
              </div>
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-3">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info - Left Side */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold text-lg">G</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">Goldber Real Estate</div>
                  <div className="text-sm text-slate-600">s.r.o.</div>
                </div>
              </div>
              <p className="text-slate-600 mb-8 max-w-xs">
                Diversified investment company specializing in real estate, green energy, and luxury automotive sectors across Europe.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-slate-500">Follow us on:</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-200 rounded flex items-center justify-center hover:bg-slate-300 transition-colors"
                  >
                    <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-200 rounded flex items-center justify-center hover:bg-slate-300 transition-colors"
                  >
                    <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-200 rounded flex items-center justify-center hover:bg-slate-300 transition-colors"
                  >
                    <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-200 rounded flex items-center justify-center hover:bg-slate-300 transition-colors"
                  >
                    <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Links - Right Side */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
              <div>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                      Why Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                      Deals
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>
                    <a href="#service" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                      Plan
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>
                    <a href="#testimonial" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-slate-200 mt-12 pt-8 text-center">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Goldber Real Estate s.r.o. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
