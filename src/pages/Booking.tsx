import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bikeModel: "",
    serviceType: "",
    timeSlot: "",
    message: "",
  });

  const services = [
    "General Service",
    "Engine Repair",
    "Oil Change",
    "Electrical & Wiring",
    "Brake Service",
    "Water Wash & Polish",
    "Battery Service",
    "Puncture & Tyres",
    "Pickup & Drop",
  ];

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast.error("Please select a date");
      return;
    }

    if (!formData.name || !formData.phone || !formData.serviceType || !formData.timeSlot) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the data to your backend
    toast.success("Booking request submitted successfully! We'll contact you shortly.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      bikeModel: "",
      serviceType: "",
      timeSlot: "",
      message: "",
    });
    setDate(undefined);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-automotive-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Book Your Service
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Schedule an appointment for your two-wheeler service
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">
                    Personal Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bikeModel">Bike Model</Label>
                    <Input
                      id="bikeModel"
                      placeholder="e.g., Honda Activa, Bajaj Pulsar"
                      value={formData.bikeModel}
                      onChange={(e) => handleInputChange("bikeModel", e.target.value)}
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-4 pt-6 border-t">
                  <h2 className="text-2xl font-semibold text-foreground">
                    Service Details
                  </h2>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => handleInputChange("serviceType", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeSlot">Time Slot *</Label>
                      <Select
                        value={formData.timeSlot}
                        onValueChange={(value) => handleInputChange("timeSlot", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4" />
                                {slot}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Any specific issues or requests?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button type="submit" size="lg" className="w-full">
                    Submit Booking Request
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    * Required fields. We'll contact you to confirm your appointment.
                  </p>
                </div>
              </form>
            </Card>

            {/* Contact Info */}
            <Card className="mt-8 p-6 bg-muted/50">
              <h3 className="font-semibold text-lg mb-4">Need Help?</h3>
              <p className="text-muted-foreground mb-4">
                You can also reach us directly to book your appointment:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+919876543210" className="text-primary hover:underline">
                    +91 98765 43210
                  </a>
                </p>
                <p>
                  <span className="font-medium">WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Chat with us
                  </a>
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:info@bikeservice.com" className="text-primary hover:underline">
                    info@bikeservice.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
