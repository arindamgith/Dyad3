"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Calendar, Award } from "lucide-react";

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "JEE Main Foundation Course",
      category: "Engineering",
      duration: "2 Years",
      mode: "Online & Offline",
      students: "50+",
      description: "Comprehensive preparation for JEE Main from class 11th onwards",
      features: [
        "Complete syllabus coverage",
        "Weekly tests and assessments",
        "Doubt solving sessions",
        "Performance analysis reports"
      ],
      price: "₹45,000",
      originalPrice: "₹60,000",
      popular: true
    },
    {
      id: 2,
      title: "JEE Advanced Intensive",
      category: "Engineering",
      duration: "1 Year",
      mode: "Online & Offline",
      students: "30+",
      description: "Targeted preparation for JEE Advanced for droppers and repeaters",
      features: [
        "Advanced problem solving",
        "Previous year papers analysis",
        "Rank booster modules",
        "Personalized mentoring"
      ],
      price: "₹75,000",
      originalPrice: "₹90,000",
      popular: true
    },
    {
      id: 3,
      title: "NEET Medical Mastery",
      category: "Medical",
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
      popular: false
    },
    {
      id: 4,
      title: "WBJEE Special Course",
      category: "Engineering",
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
      popular: false
    },
    {
      id: 5,
      title: "BITSAT Crash Course",
      category: "Engineering",
      duration: "6 Months",
      mode: "Online & Offline",
      students: "25+",
      description: "Intensive preparation for BITSAT with English & Logical Reasoning",
      features: [
        "Speed mathematics",
        "English proficiency",
        "Logical reasoning practice",
        "Mock tests"
      ],
      price: "₹30,000",
      originalPrice: "₹40,000",
      popular: false
    },
    {
      id: 6,
      title: "School Board Excellence",
      category: "School",
      duration: "1 Year",
      mode: "Online & Offline",
      students: "100+",
      description: "Comprehensive preparation for CBSE, ICSE, and WB board exams",
      features: [
        "Board-specific syllabus",
        "Sample paper practice",
        "Chapter-wise tests",
        "Doubt clearing sessions"
      ],
      price: "₹25,000",
      originalPrice: "₹35,000",
      popular: false
    }
  ];

  const categories = [
    { name: "All Courses", count: courses.length },
    { name: "Engineering", count: courses.filter(c => c.category === "Engineering").length },
    { name: "Medical", count: courses.filter(c => c.category === "Medical").length },
    { name: "School Boards", count: courses.filter(c => c.category === "School").length }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-blue-600 hover:bg-white">Our Courses</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find the Perfect Course for Your Goals
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive coaching programs designed for success in engineering, medical, and school board examinations
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
                    <Badge variant="secondary">{course.category}</Badge>
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
                          <span className="text-green-600 mr-2">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Course is Right for You?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free counseling session with our experts to find the perfect path for your goals
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-6 px-8">
            Book Free Counseling
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;