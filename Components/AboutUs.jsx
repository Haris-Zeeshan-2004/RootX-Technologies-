"use client";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Heading */}
          <div className="space-y-6">
            {/* Our Story Badge */}
            <div className="inline-block">
              <span className="px-6 py-2.5 border-2 border-black rounded-full text-sm font-semibold text-black">
                Our Story
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black font-heading leading-tight">
              About Rootx
              <br />
              Technologies
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4">
            {/* Paragraph 1 */}
            <p className="text-base md:text-lg text-black leading-relaxed font-heading font-normal">
              We are a leading software house specializing in cutting-edge mobile app and web
              development solutions.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base md:text-lg text-black leading-relaxed font-heading font-normal">
              At RootX Technologies, we transform innovative ideas into powerful digital
              experiences. Our expert team delivers high-performance mobile applications and
              responsive web platforms that drive business growth and user engagement.
            </p>

            {/* Paragraph 3 */}
            <p className="text-base md:text-lg text-black leading-relaxed font-heading font-normal">
              With a passion for technology and a commitment to excellence, we combine
              creative design with robust development practices. From concept to deployment,
              we partner with businesses to build scalable, user-friendly solutions that stand
              out in today's competitive digital landscape.
            </p>

            {/* Learn More Button */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:scale-105 font-body"
                style={{ backgroundColor: '#00346C' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002a57'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00346C'}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
