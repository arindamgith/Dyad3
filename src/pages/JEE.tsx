// JEE Main & Advanced preparation page

import { MadeWithDyad } from "@/components/made-with-dyad";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Clock, Award, Target } from 'lucide-react';

const JEE = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              JEE Main & Advanced <span className="block">Preparation in Kolkata</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Expert coaching for India's toughest engineering entrance exams with proven results
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg py-3 px-8">
              Book Free Demo Class
            </Button>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive <span className="text-blue-600">JEE</span> Preparation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our specialized program covers all aspects of JEE Main & Advanced with expert faculty
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 p-4 rounded-full mb-4">
                    <BookOpen className="text-blue-600" size={32} />
                  </div>
                  <CardTitle>Complete Syllabus Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Thorough coverage of Physics, Chemistry, and Mathematics as per JEE syllabus
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 p-4 rounded-full mb-4">
                    <Target className="text-blue-600" size={32} />
                  </div>
                  <CardTitle>Targeted Practice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Regular mock tests and previous year papers for effective preparation
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 p-4 rounded-full mb-4">
                    <Award className="text-blue-600" size={32} />
                  </div>
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    1000+ selections in JEE Advanced with top ranks consistently
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Program Details */}
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our JEE Program</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">JEE Main Preparation</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Comprehensive coverage of NCERT and reference books</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Regular topic-wise tests and revision sessions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Full-length mock tests as per latest exam pattern</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Doubt clearing sessions with expert faculty</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">JEE Advanced Preparation</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Advanced problem-solving techniques and strategies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Specialized modules for challenging topics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Previous years' JEE Advanced papers practice</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span>Personalized mentoring for top rank aspirants</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Faculty */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our <span className="text-blue-600">JEE Expert</span> Faculty
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Dr. Subhashish Roy" 
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                    />
                    <CardTitle>Dr. Subhashish Roy</CardTitle>
                    <p className="text-blue-600 font-medium">Physics</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      IIT-JEE expert with 15+ years of experience. Specializes in problem-solving techniques and conceptual clarity.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• IIT-JEE Specialist</li>
                      <li>• Published Researcher</li>
                      <li>• Mentored 500+ students to IITs</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Dr. Anirban Mukherjee" 
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                    />
                    <CardTitle>Dr. Anirban Mukherjee</CardTitle>
                    <p className="text-blue-600 font-medium">Mathematics</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      JEE Advanced specialist with 18+ years of experience. Expert in calculus and algebra.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• JEE Advanced Specialist</li>
                      <li>• Former IIT Faculty</li>
                      <li>• Author of multiple reference books</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Dr. Priya Sharma" 
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                    />
                    <CardTitle>Dr. Priya Sharma</CardTitle>
                    <p className="text-blue-600 font-medium">Chemistry</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Organic Chemistry expert with 12+ years of experience. Focuses on conceptual understanding.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• NEET & JEE Chemistry Specialist</li>
                      <li>• Organic Chemistry Expert</li>
                      <li>• Author of 3 chemistry books</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Crack JEE Advanced?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our proven program and get personalized guidance from expert faculty
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 px-8">
                Enroll Now for JEE 2025
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default JEE;