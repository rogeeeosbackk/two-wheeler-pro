import { Card } from "@/components/ui/card";
import { Award, Users, Clock, Target } from "lucide-react";
import workshopImage from "@/assets/workshop-interior.jpg";

const About = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Clock, value: "15+", label: "Years Experience" },
    { icon: Award, value: "50+", label: "Certified Mechanics" },
    { icon: Target, value: "99%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on the quality of parts or service"
    },
    {
      title: "Customer Trust",
      description: "Building long-term relationships through honest service"
    },
    {
      title: "Expert Team",
      description: "Highly trained and experienced mechanics"
    },
    {
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden charges"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-automotive-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About BikeService Pro Workshop
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over 15 years, we've been the trusted choice for two-wheeler service and maintenance. 
              Our commitment to quality, expertise, and customer satisfaction sets us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BikeService Pro Workshop was founded in 2009 with a simple mission: to provide 
                  honest, reliable, and high-quality service for two-wheeler owners.
                </p>
                <p>
                  What started as a small workshop with just three mechanics has grown into one of 
                  the most trusted service centers in the region. Today, we serve over 10,000 
                  satisfied customers and employ a team of 50+ certified professionals.
                </p>
                <p>
                  Our success is built on three pillars: expert knowledge, quality parts, and 
                  exceptional customer service. We treat every bike as if it were our own, ensuring 
                  that it receives the care and attention it deserves.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={workshopImage}
                alt="Our workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide exceptional two-wheeler service and maintenance through expert craftsmanship, 
                genuine parts, and a customer-first approach. We aim to keep every bike running smoothly 
                and every customer riding safely.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and preferred two-wheeler service center in the region, known 
                for our integrity, expertise, and commitment to excellence. We envision a future where 
                every rider has access to quality service they can rely on.
              </p>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our certified mechanics bring years of experience and passion for two-wheelers. 
              Each team member is dedicated to providing the best service possible.
            </p>
          </div>
          <Card className="p-8 bg-primary/5 border-primary/20 text-center">
            <p className="text-lg text-muted-foreground">
              Our team consists of 50+ certified mechanics, service advisors, and support staff, 
              all working together to ensure your two-wheeler receives the care it deserves.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
