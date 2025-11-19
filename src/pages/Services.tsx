import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wrench,
  Droplets,
  Zap,
  Disc,
  Sparkles,
  Battery,
  Circle,
  Truck,
  Settings,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "General Service",
      description: "Complete inspection and servicing of your two-wheeler including oil change, filter replacement, and tune-up",
      price: "₹799 onwards",
    },
    {
      icon: Settings,
      title: "Engine Repair",
      description: "Expert engine diagnostics and repair services for all types of two-wheelers",
      price: "₹1,999 onwards",
    },
    {
      icon: Droplets,
      title: "Oil Change",
      description: "Premium quality engine oil replacement with free oil filter cleaning",
      price: "₹499 onwards",
    },
    {
      icon: Zap,
      title: "Electrical & Wiring",
      description: "Complete electrical system checkup, wiring repairs, and headlight alignment",
      price: "₹699 onwards",
    },
    {
      icon: Disc,
      title: "Brake Service",
      description: "Brake pad replacement, drum brake servicing, and brake fluid top-up",
      price: "₹599 onwards",
    },
    {
      icon: Sparkles,
      title: "Water Wash & Polish",
      description: "Thorough cleaning with high-pressure wash and premium polish",
      price: "₹199 onwards",
    },
    {
      icon: Battery,
      title: "Battery Service",
      description: "Battery health check, charging, and replacement with warranty",
      price: "₹399 onwards",
    },
    {
      icon: Circle,
      title: "Puncture & Tyres",
      description: "Tyre replacement, puncture repair, wheel balancing and alignment",
      price: "₹99 onwards",
    },
    {
      icon: Truck,
      title: "Pickup & Drop",
      description: "Free doorstep pickup and drop service within 10 km radius",
      price: "Free*",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-automotive-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive two-wheeler care from experts you can trust
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-accent font-semibold">{service.price}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Service Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and efficient process for all your service needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Book Appointment",
                description: "Schedule your service online or call us directly"
              },
              {
                step: "02",
                title: "Drop-off or Pickup",
                description: "Bring your bike or we'll pick it up from your location"
              },
              {
                step: "03",
                title: "Expert Service",
                description: "Our certified mechanics work their magic"
              },
              {
                step: "04",
                title: "Quality Check",
                description: "Thorough inspection before delivery"
              },
            ].map((process, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-3">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Our Services?
              </h2>
              <ul className="space-y-4">
                {[
                  "Certified and experienced mechanics",
                  "Use of genuine spare parts only",
                  "Transparent pricing with detailed invoicing",
                  "Fast turnaround time",
                  "3-month service warranty",
                  "Free pickup and drop within 10km",
                  "Modern equipment and diagnostic tools",
                  "Customer-first approach",
                ].map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-accent/10 rounded-full p-1 mt-1">
                      <svg
                        className="w-4 h-4 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Service Guarantee</h3>
              <p className="mb-6">
                We stand behind our work with a 3-month warranty on all services and genuine parts. 
                Your satisfaction and safety are our top priorities.
              </p>
              <Button asChild variant="secondary" size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link to="/booking">Book Your Service Now</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Expert Service for Your Bike?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book an appointment today and experience professional service
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/booking">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+919876543210">Call: +91 98765 43210</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
