"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Phone, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Crack JEE & NEET with <span className="text-blue-600">Kolkata's #1 Coaching</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Personalized coaching for engineering & medical entrance exams. 
              1000+ selections in JEE, NEET & state-level exams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 px-6">
                <Calendar className="mr-2" /> Book Free Demo Class
              </Button>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 text-lg py-3 px-6">
                <Phone className="mr-2" /> Call Us Now
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img 
                    key={item}
                    src={`https://i.pravatar.cc/150?img=${item}`} 
                    alt="Student" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="ml-4 text-gray-600">
                <span className="font-bold">1000+</span> students enrolled this month
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students studying" 
                className="rounded-lg shadow-xl w-full max-w-md"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition-all">
                  <Play className="text-blue-600" size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;