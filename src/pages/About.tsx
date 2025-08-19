"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, BookOpen, Target, Lightbulb, Heart } from "lucide-react";
import DemoForm from "@/components/DemoForm";

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="text-red-600" size={24} />,
      title: "Student-Centric Approach",
      description: "We prioritize each student's individual learning needs and goals"
    },
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: "Excellence in Education",
      description: "We strive for the highest standards in teaching and learning"
    },
    {
      icon: <Lightbulb className="text-yellow-600" size={24} />,
      title: "Innovation",
      description: "We continuously evolve our methods to enhance learning outcomes"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Integrity",
      description: "We maintain transparency and honesty in all our dealings"
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Excellence" },
    { number: "5000+", label: "Students Trained" },
    { number: "100+", label: "Top Ranks Achieved" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-blue-600 hover:bg-white">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Students for <span className="text-yellow-300">Success</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Kolkata's premier coaching institute for competitive exams with a legacy of excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                <span className="text-gray-500">Our Academy Image</span>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2008, Improvise Academy began with a vision to revolutionize competitive exam preparation in Kolkata. 
                What started as a small coaching center with just 20 students has now grown into one of the most respected 
                educational institutions in Eastern India.
              </p>
              
              <p className="text-gray-600 mb-6">
                Our journey has been marked by consistent innovation, dedicated faculty, and an unwavering commitment to 
                student success. Over the years, we've helped thousands of students achieve their dreams of studying at 
                prestigious institutions across India.
              </p>
              
              <p className="text-gray-600">
                Today, with multiple centers across Kolkata and a team of over 50 expert faculty members, we continue to 
                set new benchmarks in coaching excellence while staying true to our core values of integrity, innovation, 
                and student-centric approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating our journey of excellence and student success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission to empower students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="bg-gray-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders behind Improvise Academy's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6" />
                <h3 className="text-xl font-bold">Dr. S.K. Chatterjee</h3>
                <p className="text-blue-600 font-medium mb-2">Founder & Director</p>
                <p className="text-gray-600 text-sm">
                  IIT-JEE Topper with 20+ years of teaching experience. Visionary leader with a passion for education.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6" />
                <h3 className="text-xl font-bold">Dr. Priya Sharma</h3>
                <p className="text-blue-600 font-medium mb-2">Academic Director</p>
                <p className="text-gray-600 text-sm">
                  PhD in Organic Chemistry with 15+ years of teaching experience. Expert in curriculum development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6" />
                <h3 className="text-xl font-bold">Rajesh Kumar</h3>
                <p className="text-blue-600 font-medium mb-2">Operations Director</p>
                <p className="text-gray-600 text-sm">
                  MBA with 12+ years in educational administration. Ensures smooth functioning of all operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our legacy of excellence and achieve your dreams with Improvise Academy
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-6 px-8">
            Book Free Demo Class
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;