"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Calendar, Award, Target, MapPin, ChevronRight } from "lucide-react";
import DemoForm from "@/components/DemoForm";

const WBJEEPage = () => {
  const courses = [
    {
      id: 1,
      title: "WBJEE Special Course",
      duration: "1 Year",
      mode: "Online & Offline",
      students: "40+",
      description: "Specialized preparation for West Bengal's state engineering entrance",
      features: [
        "WBJEE pattern practice",
        "Category-wise question solving",
        "Time management strategies",
        "Previous year papers"
      ],
      price: "₹35,000",
      originalPrice: "₹45,000",
      popular: true
    },
    {
      id: 2,
      title: "WBJEE Foundation",
      duration: "2 Years",
      mode: "Online & Offline",
      students: "35+",
      description: "Early preparation for WBJEE from class 11th onwards",
      features: [
        "Complete syllabus coverage",
        "Weekly tests",
        "Doubt solving sessions",
        "Performance analysis"
      ],
      price: "₹40,000",
      originalPrice: "₹50,000",
      popular: false
    },
    {
      id: 3,
      title: "WBJEE Crash Course",
      duration: "6 Months",
      mode: "Online & Offline",
      students: "30+",
      description: "Intensive preparation for WBJEE for droppers",
      features: [
        "Quick revision modules",
        "Mock tests",
        "Doubt clearing sessions",
        "Strategy sessions"
      ],
      price: "₹30,000",
      originalPrice: "₹40,000",
      popular: false
    }
  ];

  const features = [
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "WBJEE Focused",
      description: "Specialized preparation tailored for West Bengal's engineering entrance"
    },
    {
      icon: <Target className="text-green-600" size={24} />,
      title: "Category-wise Strategy",
      description: "Specialized approach for different WBJEE categories (General, SC, ST, OBC)"
    },
    {
      icon: <Award className="text-purple-600" size={24} />,
      title: "Proven Results",
      description: "Consistent top ranks in WBJEE with hundreds of successful students"
    },
    {
      icon: <Users className="text-yellow-600" size={24} />,
      title: "Expert Faculty",
      description: "Faculty with deep understanding of WBJEE pattern and requirements"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-blue-700 hover:bg-white">WBJEE Preparation</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Excel in WBJEE with <span className="text-yellow-300">Improvise Academy</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Kolkata's premier coaching for West Bengal Joint Entrance Examination with proven results
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-6 px-8 rounded-full">
            Book Free Demo Class
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our WBJEE Program?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our specialized approach ensures comprehensive preparation for WBJEE
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
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
            <h2 className="text-3xl font-bold mb-4">Our WBJEE Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our specialized courses designed for different preparation stages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="flex flex-col h-full relative border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                {course.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                    Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">WBJEE</Badge>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{course.price}</div>
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
                      <Clock className="text-blue-600 mr-2" size={16} />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="text-green-600 mr-2" size={16} />
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
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-6 rounded-full">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Book Your Free WBJEE Demo Class</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience our teaching methodology and see why we're Kolkata's top choice for WBJEE preparation
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Excel in WBJEE?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who prepared with Improvise Academy
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-6 px-8 rounded-full">
            Book Free Demo Class
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WBJEEPage;