'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from "react";
import {
    ArrowRight,
    ChevronDown,
    Phone,
    Mail,
    MapPin,
    Factory,
    Users,
    Trophy,
    Globe,
    Clock,
    Shield,
    HeartHandshake,
    Zap
} from 'lucide-react';
import Link from "next/link";
type Milestone = {
    year: string;
    event: string;
    image?: string; // optional milestone image
};

const HistoryRoulette: React.FC<{ milestones: Milestone[]; autoPlayInterval?: number }> = ({
    milestones,
    autoPlayInterval = 3000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % milestones.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + milestones.length) % milestones.length);

    // autoplay
    useEffect(() => {
        if (autoPlayInterval > 0) {
            timerRef.current = setInterval(nextSlide, autoPlayInterval);
            return () => {
                if (timerRef.current) clearInterval(timerRef.current);
            };
        }
    }, [autoPlayInterval]);

    return (
        <div className="relative w-full mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            {/* Header */}
            <div className="mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Historical Journey</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F1B434] to-[#FFE352] mx-auto mt-3 rounded-full" />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Circular Timeline */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">

                    {/* Outer circle track */}
                    <div className="absolute w-full h-full rounded-full border-2 border-dashed border-gray-200" />

                    {/* Center point */}
                    <div className="absolute w-6 h-6 rounded-full bg-[#F1B434] z-10 shadow-lg" />

                    {milestones.map((m, i) => {
                        const angle = (2 * Math.PI * (i - currentIndex)) / milestones.length;
                        const distance = 140; // Radius
                        const x = distance * Math.cos(angle);
                        const y = distance * Math.sin(angle);
                        const isActive = i === currentIndex;

                        return (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`absolute flex flex-col items-center justify-center rounded-full cursor-pointer transition-all duration-500 ${isActive
                                    ? 'bg-[#F1B434] text-white scale-125 shadow-xl font-bold ring-4 ring-[#F8D778] z-20 w-16 h-16'
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 shadow-md z-10 w-12 h-12'
                                    }`}
                                style={{
                                    transform: `translate(${x}px, ${y}px)`,
                                }}
                                aria-label={`View milestone from ${m.year}`}
                            >
                                {m.image && (
                                    <img
                                        src={m.image}
                                        alt={m.year}
                                        className={`w-6 h-6 object-cover rounded-full mb-1 ${isActive ? 'border-2 border-white' : 'border border-gray-200'}`}
                                    />
                                )}
                                <span className={`${isActive ? 'text-xs' : 'text-[10px]'} font-medium`}>{m.year}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Detail Panel */}
                <div className="flex-1 min-w-0">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-inner">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-gray-500">
                                Milestone {currentIndex + 1} of {milestones.length}
                            </span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={prevSlide}
                                    className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-all shadow-sm text-gray-700"
                                    aria-label="Previous milestone"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="p-2 bg-[#F1B434] text-white rounded-lg hover:bg-[#E5A920] transition-all shadow-sm"
                                    aria-label="Next milestone"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-[#F1B434] mb-2">
                            {milestones[currentIndex].year}
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            {milestones[currentIndex].event}
                        </p>

                        {milestones[currentIndex].image && (
                            <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={milestones[currentIndex].image}
                                    alt={milestones[currentIndex].year}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        )}

                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => {
                                    const randomIndex = Math.floor(Math.random() * milestones.length);
                                    setCurrentIndex(randomIndex);
                                }}
                                className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all shadow-sm text-sm font-medium"
                            >
                                Milestones
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';


// Roulette-style History Carousel (paste-2 logic)
const HistoryCarousel: React.FC<{
    milestones: Milestone[];
    baseIntervalMs?: number;
    acceleratedIntervalMs?: number;
    accelerationDurationMs?: number;
}> = ({
    milestones,
    baseIntervalMs = 3000,
    acceleratedIntervalMs = 1000,
    accelerationDurationMs = 5000
}) => {
        const [index, setIndex] = useState(0);
        const [paused, setPaused] = useState(false);
        const [speedUp, setSpeedUp] = useState(false);
        const timerRef = useRef<NodeJS.Timeout | null>(null);
        const accelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

        const total = milestones.length;

        const next = useCallback(() => {
            setIndex(prev => (prev + 1) % total);
        }, [total]);

        const prev = useCallback(() => {
            setIndex(prev => (prev - 1 + total) % total);
        }, [total]);

        const clearTimer = () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };

        const startTimer = useCallback(() => {
            clearTimer();
            if (!paused) {
                const interval = speedUp ? acceleratedIntervalMs : baseIntervalMs;
                timerRef.current = setInterval(next, interval);
            }
        }, [paused, speedUp, baseIntervalMs, acceleratedIntervalMs, next]);

        useEffect(() => {
            startTimer();
            return clearTimer;
        }, [startTimer]);

        const handleMouseEnter = () => {
            setPaused(true);
            clearTimer();
        };

        const handleMouseLeave = () => {
            setPaused(false);
            startTimer();
        };

        const handleSpeedUp = () => {
            setSpeedUp(true);
            if (accelTimeoutRef.current) clearTimeout(accelTimeoutRef.current);
            accelTimeoutRef.current = setTimeout(() => setSpeedUp(false), accelerationDurationMs);
        };

        useEffect(() => {
            return () => {
                if (accelTimeoutRef.current) clearTimeout(accelTimeoutRef.current);
            };
        }, []);

        const handleWheel = (e: React.WheelEvent) => {
            if (Math.abs(e.deltaY) < 2) return;
            if (e.deltaY > 0) next();
            else prev();
        };

        const current = milestones[index];

        return (
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onWheel={handleWheel}
                className="relative w-full bg-white rounded-xl shadow-lg p-6"
                role="region"
                aria-label="Company history timeline"
            >
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Empty left column to push content to right */}
                    <div className="hidden lg:block lg:w-1/2"></div>

                    {/* Right Column - Timeline Content */}
                    <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-hidden">
                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Our Timeline</h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-[#F1B434] to-[#FFE352] mx-auto mt-3 rounded-full" />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm text-gray-500 font-medium">
                                {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={prev}
                                    className="px-3 py-1.5 text-sm rounded bg-white border border-gray-200 hover:bg-gray-50 shadow-sm flex items-center gap-1"
                                    aria-label="Previous milestone"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Prev
                                </button>
                                <button
                                    onClick={next}
                                    className="px-3 py-1.5 text-sm rounded bg-white border border-gray-200 hover:bg-gray-50 shadow-sm flex items-center gap-1"
                                    aria-label="Next milestone"
                                >
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleSpeedUp}
                                    className={`px-3 py-1.5 text-sm rounded border flex items-center gap-1 ${speedUp
                                        ? 'bg-[#F1B434] text-white border-[#F1B434]'
                                        : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
                                        } shadow-sm`}
                                    aria-pressed={speedUp}
                                    aria-label="Speed up timeline"
                                >
                                    <Zap className="w-4 h-4" />
                                    Speed Up
                                </button>
                            </div>
                        </div>

                        <div className="relative h-32 md:h-40 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.year + current.event}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 flex flex-col justify-center"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-[#F1B434] text-white text-sm font-bold px-2 py-1 rounded">
                                            {current.year}
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed line-clamp-4">
                                        {current.event}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>


                        {current.image && (
                            <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={current.image}
                                    alt={current.year}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        )}

                        <div className="mt-6">
                            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                <motion.div
                                    key={index + (speedUp ? '-fast' : '-base')}
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{
                                        duration: (speedUp ? acceleratedIntervalMs : baseIntervalMs) / 1000,
                                        ease: 'linear'
                                    }}
                                    className="h-2 bg-gradient-to-r from-[#F1B434] to-[#FFE352]"
                                />
                            </div>
                            <div className="mt-2 text-xs text-gray-500 flex justify-between">
                                <span>
                                    {paused ? 'Paused (hover to pause)' : speedUp ? 'Fast Mode' : 'Auto-rotating'}
                                </span>
                                <span>
                                    {Math.round((speedUp ? acceleratedIntervalMs : baseIntervalMs) / 1000)}s interval
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

const PageContent = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<string>('overview');
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab && tabs.some(t => t.id === tab)) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        router.push(`${pathname}?tab=${tabId}`);
    };

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
                description:
                    '80+ years of engineering excellence in construction and material handling equipment.',
                cta: 'Learn More',
                features: ['80+ Years Experience', 'Global Presence', 'ISO Certified']
            }
        },
        leadership: {
            items: [
                {
                    name: "Board of Directors",
                    description: "Meet our governing body and strategic advisors",
                    image: `${basePath}/board-directors.jpg`,
                },
                {
                    name: "Executive Team",
                    description: "Our day-to-day leadership team",
                    image: `${basePath}/executive-team.jpg`,
                },
                {
                    name: "Management Committee",
                    description: "Department heads and functional leaders",
                    image: `${basePath}/management-committee.jpg`,
                },
                {
                    name: "Advisory Board",
                    description: "Industry experts guiding our strategy",
                    image: `${basePath}/advisory-board.jpg`,
                },
            ],
            media: {
                image: `${basePath}/leadership.jpg`,
                title: "Leadership Team",
                description:
                    "Experienced leaders driving innovation and growth in the construction industry.",
                cta: "Meet Our Team",
                features: [
                    "Industry Veterans",
                    "Global Experience",
                    "Innovation Focus",
                ],
            },
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
                description:
                    'Leading the way in environmentally responsible manufacturing and operations.',
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
                description:
                    'Our commitment to ethical business practices and corporate governance.',
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

    const tabs = [
        {
            id: 'overview',
            title: 'Overview',
            icon: <Factory className="w-5 h-5" />,
            submenu: submenuData.company
        },
        {
            id: 'history',
            title: 'Our History',
            icon: <Clock className="w-5 h-5" />,
            submenu: submenuData.milestones
        },
        {
            id: 'values',
            title: 'Our Values',
            icon: <HeartHandshake className="w-5 h-5" />,
            submenu: submenuData.values
        },
        {
            id: 'leadership',
            title: 'Leadership',
            icon: <Users className="w-5 h-5" />,
            submenu: submenuData.leadership
        },
        {
            id: 'awards',
            title: 'Awards',
            icon: <Trophy className="w-5 h-5" />,
            submenu: submenuData.company // Using company submenu as it contains awards
        },
        {
            id: 'global',
            title: 'Global Presence',
            icon: <Globe className="w-5 h-5" />,
            submenu: submenuData.company // Using company submenu as it contains global presence
        }
    ];

    const contentData = {
        overview: {
            title: 'About TIL Limited',
            description:
                'TIL Limited is a leading Indian industrial equipment manufacturer with a rich legacy of over 75 years in material handling and construction equipment.',
            content: [
                'Pioneers in manufacturing cranes and material handling equipment in India',
                'Strategic partnerships with global leaders like Manitowoc, Hyster, and Snorkel',
                'State-of-the-art manufacturing facilities in Kolkata and Kharagpur',
                'Nationwide sales and service network with over 50 locations',
                'Exports to more than 30 countries across Asia, Africa and the Middle East'
            ],
            image: `${basePath}/about-us.png`
        },
        history: {
            title: 'Our Journey',
            description:
                "From humble beginnings to becoming an industry leader, our journey mirrors India's industrial growth story.",
            milestones: [
                { year: '1944', event: 'Tractors India is incorporated.' },
                { year: '1950', event: 'Tractors India becomes a Coles Crane Distributor.' },
                { year: '1955', event: 'Tractors India goes public.' },
                { year: '1960', event: 'Enters Joint Venture with Coles Cranes.' },
                {
                    year: '1962',
                    event:
                        "India's first indigenously manufactured mobile crane rolls out of the company's Kamarhatty plant in Calcutta."
                },
                { year: '1972', event: 'Coles Crane of India changes name to Indian Crane Company Ltd.' },
                {
                    year: '1976',
                    event:
                        'Indian Crane Company amalgamated with Tractors India. Mr. Avijit Mazumdar takes over as Managing Director.'
                },
                { year: '1982', event: "Manufactures India's first rough terrain crane." },
                { year: '1985', event: 'Changes its name to become TIL Limited.' },
                {
                    year: '1988',
                    event: "Manufactures India's first 100-tonne truck-mounted mobile crane."
                },
                {
                    year: '1994',
                    event:
                        'Completes 50 years of its corporate journey. Gets ISO 9001 Material Handling Division certified by BVQI. TIL ties up with Grove USA for Rough Terrain & Truck Cranes.'
                },
                { year: '1995', event: 'Mr. Sumit Mazumder takes over as Managing Director.' },
                { year: '1996', event: 'TIL ties up with National Cranes, USA for Loader Cranes.' },
                {
                    year: '1998',
                    event: 'TIL ties up with Manitowoc, USA for Crawler Cranes dealership.'
                },
                {
                    year: '2002-03',
                    event:
                        "TIL is awarded the Highest Exporter's Trophy for the Eastern region by the Engineering Export Promotion Council in the capital goods category."
                },
                { year: '2007', event: '5000th crane rolls out of the Kamarhatty manufacturing plant.' },
                {
                    year: '2008',
                    event:
                        'Ties up with Nacco Material Handling Group (now Hyster-Yale Group) for forklifts and container handlers.'
                },
                {
                    year: '2009',
                    event:
                        'Ties up with Astec Inc for Hot Mix Asphalt Plants, bringing road building solutions to India.'
                },
                {
                    year: '2010',
                    event:
                        'Ties up with Astec Aggregate Mining Group, USA for Crushing & Screening Equipment.'
                },
                {
                    year: '2011',
                    event:
                        'Inaugurates the new factory at Changual, Kharagpur, and commences phase 1 production.'
                },
                { year: '2012', event: 'Kamarhatty Plant completes 50 years of successful operations.' },
                { year: '2013', event: 'TIL receives L.N. Birla Memorial Award for Corporate Excellence.' },
                { year: '2016', event: 'CAT Distributorship divested and becomes part of TIPL (now Gainwell).' },
                {
                    year: '2018',
                    event:
                        'TIL Limited wins Indywood CSR Excellence Awards for Best CSR Campaign in Employee Engagement.'
                },
                { year: '2019', event: 'TIL completes 75 years of its existence on 22nd July 2019.' },
                {
                    year: '2024',
                    event:
                        'Acquired by the Gainwell Group through its group entity Indocrest Defence Services Private Limited (IDSPL) and new management is appointed.'
                }
            ],
            image: `${basePath}/about-history.jpg`
        },
        values: {
            title: 'Our Core Values',
            description:
                'These principles guide every decision we make and every relationship we build.',
            values: [
                {
                    title: 'Integrity',
                    description:
                        'We conduct business with honesty, fairness and respect for all stakeholders.',
                    icon: <Shield className="w-6 h-6 text-[#F1B434]" />
                },
                {
                    title: 'Innovation',
                    description:
                        'Continuous improvement drives our product development and customer solutions.',
                    icon: <Zap className="w-6 h-6 text-[#F1B434]" />
                },
                {
                    title: 'Customer Focus',
                    description:
                        'We build lasting relationships by understanding and exceeding customer expectations.',
                    icon: <HeartHandshake className="w-6 h-6 text-[#F1B434]" />
                },
                {
                    title: 'Excellence',
                    description:
                        'We strive for the highest standards in quality, safety and performance.',
                    icon: <Trophy className="w-6 h-6 text-[#F1B434]" />
                }
            ]
        },
        leadership: {
            title: 'Leadership Team',
            description:
                "Our experienced leadership team guides TIL's vision and strategic direction.",
            executives: [
                {
                    name: 'Mr. Sumit Mazumder',
                    position: 'Chairman & Managing Director',
                    experience: 'Over 35 years in industrial equipment sector',
                    image: `${basePath}/executive1.jpg`
                },
                {
                    name: 'Mr. Rahul Sen',
                    position: 'CEO - Cranes Division',
                    experience: '25+ years in heavy equipment manufacturing',
                    image: `${basePath}/executive2.jpg`
                },
                {
                    name: 'Ms. Priya Chatterjee',
                    position: 'CEO - Material Handling Division',
                    experience: 'Former VP at Hyster-Yale, 20+ years experience',
                    image: `${basePath}/executive3.jpg`
                },
                {
                    name: 'Mr. Amit Sharma',
                    position: 'CFO',
                    experience: 'Former finance head at Tata Motors',
                    image: `${basePath}/executive4.jpg`
                }
            ]
        },
        awards: {
            title: 'Awards & Recognition',
            description:
                'Our commitment to excellence has been recognized by industry and government bodies.',
            awards: [
                {
                    year: '2022',
                    title: 'Best Construction Equipment Manufacturer',
                    by: 'Indian Construction Equipment Manufacturers Association'
                },
                {
                    year: '2021',
                    title: 'Export Excellence Award',
                    by: 'Engineering Export Promotion Council of India'
                },
                {
                    year: '2020',
                    title: 'Safety Innovation Award',
                    by: 'National Safety Council'
                },
                {
                    year: '2019',
                    title: 'Best Employer in Manufacturing',
                    by: 'Great Place to Work Institute'
                },
                {
                    year: '2018',
                    title: 'Product Innovation Award',
                    by: 'Confederation of Indian Industry'
                }
            ],
            image: `${basePath}/news6.jpg`
        },
        global: {
            title: 'Global Footprint',
            description: 'While rooted in India, our operations span across continents.',
            presence: [
                {
                    region: 'Asia',
                    countries: ['India', 'Bangladesh', 'Nepal', 'Sri Lanka', 'Myanmar', 'Indonesia']
                },
                {
                    region: 'Middle East',
                    countries: ['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait']
                },
                {
                    region: 'Africa',
                    countries: ['South Africa', 'Nigeria', 'Kenya', 'Tanzania', 'Ethiopia']
                },
                {
                    region: 'Latin America',
                    countries: ['Brazil', 'Chile', 'Peru']
                }
            ],
            image: `${basePath}/about-global.jpg`
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/about-us-bg.png`}
                    alt="About TIL"
                    className="w-full h-full object-cover object-[10%_bottom] scale-105"
                />

                {/* Dark Gradient Overlay from Top */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent z-10" />

                {/* Existing Darker Gradient Overlay from Left to Right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

                {/* Content Container */}
                <div className="absolute inset-0 z-20 flex items-center pt-6">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
                        <motion.div
                            className="max-w-2xl"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
                        >
                            <motion.span
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-sm font-bold tracking-tight mb-2 mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                ABOUT US
                            </motion.span>

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                TIL <span className="text-[#F1B434]">Limited</span>
                            </motion.h1>

                            <motion.div
                                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-full mb-4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />

                            <motion.p
                                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                Pioneering Indian industrial equipment manufacturing since 1944.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="pb-16 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 space-y-12">
                    {/* Tab Navigation with Submenu */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.8,
                            ease: [0.175, 0.885, 0.32, 1.275],
                            type: 'spring',
                            stiffness: 100,
                            damping: 15
                        }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-xl blur-lg opacity-30 -z-10" />
                        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="flex flex-col sm:flex-row items-stretch relative">
                                {tabs.map(tab => (
                                    <div
                                        key={tab.id}
                                        className="relative"
                                        onMouseEnter={() => setHoveredTab(tab.id)}
                                        onMouseLeave={() => setHoveredTab(null)}
                                    >
                                        <button
                                            onClick={() => handleTabChange(tab.id)}
                                            className={`flex-1 flex items-center justify-center gap-2 p-4 font-medium transition-colors ${activeTab === tab.id
                                                ? 'bg-[#F1B434] text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                                } w-full`}
                                        >
                                            {React.cloneElement(tab.icon, {
                                                className: `${(tab.icon as any).props.className} ${activeTab === tab.id ? 'text-white' : 'text-[#F1B434]'
                                                    }`
                                            })}
                                            {tab.title}
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${hoveredTab === tab.id ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        {/* Submenu Dropdown */}
                                        {hoveredTab === tab.id && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg rounded-b-lg"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                                                    <div className="space-y-4">
                                                        <h3 className="font-bold text-lg text-gray-800">
                                                            {tab.submenu.media.title}
                                                        </h3>
                                                        <img
                                                            src={tab.submenu.media.image}
                                                            alt={tab.submenu.media.title}
                                                            className="w-full h-40 object-cover rounded-lg"
                                                        />
                                                        <p className="text-gray-600">{tab.submenu.media.description}</p>
                                                        <button
                                                            className="text-[#F1B434] font-medium flex items-center gap-1"
                                                            onClick={() => handleTabChange(tab.id)}
                                                        >
                                                            {tab.submenu.media.cta}
                                                            <ArrowRight className="w-4 h-4" />
                                                        </button>
                                                        <div className="flex flex-wrap gap-2 mt-2">
                                                            {tab.submenu.media.features.map((feature: string, index: number) => (
                                                                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                                                    {feature}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 lg:col-span-2">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {tab.submenu.items.map(
                                                                (item: { name: string; description: string; image: string }, index: number) => (
                                                                    <div
                                                                        key={index}
                                                                        className="p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                                                                        onClick={() => handleTabChange(tab.id)}
                                                                    >
                                                                        <div className="flex items-start gap-3">
                                                                            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                                                                                <img
                                                                                    src={item.image}
                                                                                    alt={item.name}
                                                                                    className="w-full h-full object-cover"
                                                                                />
                                                                            </div>
                                                                            <div>
                                                                                <h4 className="font-medium text-gray-800">{item.name}</h4>
                                                                                <p className="text-sm text-gray-500">{item.description}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                        >
                            {activeTab === 'overview' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.overview.title}</h2>
                                        <p className="text-gray-600 mb-6">{contentData.overview.description}</p>
                                        <ul className="space-y-3">
                                            {contentData.overview.content.map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start"
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                >
                                                    <div className="flex-shrink-0 h-5 w-5 text-[#F1B434] mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-700">{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="h-full rounded-lg overflow-hidden shadow-lg">
                                        <img src={contentData.overview.image} alt="TIL Overview" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'history' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.history.title}</h2>
                                    <p className="text-gray-600 mb-6">{contentData.history.description}</p>

                                    {/* Roulette-style History Carousel */}
                                    <HistoryRoulette milestones={contentData.history.milestones} autoPlayInterval={3000} />
                                </div>
                            )}


                            {activeTab === 'values' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.values.title}</h2>
                                    <p className="text-gray-600 mb-8">{contentData.values.description}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {contentData.values.values.map((value, index) => (
                                            <motion.div
                                                key={index}
                                                className="bg-gray-50 p-6 rounded-lg"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + index * 0.1 }}
                                                whileHover={{ y: -5 }}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="p-2 bg-[#F1B434]/10 rounded-lg">{value.icon}</div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h3>
                                                        <p className="text-gray-600">{value.description}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}     

                            {activeTab === 'leadership' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.leadership.title}</h2>
                                    <p className="text-gray-600 mb-8">{contentData.leadership.description}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {[
                                            {
                                                name: 'Pinaki Niyogy',
                                                title: 'Chief Executive Officer',
                                                image: `${basePath}/pinaki.jpg`,
                                                description: 'Leading TIL with strategic vision and extensive industry experience.'
                                            },
                                              {
                                                name: 'Rishabh P Nair',
                                                title: 'Head Of Brand, Content & PR',
                                                image: `${basePath}/Risabh.png`,
                                                description: 'Building brand reputation and strategic communication.'
                                            },
                                            {
                                                name: 'Arvind Rishi',
                                                title: 'AVP- Sales & After Market',
                                                image: `${basePath}/arvind.jpeg`,
                                                description: 'Driving sales growth and ensuring exceptional customer service.'
                                            },
                                            {
                                                name: 'Mr. Kanhaiya Gupta',
                                                title: 'Chief Financial Officer',
                                                image: `${basePath}/Kanhaiya.png`,
                                                description: 'Managing financial strategy and ensuring sustainable growth.'
                                            },
                                            {
                                                name: 'Ms. Shamita Nandi',
                                                title: 'Chief Human Resource Officer',
                                                image: `${basePath}/Shamita.png`,
                                                description: 'Developing talent and fostering a positive organizational culture.'
                                            },
                                            {
                                                name: 'Chandrani Chatterjee',
                                                title: 'Company Secretary',
                                                image: `${basePath}/chandrani.jpg`,
                                                description: 'Ensuring corporate governance and regulatory compliance.'
                                            },
                                            {
                                                name: 'Mr. Saikat Bagchi',
                                                title: 'Head - Supply Chain & Commercial',
                                                image: `${basePath}/saiket.png`,
                                                description: 'Optimizing supply chain operations and commercial excellence.'
                                            }
                                          
                                        ].map((member, index) => (
                                            <motion.div
                                                key={index}
                                                className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group h-40"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + index * 0.1 }}
                                            >
                                                <div className="flex h-full">
                                                    {/* Image Section */}
                                                    <div className="relative flex-shrink-0 w-40 h-full overflow-hidden">
                                                        <div className="absolute inset-0 flex items-center justify-center p-4">
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className="w-28 h-28 object-cover rounded-full border-4 border-[#F1B434] shadow-md z-10 relative transition-transform duration-300 group-hover:scale-110"
                                                            />
                                                        </div>
                                                        <div className="absolute inset-0 bg-gradient-to-r from-[#F1B434]/20 to-transparent"></div>
                                                    </div>

                                                    {/* Content Section */}
                                                    <div className="flex-1 p-4 flex flex-col justify-center">
                                                        <h3 className="font-bold text-gray-800 text-lg group-hover:text-[#F1B434] transition-colors duration-300">{member.name}</h3>
                                                        <p className="text-sm text-[#F1B434] font-medium">{member.title}</p>
                                                    </div>

                                                    {/* Hover description that appears on the side */}
                                                    <div className="absolute top-0 left-40 right-0 h-full bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center shadow-lg rounded-r-xl">
                                                        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                                                        <p className="text-sm font-medium mb-2">{member.title}</p>
                                                        <p className="text-xs leading-tight">
                                                            {member.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}


                            {activeTab === 'awards' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.awards.title}</h2>
                                        <p className="text-gray-600 mb-6">{contentData.awards.description}</p>
                                        <div className="space-y-4">
                                            {contentData.awards.awards.map((award, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#F1B434]"
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="bg-[#F1B434] text-white text-sm font-bold px-3 py-1 rounded">
                                                            {award.year}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold text-gray-800">{award.title}</h3>
                                                            <p className="text-sm text-gray-600">by {award.by}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-full rounded-lg overflow-hidden shadow-lg">
                                        <img src={contentData.awards.image} alt="TIL Awards" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'global' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.global.title}</h2>
                                        <p className="text-gray-600 mb-6">{contentData.global.description}</p>
                                        <div className="space-y-6">
                                            {contentData.global.presence.map((region, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                >
                                                    <h3 className="font-bold text-[#F1B434] mb-2">{region.region}</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {region.countries.map((country, i) => (
                                                            <span key={i} className="text-sm bg-gray-50 px-3 py-1 rounded-full">
                                                                {country}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-full rounded-lg overflow-hidden shadow-lg">
                                        <img src={contentData.global.image} alt="TIL Global Presence" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-xl shadow-lg p-8 text-white"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">75+</div>
                                <div className="text-sm font-medium">Years of Experience</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">5000+</div>
                                <div className="text-sm font-medium">Employees</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">30+</div>
                                <div className="text-sm font-medium">Countries Served</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">100K+</div>
                                <div className="text-sm font-medium">Machines Delivered</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
                    >
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">Want to learn more about TIL?</h2>
                            <p className="text-gray-600 mb-6">
                                Our team is ready to answer any questions you may have about our company, products, or services.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link href={`${basePath}/contact-us`} passHref>
                                    <button className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md">
                                        Contact Us
                                    </button>
                                </Link>
                                <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                                    Download Company Profile
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default function Page() {
    return (
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <PageContent />
        </Suspense>
    );
}
