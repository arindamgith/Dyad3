"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Award, Users, TrendingUp } from "lucide-react";

const ResultsPage = () => {
  const [activeYear, setActiveYear] = useState("2023");

  const years = ["2023", "2022", "2021", "2020", "2019"];

  const topRanks = {
    "2023": [
      { name: "Ananya Roy", exam: "JEE Advanced", rank: "AIR 1,247", score: "95.2 percentile" },
      { name: "Rahul Ghosh", exam: "NEET", rank: "AIR 1,056", score: "720/720" },
      { name: "Sneha Mukherjee", exam: "WBJEE", rank: "Rank 42", score: "92.5 percentile" },
      { name: "Sourav Das", exam: "JEE Main", rank: "99.7 percentile", score: "99.7 percentile" },
      { name: "Neha Patel", exam: "NEET", rank: "AIR 2,345", score: "702/720" },
      { name: "Debashish Roy", exam: "WBJEE", rank: "Rank 89", score: "90.8 percentile" }
    ],
    "2022": [
      { name: "Amit Sharma", exam: "JEE Advanced", rank: "AIR 2,156", score: "92.3 percentile" },
      { name: "Priya Singh", exam: "NEET", rank: "AIR 1,876", score: "698/720" },
      { name: "Rajesh Kumar", exam: "WBJEE", rank: "Rank 67", score: "89.5 percentile" }
    ]
  };

  const statistics = {
    "2023": {
      totalStudents: 1250,
      jeeQualified: 342,
      neetQualified: 278,
      wbjeeQualified: 412,
      top100: 15,
      top1000: 89
    },
    "2022": {
      totalStudents: 1120,
      jeeQualified: 298,
      neetQualified: 245,
      wbjeeQualified: 376,
      top100: 12,
      top1000: 76
    }
  };

  const stats = statistics[activeYear as keyof typeof statistics] || statistics["2023"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-blue-600 hover:bg-white">Our Results</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Celebrating Student Success
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Proud achievements of our students in engineering and medical entrance examinations
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Performance Statistics - {activeYear}</h2>
              <p className="text-gray-600">
                Our consistent track record of excellence in competitive examinations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-blue-600">{stats.totalStudents}+</div>
                <div className="text-gray-600">Students</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-green-600">{stats.jeeQualified}+</div>
                <div className="text-gray-600">JEE Qualified</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-purple-600">{stats.neetQualified}+</div>
                <div className="text-gray-600">NEET Qualified</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-yellow-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-yellow-600">{stats.wbjeeQualified}+</div>
                <div className="text-gray-600">WBJEE Qualified</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-red-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-red-600">{stats.top100}</div>
                <div className="text-gray-600">Top 100 Ranks</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-indigo-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-indigo-600">{stats.top1000}</div>
                <div className="text-gray-600">Top 1000 Ranks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Ranks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Top Rank Holders - {activeYear}</h2>
              <p className="text-gray-600">
                Celebrating the outstanding achievements of our students
              </p>
            </div>

            {/* Year Selector */}
            <div className="flex justify-center mb-8">
              <Tabs value={activeYear} onValueChange={setActiveYear}>
                <TabsList>
                  {years.map((year) => (
                    <TabsTrigger key={year} value={year}>
                      {year}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(topRanks[activeYear as keyof typeof topRanks] || topRanks["2023"]).map((student, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{student.name}</CardTitle>
                      <Badge variant="secondary">{student.exam}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-500 fill-current" size={20} />
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Rank:</span>
                        <span className="font-bold text-blue-600">{student.rank}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Score:</span>
                        <span className="font-bold">{student.score}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
              <p className="text-gray-600">
                Hear from our students who achieved their dreams with Improvise Academy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Improvise Academy's personalized approach helped me crack JEE with a great rank. 
                    The faculty is exceptional and always available for doubt clearing. The test series 
                    were instrumental in improving my time management skills."
                  </p>
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">Ananya Roy</h4>
                    <Badge variant="secondary">JEE Advanced AIR 1,247</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "The study material and test series were instrumental in my success. 
                    Improvise Academy's biology faculty made complex topics easy to understand. 
                    Their personalized attention and regular feedback helped me improve consistently."
                  </p>
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">Rahul Ghosh</h4>
                    <Badge variant="secondary">NEET 720/720</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community of Achievers</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey to success with Improvise Academy
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-6 px-8">
            Book Free Demo Class
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;