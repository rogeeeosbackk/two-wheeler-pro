import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bike-service.jpg";
import workshopImage from "@/assets/workshop-interior.jpg";

const Home = () => {
  const carBrands = [
    "Opel", "Volkswagen", "BMW", "Škoda", "Ford", "Toyota"
  ];

  const blogPosts = [
    {
      title: "Essential Car Maintenance Tips for Winter",
      excerpt: "Prepare your vehicle for cold weather with these expert maintenance tips.",
      image: heroImage,
      date: "Dec 15, 2024"
    },
    {
      title: "Signs Your Brakes Need Immediate Attention",
      excerpt: "Learn to recognize the warning signs that indicate your brakes need service.",
      image: workshopImage,
      date: "Dec 10, 2024"
    },
    {
      title: "How Often Should You Service Your Car?",
      excerpt: "A comprehensive guide to regular car maintenance schedules.",
      image: heroImage,
      date: "Dec 5, 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional automotive service workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-automotive-black/60" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Keeping you on the road with service you can trust
            </h1>
            
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-accent/50 transition-all"
            >
              <Link to="/booking">
                Request a service
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={workshopImage}
                alt="Mechanic working under car"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="w-16 h-1 bg-accent"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-automotive-dark">
                  Our story
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 25 years of experience in automotive service, we've built our reputation 
                on trust, quality, and exceptional customer care. Our team of certified mechanics 
                uses the latest diagnostic equipment to ensure your vehicle receives the best 
                possible service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From routine maintenance to complex repairs, we treat every vehicle with the same 
                level of care and attention to detail. Your safety and satisfaction are our top priorities.
              </p>
              <Button 
                asChild 
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 rounded-full shadow-lg mt-4"
              >
                <Link to="/about">
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cars We Fix Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block">
              <div className="w-16 h-1 bg-accent mb-4 mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-automotive-dark">
                Cars we can fix
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {carBrands.map((brand, index) => (
              <Card 
                key={index} 
                className="p-8 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-2"
              >
                <span className="text-2xl font-bold text-gray-400">{brand}</span>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild 
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 rounded-full shadow-lg"
            >
              <Link to="/booking">Request a service</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="border-2 border-automotive-dark text-automotive-dark hover:bg-automotive-dark hover:text-white font-semibold px-8 py-6 rounded-full"
            >
              <Link to="/services">See all services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block">
              <div className="w-16 h-1 bg-accent mb-4 mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-automotive-dark">
                Latest blog posts
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8 space-y-4">
                  <p className="text-sm text-accent font-semibold">{post.date}</p>
                  <h3 className="text-xl font-bold text-automotive-dark leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <Link 
                    to="/news" 
                    className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-automotive-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block">
              <div className="w-16 h-1 bg-accent mb-4 mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Visit our car service
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Address</h3>
                    <p className="text-gray-300 text-lg">
                      123 Service Road, Workshop District<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Working Hours</h3>
                    <p className="text-gray-300 text-lg">
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday: 8:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Phone Number</h3>
                    <a 
                      href="tel:+919876543210" 
                      className="text-gray-300 text-lg hover:text-accent transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.586449138665!2d72.8776559!3d19.0759899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
