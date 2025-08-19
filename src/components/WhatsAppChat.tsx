"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // In a real application, you would replace this with your actual WhatsApp number
  const whatsappLink = "https://wa.me/919876543210";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-xl p-4 w-72">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800">Chat with us</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="h-6 w-6"
            >
              <X size={16} />
            </Button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Have questions? Chat with our admission counselors on WhatsApp.
          </p>
          <Button 
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="mr-2" size={16} />
            Start Chat
          </Button>
        </div>
      )}
      
      <Button
        onClick={toggleChat}
        className={cn(
          "rounded-full w-14 h-14 shadow-lg transition-all",
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-green-600 hover:bg-green-700"
        )}
        aria-label={isOpen ? "Close chat" : "Open WhatsApp chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
    </div>
  );
};

export default WhatsAppChat;