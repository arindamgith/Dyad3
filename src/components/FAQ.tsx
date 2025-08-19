"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the courses offered at Improvise Academy?",
      answer: "We offer comprehensive coaching for JEE Main & Advanced, NEET, WBJEE, and foundation courses for classes 9th and 10th. Our programs are available in both online and offline modes."
    },
    {
      question: "How are your faculty members qualified?",
      answer: "Our faculty members are highly experienced educators with backgrounds from premier institutions like IITs and medical colleges. They have over 10+ years of experience in entrance exam preparation and have mentored thousands of students."
    },
    {
      question: "What is the success rate of your students?",
      answer: "We maintain a 98% success rate with over 1000+ selections annually in various engineering and medical entrance exams. Our students consistently secure top ranks in national and state-level examinations."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials designed by our expert faculty. These materials include theory books, practice problems, previous year questions, and regular test series."
    },
    {
      question: "How can I enroll for a demo class?",
      answer: "You can book a free demo class through our website by clicking on 'Book Free Demo' or by calling our helpline number. Our counselors will guide you through the process."
    },
    {
      question: "What are your batch timings?",
      answer: "We offer flexible batch timings to accommodate different schedules. Morning batches (8 AM - 12 PM), evening batches (4 PM - 8 PM), and weekend batches for school students."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Improvise Academy
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-4">
              <CardHeader 
                className="cursor-pointer flex flex-row items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <CardTitle className="text-lg">{faq.question}</CardTitle>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </CardHeader>
              {openIndex === index && (
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;