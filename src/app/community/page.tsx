"use client";

import React, { useState } from "react";

export default function CommunityPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Virtual Hackysack Workshop",
      date: "June 15, 2023",
      time: "4:00 PM - 5:30 PM EST",
      description:
        "Join our online workshop to learn new tricks and techniques from professional players.",
    },
    {
      id: 2,
      title: "World Footbag Championships",
      date: "July 22-25, 2023",
      time: "All Day",
      description:
        "The annual world championship event featuring the best footbag players competing in freestyle and net categories.",
    },
    {
      id: 3,
      title: "Beginner Circle Meetup",
      date: "Every Saturday",
      time: "2:00 PM - 4:00 PM",
      description:
        "A welcoming circle for beginners to practice together and learn from each other.",
    },
  ];

  const communityPosts = [
    {
      id: 1,
      author: "Sarah K.",
      avatar: "/avatars/sarah.jpg",
      date: "3 days ago",
      content:
        "Finally managed to do my first butterfly kick yesterday! Thanks to everyone who gave me tips at last month's meetup!",
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      author: "Mike T.",
      avatar: "/avatars/mike.jpg",
      date: "1 week ago",
      content:
        "Check out my new crocheted hackysack design - extra lightweight for freestyle tricks. Let me know if you'd like one!",
      likes: 47,
      comments: 15,
    },
    {
      id: 3,
      author: "Jamie L.",
      avatar: "/avatars/jamie.jpg",
      date: "2 weeks ago",
      content:
        "Looking for hackysack buddies in the Portland area. Anyone up for a weekly session at Laurelhurst Park?",
      likes: 12,
      comments: 22,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Join Our Community
        </h1>

        <div className="mb-16">
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
            Connect with hackysack enthusiasts from around the world. Share
            tips, participate in events, and make friends with fellow players.
          </p>
        </div>

        {/* Events Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-green-700">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3">
                  {event.date}
                </span>
                <h3 className="text-xl font-medium mb-2 text-gray-800">
                  {event.title}
                </h3>
                <p className="text-sm text-green-600 mb-3">{event.time}</p>
                <p className="text-gray-600">{event.description}</p>
                <button className="mt-4 text-green-600 font-medium hover:underline">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-block bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50">
              View All Events
            </button>
          </div>
        </section>

        {/* Community Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-green-700">
            Community Posts
          </h2>
          <div className="space-y-6">
            {communityPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <h3 className="font-medium text-gray-800">{post.author}</h3>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex space-x-4 text-sm text-gray-500">
                  <button className="flex items-center hover:text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    {post.likes} likes
                  </button>
                  <button className="flex items-center hover:text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {post.comments} comments
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-block bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50">
              View All Posts
            </button>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-green-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 mb-6 text-center">
              Have questions or want to contribute to our community? Send us a
              message and we'll get back to you!
            </p>

            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
