import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
  const message = "Hi! I'd like to know more about your two-wheeler service.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 bg-[#25D366] hover:bg-[#20BA5A] z-50 animate-pulse hover:animate-none"
      size="icon"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
