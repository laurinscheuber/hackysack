import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Welcome to Hackysack World
              </h1>
              <p className="text-xl">
                Learn everything about hackysack, master new techniques, and
                join our growing community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/techniques"
                  className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100"
                >
                  Learn Techniques
                </Link>
                <Link
                  href="/videos"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium border border-white hover:bg-green-800"
                >
                  Watch Videos
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                {/* Replace with actual hackysack image */}
                <div className="w-48 h-48 bg-green-800 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    Hackysack
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Discover Hackysack
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">History & Rules</h3>
              <p className="text-gray-600">
                Learn about the origins of hackysack and understand the official
                rules of play.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-block text-green-600 hover:underline"
              >
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Techniques & Tricks
              </h3>
              <p className="text-gray-600">
                Master basic and advanced hackysack moves with our step-by-step
                guides.
              </p>
              <Link
                href="/techniques"
                className="mt-4 inline-block text-green-600 hover:underline"
              >
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Training Videos</h3>
              <p className="text-gray-600">
                Watch instructional videos from professional hackysack players
                and coaches.
              </p>
              <Link
                href="/videos"
                className="mt-4 inline-block text-green-600 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Join Our Community
            </h2>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with hackysack enthusiasts from around the world. Share
              tips, show off your skills, and participate in online challenges.
            </p>
            <div className="flex justify-center">
              <Link
                href="/community"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
