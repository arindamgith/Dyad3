"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Calendar, Award, Target, Heart, Microscope, Atom } from "lucide-react";
import DemoForm from "@/components/DemoForm";

const NEETPage = () => {
  const courses = [
    {
      id: 1,
      title: "NEET Medical Mastery",
      duration: "2 Years",
      mode: "Online & Offline",
      students: "45+",
      description: "Complete preparation for NEET and other medical entrance exams",
      features: [
        "NCERT focused approach",
        "Biology diagram practice",
        "Physics numerical solving",
        "Chemistry reaction mastery"
      ],
      price: "₹50,000",
      originalPrice: "₹65,000",
      popular: true
    },
    {
      id: 2,
      title: "NEET Crash Course",
      duration: "6 Months",
      mode: "Online & Offline",
      students: "35+",
      description: "Intensive preparation for NEET for droppers and repeaters",
      features: [
        "Quick revision modules",
        "Mock tests",
        "Doubt clearing sessions",
        "Strategy sessions"
      ],
      price: "₹40,000",
      originalPrice: "₹50,000",
      popular: false
    },
    {
      id: 3,
      title: "AIIMS Special Course",
      duration: "1 Year",
      mode: "Online & Offline",
      students: "25+",
      description: "Specialized preparation for AIIMS and other medical entrances",
      features: [
        "AIIMS pattern practice",
        "GK & Current Affairs",
        "Reasoning & Aptitude",
        "Personality assessment"
      ],
      price: "₹45,000",
      originalPrice: "₹55,000",
      popular: false
    }
  ];

  const features = [
    {
      icon: <Heart className="text-red-600" size={24} />,
      title: "Biology Mastery",
      description: "Comprehensive biology coverage with diagram practice and NCERT focus"
    },
    {
      icon: <Atom className="text-blue-600" size={24} />,
      title: "Chemistry Excellence",
      description: "Organic, inorganic, and physical chemistry with reaction mastery"
    },
    {
      icon: <Target className="text-green-600" size={24} />,
      title: "Physics Problem Solving",
      description: "Numerical solving techniques and conceptual clarity"
    },
    {
      icon: <Users className="text-purple-600" size={24} />,
      title: "Expert Medical Faculty",
      description: "Highly qualified faculty with medical background and teaching expertise"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-green-600 hover:bg-white">NEET Preparation</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Excel in NEET with <span className="text-yellow-300">Improvise Academy</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Comprehensive coaching programs for NEET and other medical entrance exams with proven results
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-6 px-8">
            Book Free Demo Class
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our NEET Program?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our specialized approach ensures comprehensive preparation for NEET and other medical entrances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="bg-gray-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our NEET Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our specialized courses designed for different preparation stages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="flex flex-col h-full relative">
                {course.popular && (
                  <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">NEET</Badge>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{course.price}</div>
                      {course.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <Clock className="text-green-600 mr-2" size={16} />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="text-blue-600 mr-2" size={16} />
                      <span>Mode: {course.mode}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="text-purple-600 mr-2" size={16} />
                      <span>Batch Size: {course.students} students</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Course Features:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Book Your Free NEET Demo Class</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience our teaching methodology and see why we're Kolkata's top choice for NEET preparation
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Become a Doctor?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who prepared with Improvise Academy
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-6 px-8">
            Book Free Demo Class
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NEETPage;