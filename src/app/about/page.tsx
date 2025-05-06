import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          About Hackysack
        </h1>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            What is Hackysack?
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Hackysack, also known as footbag, is a small, round bag filled
              with beans, sand, or other materials that players use to perform
              tricks without using their hands. The game is played by keeping
              the bag off the ground using only your feet, knees, chest, and
              head.
            </p>
            <p className="text-gray-700 mb-4">
              While it can be played competitively, hackysack is often enjoyed
              as a cooperative, non-competitive activity where players form a
              circle and work together to keep the bag aloft, showcasing various
              skills and tricks along the way.
            </p>
            <p className="text-gray-700">
              The sport promotes physical fitness, coordination, balance, and
              concentration while fostering a friendly, communal atmosphere.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            History
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Origins</h3>
              <p className="text-gray-700">
                The modern hackysack (footbag) was invented in 1972 by Mike
                Marshall and John Stalberger in Oregon, USA. Stalberger had been
                recovering from a knee injury and was using the footbag as a
                therapeutic exercise. The pair called their creation a "Hacky
                Sack" and eventually trademarked the term.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">
                Growth and Popularity
              </h3>
              <p className="text-gray-700">
                Throughout the 1970s and 1980s, the sport gained considerable
                popularity, especially on college campuses across the United
                States. In 1979, the first official hackysack tournament was
                held, and the World Footbag Association was formed to govern the
                sport.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Modern Day</h3>
              <p className="text-gray-700">
                Today, hackysack is enjoyed worldwide as both a casual activity
                and a competitive sport. The World Footbag Championships are
                held annually, featuring events such as Freestyle and Net Sport
                competitions. The casual, cooperative nature of hackysack has
                helped it maintain its appeal across generations.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Basic Rules
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="list-disc pl-5 space-y-4 text-gray-700">
              <li>
                <strong>No Hands:</strong> The fundamental rule of hackysack is
                that players cannot use their hands to touch the bag during
                play. Only feet, knees, legs, chest, shoulders, and head are
                allowed.
              </li>
              <li>
                <strong>Circle Etiquette:</strong> In a hacky circle, the bag
                typically moves clockwise, and players should try to pass to the
                person on their left after receiving it.
              </li>
              <li>
                <strong>Serve the Drop:</strong> If a player drops the bag, they
                serve it back into play by kicking it to another player (not
                themselves).
              </li>
              <li>
                <strong>Respect the Circle:</strong> Maintain your position in
                the circle and avoid reaching for shots meant for other players.
              </li>
              <li>
                <strong>Cooperative Play:</strong> In casual play, the goal is
                to keep the bag in motion as a group, not to show off individual
                skills at the expense of others' participation.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Equipment
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              A standard hackysack (footbag) is typically:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>About 2 inches (5 cm) in diameter</li>
              <li>Weighs approximately 40-50 grams</li>
              <li>Made from leather, synthetic suede, or crocheted thread</li>
              <li>Filled with plastic beads, sand, or crushed rock</li>
            </ul>
            <p className="text-gray-700">
              There are different types of hackysacks designed for various
              playing styles:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Sand bags:</strong> Heavier and easier for beginners
              </li>
              <li>
                <strong>Crocheted bags:</strong> Lightweight and ideal for
                freestyle tricks
              </li>
              <li>
                <strong>12-panel bags:</strong> Standard design for competitive
                play
              </li>
              <li>
                <strong>14-panel bags:</strong> Provides better control for
                advanced tricks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
