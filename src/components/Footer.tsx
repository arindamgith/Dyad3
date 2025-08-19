"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Improvise Academy</h3>
            <p className="text-gray-400 mb-4">
              Kolkata's premier coaching institute for engineering and medical entrance exams with proven results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#faculty" className="text-gray-400 hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#results" className="text-gray-400 hover:text-white transition-colors">Results</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">JEE Main & Advanced</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NEET (Medical)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">WBJEE</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Foundation (9th & 10th)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Online Coaching</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-gray-400 mr-2 mt-1" size={18} />
                <span className="text-gray-400">123 Education Street, Salt Lake, Kolkata - 700091</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gray-400 mr-2" size={18} />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-gray-400 mr-2" size={18} />
                <span className="text-gray-400">info@improviseacademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Improvise Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;