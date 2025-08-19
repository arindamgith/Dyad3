"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star, Users, BookOpen, Award } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import DemoForm from "@/components/DemoForm";

const Index = () => {
  const exams = [
    { name: "JEE Main & Advanced", description: "Comprehensive preparation for engineering entrance" },
    { name: "NEET/AIIMS", description: "Medical entrance exam coaching" },
    { name: "WBJEE", description: "West Bengal Joint Entrance Examination" },
    { name: "BITSAT", description: "Birla Institute of Technology entrance" },
    { name: "COMED-K", description: "Karnataka engineering entrance" },
    { name: "KIIT", description: "Kalinga Institute of Industrial Technology" },
  ];

  const testimonials = [
    {
      name: "Ananya Roy",
      exam: "JEE Advanced 2023",
      score: "AIR 1,247",
      quote: "Improvise Academy's personalized approach helped me crack JEE with a great rank. The faculty is exceptional!"
    },
    {
      name: "Rahul Ghosh",
      exam: "NEET 2023",
      score: "720/720",
      quote: "The study material and test series were instrumental in my success. Highly recommended!"
    },
    {
      name: "Sneha Mukherjee",
      exam: "WBJEE 2023",
      score: "Rank 42",
      quote: "The faculty's dedication and the structured approach made learning enjoyable and effective."
    }
  ];

  const faculty = [
    {
      name: "Dr. S.K. Chatterjee",
      subject: "Physics",
      experience: "15+ years",
      achievements: "IIT-JEE Topper, Former HOD"
    },
    {
      name: "Dr. Priya Sharma",
      subject: "Chemistry",
      experience: "12+ years",
      achievements: "PhD in Organic Chemistry"
    },
    {
      name: "Dr. Rajesh Kumar",
      subject: "Mathematics",
      experience: "18+ years",
      achievements: "Gold Medalist, IIT Kharagpur"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-blue-600 hover:bg-white">Best Coaching in Kolkata</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Prepare for Success with <span className="text-yellow-300">Improvise Academy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Kolkata's Premier Institute for JEE, NEET & Board Exams - Online & Offline Coaching
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg py-6 px-8">
              Book Free Demo Class
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 font-bold text-lg py-6 px-8">
              View Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500" />
              <span className="font-bold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-blue-600" />
              <span className="font-bold">5,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-green-600" />
              <span className="font-bold">100+ Top Ranks</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="text-purple-600" />
              <span className="font-bold">15+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Coaching Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive preparation for engineering, medical, and school board examinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exams.map((exam, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="text-blue-600" />
                    {exam.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{exam.description}</p>
                  <Button variant="outline">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Improvise Academy?</h2>
              <p className="text-gray-600 mb-6">
                Located in the heart of Kolkata, Improvise Academy has been nurturing young minds for over 15 years. 
                Our unique approach combines traditional teaching with modern technology to ensure every student reaches their potential.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <Star className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Personalized Learning</h3>
                    <p className="text-gray-600">Adaptive study plans tailored to each student's needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <Users className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Expert Faculty</h3>
                    <p className="text-gray-600">Highly qualified teachers with proven track records</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-full mt-1">
                    <Award className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Proven Results</h3>
                    <p className="text-gray-600">Thousands of successful students across India</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg">Our Success Stories</Button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                <span className="text-gray-500">Academy Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Faculty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from the best educators in Kolkata with decades of experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.subject}</p>
                  <p className="text-gray-600 text-sm mt-2">{member.experience} Teaching Experience</p>
                  <p className="text-gray-700 mt-2 text-sm">{member.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students who achieved their dreams with Improvise Academy
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.exam}</p>
                    </div>
                    <Badge variant="secondary">{testimonial.score}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Free Demo Class</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience our teaching methodology and see why we're Kolkata's top choice for competitive exam preparation
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who prepared with Improvise Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-6 px-8">
              Book Free Demo Class
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 font-bold py-6 px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Education Street<br />
                Salt Lake, Kolkata - 700091<br />
                West Bengal, India
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">
                +91 33 1234 5678<br />
                +91 98765 43210
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">
                info@improviseacademy.in<br />
                admissions@improviseacademy.in
              </p>
            </div>
          </div>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;