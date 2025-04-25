import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
}

interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

interface Milestone {
  year: string;
  event: string;
  description: string;
}

const AboutPage = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Batbold D.",
      position: "Chief Executive Officer",
      image: "/api/placeholder/200/200",
      bio: "15 years of experience in the travel industry with expertise in international travel management",
    },
    {
      name: "Sarangerel O.",
      position: "Marketing Manager",
      image: "/api/placeholder/200/200",
      bio: "10 years of experience in digital marketing and brand management",
    },
    {
      name: "Temuulen S.",
      position: "Travel Consultant",
      image: "/api/placeholder/200/200",
      bio: "8 years of travel industry experience, having visited over 30 countries",
    },
    {
      name: "Nomin-Erdene B.",
      position: "Customer Service",
      image: "/api/placeholder/200/200",
      bio: "Specializes in relationship management and service quality management",
    },
  ];

  const companyValues: CompanyValue[] = [
    {
      title: "Quality",
      description:
        "We prioritize the quality of our services and deliver experiences that exceed our clients' expectations",
      icon: "✨",
    },
    {
      title: "Reliability",
      description:
        "We fulfill our commitments to clients and strive to be their reliable partner",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description:
        "We constantly improve our services by introducing new technologies and innovations in the travel industry",
      icon: "💡",
    },
    {
      title: "Expertise",
      description:
        "Our team consists of professionals with years of experience in their respective fields",
      icon: "🎯",
    },
  ];

  const milestones: Milestone[] = [
    {
      year: "2015",
      event: "Company Founded",
      description:
        "We took our first steps in the travel industry, starting our operations with a small office",
    },
    {
      year: "2018",
      event: "International Partnerships",
      description:
        "Established partnerships with over 10 travel companies across Asia and Europe",
    },
    {
      year: "2020",
      event: "Digital Transformation",
      description:
        "Launched our digital platform and began offering online services during the pandemic",
    },
    {
      year: "2023",
      event: "Industry Leader",
      description:
        "Recognized as Mongolia's leading travel company and achieved ISO 9001 certification",
    },
    {
      year: "2025",
      event: "New Services",
      description:
        "Introduced AI-based travel advisory system and expanded our service offerings",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl opacity-90">
            With 10 years of experience, we provide our clients with
            opportunities to travel worldwide and help them create unforgettable
            memories.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Company Introduction */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                We are a company with a mission to represent Mongolia in the
                global travel industry and provide world-class services to our
                clients.
              </p>
              <p className="text-gray-600 mb-4">
                Our team develops travel plans tailored to each client&apos;s
                needs and financial capabilities, providing professional support
                throughout all stages of the journey.
              </p>
              <p className="text-gray-600">
                We aim not just to organize trips but to help create valuable
                memories and new experiences in your life.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/api/placeholder/600/400"
                alt="Our Team"
                fill
                className="rounded-lg shadow-xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Our History
          </h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 relative">
                {/* Timeline line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-[95px] top-[40px] bottom-[-32px] w-0.5 bg-teal-200"></div>
                )}

                <div className="flex-shrink-0 w-[100px]">
                  <div className="bg-teal-600 text-white px-4 py-2 rounded-full text-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-12 text-white mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-teal-100">Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-teal-100">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-teal-100">Support</div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Us</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you&apos;re interested in working in the travel industry and want
            to join our team, please contact us. We&apos;re always looking for
            talented individuals.
          </p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300">
            Careers
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
