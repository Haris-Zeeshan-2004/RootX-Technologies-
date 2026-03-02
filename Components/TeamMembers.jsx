"use client";
import Image from "next/image";
import { useState } from "react";

export default function TeamMembers() {
    const [visibleCount, setVisibleCount] = useState(3);

    const teamMembers = [
        { name: "Muhammad Hamza", image: "/team/hamza.png", role: "Project Manager" },
        { name: "Matloob Ali", image: "/team/matloob Ali.png", role: "Head Manager" },
        { name: "Sidra Younas", image: "/team/sidra.png", role: "HR Manager" },
        { name: "Rehan Munsif", image: "/team/rehan-2.png", role: "Sr.ASP.NET Core/MVC Developer" },
        { name: "Ayaz Aslam", image: "/team/ayaz-2.png", role: "Flutter Developer" },
        { name: "Haris Zeeshan", image: "/team/haris-2.png", role: "Web Developer" },
        { name: "Abdul Moiz", image: "/team/moiz-2.png", role: "UI/UX Designer" },
        
    ];

    const loadMore = () => {
        setVisibleCount(teamMembers.length);
    };

    const seeLess = () => {
        setVisibleCount(3);
        // Scroll to team section smoothly
        const teamSection = document.getElementById('team-section');
        if (teamSection) {
            teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="team-section" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    {/* Our Team Badge */}
                    <div className="inline-block mb-4 sm:mb-6">
                        <span className="px-4 sm:px-6 py-2 sm:py-2.5 border-1 border-black rounded-full text-xs sm:text-sm font-semibold font-body text-black  transition-all duration-300">
                            Our Team
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-black leading-tight">
                        Team Members
                    </h2>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-5xl mx-auto">
                    {teamMembers.slice(0, visibleCount).map((member, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden shadow-xl transition-all duration-300"
                            style={{
                                borderTopRightRadius: '2.5rem',
                                borderBottomLeftRadius: '2.5rem',
                                borderTopLeftRadius: '0',
                                borderBottomRightRadius: '0',
                                aspectRatio: '3/4'
                            }}
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            
                            {/* Blue Overlay - Always Visible */}
                            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-blue-900/70 via-blue-900/80 to-transparent" />
                            
                            {/* Name and Role - Always Visible */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 uppercase tracking-wide" style={{ color: '#ffffff' }}>
                                    {member.name}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < teamMembers.length && (
                    <div className="flex justify-center">
                        <button
                            onClick={loadMore}
                            className="text-white px-10 py-3 rounded-full  font-semibold transition-all duration-300 shadow-lg hover:shadow-xl font-body"
                            style={{ backgroundColor: '#00346C' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002a57'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00346C'}
                        >
                            See More
                        </button>
                    </div>
                )}

                {/* See Less Button */}
                {visibleCount >= teamMembers.length && (
                    <div className="flex justify-center">
                        <button
                            onClick={seeLess}
                            className="text-white px-10 py-3 rounded-full  font-semibold transition-all duration-300 shadow-lg hover:shadow-xl font-body"
                            style={{ backgroundColor: '#00346C' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002a57'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00346C'}
                        >
                            See Less
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
