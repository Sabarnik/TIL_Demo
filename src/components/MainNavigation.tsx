'use client'
import { useRouter   } from 'next/navigation';
import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronDown,
  Eye,
  ChevronRight,
  Calendar,
  Construction,
  Ship,
  Truck,
  Wrench,
  Mountain,
  Anchor,
  Building,
  Fuel,
  Train,
  Shield,
  Zap,
  Phone,
  Download,
  Star,
  Package,
  Settings,
  Award,
  Users,
  MessageSquare,
  Mail,
  Linkedin,
  MessageCircle,
  FileText,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
type Point = { name: string; description: string; image?: string };

type Contact = {
  label: string;
  value: string;
  icon: React.ReactNode;
  description: string;
};

function hasContacts(submenu: any): submenu is { contacts: Contact[] } {
  return Array.isArray(submenu?.contacts);
}


function hasPoints(submenu: any): submenu is { points: Point[] } {
  return Array.isArray(submenu?.points);
}

type Member = {
  name: string;
  title: string;
  image: string;
};

type SubmenuWithMembers = {
  members: Member[];
};

function hasMembers(submenu: any): submenu is SubmenuWithMembers {
  return Array.isArray(submenu?.members);
}


type AboutMedia = {
  image: string;
  title: string;
  description: string;
  cta: string;
  features: string[];
};

const AboutMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('company');
  const [activeItem, setActiveItem] = useState<null | typeof submenuData.company.items[0]>(null);
  const [rightPanelContent, setRightPanelContent] = useState<AboutMedia | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const primaryCategories = [
    {
      id: 'company',
      name: 'Corporate Profile',
      icon: <Building className="w-4 h-4" />,
      description: 'Our heritage and leadership in construction equipment'
    },
    {
      id: 'leadership',
      name: 'Board of Directors',
      icon: <Users className="w-4 h-4" />,
      description: 'Meet our executive team and board of directors'
    },
    {
      id: 'milestones',
      name: 'Milestones',
      icon: <Shield className="w-4 h-4" />,
      description: 'Key achievements and historical moments'
    },
    {
      id: 'values',
      name: 'Values & Vision',
      icon: <Star className="w-4 h-4" />,
      description: 'Our mission, vision, and core values'
    },
    {
      id: 'corporate',
      name: 'Corporate Social Responsibility',
      icon: <Shield className="w-4 h-4" />,
      description: 'Environmental responsibility and green initiatives'
    },
    {
      id: 'codeofconduct',
      name: 'Code of Conduct',
      icon: <Shield className="w-4 h-4" />,
      description: 'Our ethical guidelines and business practices'
    },
    {
      id: 'facilities',
      name: 'Facilities',
      icon: <Shield className="w-4 h-4" />,
      description: 'Our manufacturing plants and offices'
    }
  ];



  const submenuData = {
    company: {
      items: [
        {
          name: 'Company History',
          description: 'Explore our 80+ years of engineering excellence',
          image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?...'
        },
        {
          name: 'Milestones',
          description: 'Key achievements in our journey',
          image: `${basePath}/milestone.png`
        },
        {
          name: 'Awards & Recognition',
          description: 'Industry accolades and certifications',
          image: `${basePath}/awards.jpg`
        },
        {
          name: 'Global Presence',
          description: 'Our international footprint and partnerships',
          image: `${basePath}/global-presence.jpg`
        },
        {
          name: 'Manufacturing Facilities',
          description: 'State-of-the-art production plants',
          image: `${basePath}/manufacturing.jpg`
        },
        {
          name: 'Quality Standards',
          description: 'Our commitment to excellence',
          image: `${basePath}/quality-standards.jpg`
        }
      ],
      media: {
        image: `${basePath}/legacy.jpg`,
        title: 'Our Legacy',
        description: '80+ years of engineering excellence in construction and material handling equipment.',
        cta: 'Learn More',
        features: ['80+ Years Experience', 'Global Presence', 'ISO Certified']
      }
    },
    leadership: {
      items: [
        {
          name: 'Board of Directors',
          description: 'Meet our governing body and strategic advisors',
          image: `${basePath}/board-directors.jpg`
        },
        {
          name: 'Executive Team',
          description: 'Our day-to-day leadership team',
          image: `${basePath}/executive-team.jpg`
        },
        {
          name: 'Management Committee',
          description: 'Department heads and functional leaders',
          image: `${basePath}/management-committee.jpg`
        },
        {
          name: 'Advisory Board',
          description: 'Industry experts guiding our strategy',
          image: `${basePath}/advisory-board.jpg`
        }
      ],
      media: {
        image: `${basePath}/leadership.jpg`,
        title: 'Leadership Team',
        description: 'Experienced leaders driving innovation and growth in the construction industry.',
        cta: 'Meet Our Team',
        features: ['Industry Veterans', 'Global Experience', 'Innovation Focus']
      }
    },
    milestones: {
      items: [
        {
          name: 'Foundation & Early Years',
          description: 'Our humble beginnings and initial successes',
          image: `${basePath}/foundation.jpg`
        },
        {
          name: 'Key Innovations',
          description: 'Breakthrough products and technologies',
          image: `${basePath}/innovations.jpg`
        },
        {
          name: 'Expansion Phases',
          description: 'Growth of our operations and facilities',
          image: `${basePath}/expansion.jpg`
        },
        {
          name: 'Recent Achievements',
          description: 'Our latest accomplishments and awards',
          image: `${basePath}/achievements.jpg`
        }
      ],
      media: {
        image: `${basePath}/milestone.png`,
        title: 'Our Journey',
        description: 'Key milestones that define our growth and success in the industry.',
        cta: 'View Timeline',
        features: ['80+ Years', '100+ Innovations', 'Global Reach']
      }
    },
    values: {
      items: [
        {
          name: 'Mission Statement',
          description: 'Our purpose and reason for being',
          image: `${basePath}/mission.jpg`
        },
        {
          name: 'Vision 2030',
          description: 'Our aspirations for the future',
          image: `${basePath}/vision.jpg`
        },
        {
          name: 'Core Values',
          description: 'Principles that guide our actions',
          image: `${basePath}/values.jpg`
        },
        {
          name: 'Ethics & Integrity',
          description: 'Our commitment to doing business right',
          image: `${basePath}/ethics.jpg`
        }
      ],
      media: {
        image: `${basePath}/vision.jpg`,
        title: 'Our Values',
        description: 'Committed to excellence, innovation, and sustainable growth.',
        cta: 'Our Philosophy',
        features: ['Customer First', 'Innovation', 'Sustainability']
      }
    },
    corporate: {
      items: [
        {
          name: 'Environmental Policy',
          description: 'Our commitment to sustainable operations',
          image: `${basePath}/environmental.jpg`
        },
        {
          name: 'Green Manufacturing',
          description: 'Eco-friendly production processes',
          image: `${basePath}/green-manufacturing.jpg`
        },
        {
          name: 'Community Impact',
          description: 'Initiatives that benefit local communities',
          image: `${basePath}/community.jpg`
        },
        {
          name: 'Employee Welfare',
          description: 'Programs for our workforce wellbeing',
          image: `${basePath}/employee-welfare.jpg`
        }
      ],
      media: {
        image: `${basePath}/social.jpg`,
        title: 'Sustainability',
        description: 'Leading the way in environmentally responsible manufacturing and operations.',
        cta: 'Green Initiatives',
        features: ['Carbon Neutral', 'Green Tech', 'Eco-Friendly']
      }
    },
    codeofconduct: {
      items: [
        {
          name: 'Business Ethics',
          description: 'Our standards for ethical business practices',
          image: `${basePath}/ethics.jpg`
        },
        {
          name: 'Anti-Corruption',
          description: 'Policies against bribery and corruption',
          image: `${basePath}/anti-corruption.jpg`
        },
        {
          name: 'Compliance Framework',
          description: 'Ensuring adherence to laws and regulations',
          image: `${basePath}/compliance.jpg`
        }
      ],
      media: {
        image: `${basePath}/code_of_conduct.png`,
        title: 'Code of Conduct',
        description: 'Our commitment to ethical business practices and corporate governance.',
        cta: 'View Policy',
        features: ['Ethical Standards', 'Compliance', 'Transparency']
      }
    },
    facilities: {
      items: [
        {
          name: 'Kolkata Headquarters',
          description: 'Our corporate office and main facility',
          image: 'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?...'
        },
        {
          name: 'Manufacturing Plants',
          description: 'State-of-the-art production facilities',
          image: `${basePath}/plants.jpg`
        },
        {
          name: 'R&D Centers',
          description: 'Innovation hubs driving product development',
          image: `${basePath}/rd-centers.jpg`
        },
        {
          name: 'Regional Offices',
          description: 'Our presence across India',
          image: `${basePath}/regional-offices.jpg`
        }
      ],
      media: {
        image: `${basePath}/facilities.jpg`,
        title: 'Our Facilities',
        description: 'World-class manufacturing plants and offices supporting our operations.',
        cta: 'Virtual Tour',
        features: ['Modern Infrastructure', 'Advanced Equipment', 'Sustainable Design']
      }
    }
  };


  // Initialize right panel content
  useEffect(() => {
    setRightPanelContent(submenuData[activeCategory as keyof typeof submenuData]?.media);
  }, [activeCategory]);

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-[#0f1419]/100 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-gray-800/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        // Handle category selection
                        console.log(`Selected: ${category.name}`);
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <div>
                            <span className="text-gray-200 font-medium block">
                              {category.name}
                            </span>
                            <span className="text-xs text-gray-400">
                              {category.description}
                            </span>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Full Mega Menu */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      About Us
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                          ${activeCategory === category.id
                              ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => {
                            setActiveCategory(category.id);
                            setRightPanelContent(submenuData[category.id as keyof typeof submenuData]?.media);
                          }}
                          onClick={() => {
                            setActiveCategory(category.id);
                            setRightPanelContent(submenuData[category.id as keyof typeof submenuData]?.media);
                          }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <div className={`p-1.5 rounded flex-shrink-0 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold text-sm ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-gray-200'
                                }`}>
                                {category.name}
                              </div>
                              <div className="text-xs text-gray-500 truncate">
                                {category.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Items */}
                <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Information'}
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <ul className="space-y-4">
                      {currentSubmenu?.items.map((item, index) => (
                        <li
                          key={index}
                          onMouseEnter={() => setActiveItem(item)}
                          onMouseLeave={() => setActiveItem(null)}
                          className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                        >
                          <div className="pt-1">
                            <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-100 hover:text-[#fbb53d] transition">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Details
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <motion.div
                      key={rightPanelContent?.title}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      <div className="relative mb-3 overflow-hidden rounded">
                        <img
                          src={rightPanelContent?.image}
                          alt={rightPanelContent?.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base text-[#fbb53d] mb-2">
                          {rightPanelContent?.title}
                        </h4>
                        <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                          {rightPanelContent?.description}
                        </p>

                        {rightPanelContent?.features && (
                          <div className="mb-4">
                            <h5 className="font-semibold text-[#fbb53d] mb-2 text-xs">Key Features:</h5>
                            <div className="space-y-1">
                              {rightPanelContent.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                  <span className="text-gray-300 text-xs">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                          <motion.button
                            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-[#fbb53d] hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                            whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 193, 7, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Phone className="w-3 h-3" />
                            <span>{rightPanelContent?.cta || 'Learn More'}</span>
                          </motion.button>

                          <button
                            className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-[#fbb53d] py-1.5 px-3 rounded font-semibold text-xs transition-all duration-200 flex items-center justify-center space-x-2"
                            onClick={onClose}
                          >
                            <Download className="w-3 h-3" />
                            <span>Download Brochure</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};


const ProductsMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('all-products');
  const [activeProduct, setActiveProduct] = useState<{
    name: string;
    description: string;
    image: string;
    features: string[];
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const primaryCategories = [
    {
      id: 'all-products',
      name: 'TIL Range',
      icon: <Package className="w-4 h-4" />,
      description: 'Reliable lifting and handling for Indian industries'
    },
    {
      id: 'new-arrivals',
      name: 'Manitowoc Range',
      icon: <Zap className="w-4 h-4" />,
      description: 'Heavy-duty cranes with global performance'
    },
    {
      id: 'best-sellers',
      name: 'Hyster TIL Range',
      icon: <Star className="w-4 h-4" />,
      description: 'Reliable forklifts and handling systems from Hyster-TIL'
    },
    {
      id: 'services',
      name: 'Snorkel Range',
      icon: <Settings className="w-4 h-4" />,
      description: 'Aerial work platforms and access equipment by Snorkel'
    }
  ];

  const submenuData = {
    'all-products': {
      products: [
        {
          name: 'Truck Cranes',
          description: 'High-capacity cranes ideal for tall construction sites',
          image: `${basePath}/truck-cranes.jpeg`,
          features: ['Telescopic Boom', 'High Lifting Range', 'On-road Mobility']
        },
        {
          name: 'Pick n Carry Cranes',
          description: 'Mobile cranes suitable for fast on-site operations',
          image: `${basePath}/pick-n-carry.png`,
          features: ['360° Mobility', 'Operator Cabin Comfort', 'Quick Load Handling']
        },
        {
          name: 'Rough Terrain Cranes',
          description: 'Designed for challenging job site conditions',
          image: `${basePath}/rough-terrain.png`,
          features: ['All-Terrain Tyres', 'Four-Wheel Steering', 'Hydraulic Outriggers']
        },
        {
          name: 'Articulating Cranes',
          description: 'Flexible, jointed cranes ideal for tight spaces',
          image: `${basePath}/articulating.jpg`,
          features: ['Knuckle Boom Design', 'Compact Operation', 'Remote Control']
        }
      ],
      media: {
        image: `${basePath}/articulating.jpg`,
        title: 'TIL Product Range',
        description: 'Comprehensive lifting solutions for all your construction needs.',
        cta: 'View All Products',
        features: ['Durable Construction', 'Advanced Safety', 'Easy Maintenance']
      }
    },
    'new-arrivals': {
      products: [
        {
          name: 'Grove Range',
          description: 'Smart lifting solutions engineered for precision and durability',
          image: `${basePath}/grove-range.png`,
          features: ['Advanced Safety Systems', 'Optimized Weight Distribution', 'Digital Load Monitoring']
        },
        {
          name: 'Crawler Cranes',
          description: 'Robust tracked cranes for heavy-duty lifting',
          image: `${basePath}/crawler-cranes.png`,
          features: ['Track Mobility', 'High Stability', 'Heavy Lifting Capacity']
        }
      ],
      media: {
        image: `${basePath}/crawler-cranes.png`,
        title: 'Latest Innovations',
        description: 'Cutting-edge technology and smart features for enhanced productivity.',
        cta: 'Explore New Tech',
        features: ['Smart Telematics', 'Eco-Friendly Powertrain', 'IoT Integration']
      }
    },
    'best-sellers': {
      products: [
        {
          name: 'Forklift Trucks',
          description: 'Efficient material handling for warehouses and logistics',
          image: `${basePath}/forklift.png`,
          features: ['Precision Steering', 'High Load Capacity', 'Compact Turning Radius']
        },
        {
          name: 'Reachstackers',
          description: 'Container handling equipment for ports and yards',
          image: `${basePath}/reachstackers.png`,
          features: ['Extended Reach', 'Twistlock Compatibility', 'High Stack Efficiency']
        }
      ],
      media: {
        image: `${basePath}/forklift.png`,
        title: 'Proven Performers',
        description: 'Most trusted equipment by businesses across India.',
        cta: 'Request Demo',
        features: ['Uptime Guarantee', 'Nationwide Service', 'Spare Part Availability']
      }
    },
    'services': {
      products: [
        {
          name: 'Boom Lifts',
          description: 'Elevated work platforms for maintenance and construction',
          image: `${basePath}/boomlifts.png`,
          features: ['Articulating Arm', 'Vertical and Horizontal Reach', 'Safe Cage Platform']
        }
      ],
      media: {
        image: `${basePath}/boomlifts.png`,
        title: 'Complete Support',
        description: 'Comprehensive after-sales support and services.',
        cta: 'Service Support',
        features: ['Certified Engineers', 'Rapid On-Site Service', 'OEM Spare Assurance']
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia = activeProduct || currentSubmenu?.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-gray-800/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        // Handle category selection
                        console.log(`Selected: ${category.name}`);
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <div>
                            <span className="text-gray-200 font-medium block">
                              {category.name}
                            </span>
                            <span className="text-xs text-gray-400">
                              {category.description}
                            </span>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Full Mega Menu */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Product Categories
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                            ${activeCategory === category.id
                              ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => {
                            setActiveCategory(category.id);
                            setActiveProduct(null);
                          }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <div className={`p-1.5 rounded flex-shrink-0 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold text-sm ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-gray-200'
                                }`}>
                                {category.name}
                              </div>
                              <div className="text-xs text-gray-500 truncate">
                                {category.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Product Items */}
                <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Products'}
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <ul className="space-y-4">
                      {currentSubmenu?.products.map((product, index) => (
                        <li
                          key={index}
                          onMouseEnter={() => setActiveProduct(product)}
                          className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                        >
                          <div className="pt-1">
                            <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-100 hover:text-[#fbb53d] transition">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{product.description}</p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {product.features.map((feature, i) => (
                                <span key={i} className="text-xs bg-yellow-500/10 text-[#fbb53d] px-2 py-0.5 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Dynamic Media Panel */}
                <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Details
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <motion.div
                      key={activeProduct ? activeProduct.name : activeCategory}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      <div className="relative mb-3 overflow-hidden rounded">
                        <img
                          src={activeProduct ? activeProduct.image : activeMedia.image}
                          alt={activeProduct ? activeProduct.name : ('title' in activeMedia ? activeMedia.title : 'name' in activeMedia ? activeMedia.name : '')}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base text-[#fbb53d] mb-2">
                          {activeProduct
                            ? activeProduct.name
                            : 'title' in activeMedia
                              ? activeMedia.title
                              : 'name' in activeMedia
                                ? activeMedia.name
                                : ''}
                        </h4>
                        <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                          {activeProduct ? activeProduct.description : activeMedia.description}
                        </p>

                        {activeMedia.features && (
                          <div className="mb-4">
                            <h5 className="font-semibold text-[#fbb53d] mb-2 text-xs">Key Features:</h5>
                            <div className="space-y-1">
                              {activeMedia.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                  <span className="text-gray-300 text-xs">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                          <motion.button
                            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-[#fbb53d] hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                            whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 193, 7, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Phone className="w-3 h-3" />
                            <span>
                              {activeProduct
                                ? 'Get Quote'
                                : 'cta' in activeMedia
                                  ? activeMedia.cta
                                  : 'Learn More'}
                            </span>
                          </motion.button>

                          <button
                            className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-[#fbb53d] py-1.5 px-3 rounded font-semibold text-xs transition-all duration-200 flex items-center justify-center space-x-2"
                            onClick={onClose}
                          >
                            <Download className="w-3 h-3" />
                            <span>Download Specs</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

const InvestorRelationsMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('corporate-governance');
  const [activePoint, setActivePoint] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    { id: 'corporate-governance', name: 'Corporate Governance' },
    { id: 'shareholders-information', name: 'Shareholders Information' },
    { id: 'financials', name: 'Financials' },
    { id: 'notice', name: 'Notice' },
  ];

  const submenuData = {
    'corporate-governance': {
      points: [
        { name: 'Board of Directors', description: 'Overview of board members and their roles' },
        { name: 'Committee Charters', description: 'Governance committees and their mandates' },
        { name: 'Policies', description: 'Corporate policies and guidelines' },
        { name: 'Annual Reports', description: 'Download annual reports and disclosures' },
      ],
      media: {
        image: `${basePath}/corporate-governance.jpg`,
        title: 'Corporate Governance',
        description:
          'TIL is committed to maintaining the highest standards of corporate governance and ethics, ensuring transparency and accountability to our stakeholders.',
        cta: 'Learn More',
      },
    },
    'shareholders-information': {
      points: [
        { name: 'Shareholding Pattern', description: 'Current shareholding distribution' },
        { name: 'Dividend History', description: 'Details of dividend payouts' },
        { name: 'Annual General Meeting', description: 'Information on upcoming and past AGMs' },
        { name: 'Registrar & Transfer Agent', description: 'Contact info for shareholder services' },
      ],
      media: {
        image: `${basePath}/shareholders.jpg`,
        title: 'Shareholders Information',
        description:
          'Access detailed information for shareholders including ownership patterns, dividends, and investor services.',
        cta: 'Investor Services',
      },
    },
    financials: {
      points: [
        { name: 'Quarterly Results', description: 'Latest quarterly financial statements' },
        { name: 'Audited Financials', description: 'Annual audited financial reports' },
        { name: 'Stock Price Information', description: 'Historical and current stock prices' },
        { name: 'Credit Ratings', description: 'Credit rating details and reports' },
      ],
      media: {
        image: `${basePath}/financials.jpg`,
        title: 'Financials',
        description:
          'Stay updated with TIL’s financial performance through detailed reports and market data.',
        cta: 'View Reports',
      },
    },
    notice: {
      points: [
        { name: 'Regulatory Filings', description: 'Important statutory filings and disclosures' },
        { name: 'Press Releases', description: 'Latest news and announcements' },
        { name: 'Corporate Announcements', description: 'Updates on company developments' },
        { name: 'Investor Alerts', description: 'Alerts and notifications for investors' },
      ],
      media: {
        image: `${basePath}/notice.jpg`,
        title: 'Notice',
        description:
          'Keep track of important notices, press releases, and official communications from TIL.',
        cta: 'View Notices',
      },
    },
  };


  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <div
            className={`bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
              } overflow-y-auto scroll-hover`}
          >
            {/* Mobile View */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-gray-800/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        console.log(`Selected: ${category.name}`);
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-gray-200 font-medium">{category.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              // Desktop View
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
                {/* Left: Categories */}
                <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Investor Relations
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {categories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full ${activeCategory === category.id
                            ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => {
                            setActiveCategory(category.id);
                            setActivePoint(null);
                          }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <span
                              className={`font-semibold text-sm ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-gray-200'
                                }`}
                            >
                              {category.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Points */}
                <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {categories.find((cat) => cat.id === activeCategory)?.name || 'Details'}
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <ul className="space-y-4">
                      {hasPoints(currentSubmenu) &&
                        currentSubmenu.points.map((point, index) => (

                          <li
                            key={index}
                            className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                          >
                            <div className="pt-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-yellow-500 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-100 hover:text-[#fbb53d] transition">
                                {point.name}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">{point.description}</p>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Media */}
                <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Details
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      <div className="relative mb-3 overflow-hidden rounded">
                        <img
                          src={currentSubmenu?.media.image}
                          alt={currentSubmenu?.media.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base text-[#fbb53d] mb-2">
                          {currentSubmenu?.media.title}
                        </h4>
                        <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                          {currentSubmenu?.media.description}
                        </p>

                        <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                          <motion.button
                            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-[#fbb53d] hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Phone className="w-3 h-3" />
                            <span>{currentSubmenu?.media.cta || 'Learn More'}</span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

const CustomerSupportMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('heavy-industries');
  const [activePoint, setActivePoint] = useState<{ name: string; description: string; image?: string } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const primaryCategories = [
    { id: 'heavy-industries', name: 'Maintenance Contract', icon: <Mountain className="w-4 h-4" /> },
    { id: 'infrastructure', name: 'Parts & Warehouse', icon: <Building className="w-4 h-4" /> },
    { id: 'specialized', name: 'Training', icon: <Shield className="w-4 h-4" /> },
    { id: 'energy', name: 'Service Locations', icon: <Zap className="w-4 h-4" /> }
  ];

  const submenuData = {
    'heavy-industries': {
      points: [
        {
          name: 'Annual Service Contracts',
          description: 'Minimize downtime and ensure preventive care with our comprehensive contracts'
        },
        {
          name: 'Pre-Purchase Consultancy',
          description: 'Expert guidance for optimal equipment investment decisions'
        },
        {
          name: 'Quick Parts Delivery',
          description: 'Wide and responsive supply network for fast delivery'
        },
        {
          name: 'Pan-India On-Site Support',
          description: 'Qualified engineers available on call across India'
        },
        {
          name: 'Rebuild & Refurbishment',
          description: 'Services to extend your equipment lifecycle'
        }
      ],
      media: {
        image: `${basePath}/maintenance.jpg`,
        title: 'Maintenance Contracts',
        description: 'Keep your machines in peak condition with our comprehensive annual maintenance services. Our expert technicians provide preventive care, emergency support, and lifecycle management to maximize your equipment uptime and ROI.',
        cta: 'Download Brochure'
      }
    },
    'infrastructure': {
      points: [
        {
          name: 'Authentic TIL Parts',
          description: 'Genuine parts for safety, reliability, and longer equipment life'
        },
        {
          name: 'Real-Time Inventory',
          description: 'Advanced Warehouse Management System for parts tracking'
        },
        {
          name: 'Wide Range Availability',
          description: 'Filters, oils, fluids, undercarriage components & more'
        },
        {
          name: 'Expert Support',
          description: 'Trained product specialists for the right-fit solutions'
        },
        {
          name: 'ERP-Enabled Warehouse',
          description: 'Central warehouse at Dankuni for nationwide fulfillment'
        }
      ],
      media: {
        image: `${basePath}/parts-banner.jpg`,
        title: 'Parts & Warehouse',
        description: 'Rapid access to critical parts with optimized logistics and warehouse coverage. Our centralized inventory system ensures authentic TIL parts are available when you need them most.',
        cta: 'Check Availability'
      }
    },
    'specialized': {
      points: [
        {
          name: 'Operator Training',
          description: 'Boost ROI & Safety with skilled operators who unlock full machine potential'
        },
        {
          name: 'Hands-On Training',
          description: 'Practical sessions in basic operations and scheduled maintenance'
        },
        {
          name: 'Customized Modules',
          description: 'Training tailored to operator and maintenance staff needs'
        },
        {
          name: 'Downtime Prevention',
          description: 'Minimize downtime through better handling and issue prevention'
        },
        {
          name: 'Competitive Edge',
          description: 'Enhanced knowledge, confidence, and efficiency for your team'
        }
      ],
      media: {
        image: `${basePath}/training-banner.jpg`,
        title: 'Training Programs',
        description: 'Empower your workforce with certified technical and operator training. Our comprehensive modules cover safety protocols, operational efficiency, and maintenance best practices.',
        cta: 'Training Calendar'
      }
    },
    'energy': {
      points: [
        {
          name: 'Kolkata Service Center',
          description: 'Full-service support for Eastern India operations',
          image: `${basePath}/Kolkata.avif`
        },
        {
          name: 'Chennai Service Center',
          description: 'Comprehensive support for Southern region',
          image: `${basePath}/chennai.avif`
        },
        {
          name: 'Delhi NCR Service Center',
          description: 'Strategic support hub for Northern India',
          image: `${basePath}/delhi.avif`
        },
        {
          name: 'Mumbai Service Center',
          description: 'West zone operational support center',
          image: `${basePath}/mumbai.avif`
        },
        {
          name: 'Singrauli Service Depot',
          description: 'Industrial logistics and support in central India',
          image: `${basePath}/singrauli.jpeg`
        }
      ],
      media: {
        image: `${basePath}/location-banner.png`,
        title: 'Service Locations',
        description: 'Our nationwide network of service centers and support facilities ensures prompt response times and local expertise across all major industrial regions in India.',
        cta: 'View Network'
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];

  // Type guard to check if the object is a point
  const isPoint = (item: any): item is { name: string; description: string; image?: string } => {
    return item && 'name' in item;
  };

  // Type guard to check if the object is media
  const isMedia = (item: any): item is { image: string; title: string; description: string; cta: string } => {
    return item && 'title' in item;
  };

  // Conditional media selection: dynamic for Service Locations, static for others
  const activeMedia = activeCategory === 'energy' && activePoint
    ? activePoint
    : currentSubmenu?.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-gray-800/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        // Handle category selection
                        console.log(`Selected: ${category.name}`);
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <span className="text-gray-200 font-medium">
                            {category.name}
                          </span>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Full Mega Menu */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Support Categories
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                            ${activeCategory === category.id
                              ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => {
                            setActiveCategory(category.id);
                            // Reset activePoint when switching categories
                            setActivePoint(null);
                          }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <div className={`p-1.5 rounded flex-shrink-0 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <span className={`font-semibold text-sm ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-gray-200'
                              }`}>
                              {category.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Point-wise Info */}
                <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Support Info'}
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <ul className="space-y-4">
                      {currentSubmenu?.points.map((point, index) => (
                        <li
                          key={index}
                          onMouseEnter={() => {
                            // Only set activePoint for Service Locations (energy)
                            if (activeCategory === 'energy') {
                              setActivePoint(point);
                            }
                          }}
                          className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                        >
                          <div className="pt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-yellow-500 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10c0 6-7.5 11.5-7.5 11.5S4.5 16 4.5 10a7.5 7.5 0 1115 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-100 hover:text-[#fbb53d] transition">
                              {point.name}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{point.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Media Panel */}
                <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Details
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <motion.div
                      key={activeCategory === 'energy'
                        ? (isPoint(activeMedia) ? activeMedia.name : activeCategory)
                        : activeCategory}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      <div className="relative mb-3 overflow-hidden rounded">
                        <img
                          src={isPoint(activeMedia) ? activeMedia.image : isMedia(activeMedia) ? activeMedia.image : ''}
                          alt={isPoint(activeMedia) ? activeMedia.name : isMedia(activeMedia) ? activeMedia.title : ''}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base text-[#fbb53d] mb-2">
                          {isPoint(activeMedia) ? activeMedia.name : isMedia(activeMedia) ? activeMedia.title : ''}
                        </h4>
                        <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                          {isPoint(activeMedia) ? activeMedia.description : isMedia(activeMedia) ? activeMedia.description : ''}
                        </p>

                        <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                          <motion.button
                            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-[#fbb53d] hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Phone className="w-3 h-3" />
                            <span>{isMedia(activeMedia) ? activeMedia.cta : 'Learn More'}</span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};


const MediaMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  console.log('MediaMegamenu component rendering...');

  const [activeCategory, setActiveCategory] = useState('blogs');
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    description: string;
    embedUrl: string;
    [key: string]: any;
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  console.log('Active category:', activeCategory);

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const primaryCategories = [
    {
      id: 'blogs',
      name: 'Blogs',
      icon: <Building className="w-4 h-4" />,
      description: 'Industry insights and company updates'
    },
    {
      id: 'video',
      name: 'Videos',
      icon: <Users className="w-4 h-4" />,
      description: 'Product demos and company highlights'
    },
    {
      id: 'news',
      name: 'News',
      icon: <Shield className="w-4 h-4" />,
      description: 'Latest company announcements'
    },
    {
      id: 'til',
      name: 'TIL@bauma2024',
      icon: <Star className="w-4 h-4" />,
      description: 'Trade show highlights and innovations'
    },
    {
      id: 'events',
      name: 'Events',
      icon: <Calendar className="w-4 h-4" />,
      description: 'Upcoming events and exhibitions'
    },
    {
      id: 'press',
      name: 'Press Release',
      icon: <FileText className="w-4 h-4" />,
      description: 'Official press announcements'
    },
    {
      id: 'downloads',
      name: 'Downloads',
      icon: <Download className="w-4 h-4" />,
      description: 'Brochures and technical documents'
    }
  ];

  const submenuData = {
    blogs: {
      items: [
        {
          title: 'How to Buy a Reachstacker? 6 Factors to Consider',
          description: 'When comparing reachstackers, the specifications listed on paper are only the first step. If you..',
          image: `${basePath}/blog1.png`,
          link: '/blogs/reachstacker-buying-guide',
          type: 'blog',
          date: '2024-12-15'
        },
        {
          title: '6 Powerful Cranes Used in Modern Construction',
          description: 'Let\'s be real—on any serious construction site, cranes aren\'t treated as just any other machine...',
          image: `${basePath}/blog2.jpg`,
          link: '/blogs/modern-construction-cranes',
          type: 'blog',
          date: '2024-12-10'
        },
        {
          title: '7 Proven Ways Rough Terrain Cranes Power Up Business Efficiency',
          description: 'In the world of construction and heavy lifting, the right equipment isn\'t just helpful—it\'s business critical...',
          image: `${basePath}/blog3.jpg`,
          link: '/blogs/rough-terrain-crane-efficiency',
          type: 'blog',
          date: '2024-12-05'
        },
        {
          title: 'The Ultimate Rough Terrain Cranes Guide in 2025 For Your Next Project',
          description: 'When you picture a Rough Terrain crane, you probably imagine a beastly machine...',
          image: `${basePath}/blog4.jpg`,
          link: '/blogs/rough-terrain-cranes-guide-2025',
          type: 'blog',
          date: '2024-11-28'
        }
      ],
      media: {
        image: `${basePath}/Media-page.jpg`,
        title: 'Industry Insights',
        description: 'Stay ahead with our expert analysis, equipment guides, and industry best practices.',
        cta: 'Read All Blogs',
        features: ['Expert Analysis', 'Equipment Guides', 'Industry Trends']
      }
    },

    video: {
      items: [
        {
          title: 'Why Operators Prefer Hyster TIL ReachStackers',
          description: 'What’s it like to operate a Hyster TIL ReachStacker in one of India’s busiest logistics hubs?',
          videoId: 'RDgU-xTDyZc',
          embedUrl: 'https://www.youtube.com/embed/RDgU-xTDyZc',
          thumbnail: `${basePath}/video1.jpg`,
          link: 'https://youtu.be/RDgU-xTDyZc',
          type: 'youtube',
          duration: '4:32'
        },
        {
          title: 'How Hyster-TIL’s Reach Stacker Revolutionizing Material Handling | TIL Limited',
          description: 'Join us as Mr. Rajesh Wazarkar, MD of Hyster India, shares his favorite features of TIL’s new High Series Reach Stacker...',
          videoId: 'ABC123XYZ',
          embedUrl: 'https://www.youtube.com/embed/ABC123XYZ',
          thumbnail: `${basePath}/video2.jpg`,
          link: 'https://youtu.be/wavwFvrs128',
          type: 'youtube',
          duration: '8:15'
        },
        {
          title: 'How TIL Built India’s First Mobile Crane | Factory Tour',
          description: 'In this exclusive conversation with Mr. Jayanta Kumar Patra, Production Head at TIL Limited, we trace the incredible journey of our factory...',
          videoId: 'DEF456GHI',
          embedUrl: 'https://www.youtube.com/embed/DEF456GHI',
          thumbnail: `${basePath}/video3.jpg`,
          link: 'https://youtu.be/omGk8PMTtX8',
          type: 'youtube',
          duration: '6:45'
        },
        {
          title: 'How TIL Hyster ReachStacker Redefines Material Handling ft Ben Newey',
          description: 'Revolutionizing Material Handling! In this exclusive interview, Ben Newey, VP of Sales & Marketing APIC at Hyster-Yale Materials Handling...',
          videoId: 'JKL789MNO',
          embedUrl: 'https://www.youtube.com/embed/JKL789MNO',
          thumbnail: `${basePath}/video4.jpg`,
          link: 'https://youtu.be/aAM7PIMA25k',
          type: 'youtube',
          duration: '5:20'
        }
      ],
      media: {
        image: `${basePath}/Media-page.jpg`,
        title: 'Video Library',
        description: 'Comprehensive collection of product demos, training videos, and customer testimonials.',
        cta: 'Watch All Videos',
        features: ['HD Quality', 'Multiple Languages', 'Mobile Optimized']
      }
    },

    news: {
      items: [
        {
          title: 'Smart Manufacturing and Enterprises',
          description: 'We will launch new cranes and forklifts in next 4 years',
          image: `${basePath}/news1.png`,
          link: '/news/new-manufacturing-facility',
          type: 'news',
          date: '2024-12-20'
        },
        {
          title: 'NDTV',
          description: 'TIL Forms Strategic Business Unit Supporting Its Defence Portfolio Read mo...',
          image: `${basePath}/news2.jpg`,
          link: '/news/strategic-partnership',
          type: 'news',
          date: '2024-12-18'
        },
        {
          title: 'EPC&I',
          description: 'Built to Meet the Toughest Demands',
          image: `${basePath}/news3.png`,
          link: '/news/innovation-award',
          type: 'news',
          date: '2024-12-15'
        },
        {
          title: 'Equipment Times',
          description: 'Handling The Future! MHE\'s Role in Construction & Infrastructure',
          image: `${basePath}/news4.png`,
          link: '/news/q4-2024-results',
          type: 'news',
          date: '2024-12-12'
        }
      ],
      media: {
        image: `${basePath}/Media-page.jpg`,
        title: 'Latest News',
        description: 'Stay informed with our latest announcements, partnerships, and industry developments.',
        cta: 'Read All News',
        features: ['Breaking News', 'Industry Analysis', 'Market Insights']
      }
    },

    til: {
      items: [
        {
          title: 'Construction And Architecture Magazine',
          description: 'FUELING INNOVATION AND GROWTH IN INDIA\'S MATERIAL HANDLING AND CONSTRUCTION...',
          image: `${basePath}/til1.png`,
          link: '/til/bauma-2024-highlights',
          type: 'event',
          date: '2024-10-15'
        },
        {
          title: 'Construction And Architecture Magazine',
          description: 'TIL: A LEGACY OF INNOVATION AND STRATEGIC GROWTH IN MATERIAL HANDLING AT BA...',
          image: `${basePath}/til2.jpeg`,
          link: '/til/smart-crane-controls',
          type: 'event',
          date: '2024-10-12'
        },
        {
          title: 'BAUMA 2024',
          description: 'We are committed to increasing local manufacturing in India.',
          image: `${basePath}/til3.jpg`,
          link: '/til/sustainability-initiatives',
          type: 'event',
          date: '2024-10-10'
        },
        {
          title: 'Construction Week',
          description: 'Bauma ConExpo India 2024: TIL debuts Snorkel A62JRT articulating boom lift',
          image: `${basePath}/til4.jpg`,
          link: '/til/customer-experience-center',
          type: 'event',
          date: '2024-10-08'
        }
      ],
      media: {
        image: `${basePath}/Media-page.jpg`,
        title: 'TIL@bauma2024',
        description: 'Discover innovations and highlights from Bauma 2024 and our ongoing technology initiatives.',
        cta: 'Explore TIL',
        features: ['Innovation Showcase', 'Live Demos', 'Expert Talks']
      }
    },

    events: {
      items: [
        {
          title: 'TIL Annual Picnic',
          image: `${basePath}/event1.jpeg`,
          link: '/media/events/conexpo-2025',
          date: '2025-03-14'
        },
        {
          title: 'Republic day 2025 celebration at TIL',
          image: `${basePath}/event2.jpeg`,
          link: '/media/events/operator-training-workshop',
          date: '2025-02-20'
        },
        {
          title: 'TIL 49th AGM',
          image: `${basePath}/event3.jpg`,
          link: '/media/events/infrastructure-summit',
          date: '2025-02-15'
        },
        {
          title: 'Viswakarma Puja 2024',
          image: `${basePath}/event4.jpg`,
          link: '/media/events/customer-appreciation',
          date: '2025-01-30'
        }
      ],
      media: {
        image: `${basePath}/Media-page.jpg`,
        title: 'Upcoming Events',
        description: 'Join us at our upcoming events, trade shows, and training sessions worldwide.',
        cta: 'View All Events',
        features: ['Global Events', 'Expert Sessions', 'Networking']
      }
    },

    press: {
      items: [
        {
          title: 'TIL Limited Reports Record Q4 2024 Performance',
          description: 'Official press release detailing financial results and growth milestones.',
          image: `${basePath}/press1.jpg`,
          link: '/press/q4-2024-performance',
          type: 'press',
          date: '2024-12-22'
        },
        {
          title: 'New CEO Appointment Announcement',
          description: 'Leadership transition and strategic vision for the company\'s future.',
          image: `${basePath}/press2.jpg`,
          link: '/press/new-ceo-appointment',
          type: 'press',
          date: '2024-12-20'
        },
        {
          title: 'Environmental Sustainability Initiative Launch',
          description: 'Commitment to carbon neutrality and sustainable manufacturing practices.',
          image: `${basePath}/press3.jpg`,
          link: '/press/sustainability-initiative',
          type: 'press',
          date: '2024-12-18'
        },
        {
          title: 'International Expansion Plans Revealed',
          description: 'Strategic expansion into new markets and establishment of regional offices.',
          image: `${basePath}/press4.jpg`,
          link: '/press/international-expansion',
          type: 'press',
          date: '2024-12-15'
        }
      ],
      media: {
        image: `${basePath}/media.jpg`,
        title: 'Press Releases',
        description: 'Official company announcements, press statements, and media resources.',
        cta: 'View All Press',
        features: ['Official News', 'Media Kit', 'Contact Info']
      }
    },

    downloads: {
      items: [
        {
          title: 'Rough Terrain Cranes',
          image: `${basePath}/rough-terrain.png`,
          link: '/downloads/product-catalog-2025.pdf',
          fileType: 'PDF'
        },
        {
          title: 'Truck Cranes',
          image: `${basePath}/truck-cranes.jpeg`,
          link: '/TIL/downloads/crane-safety-manual.pdf',
          fileType: 'PDF'
        },
        {
          title: 'Pick-n-Carry Crane',
          image: `${basePath}/pick-n-carry.png`,
          link: '/downloads/crane-safety-manual.pdf',
          fileType: 'PDF'
        },
        {
          title: 'Grove™ Range',
          image: `${basePath}/grove-range.png`,
          link: '/downloads/crane-safety-manual.pdf',
          fileType: 'PDF'
        },
        {
          title: 'Crawler Crane',
          image: `${basePath}/crawler-cranes.png`,
          link: '/downloads/crane-safety-manual.pdf',
          fileType: 'PDF'
        },
        {
          title: 'ReachStacker',
          image: `${basePath}/reachstackers.png`,
          link: '/downloads/crane-safety-manual.pdf',
          fileType: 'PDF'
        },
        {
          title: 'Forklift Truck',
          image: `${basePath}/forklift.png`,
          link: '/downloads/crane-safety-manual.pdf',
          fileType: 'PDF'
        },
        {
          title: 'Boom Lift',
          image: `${basePath}/boomlifts.png`,
          link: '/downloads/crane-safety-manual.pdf',
          fileType: 'PDF'
        }
      ],
      media: {
        image: `${basePath}/free.jpeg`,
        title: 'TIL Coffee Table Book',
        description: 'Access our comprehensive library of brochures, manuals, and technical documents.',
        cta: 'Browse All Downloads',
        features: ['Product Specs', 'User Manuals', 'Technical Guides']
      }
    }
  };


  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  console.log('Current submenu data:', currentSubmenu);

  // Safe hover handler with debouncing
  const handleCategoryHover = (categoryId: string) => {
    console.log('Category hovered:', categoryId);
    try {
      setActiveCategory(categoryId);
      console.log('Category set successfully to:', categoryId);
    } catch (error) {
      console.error('Error setting category on hover:', error);
    }
  };

  // Video modal handler
  const openVideoModal = (item: any) => {
    setSelectedVideo(item);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  console.log('Rendering MediaMegamenu with activeCategory:', activeCategory);

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-gray-800/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        // Handle category selection
                        console.log(`Selected: ${category.name}`);
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <div>
                            <span className="text-gray-200 font-medium block">
                              {category.name}
                            </span>
                            <span className="text-xs text-gray-400">
                              {category.description}
                            </span>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>


              </div>
            ) : (
              /* Desktop View - Full Mega Menu */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Media Center
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                          ${activeCategory === category.id
                              ? 'bg-yellow-500/10 shadow-[0_0_15px_rgba(255,193,7,0.1)] border border-yellow-500/30'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => setActiveCategory(category.id)}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-3">
                            <div className={`p-2 rounded-lg flex-shrink-0 transition-all duration-200 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black shadow-lg'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold text-sm transition-colors duration-200 ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-gray-200'
                                }`}>
                                {category.name}
                              </div>
                              <div className="text-xs text-gray-500 truncate mt-0.5">
                                {category.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Content Items */}
                <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Content'}
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    {activeCategory === 'downloads' ? (
                      // Downloads Section
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentSubmenu?.items.map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            className="group bg-[#1c2128] border border-gray-700/40 rounded-lg overflow-hidden hover:border-yellow-500/60 hover:shadow-lg transition-all duration-300 flex flex-col"
                          >
                            <div className="relative bg-white p-4 flex items-center justify-center min-h-[120px]">
                              <img
                                src={("image" in item && item.image) || ""}
                                alt={item.title}
                                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                style={{ maxHeight: "100px", width: "auto", height: "auto" }}
                              />
                              <div className="absolute top-2 right-2 bg-yellow-500 text-black rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Download className="w-3 h-3" />
                              </div>

                              {"fileType" in item && item.fileType && (
                                <div className="absolute bottom-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-semibold">
                                  {item.fileType}
                                </div>
                              )}
                            </div>

                            <div className="p-3 flex-1 flex flex-col justify-between">
                              <h4 className="text-sm font-semibold text-[#fbb53d] group-hover:text-yellow-300 transition-colors duration-200 text-center leading-tight mb-2">
                                {item.title}
                              </h4>

                              <div className="mt-auto pt-2 border-t border-gray-700/40">
                                <div className="flex items-center justify-center space-x-1 text-xs text-gray-400 group-hover:text-[#fbb53d] transition-colors duration-200">
                                  <Download className="w-3 h-3" />
                                  <span>Download</span>
                                </div>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    ) : activeCategory === 'press' ? (
                      // Press Release Table Layout
                      <div className="bg-[#1c2128] border border-gray-700/40 rounded-lg overflow-hidden">
                        <div className="grid grid-cols-12 bg-yellow-500 text-black font-bold text-sm">
                          <div className="col-span-8 px-4 py-3 border-r border-yellow-600">
                            Details
                          </div>
                          <div className="col-span-4 px-4 py-3">
                            Actions
                          </div>
                        </div>

                        <div className="divide-y divide-gray-700/40">
                          {currentSubmenu?.items.map((item, index) => (
                            <div key={index} className="grid grid-cols-12 hover:bg-gray-700/20 transition-colors duration-200">
                              <div className="col-span-8 px-4 py-3 border-r border-gray-700/40">
                                <div className="text-sm font-medium text-gray-200 mb-1">
                                  {item.title}
                                </div>
                                {'description' in item && item.description && (
                                  <div className="text-xs text-gray-400 leading-relaxed">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                              <div className="col-span-4 px-4 py-3 flex items-center space-x-2">
                                <button className="flex items-center space-x-1 text-[#fbb53d] hover:text-yellow-300 text-xs transition-colors duration-200">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                  <span>View</span>
                                </button>
                                <span className="text-gray-500">|</span>
                                <button className="flex items-center space-x-1 text-[#fbb53d] hover:text-yellow-300 text-xs transition-colors duration-200">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <span>Download Document</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Regular Card Layout for Other Sections
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentSubmenu?.items.map((item, index) => (
                          <div
                            key={index}
                            className="group bg-[#1c2128] border border-gray-700/40 rounded-lg overflow-hidden hover:border-yellow-500/60 hover:shadow-lg transition-all duration-300"
                          >
                            {"type" in item && item.type === "youtube" ? (
                              // YouTube Video Card
                              <div className="cursor-pointer h-full" onClick={() => openVideoModal(item)}>
                                <div className="h-32 overflow-hidden relative">
                                  <img
                                    src={("thumbnail" in item && item.thumbnail) || ""}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    style={{ objectPosition: "top center" }}
                                  />

                                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                                    <div className="bg-red-600 hover:bg-red-700 rounded-full p-3 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                      </svg>
                                    </div>
                                  </div>

                                  {"duration" in item && item.duration && (
                                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                      {item.duration}
                                    </div>
                                  )}

                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                                </div>
                                <div className="p-3">
                                  <h4 className="text-sm font-semibold text-[#fbb53d] group-hover:text-yellow-300 mb-1 transition-colors duration-200">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              // Regular Content Card
                              <a href={item.link} className="block h-full">
                                <div className="h-32 overflow-hidden relative">
                                  <img
                                    src={("image" in item && item.image) || ""}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    style={{ objectPosition: "top center" }}
                                  />

                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                  <h4 className="text-sm font-semibold text-[#fbb53d] group-hover:text-yellow-300 mb-1 transition-colors duration-200">
                                    {item.title}
                                  </h4>
                                  {"description" in item && (
                                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                                      {item.description}
                                    </p>
                                  )}

                                  {"date" in item && item.date && (
                                    <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                      {new Date(item.date).toLocaleDateString()}
                                    </div>
                                  )}

                                </div>
                                <div className="p-3">
                                  <h4 className="text-sm font-semibold text-[#fbb53d] group-hover:text-yellow-300 mb-1 transition-colors duration-200">
                                    {item.title}
                                  </h4>

                                  {"description" in item && typeof item.description === "string" && (
                                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Media Panel */}
                <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Highlights
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={currentSubmenu?.media.image}
                          alt={currentSubmenu?.media.title}
                          className="w-full h-40 object-cover"
                          style={{ objectPosition: 'top center' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-2 left-3 right-3">
                          <h4 className="font-bold text-white text-sm">
                            {currentSubmenu?.media.title}
                          </h4>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                          {currentSubmenu?.media.description}
                        </p>

                        <div className="mb-6">
                          <h5 className="font-semibold text-[#fbb53d] mb-3 text-sm">Key Features:</h5>
                          <div className="space-y-2">
                            {currentSubmenu?.media.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-3 -mx-4 px-4">
                          <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-[#fbb53d] hover:to-yellow-500 text-black py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
                            <Eye className="w-4 h-4" />
                            <span>{currentSubmenu?.media.cta}</span>
                          </button>

                          <button className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-[#fbb53d] py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2">
                            <Download className="w-4 h-4" />
                            <span>Download Resources</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeVideoModal}>
          <div className="bg-[#1c2128] rounded-lg overflow-hidden max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <iframe
                width="100%"
                height="400"
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full"
              />
              <button
                className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-all duration-200"
                onClick={closeVideoModal}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#fbb53d] mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300 text-sm">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


const CareersMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('life');
  const [isMobile, setIsMobile] = useState(false);

  // Type guards for submenu data
  function hasPoints(data: any): data is { points: Array<{ name: string; description: string }> } {
    return 'points' in data;
  }

  function hasMembers(data: any): data is { members: Array<{ name: string; title: string; image: string }> } {
    return 'members' in data;
  }

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload images
  useEffect(() => {
    Object.values(submenuData).forEach((item) => {
      const img = new Image();
      img.src = item.media.image;
    });
  }, []);

  const primaryCategories = [
    { id: 'life', name: 'Life @TIL', icon: <Mountain className="w-4 h-4" /> },
    { id: 'team', name: 'Meet our Team', icon: <Building className="w-4 h-4" /> },
    { id: 'vacant', name: 'Vacancies', icon: <Shield className="w-4 h-4" /> },
    { id: 'equal', name: 'Equal Opportunity Employer', icon: <Zap className="w-4 h-4" /> }
  ];

  const submenuData = {
    life: {
      points: [
        {
          name: 'Inclusive Culture',
          description: 'Collaborative work environment that values diversity'
        },
        {
          name: 'Flexible Work',
          description: 'Hybrid options and adaptable working hours'
        },
        {
          name: 'Wellness Programs',
          description: 'Initiatives supporting mental and physical health'
        },
        {
          name: 'Recognition',
          description: 'Programs celebrating employee achievements'
        }
      ],
      media: {
        image: `${basePath}/life.jpg`,
        title: 'Life @TIL',
        description:
          'Work-life balance, diversity, and innovation thrive in our dynamic culture. We foster an environment where every team member can grow personally and professionally.',
        cta: 'Explore Culture'
      }
    },
    team: {
      members: [
        {
          name: 'Pinaki Niyogy',
          title: 'Chief Executive Officer',
          image: `${basePath}/pinaki.jpg`
        },
        {
          name: 'Arvind Rishi',
          title: 'AVP- Sales & After Market',
          image: `${basePath}/arvind.jpeg`
        },
        {
          name: 'Mr. Kanhaiya Gupta',
          title: 'Chief Financial Officer',
          image: `${basePath}/Kanhaiya.png`
        },
        {
          name: 'Ms. Shamita Nandi',
          title: 'Chief Human Resource Officer',
          image: `${basePath}/Shamita.png`
        },
        {
          name: 'Chandrani Chatterjee',
          title: 'Company Secretary',
          image: `${basePath}/chandrani.jpg`
        },
        {
          name: 'Mr. Saikat Bagchi',
          title: 'Head - Supply Chain & Commercial',
          image: `${basePath}/saiket.png`
        },
        {
          name: 'Rishabh P Nair',
          title: 'Head Of Brand, Content & PR',
          image: `${basePath}/Risabh.png`
        }
      ],
      media: {
        image: `${basePath}/team-placeholder.jpg`,
        title: 'Meet Our Team',
        description:
          'Get to know the passionate minds building the future of infrastructure. Our leadership team brings decades of experience and innovation.',
        cta: 'Meet the Team'
      }
    },
    vacant: {
      points: [
        {
          name: 'Open Roles',
          description: 'Positions across engineering, sales, and operations'
        },
        {
          name: 'Campus Programs',
          description: 'Placement and intern opportunities for students'
        },
        {
          name: 'Hiring Process',
          description: 'Quick and transparent recruitment journey'
        },
        {
          name: 'Career Growth',
          description: 'Structured learning and development paths'
        }
      ],
      media: {
        image: `${basePath}/job.jpg`,
        title: 'Current Openings',
        description:
          "Explore vacancies and apply to be a part of TIL's next chapter. We offer competitive packages and growth opportunities across all departments.",
        cta: 'View Jobs'
      }
    },
    equal: {
      points: [
        {
          name: 'Diversity & Inclusion',
          description: 'Commitment across all departments and levels'
        },
        {
          name: 'Zero Tolerance',
          description: 'Against discrimination or bias of any kind'
        },
        {
          name: 'Women Leadership',
          description: 'Initiatives to promote gender equality'
        },
        {
          name: 'Accessibility',
          description: 'Inclusive workplace policies and facilities'
        }
      ],
      media: {
        image: `${basePath}/equal.jpg`,
        title: 'Equal Opportunity',
        description:
          'We are committed to an inclusive, safe, and diverse work environment. Every individual deserves equal opportunities to succeed and thrive.',
        cta: 'Our Policy'
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];

  return (
    <>
      <style jsx>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-gray-800/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => setActiveCategory(category.id)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <span className="text-gray-200 font-medium">
                            {category.name}
                          </span>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Full Mega Menu */
              <div className="grid grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Career Focus
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                            ${activeCategory === category.id
                              ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => setActiveCategory(category.id)}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <div className={`p-1.5 rounded flex-shrink-0 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <span className={`font-semibold text-sm ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-gray-200'
                              }`}>
                              {category.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Content */}
                <div className="col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Details'}
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    {activeCategory === 'team' ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {hasMembers(currentSubmenu) && currentSubmenu.members.map((member, index) => (
                          <motion.div
                            key={index}
                            className="text-center p-3 rounded-lg bg-gray-800/40 hover:bg-yellow-500/10 transition-all duration-200"
                            whileHover={{ y: -5 }}
                          >
                            <div className="relative w-20 h-20 mx-auto mb-3">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-full object-cover w-full h-full shadow-lg border-2 border-yellow-500"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = `${basePath}/placeholder.jpg`;
                                }}
                              />
                            </div>
                            <h4 className="text-sm font-semibold text-[#fbb53d]">{member.name}</h4>
                            <p className="text-xs text-gray-400 mt-1">{member.title}</p>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-4">
                        {hasPoints(currentSubmenu) && currentSubmenu.points.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20"
                          >
                            <div className="pt-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-yellow-500 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 10c0 6-7.5 11.5-7.5 11.5S4.5 16 4.5 10a7.5 7.5 0 1115 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-100">
                                {point.name}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">{point.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Right: Media Panel */}
                <div className="col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Highlights
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      <div className="relative mb-3 overflow-hidden rounded-lg aspect-video bg-gray-800/50">
                        <div className="w-full h-full relative">
                          <img
                            src={currentSubmenu.media.image}
                            alt={currentSubmenu.media.title}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `${basePath}/placeholder.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base text-[#fbb53d] mb-2">
                          {currentSubmenu.media.title}
                        </h4>
                        <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                          {currentSubmenu.media.description}
                        </p>

                        <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                          <motion.button
                            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-[#fbb53d] hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {currentSubmenu.media.cta}
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

const ContactMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('locations');
  const [activeLocation, setActiveLocation] = useState<{
    name: string;
    image: string;
    title: string;
    description: string;
    cta: string;
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const primaryCategories = [
    { id: 'locations', name: 'Locations', icon: <Mountain className="w-4 h-4" /> },
    { id: 'inquiry', name: 'Inquiry', icon: <Building className="w-4 h-4" /> }
  ];

  const submenuData = {
    locations: {
      points: [
        {
          name: 'Kolkata',
          image: `${basePath}/Kolkata.avif`,
          title: 'Kolkata',
          description: 'Corporate headquarters of TIL, located in the heart of the city.',
          cta: 'View Kolkata Office'
        },
        {
          name: 'Chennai',
          image: `${basePath}/chennai.avif`,
          title: 'Chennai',
          description: 'Serving the southern region with excellence.',
          cta: 'View Chennai Office'
        },
        {
          name: 'Delhi NCR',
          image: `${basePath}/delhi.avif`,
          title: 'Delhi NCR ',
          description: 'Our strategic presence in the capital region.',
          cta: 'View Delhi NCR Office'
        },
        {
          name: 'Mumbai',
          image: `${basePath}/mumbai.avif`,
          title: 'Mumbai',
          description: 'West zone operational hub for TIL.',
          cta: 'View Mumbai Office'
        },
        {
          name: 'Singrauli',
          image: `${basePath}/singrauli.jpeg`,
          title: 'Singrauli',
          description: 'Industrial logistics and support in central India.',
          cta: 'View Singrauli Depot'
        }
      ],
      media: {}
    },

    inquiry: {
      contacts: [
        {
          label: 'WhatsApp',
          value: '+91 89815 30153',
          icon: <MessageCircle className="w-5 h-5 text-green-400" />,
          description: 'Quick messaging and support'
        },
        {
          label: 'Email',
          value: 'mktg-til@tilindia.com',
          icon: <Mail className="w-5 h-5 text-blue-400" />,
          description: 'Business inquiries and detailed communications'
        },
        {
          label: 'Phone',
          value: '+91 033 6633 2000',
          icon: <Phone className="w-5 h-5 text-[#fbb53d]" />,
          description: 'Direct phone support during business hours'
        },
        {
          label: 'LinkedIn',
          value: 'https://www.linkedin.com/company/til-limited-ind/',
          icon: <Linkedin className="w-5 h-5 text-[#0A66C2]" />,
          description: 'Professional networking and company updates'
        }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=240&fit=crop&crop=center',
        title: 'Get In Touch',
        description: "Reach out to our team through your preferred channel. We're here to help.",
        cta: 'Contact Us'
      }
    }
  };


  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia =
    activeCategory === 'locations' && hasPoints(currentSubmenu)
      ? activeLocation || currentSubmenu.points[0]
      : (currentSubmenu.media && typeof currentSubmenu.media === 'object' ? currentSubmenu.media : {});


  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-gray-800/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        // Handle category selection
                        console.log(`Selected: ${category.name}`);
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <span className="text-gray-200 font-medium">
                            {category.name}
                          </span>
                        </div>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Full Mega Menu */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Contact Channels
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                          ${activeCategory === category.id
                              ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => {
                            setActiveCategory(category.id);
                            if (category.id === 'locations' && hasPoints(currentSubmenu)) {
                              setActiveLocation(currentSubmenu.points[0]);
                            }

                          }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <div className={`p-1.5 rounded flex-shrink-0 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <span className={`font-semibold text-sm ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-gray-200'
                              }`}>
                              {category.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Info List */}
                <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Contact'}
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    {activeCategory === 'inquiry' ? (
                      <ul className="space-y-4">
                        {hasContacts(currentSubmenu) &&
                          currentSubmenu.contacts.map((contact, index) => {
                            const isPhone = contact.label.toLowerCase().includes('phone');
                            const isEmail = contact.label.toLowerCase().includes('email');
                            const isWhatsApp = contact.label.toLowerCase().includes('whatsapp');
                            const isLinkedIn = contact.label.toLowerCase().includes('linkedin');

                            let href = '#';
                            if (isPhone) href = `tel:${contact.value}`;
                            else if (isEmail) href = `mailto:${contact.value}`;
                            else if (isWhatsApp) href = `https://wa.me/${contact.value.replace(/\D/g, '')}`;
                            else if (isLinkedIn) href = contact.value;

                            return (
                              <li
                                key={index}
                                className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20"
                              >
                                <div className="pt-1">
                                  {contact.icon}
                                </div>
                                <div>
                                  <a
                                    href={href}
                                    target={isLinkedIn || isWhatsApp ? "_blank" : "_self"}
                                    rel={isLinkedIn || isWhatsApp ? "noopener noreferrer" : ""}
                                    className="block hover:text-yellow-300 transition-colors"
                                    aria-label={`Contact via ${contact.label}`}
                                  >
                                    <p className="text-sm font-semibold text-gray-100 hover:text-[#fbb53d] transition">
                                      {contact.label}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">{contact.description}</p>
                                    <p className="text-xs text-[#fbb53d] mt-1 underline underline-offset-2">
                                      {contact.value}
                                    </p>
                                  </a>
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                    ) : (
                      <ul className="space-y-4">
                        {hasPoints(currentSubmenu) &&
                          currentSubmenu.points.map((location, index) => (
                            <li
                              key={index}
                              onMouseEnter={() => setActiveLocation(location)}
                              className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                            >
                              <div className="pt-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-5 h-5 text-yellow-500 flex-shrink-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1.5}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10c0 6-7.5 11.5-7.5 11.5S4.5 16 4.5 10a7.5 7.5 0 1115 0z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-100 hover:text-[#fbb53d] transition">
                                  {location.name}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">{location.description}</p>
                              </div>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Right: Dynamic Media Panel */}
                <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Details
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <motion.div
                      key={
                        (activeMedia && typeof activeMedia === 'object' && 'title' in activeMedia && (activeMedia as { title?: string }).title) ||
                        (activeMedia && typeof activeMedia === 'object' && 'name' in activeMedia && (activeMedia as { name?: string }).name) ||
                        ''
                      }
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      <div className="relative mb-3 overflow-hidden rounded">
                        <img
                          src={
                            (activeMedia && typeof activeMedia === 'object' && 'image' in activeMedia)
                              ? (activeMedia as { image?: string }).image
                              : ''
                          }
                          alt={
                            (activeMedia && typeof activeMedia === 'object' && 'title' in activeMedia && (activeMedia as { title?: string }).title) ||
                            (activeMedia && typeof activeMedia === 'object' && 'name' in activeMedia && (activeMedia as { name?: string }).name) ||
                            ''
                          }
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base text-[#fbb53d] mb-2">
                          {'title' in (activeMedia || {}) ? (activeMedia as { title?: string }).title : ('name' in (activeMedia || {}) ? (activeMedia as { name?: string }).name : '')}
                        </h4>
                        <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                          {'description' in (activeMedia || {}) ? (activeMedia as { description?: string }).description : ''}
                        </p>

                        {'cta' in (activeMedia || {}) && (activeMedia as { cta?: string }).cta && (
                          <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                            <motion.button
                              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-[#fbb53d] hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 shadow-lg"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {(activeMedia as { cta?: string }).cta}
                            </motion.button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};


const MainNavigation: React.FC = () => {
  const router = useRouter();                 // ✅ works now

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before applying responsive logic
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Your existing scroll handling logic
  useEffect(() => {
    if (!isMounted) return;

    let ticking = false;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 100);
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMounted]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setActiveMenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen, isMounted]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
  { name: 'About Us', hasSubmenu: true, path: '/about-us' },
  { name: 'Products', hasSubmenu: true, path: '/category' },
  { name: 'Customer Support', hasSubmenu: true, path: '/customer-support' },
  { name: 'Investor Relations', hasSubmenu: true, path: '/investor-relations' },
  { name: 'Media', hasSubmenu: true, path: '/media' },
  { name: 'Careers', hasSubmenu: true, path: '/careers' },
  { name: 'Contact Us', hasSubmenu: true, path: '/contact-us' },
];



  const handleDesktopMenuHover = useCallback((menuName: string) => {
    if (isMounted && window.innerWidth >= 1024) {
      setActiveMenu(menuName);
    }
  }, [isMounted]);

  const handleMobileMenuClick = useCallback((menuName: string) => {
    if (isMounted && window.innerWidth < 1024) {
      setActiveMenu(prev => prev === menuName ? null : menuName);
    }
  }, [isMounted]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, []);

  const closeDesktopMenu = useCallback(() => {
    if (isMounted && window.innerWidth >= 1024) {
      setActiveMenu(null);
    }
  }, [isMounted]);

  const renderMegamenu = useCallback((menuName: string) => {
    const closeHandler = () => setActiveMenu(null);

    switch (menuName) {
      case 'About Us':
        return <AboutMegamenu onClose={closeHandler} />;
      case 'Products':
        return <ProductsMegamenu onClose={closeHandler} />;
      case 'Customer Support':
        return <CustomerSupportMegamenu onClose={closeHandler} />;
      case 'Investor Relations':
        return <InvestorRelationsMegamenu onClose={closeHandler} />;
      case 'Media':
        return <MediaMegamenu onClose={closeHandler} />;
      case 'Careers':
        return <CareersMegamenu onClose={closeHandler} />;
      case 'Contact Us':
        return <ContactMegamenu onClose={closeHandler} />;
      default:
        return null;
    }
  }, []);

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <nav className="bg-[#1a2233] h-14" style={{ marginTop: '60px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 xl:px-20">
          <div className="flex h-14 items-center justify-center">
            <div className="text-white text-sm">Loading...</div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <div
      className="relative"
      onMouseLeave={closeDesktopMenu}
    >
      <motion.nav
        data-component="MainNavigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrollingDown && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'
          } ${isScrolled ? 'bg-[#1a2233]/85 backdrop-blur-md shadow-2xl' : 'bg-[#ffffff14]'
          }`}
        style={{ marginTop: isScrolled ? '53px' : '60px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 xl:px-20">

          {/* Desktop Navigation */}
<div className="hidden lg:flex h-14 overflow-x-hidden whitespace-nowrap">
  {navItems.map((item) => (
    <div
      key={item.name}
      className="flex-1"
      onMouseEnter={() => item.hasSubmenu && handleDesktopMenuHover(item.name)}
    >
      <motion.button
        onClick={() => {
          router.push(`${item.path}`); // navigate with basePath
          setActiveMenu(null); // close hover menu
        }}
        className={`flex items-center justify-center space-x-1 px-4 font-bold text-sm uppercase tracking-wide transition-all duration-200 w-full h-full ${
          activeMenu === item.name
            ? 'bg-[#fbb53d] text-[#000]'
            : 'text-[#fbb53d] hover:text-black hover:bg-[#fbb53d]'
        }`}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
      >
        <span>{item.name}</span>
        {item.hasSubmenu && (
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-200 ${
              activeMenu === item.name ? 'rotate-180' : ''
            }`}
          />
        )}
      </motion.button>
    </div>
  ))}
</div>


          {/* Mobile Navigation Header */}
          <div className="flex lg:hidden items-center justify-between h-14">
            <div className="flex items-center gap-4 pl-3">

              {/* Social Icons */}
              <div className="flex items-center gap-6 ">

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  {/* WhatsApp */}
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white hover:text-[#25D366] transition-colors duration-200">
                      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.48 6.52l-1.48 5.48 5.48-1.48A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12a11.94 11.94 0 00-3.48-8.52zM12 21.5a9.5 9.5 0 01-5.2-1.5l-.4-.25-3.1.83.83-3.1-.25-.4A9.5 9.5 0 012.5 12 9.5 9.5 0 0112 2.5 9.5 9.5 0 0121.5 12 9.5 9.5 0 0112 21.5z" />
                      <path d="M17.5 14.5c-.3 0-1.7-.8-2-1-.3-.2-.5-.2-.7 0-.2.2-.8.9-1 1.1-.2.2-.4.3-.7.1s-1.3-.5-2.5-1.5c-.9-.8-1.5-1.8-1.7-2-.2-.2 0-.3.1-.5.1-.1.2-.3.3-.5.1-.2.1-.3 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.2-.7.5s-1 1-1 2.5 1 2.9 1.2 3.1c.2.2 2 3 4.8 4.2 2.8 1.2 2.8.8 3.3.7.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a href="https://youtube.com/@tilindia" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white hover:text-[#FF0000] transition-colors duration-200">
                      <path d="M23.498 6.186a2.998 2.998 0 00-2.11-2.11C19.668 3.5 12 3.5 12 3.5s-7.668 0-9.388.576a2.998 2.998 0 00-2.11 2.11C.5 7.906.5 12 .5 12s0 4.094.002 5.814a2.998 2.998 0 002.11 2.11c1.72.576 9.388.576 9.388.576s7.668 0 9.388-.576a2.998 2.998 0 002.11-2.11c.002-1.72.002-5.814.002-5.814s0-4.094-.002-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a href="https://facebook.com/tilindia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white hover:text-[#1877F2] transition-colors duration-200">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://linkedin.com/company/tilindia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white hover:text-[#0077B5] transition-colors duration-200">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 11-.001-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.554V9h3.565v11.452z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>


            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menus */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            {activeMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 z-50"
              >
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                  {renderMegamenu(activeMenu)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <div className="lg:hidden">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={closeMobileMenu}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-80 bg-[#1a2233] shadow-xl z-50 overflow-y-auto"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-auto invert"
                      src="/logo1.png"
                      alt="TIL Limited"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                    aria-label="Close mobile menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => item.hasSubmenu && handleMobileMenuClick(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${activeMenu === item.name
                          ? 'text-[#fbb53d] bg-gray-800'
                          : 'text-gray-300 hover:text-[#fbb53d] hover:bg-gray-800'
                          }`}
                        disabled={!item.hasSubmenu}
                      >
                        <span className="font-medium uppercase tracking-wide text-sm">{item.name}</span>
                        {item.hasSubmenu && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''
                              }`}
                          />
                        )}
                      </button>

                      {/* Mobile Submenu */}
                      <AnimatePresence>
                        {activeMenu === item.name && item.hasSubmenu && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-2"
                          >
                            <div className="bg-gray-800/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                              {renderMegamenu(item.name)}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {/* Mobile Footer */}
                  <div className="pt-6 mt-6 border-t border-gray-700">
                    <p className="text-center text-gray-500 text-xs">
                      © 2025 TIL Limited. All rights reserved.
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default MainNavigation;