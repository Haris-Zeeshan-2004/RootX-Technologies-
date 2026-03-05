"use client";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { useEffect } from 'react';

export default function TechStack() {
  // Embla Carousel configurations - exactly matching original CSS animation speeds and directions
  const [emblaRef1] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [AutoScroll({ 
      playOnInit: true, 
      speed: 0.8, // Matches original 15s animation
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false
    })]
  );
  
  const [emblaRef2] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [AutoScroll({ 
      playOnInit: true, 
      speed: 0.75, // Matches original 16s animation
      direction: 'backward', 
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false
    })]
  );
  
  const [emblaRef3] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [AutoScroll({ 
      playOnInit: true, 
      speed: 0.7, // Matches original 17s animation
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false
    })]
  );
  
  const [emblaRef4] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [AutoScroll({ 
      playOnInit: true, 
      speed: 0.8, // Matches original 15s animation
      direction: 'backward', 
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false
    })]
  );
  const row1Technologies = [
    { name: "React", icon: "/stack/react.svg", color: "bg-cyan-100", shadow: "shadow-cyan-300" },
    { name: "Node.js", icon: "/stack/nodejs.svg", color: "bg-green-100", shadow: "shadow-green-300" },
    { name: "Flutter", icon: "/stack/flutter.webp", color: "bg-blue-100", shadow: "shadow-blue-300" },
    { name: "Docker", icon: "/stack/docker.webp", color: "bg-sky-100", shadow: "shadow-sky-300" },
    { name: "MongoDB", icon: "/stack/mongodb.svg", color: "bg-green-100", shadow: "shadow-green-300" },
    { name: "Android", icon: "/stack/Android.webp", color: "bg-green-100", shadow: "shadow-green-300" },
  ];

  const row2Technologies = [
    { name: "React Native", icon: "/stack/react-native.webp", color: "bg-purple-100", shadow: "shadow-purple-300" },
    { name: "MySQL", icon: "/stack/mysql.svg", color: "bg-orange-100", shadow: "shadow-orange-300" },
    { name: "iOS", icon: "/stack/ios.webp", color: "bg-gray-100", shadow: "shadow-gray-300" },
    { name: "Figma", icon: "/stack/figma.webp", color: "bg-pink-100", shadow: "shadow-pink-300" },
    { name: "Git", icon: "/stack/git.webp", color: "bg-orange-100", shadow: "shadow-orange-300" },
    { name: "Sketch", icon: "/stack/sketch.webp", color: "bg-yellow-100", shadow: "shadow-yellow-300" },
  ];

  const row3Technologies = [
    { name: "PHP", icon: "/stack/php.svg", color: "bg-indigo-100", shadow: "shadow-indigo-300" },
    { name: "Java", icon: "/stack/Java.webp", color: "bg-red-100", shadow: "shadow-red-300" },
    { name: "Kubernetes", icon: "/stack/kubernetes.webp", color: "bg-blue-100", shadow: "shadow-blue-300" },
    { name: "Rails", icon: "/stack/rails.svg", color: "bg-red-100", shadow: "shadow-red-300" },
    { name: "Photoshop", icon: "/stack/photoshop.webp", color: "bg-blue-100", shadow: "shadow-blue-300" },
    { name: "Trello", icon: "/stack/Trello.webp", color: "bg-blue-100", shadow: "shadow-blue-300" },
  ];

  const row4Technologies = [
    { name: "Jira", icon: "/stack/Jira.webp", color: "bg-blue-100", shadow: "shadow-blue-300" },
    { name: "Slack", icon: "/stack/slack.webp", color: "bg-purple-100", shadow: "shadow-purple-300" },
    { name: "Ansible", icon: "/stack/ansible.webp", color: "bg-red-100", shadow: "shadow-red-300" },
    { name: "Puppet", icon: "/stack/puppet.webp", color: "bg-orange-100", shadow: "shadow-orange-300" },
    { name: "AnyDesk", icon: "/stack/anydesk.webp", color: "bg-red-100", shadow: "shadow-red-300" },
    { name: "TeamViewer", icon: "/stack/teamviewer.svg", color: "bg-blue-100", shadow: "shadow-blue-300" },
  ];

  const TechCard = ({ tech }) => (
    <div className={`flex-shrink-0 mx-2 md:mx-3 ${tech.color} rounded-2xl px-6 py-3 md:px-8 md:py-4 transition-all duration-300 transform hover:scale-105`}>
      <div className="flex items-center gap-3 md:gap-4">
        <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
          <Image
            src={tech.icon}
            alt={tech.name}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-base md:text-lg lg:text-xl font-bold text-gray-800 whitespace-nowrap font-body">
          {tech.name}
        </span>
      </div>
    </div>
  );

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 md:mb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-black leading-tight text-center">
          Our Technology Stack
        </h2>
      </div>

      <div className="w-full space-y-4 md:space-y-6">
        {/* Row 1 - Left to Right */}
        <div className="relative overflow-hidden py-4 md:py-5 w-full">
          <div className="embla" ref={emblaRef1}>
            <div className="embla__container flex">
              {[...row1Technologies, ...row1Technologies, ...row1Technologies].map((tech, index) => (
                <div key={`row1-${index}`} className="embla__slide flex-[0_0_auto]">
                  <TechCard tech={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative overflow-hidden py-4 md:py-5 w-full">
          <div className="embla" ref={emblaRef2}>
            <div className="embla__container flex">
              {[...row2Technologies, ...row2Technologies, ...row2Technologies].map((tech, index) => (
                <div key={`row2-${index}`} className="embla__slide flex-[0_0_auto]">
                  <TechCard tech={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3 - Left to Right */}
        <div className="relative overflow-hidden py-4 md:py-5 w-full">
          <div className="embla" ref={emblaRef3}>
            <div className="embla__container flex">
              {[...row3Technologies, ...row3Technologies, ...row3Technologies].map((tech, index) => (
                <div key={`row3-${index}`} className="embla__slide flex-[0_0_auto]">
                  <TechCard tech={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 4 - Right to Left */}
        <div className="relative overflow-hidden py-4 md:py-5 w-full">
          <div className="embla" ref={emblaRef4}>
            <div className="embla__container flex">
              {[...row4Technologies, ...row4Technologies, ...row4Technologies].map((tech, index) => (
                <div key={`row4-${index}`} className="embla__slide flex-[0_0_auto]">
                  <TechCard tech={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
