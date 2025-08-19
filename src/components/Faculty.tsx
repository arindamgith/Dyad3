"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Subhashish Roy",
      subject: "Physics",
      experience: "15+ years",
      achievements: ["IIT-JEE Expert", "Published Researcher", "Mentored 500+ students"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Priya Sharma",
      subject: "Chemistry",
      experience: "12+ years",
      achievements: ["NEET Specialist", "Organic Chemistry Expert", "Author of 3 books"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Anirban Mukherjee",
      subject: "Mathematics",
      experience: "18+ years",
      achievements: ["JEE Advanced Specialist", "Differential Calculus Expert", "Former IIT Faculty"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Sunita Ghosh",
      subject: "Biology",
      experience: "14+ years",
      achievements: ["NEET Biology Expert", "Genetics Specialist", "Mentored 1000+ students"],
      image: "https://images.unsplash.com/photo-1573496359142-83191db5d5e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section id="faculty" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Expert</span> Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from the best educators with proven track records in entrance exam preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
                  />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-blue-600 font-medium">{member.subject}</p>
                <p className="text-gray-500 text-sm">{member.experience} of experience</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.achievements.map((achievement, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;