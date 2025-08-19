"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Award, Users } from 'lucide-react';

const Results = () => {
  const stats = [
    { number: "1000+", label: "Students Selected", icon: <Trophy className="text-yellow-500" /> },
    { number: "98%", label: "Success Rate", icon: <Award className="text-green-500" /> },
    { number: "15+", label: "Years Experience", icon: <Users className="text-blue-500" /> }
  ];

  const results = [
    {
      year: "2023",
      exams: [
        { name: "JEE Advanced", selections: 120, topRank: "AIR 15" },
        { name: "NEET", selections: 85, topRank: "State Rank 3" },
        { name: "WBJEE", selections: 210, topRank: "State Rank 1" }
      ]
    },
    {
      year: "2022",
      exams: [
        { name: "JEE Advanced", selections: 95, topRank: "AIR 22" },
        { name: "NEET", selections: 78, topRank: "State Rank 7" },
        { name: "WBJEE", selections: 185, topRank: "State Rank 2" }
      ]
    }
  ];

  return (
    <section id="results" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Impressive</span> Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consistent excellence in engineering and medical entrance exams
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Yearly Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {results.map((yearResult, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Results {yearResult.year}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {yearResult.exams.map((exam, examIndex) => (
                    <div key={examIndex} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-lg">{exam.name}</h4>
                        <span className="text-blue-600 font-medium">{exam.topRank}</span>
                      </div>
                      <p className="text-gray-600">{exam.selections} selections</p>
                    </div>
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

export default Results;