"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { showError, showSuccess } from "@/utils/toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Contact form submitted:", formData);
      showSuccess("Thank you for contacting us! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      showError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions? Our team is here to help you with your educational journey
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reach out to us through any of these channels and we'll get back to you as soon as possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Visit Us</h3>
                <p className="text-gray-600">
                  123 Education Street<br />
                  Salt Lake, Kolkata - 700091<br />
                  West Bengal, India
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Phone className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Call Us</h3>
                <p className="text-gray-600">
                  +91 33 1234 5678<br />
                  +91 98765 43210
                </p>
                <div className="mt-4 flex justify-center">
                  <Clock className="text-gray-500 mr-2" size={16} />
                  <span className="text-sm text-gray-500">Mon-Sat: 9AM-7PM</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Email Us</h3>
                <p className="text-gray-600">
                  info@improviseacademy.in<br />
                  admissions@improviseacademy.in<br />
                  support@improviseacademy.in
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Chat With Us</h3>
                <p className="text-gray-600 mb-4">
                  Connect with our admission counselors on WhatsApp for instant assistance
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our courses or need assistance? Fill out the form below and we'll get back to you
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our campus in the heart of Kolkata
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Map Location</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;