import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Award, Users, TrendingUp, X } from 'lucide-react';

const TeamGrid = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const teamMembers = [
        {
            id: 8,
            name: "Dr. Sonakshi Vij",
            role: "Faculty Coordinator",
            department: "Faculty Advisor",
            image: "/api/placeholder/300/300",
            bio: "Assistant Professor at VIPS-TC with expertise in Machine Learning, NLP, and Data Science.",
            expertise: ["Machine Learning", "Data Science", "Natural Language Processing"],
            achievements: [
                "Patent: 'Artificial Intelligence Based Intensive Care Unit Ventilator Machine'",
                "Multiple research publications in AI and NLP"
            ],
            social: {
                linkedin: "https://www.linkedin.com/in/dr-sonakshi-vij-65288011a/",
                email: "sonakshi.vij@university.edu"
            },
            stats: {},
            showEmail: true
        },
        {
            id: 1,
            name: "Utsav Singhal",
            role: "President",
            department: "Leadership",
            image: "images/UTSAVS26.png",
            bio: "AI/ML Engineer and Quantum Computing Researcher pursuing B.Tech in AI & ML at VIPS-TC.",
            expertise: ["Python", "Deep Learning", "NLP", "Computer Vision", "Quantum Computing"],
            achievements: [
                "Developed 'PyVerse': A collection of diverse Python projects",
                "Created 'Loan AI Debugger': An AI-powered loan approval prediction tool",
                "Participated in NeurIPS-BELKA competition for drug discovery",
                "Contributed to Capsule Vision 2024 Challenge for medical imaging"
            ],
            social: {
                github: "https://github.com/UTSAVS26",
                linkedin: "https://www.linkedin.com/in/utsav-singhal-2604/",
                email: "utsav.singhal@university.edu"
            },
            stats: {},
            showEmail: true
        },
        {
            id: 2,
            name: "Aanchal Mishra",
            role: "Vice President",
            department: "Leadership",
            image: "images/Aanchal0502.png",
            bio: "Developer Advocate at Postman focusing on Student Programs.",
            expertise: ["Community Building", "Technical Workshops", "API Development"],
            achievements: [
                "Active involvement in developer education and community initiatives"
            ],
            social: {
                github: "https://github.com/mishra-aanchal",
                linkedin: "https://www.linkedin.com/in/mishra-aanchal"
            },
            stats: {},
            showEmail: false
        },
        {
            id: 3,
            name: "Ananya Sharma",
            role: "Secretary",
            department: "Operations & Events",
            image: "images/Ananyas-7.png",
            bio: "Frontend Developer with a focus on HTML, CSS, and JavaScript.",
            expertise: ["Frontend Development", "HTML", "CSS", "JavaScript"],
            achievements: [
                "Developed a multiplayer maze game using socket programming",
                "Created 'DermCheckAI' for skin disease detection"
            ],
            social: {
                github: "https://github.com/ananyasharmaas",
                linkedin: "https://www.linkedin.com/in/ananya-swami-728852273"
            },
            stats: {},
            showEmail: false
        },
        {
            id: 4,
            name: "Harshita Bangia",
            role: "Treasurer",
            department: "Operations & Events",
            image: "images/harshita310.png",
            bio: "Passionate about building applied AI solutions through Machine Learning, Deep Learning, and NLP.",
            expertise: ["Machine Learning", "Deep Learning", "Natural Language Processing"],
            achievements: [
                "Skilled in end-to-end AI development and model deployment"
            ],
            social: {
                github: "https://github.com/harshita310",
                linkedin: "https://www.linkedin.com/in/harshita-bangia-2aa1ab2b4/"
            },
            stats: {},
            showEmail: false
        },
        {
            id: 5,
            name: "Rhythm Arora",
            role: "Event Manager",
            department: "Operations & Events",
            image: "images/rhythmarora070.png",
            bio: "Experienced Technology Architect with a background in Audio Visual, IoT, and IT industries.",
            expertise: ["Java", "Kubernetes", "IoT", "Technology Architecture"],
            achievements: [
                "Developed 'apigee-backup' for backing up APIGEE resources",
                "Worked on deploying Java applications to Kubernetes"
            ],
            social: {
                github: "https://github.com/rhythm-arora",
                linkedin: "https://www.linkedin.com/in/rhythmarora"
            },
            stats: {},
            showEmail: false
        },
        {
            id: 6,
            name: "Abu Maaz",
            role: "Social Media Coordinator",
            department: "Media Team",
            image: "images/somewherelostt.png",
            bio: "Managing Data Science Club and conducting sessions for over 120 members.",
            expertise: ["Python", "C++", "Machine Learning", "Web Development"],
            achievements: [
                "Conducted multiple sessions in Data Science Club",
                "Active contributor to open-source projects"
            ],
            social: {
                github: "https://github.com/somewherelostt",
                linkedin: "https://www.linkedin.com/in/abu-maaz-/"
            },
            stats: {},
            showEmail: false
        },
        {
            id: 7,
            name: "Jayati Ahuja",
            role: "Social Media Coordinator",
            department: "Media Team",
            image: "images/JAYATIAHUJA.png",
            bio: "Assistant Manager - HRBP at Girikon with 7+ years of HR experience.",
            expertise: ["Human Resources", "Employee Engagement", "Policy Integration"],
            achievements: [
                "Integrated employees with company policies and procedures",
                "Managed HR business partnering effectively"
            ],
            social: {
                github: "https://github.com/JAYATIAHUJA",
                linkedin: "https://www.linkedin.com/in/jayati-ahuja-a4b16724a"
            },
            stats: {},
            showEmail: false
        }
    ];

    // Create row arrangements
    const firstRow = teamMembers.slice(0, 2); // Faculty and President
    const secondRow = teamMembers.slice(2, 5); // Next 3 members
    const thirdRow = teamMembers.slice(5, 8); // Last 3 members

    const renderMemberCard = (member, index) => (
        <div
            key={member.id}
            className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-2xl p-3 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 relative overflow-hidden flex items-center min-h-[64px]">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-lg font-bold shadow-xl shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300 mr-3 shrink-0">
                    {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                {/* Info and Socials */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-1">
                        <span className="font-bold text-base text-white">{member.name}</span>
                        <span className="text-cyan-400 text-xs font-semibold">{member.role}</span>
                        <span className="text-slate-400 text-xs font-medium">{member.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Expertise Tag (only one) */}
                        {member.expertise.slice(0, 1).map((skill, skillIndex) => (
                            <span
                                key={skillIndex}
                                className="px-2 py-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 backdrop-blur-sm"
                            >
                                {skill}
                            </span>
                        ))}
                        {/* Social Links */}
                        <div className="flex items-center gap-1 ml-2">
                            {member.social.github && (
                                <a href={member.social.github} className="w-6 h-6 bg-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300 border border-white/10" title="GitHub">
                                    <Github className="w-3.5 h-3.5 text-slate-300" />
                                </a>
                            )}
                            {member.social.linkedin && (
                                <a href={member.social.linkedin} className="w-6 h-6 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 border border-white/10" title="LinkedIn">
                                    <Linkedin className="w-3.5 h-3.5 text-slate-300" />
                                </a>
                            )}
                            {member.showEmail && member.social.email && (
                                <a href={`mailto:${member.social.email}`} className="w-6 h-6 bg-white/10 rounded-xl flex items-center justify-center hover:bg-purple-500/20 hover:scale-110 transition-all duration-300 border border-white/10" title="Email">
                                    <Mail className="w-3.5 h-3.5 text-slate-300" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                {/* View Profile Button */}
                <button
                    onClick={() => setSelectedMember(member)}
                    className="ml-3 px-2 py-1 bg-cyan-600/80 hover:bg-cyan-500 text-white text-xs rounded-lg font-semibold shadow transition-all duration-200"
                    title="View Full Profile"
                >
                    View Profile
                </button>
            </div>
        </div>
    );

    return (
        <div className="pt-0 mt-0 rounded-2xl bg-slate-900/70 pb-0 min-h-[750px] px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-300 font-medium">Meet Our Expert Team</span>
                    </div>
                    <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                        World-Class
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"> Researchers</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        Driving innovation in data science, AI, and statistical analysis across multiple domains.
                        Join our mission to advance collaborative learning and push the boundaries of what's possible with data.
                    </p>
                </div>

                {/* First Row - Faculty and President (2 members, centered) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {firstRow.map((member, index) => renderMemberCard(member, index))}
                </div>

                {/* Second Row - 3 members */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {secondRow.map((member, index) => renderMemberCard(member, index + 2))}
                </div>

                {/* Third Row - 3 members */}
                <div className="grid md:grid-cols-3 gap-8 mb-0">
                    {thirdRow.map((member, index) => renderMemberCard(member, index + 5))}
                </div>
            </div>

            {/* Member Detail Modal */}
            {selectedMember && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
                    <div className="bg-gradient-to-br from-slate-900/95 to-blue-950/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                        <div className="p-8">
                            {/* Modal Header */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex items-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mr-6 shadow-xl shadow-cyan-500/25">
                                        {selectedMember.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h3>
                                        <p className="text-cyan-400 text-lg font-semibold mb-1">{selectedMember.role}</p>
                                        <p className="text-slate-400">{selectedMember.department}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-red-500/20 transition-all duration-300 text-slate-400 hover:text-white border border-white/10"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Bio */}
                            <div className="mb-8">
                                <h4 className="text-xl font-bold text-white mb-4">About</h4>
                                <p className="text-slate-300 leading-relaxed text-lg">{selectedMember.bio}</p>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-400/20">
                                    <div className="text-3xl font-bold text-cyan-400 mb-2">{selectedMember.stats.projects || 0}</div>
                                    <div className="text-slate-400 font-medium">Active Projects</div>
                                </div>
                                <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-400/20">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">{selectedMember.stats.publications || 0}</div>
                                    <div className="text-slate-400 font-medium">Publications</div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Expertise */}
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                                        <Award className="w-6 h-6 text-cyan-400 mr-2" />
                                        Expertise & Skills
                                    </h4>
                                    <div className="space-y-3">
                                        {selectedMember.expertise.map((skill, index) => (
                                            <div key={index} className="flex items-center bg-white/5 rounded-xl p-3 border border-white/10">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                                <span className="text-slate-300 font-medium">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                                        <TrendingUp className="w-6 h-6 text-blue-400 mr-2" />
                                        Key Achievements
                                    </h4>
                                    <div className="space-y-3">
                                        {selectedMember.achievements.map((achievement, index) => (
                                            <div key={index} className="flex items-center bg-white/5 rounded-xl p-3 border border-white/10">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                                <span className="text-slate-300 font-medium">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <h4 className="text-xl font-bold text-white mb-6">Connect</h4>
                                <div className="flex gap-4">
                                    {selectedMember.social.github && (
                                        <a href={selectedMember.social.github} className="flex-1 bg-white/5 rounded-xl p-4 flex items-center justify-center hover:bg-cyan-500/10 transition-all duration-300 border border-white/10">
                                            <Github className="w-6 h-6 text-slate-300 mr-3" />
                                            <span className="text-slate-300 font-medium">GitHub</span>
                                        </a>
                                    )}
                                    {selectedMember.social.linkedin && (
                                        <a href={selectedMember.social.linkedin} className="flex-1 bg-white/5 rounded-xl p-4 flex items-center justify-center hover:bg-blue-500/10 transition-all duration-300 border border-white/10">
                                            <Linkedin className="w-6 h-6 text-slate-300 mr-3" />
                                            <span className="text-slate-300 font-medium">LinkedIn</span>
                                        </a>
                                    )}
                                    {selectedMember.social.email && (
                                        <a href={`mailto:${selectedMember.social.email}`} className="flex-1 bg-white/5 rounded-xl p-4 flex items-center justify-center hover:bg-purple-500/10 transition-all duration-300 border border-white/10">
                                            <Mail className="w-6 h-6 text-slate-300 mr-3" />
                                            <span className="text-slate-300 font-medium">Email</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamGrid;