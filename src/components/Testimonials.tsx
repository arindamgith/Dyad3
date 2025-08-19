"use client";

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Ghosh",
      exam: "JEE Advanced 2023",
      rank: "AIR 15",
      content: "The faculty at Improvise Academy transformed my preparation. Their personalized approach and regular assessments helped me identify my weak areas and improve consistently.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Ananya Banerjee",
      exam: "NEET 2023",
      rank: "State Rank 3",
      content: "The biology faculty's teaching methodology is exceptional. They made complex topics easy to understand and always encouraged us to ask questions.",
      image: "https://images.unsplash.com/photo-1534528311217-0a20020c202b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Sourav Mukherjee",
      exam: "WBJEE 2023",
      rank: "State Rank 1",
      content: "Improvise Academy's test series and doubt-clearing sessions were instrumental in my success. The faculty's dedication and the supportive environment made all the difference.",
      image: "https://images.unsplash.com/photo-1506794778221-1f83d4f1ac8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Students</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who achieved their dreams with our guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <Quote className="text-blue-200 absolute top-4 right-4" size={48} />
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.exam} - {testimonial.rank}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;