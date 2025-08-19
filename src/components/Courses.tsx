"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Clock } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "JEE Main & Advanced",
      description: "Comprehensive preparation for engineering entrance exams with expert faculty and proven strategies.",
      duration: "2 Years",
      batches: "Morning & Evening",
      icon: <BookOpen className="text-blue-600" size={24} />
    },
    {
      title: "NEET (Medical)",
      description: "Targeted coaching for medical entrance exams with special focus on biology and problem-solving.",
      duration: "2 Years",
      batches: "Morning & Evening",
      icon: <Users className="text-green-600" size={24} />
    },
    {
      title: "WBJEE & State Exams",
      description: "Specialized coaching for West Bengal state-level engineering exams with local curriculum expertise.",
      duration: "1 Year",
      batches: "Weekend",
      icon: <Clock className="text-purple-600" size={24} />
    },
    {
      title: "Foundation Courses (9th & 10th)",
      description: "Strong foundation building for school curriculum and early entrance exam preparation.",
      duration: "1 Year",
      batches: "Flexible",
      icon: <BookOpen className="text-orange-600" size={24} />
    }
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Comprehensive</span> Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored programs for different educational needs and exam patterns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{course.icon}</div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="mr-2" size={16} />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2" size={16} />
                    <span>Batches: {course.batches}</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  Know More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;