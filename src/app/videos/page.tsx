"use client";

import React, { useState } from "react";

interface VideoData {
  id: string;
  title: string;
  description: string;
  category: string;
  youtubeId: string;
}

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const videoData: VideoData[] = [
    {
      id: "1",
      title: "Beginner Hackysack Tutorial",
      description:
        "Learn the basic kicks and get started with hackysack. Perfect for complete beginners.",
      category: "beginner",
      youtubeId: "c7DkKRPZ2Lo",
    },
    {
      id: "2",
      title: "Basic Stalls Tutorial",
      description:
        "Master the fundamental stalling techniques to improve control and flow.",
      category: "beginner",
      youtubeId: "GS_qZm8pCrA",
    },
    {
      id: "3",
      title: "Inside & Outside Kicks",
      description:
        "Detailed tutorial on perfecting your inside and outside kicks.",
      category: "beginner",
      youtubeId: "IGNrR2st8YA",
    },
    {
      id: "4",
      title: "Intermediate Footbag Tricks",
      description:
        "Level up your hackysack game with these intermediate tricks and combinations.",
      category: "intermediate",
      youtubeId: "nWnQ5Jfhmzw",
    },
    {
      id: "5",
      title: "Advanced Spinning Techniques",
      description:
        "Learn advanced spinning techniques for freestyle hackysack.",
      category: "advanced",
      youtubeId: "bvjyZEgVN7k",
    },
    {
      id: "6",
      title: "Professional Footbag Routine",
      description:
        "Watch world-class footbag players showcase incredible tricks and routines.",
      category: "advanced",
      youtubeId: "UeYgZYV0tDs",
    },
  ];

  const filteredVideos =
    selectedCategory === "all"
      ? videoData
      : videoData.filter((video) => video.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
          Training Videos
        </h1>

        <div className="mb-12">
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
            Watch these instructional videos to improve your hackysack skills.
            From beginners to advanced players, we have tutorials for all skill
            levels.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex justify-center">
          <div className="flex space-x-2 bg-white p-1 rounded-xl shadow-md border border-indigo-100">
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "hover:bg-indigo-50 text-gray-700"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All Videos
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === "beginner"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "hover:bg-indigo-50 text-gray-700"
              }`}
              onClick={() => setSelectedCategory("beginner")}
            >
              Beginner
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === "intermediate"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "hover:bg-indigo-50 text-gray-700"
              }`}
              onClick={() => setSelectedCategory("intermediate")}
            >
              Intermediate
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === "advanced"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "hover:bg-indigo-50 text-gray-700"
              }`}
              onClick={() => setSelectedCategory("advanced")}
            >
              Advanced
            </button>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-900">
                  {video.title}
                </h3>
                <span className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs px-3 py-1 rounded-full mb-3 uppercase font-medium border border-indigo-200">
                  {video.category}
                </span>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Submission CTA */}
        <div className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 text-center shadow-lg border border-indigo-100">
          <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Have a Great Tutorial?
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            If you've created a hackysack tutorial video, we'd love to feature
            it on our site. Share your knowledge with the hackysack community!
          </p>
          <a
            href="/community"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md"
          >
            Submit Your Video
          </a>
        </div>
      </div>
    </div>
  );
}
