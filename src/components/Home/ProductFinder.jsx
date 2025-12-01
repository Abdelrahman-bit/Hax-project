import React from 'react'
import { Search, ShoppingBag } from 'lucide-react';
import { mockData } from '@/data/mocking';

const ProductFinder = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 w-full">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">Product Finder</h1>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search for products by URL or product name"
                className="w-full px-4 py-3 rounded-lg pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-900 text-white p-2 rounded-lg">
                <Search className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {mockData.quickLinks.map((link, index) => (
                <button
                  key={index}
                  className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm hover:bg-white/30"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <ShoppingBag className="w-48 h-48 text-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFinder;