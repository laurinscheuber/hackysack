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
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
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
          <div className="flex space-x-2 bg-white p-1 rounded-lg shadow-sm">
            <button
              className={`px-4 py-2 rounded-md ${
                selectedCategory === "all"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All Videos
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedCategory === "beginner"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory("beginner")}
            >
              Beginner
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedCategory === "intermediate"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory("intermediate")}
            >
              Intermediate
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedCategory === "advanced"
                  ? "bg-green-600 text-white"
                  : "hover:bg-gray-100"
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
              className="bg-white rounded-lg shadow-md overflow-hidden"
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {video.title}
                </h3>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 uppercase">
                  {video.category}
                </span>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Submission CTA */}
        <div className="mt-16 bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Have a Great Tutorial?
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            If you've created a hackysack tutorial video, we'd love to feature
            it on our site. Share your knowledge with the hackysack community!
          </p>
          <a
            href="/community"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
          >
            Submit Your Video
          </a>
        </div>
      </div>
    </div>
  );
}
