import Link from 'next/link';
import { ArrowLeft, Mail, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function ExcosPage() {
  const excos = [
    {
      name: "Austin Ogbe",
      position: "Chairman",
      house: "National House (Nato)",
      photo: "/excos/chairman.png",
      email: "jopazzy@gmail.com",
      facebook: "https://www.facebook.com/austin.uniquejoe",
      twitter: "https://x.com/joe_pazzy",
      instagram: "https://www.instagram.com/austin_ogbe",
      linkedin: "https://www.linkedin.com/in/austin-ogbe-3518b553"
    },
    {
      name: "Kesiena David Ruadjere",
      position: "Vice Chairman",
      house: "School House",
      photo: "/excos/vc.jpg",
      email: "vicechairman@fgcw06.org",
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Douye Victoria Fufeyin",
      position: "Secretary",
      house: "Independent House (Pendo)",
      photo: "/excos/secretary.jpg",
      email: "secretary@fgcw06.org",
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Victory Oshorema Oshomegie",
      position: "Treasurer",
      house: "National House (Nato)",
      photo: "/excos/treasurer.jpg",
      email: "treasurer@fgcw06.org",
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Yomi Thompson",
      position: "Welfare Officer",
      house: "National House (Nato)",
      photo: "/excos/welfare.jpg",
      email: "welfareofficer@fgcw06.org",
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Lilo-Siakpere Oghenetega",
      position: "PRO",
      house: "Unity House",
      photo: "/excos/pro.jpg",
      email: "pro@fgcw06.org",
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    },
    {
      name: "Efehi Osamagbe Igbineweka",
      position: "PRO 2",
      house: "Independent House (Pendo)",
      photo: "/excos/pro2.jpg",
      email: "efehiigbineweka@gmail.com",
      facebook: "https://www.facebook.com/efehi.igbinewekaosamagbe",
      twitter: "",
      instagram: "https://www.instagram.com/efehishantel22",
      linkedin: ""
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#006837] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm mb-6 hover:underline"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Executive Committee
          </h1>
          <p className="text-xl text-green-100">
            Meet the dedicated leaders steering FGCW Class of 2006 Alumni Association
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Our Executive Committee is composed of passionate alumni committed to fostering unity, 
            excellence, and service. Together, they work tirelessly to strengthen our network, 
            support our alma mater, and create lasting impact in our communities.
          </p>
        </div>

        {/* Excos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {excos.map((exco, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={exco.photo} 
                  alt={exco.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {exco.name}
                </h3>
                <p className="text-sm font-semibold text-[#000000] tracking-wider mb-4">
                  {exco.position}
                </p>
                <p className="text-sm font-semibold text-[#000000] tracking-wider mb-4">
                  {exco.house}
                </p>

                {/* Contact Icons */}
                <div className="flex justify-center gap-3">
                  <a 
                    href={`mailto:${exco.email}`}
                    className="p-2 bg-gray-100 rounded-full hover:bg-[#006837] hover:text-white transition-colors"
                    title="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a 
                    href={exco.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-[#006837] hover:text-white transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                    </a>
                    <a
                    href={exco.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-[#006837] hover:text-white transition-colors"
                    title="Facebook"
                    >
                    <Facebook size={18} />
                    </a>
                    <a
                    href={exco.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-[#006837] hover:text-white transition-colors"
                    title="Twitter"
                    >
                    <Twitter size={18} />
                    </a>
                    <a
                    href={exco.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-[#006837] hover:text-white transition-colors"
                    title="Instagram"
                    >
                    <Instagram size={18} />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-sm border border-green-100 p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Want to Get Involved?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate alumni to contribute their time and talents. 
            Join a committee, volunteer for events, or reach out to learn more about leadership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/volunteer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#006837] text-white font-bold uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-lg shadow-green-900/10 rounded-xl"
            >
              Volunteer With Us
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#006837] border-2 border-[#006837] font-bold uppercase tracking-widest text-sm hover:bg-green-50 transition-all rounded-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
