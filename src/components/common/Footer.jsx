// import React, { useState, useEffect } from 'react';
// import { Mail, MapPin, ArrowUp, Heart } from 'lucide-react';
// import { SiDiscord, SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';
// import logo from '/DS_CLUB_LOGO.jpeg';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 500);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email) {
//       setSubscribed(true);
//       setTimeout(() => {
//         setSubscribed(false);
//         setEmail('');
//       }, 3000);
//     }
//   };

//   // Footer link data
//   const footerLinks = {
//     quickLinks: [
//       { name: 'About Us', url: '/about' },
//       { name: 'Community', url: '/community' },
//       { name: 'Research', url: '/research' },
//       { name: 'Contact', url: '/contact' },
//       { name: 'FAQ', url: '/faq' }
//     ],
//     resources: [
//       { name: 'Documentation', url: '/docs' },
//       { name: 'Tutorials', url: '/tutorials' },
//       { name: 'Blog', url: '/blog' },
//       { name: 'Case Studies', url: '/cases' }
//     ],
//     policies: [
//       { name: 'Privacy Policy', url: '/privacy' },
//       { name: 'Terms of Service', url: '/terms' },
//       { name: 'Cookie Policy', url: '/cookies' }
//     ]
//   };

//   const socialLinks = [
//     { icon: SiGithub, href: 'https://github.com/CLUSTER-DS-Club/', name: 'GitHub' },
//     { icon: SiLinkedin, href: 'https://linkedin.com/company/cluster-vips', name: 'LinkedIn' },
//     { icon: SiDiscord, href: 'https://discord.gg/6QN83D89vx', name: 'Discord' },
//     { icon: SiGmail, href: 'mailto:dsclub.cluster@vips.edu', name: 'Email' }
//   ];

//   return (
//     <>
//       {/* CTA Section - Clearly Separated */}
//       <section className="bg-slate-800 py-12 px-4 border-t border-b border-slate-700">
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
//           <p className="text-slate-300 mb-6">
//             Stay updated with the latest research and events from CLUSTER
//           </p>
//           <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Your email address"
//               className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 flex-grow max-w-md"
//               required
//             />
//             <button
//               type="submit"
//               disabled={subscribed}
//               className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors disabled:opacity-70"
//             >
//               {subscribed ? 'Subscribed!' : 'Subscribe'}
//             </button>
//           </form>
//           <p className="text-xs text-slate-500 mt-4">We respect your privacy. Unsubscribe anytime.</p>
//         </div>
//       </section>

//       {/* Main Footer Content */}
//       <footer className="bg-slate-900 text-slate-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//             {/* Brand Column */}
//             <div className="lg:col-span-2">
//               <div className="flex items-center mb-6">
//                 <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full p-1 mr-4">
//                   <div className="bg-slate-900 rounded-full p-1">
//                     <img 
//                       src={logo} 
//                       alt="CLUSTER Logo" 
//                       className="w-12 h-12 rounded-full object-cover" 
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-white">CLUSTER</h2>
//                   <p className="text-sm">Data Excellence Platform</p>
//                 </div>
//               </div>
//               <p className="mb-6">
//                 <p className='text-cyan-400'>
//                 Collaborative Learning Using Statistical Trends & Exploratory Research.
//                 </p>
// Empowering the next generation of data scientists and researchers through innovative collaboration.
//               </p>
//               <div className="flex items-start space-x-4">
//                 <MapPin className="flex-shrink-0 mt-1 text-cyan-400" />
//                 <address className="not-italic">
//                   Vivekananda Institute of Professional Studies (VIPS)<br />
//                   AU Block (Outer Ring Road), Pitampura<br />
//                   Delhi - 110034
//                 </address>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-slate-700">Quick Links</h3>
//               <ul className="space-y-3">
//                 {footerLinks.quickLinks.map((link) => (
//                   <li key={link.name}>
//                     <a href={link.url} className="hover:text-cyan-400 transition-colors">
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Resources & Policies */}
//             <div className="grid grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-slate-700">Resources</h3>
//                 <ul className="space-y-3">
//                   {footerLinks.resources.map((link) => (
//                     <li key={link.name}>
//                       <a href={link.url} className="hover:text-cyan-400 transition-colors">
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-slate-700">Policies</h3>
//                 <ul className="space-y-3">
//                   {footerLinks.policies.map((link) => (
//                     <li key={link.name}>
//                       <a href={link.url} className="hover:text-cyan-400 transition-colors">
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Stats and Social */}
//           <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
//                   aria-label={social.name}
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//             <div className="flex flex-wrap justify-center gap-8">
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-cyan-400">100+</p>
//                 <p className="text-sm">Active Members</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-cyan-400">50+</p>
//                 <p className="text-sm">Research Projects</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-cyan-400">20+</p>
//                 <p className="text-sm">Publications</p>
//               </div>
//             </div>

//           </div>

//           {/* Copyright */}
//           <div className="mt-8 pt-6 border-t border-slate-800 text-center text-sm">
//             <p>
//               © {new Date().getFullYear()} CLUSTER Community. Made with{' '}
//               <Heart className="inline w-4 h-4 text-red-500 fill-current" />{' '}
//               for data enthusiasts worldwide.
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* Scroll to Top Button */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 p-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 transition-colors"
//           aria-label="Scroll to top"
//         >
//           <ArrowUp className="w-5 h-5" />
//         </button>
//       )}
//     </>
//   );
// };

// export default Footer;

//=-----------------------------------------------------------------










// import React, { useState, useEffect } from 'react';
// import { Mail, MapPin, ArrowUp, Heart } from 'lucide-react';
// import { SiDiscord, SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';
// import logo from '/DS_CLUB_LOGO.jpeg';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 500);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (email) {
//       setSubscribed(true);
//       setTimeout(() => {
//         setSubscribed(false);
//         setEmail('');
//       }, 3000);
//     }
//   };

//   // Footer link data
//   const footerLinks = {
//     quickLinks: [
//       { name: 'About Us', url: '/about' },
//       { name: 'Community', url: '/community' },
//       { name: 'Research', url: '/research' },
//       { name: 'Contact', url: '/contact' },
//       { name: 'FAQ', url: '/faq' }
//     ],
//     resources: [
//       { name: 'Documentation', url: '/docs' },
//       { name: 'Tutorials', url: '/tutorials' },
//       { name: 'Blog', url: '/blog' },
//       { name: 'Case Studies', url: '/cases' }
//     ],
//     policies: [
//       { name: 'Privacy Policy', url: '/privacy' },
//       { name: 'Terms of Service', url: '/terms' },
//       { name: 'Cookie Policy', url: '/cookies' }
//     ]
//   };

//   const socialLinks = [
//     { icon: SiGithub, href: 'https://github.com/CLUSTER-DS-Club/', name: 'GitHub' },
//     { icon: SiLinkedin, href: 'https://linkedin.com/company/cluster-vips', name: 'LinkedIn' },
//     { icon: SiDiscord, href: 'https://discord.gg/6QN83D89vx', name: 'Discord' },
//     { icon: SiGmail, href: 'mailto:dsclub.cluster@vips.edu', name: 'Email' }
//   ];

//   return (
//     <>
//       {/* CTA Section - Clearly Separated */}
//       <section className="bg-slate-800 py-12 px-4 border-t border-b border-slate-700">
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
//           <p className="text-slate-300 mb-6">
//             Stay updated with the latest research and events from CLUSTER
//           </p>
//           <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Your email address"
//               className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 flex-grow max-w-md"
//               required
//             />
//             <button
//               type="submit"
//               disabled={subscribed}
//               className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors disabled:opacity-70"
//             >
//               {subscribed ? 'Subscribed!' : 'Subscribe'}
//             </button>
//           </form>
//           <p className="text-xs text-slate-500 mt-4">We respect your privacy. Unsubscribe anytime.</p>
//         </div>
//       </section>

//       {/* Main Footer Content */}
//       <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
//         {/* Background Effects */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>
//           <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//             {/* Brand Column with 3D Logo */}
//             <div className="lg:col-span-2">
//               <div className="flex items-center mb-6">
//                 <div className="relative mr-4">
//                   <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
//                     <img
//                       src={logo}
//                       alt="CLUSTER Logo"
//                       className="w-full h-full object-cover rounded-full"
//                     />
//                   </div>
//                   <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce delay-1000 shadow-md shadow-yellow-400/30"></div>
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-white">CLUSTER</h2>
//                   <p className="text-sm">Data Excellence Platform</p>
//                 </div>
//               </div>
//               <p className="mb-6">
//                 <span className="text-cyan-400 font-semibold">Collaborative Learning Using Statistical Trends & Exploratory Research.</span><br />
//                 Empowering the next generation of data scientists and researchers through innovative collaboration.
//               </p>
//               <div className="flex items-start space-x-4">
//                 <MapPin className="flex-shrink-0 mt-1 text-cyan-400" />
//                 <address className="not-italic">
//                   Vivekananda Institute of Professional Studies (VIPS)<br />
//                   AU Block (Outer Ring Road), Pitampura<br />
//                   Delhi - 110034
//                 </address>
//               </div>
//             </div>

//             {/* Links Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-8">
//               {/* Quick Links */}
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//                 <ul className="space-y-3">
//                   {footerLinks.quickLinks.map((link) => (
//                     <li key={link.name}>
//                       <a 
//                         href={link.url} 
//                         className="hover:text-cyan-400 transition-colors block py-1"
//                       >
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Resources and Policies */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
//                   <ul className="space-y-3">
//                     {footerLinks.resources.map((link) => (
//                       <li key={link.name}>
//                         <a 
//                           href={link.url} 
//                           className="hover:text-cyan-400 transition-colors block py-1"
//                         >
//                           {link.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-4">Policies</h3>
//                   <ul className="space-y-3">
//                     {footerLinks.policies.map((link) => (
//                       <li key={link.name}>
//                         <a 
//                           href={link.url} 
//                           className="hover:text-cyan-400 transition-colors block py-1"
//                         >
//                           {link.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Stats and Social */}
//           <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
//                   aria-label={social.name}
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>

//             <div className="flex flex-wrap justify-center gap-8">
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-cyan-400">100+</p>
//                 <p className="text-sm">Active Members</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-cyan-400">50+</p>
//                 <p className="text-sm">Research Projects</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-cyan-400">20+</p>
//                 <p className="text-sm">Publications</p>
//               </div>
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="mt-8 pt-6 border-t border-slate-800 text-center text-sm">
//             <p>
//               © {new Date().getFullYear()} CLUSTER Community. Made with{' '}
//               <Heart className="inline w-4 h-4 text-red-500 fill-current" />{' '}
//               for data enthusiasts worldwide.
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* Scroll to Top Button */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 z-50 group"
//           aria-label="Scroll to top"
//         >
//           <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
//         </button>
//       )}
//     </>
//   );
// };

// export default Footer;



// //-----------------------------------------------
















import React, { useState, useEffect } from 'react';
import { Mail, MapPin, ArrowUp, Heart } from 'lucide-react';
import { SiDiscord, SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';
import logo from '/DS_CLUB_LOGO.jpeg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  // Properly categorized footer links
  const footerLinks = {
    company: [
      { name: 'About Us', url: '/about' },
      { name: 'Our Team', url: '/team' },
      { name: 'Research', url: '/research' },
      { name: 'Events', url: '/events' }
    ],
    resources: [
      { name: 'Documentation', url: '/docs' },
      { name: 'Tutorials', url: '/tutorials' },
      { name: 'Blog', url: '/blog' },
      { name: 'Case Studies', url: '/cases' },
      { name: 'Whitepapers', url: '/whitepapers' }
    ],
    support: [
      { name: 'Contact Us', url: '/contact' },
      { name: 'FAQ', url: '/faq' },
      { name: 'Community', url: '/community' },
      { name: 'Help Center', url: '/help' }
    ],
    legal: [
      { name: 'Privacy Policy', url: '/privacy' },
      { name: 'Terms of Service', url: '/terms' },
      { name: 'Cookie Policy', url: '/cookies' },
      { name: 'Disclaimer', url: '/disclaimer' }
    ]
  };

  const socialLinks = [
    { icon: SiGithub, href: 'https://github.com/CLUSTER-DS-Club/', name: 'GitHub' },
    { icon: SiLinkedin, href: 'https://linkedin.com/company/cluster-vips', name: 'LinkedIn' },
    { icon: SiDiscord, href: 'https://discord.gg/6QN83D89vx', name: 'Discord' },
    { icon: SiGmail, href: 'mailto:dsclub.cluster@vips.edu', name: 'Email' }
  ];

  return (
    <>
      {/* CTA Section */}
     <section className="bg-slate-800 py-12 px-4 border-t border-b border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
           <h3 className="text-2xl font-bold text-white mb-4">Stay In Loop</h3>
           <p className="text-slate-300 mb-6">
             Stay updated with the latest research and events from CLUSTER
           </p>
           <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
             <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 flex-grow max-w-md"
              required
            />
            <button
              type="submit"
              disabled={subscribed}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors disabled:opacity-70"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-4">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>
{/* Main Footer */}
<footer className="bg-[#0e1a2b] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
      
      {/* Brand Column */}
    
<div className="md:col-span-4 lg:col-span-3">
  {/* Logo positioned above text */}
   {/* Brand Section - Takes more space */}
                        <div className="lg:col-span-5">
                            {/* Logo and Brand */}
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="relative">
                                    {/* Circular background container for the logo */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                                        <img
                                            src={logo}
                                            alt="Logo"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>

                                    {/* Animated badge or notification dot */}
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce delay-1000 shadow-md shadow-yellow-400/30"></div>
                                </div>

                                {/* Text content */}
                                <div>
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                                        CLUSTER
                                    </h3>
                                    <p className="text-slate-400 font-medium tracking-wide">Data Excellence Platform</p>
                                </div>
                            </div>
  
</div>
 
  {/* Description */}
                            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                                <span className="font-semibold text-cyan-400">Collaborative Learning Using Statistical Trends & Exploratory Research.</span>
                                
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4">
                               
                                <div className="flex items-center space-x-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300 group cursor-pointer">
                                    <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors duration-300">
                                        <MapPin className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <span className="font-medium">Vivekananda Institute of Professional Studies (VIPS), AU Block (Outer Ring Road), Pitampura, Delhi - 110034</span>
                                </div>
                            </div>
  
  {/* Social Links - Mobile */}
  <div className="flex space-x-4 md:hidden mt-6 justify-center md:justify-start">
    {socialLinks.map((social) => (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
        aria-label={social.name}
      >
        <social.icon className="w-5 h-5" />
      </a>
    ))}
  </div>
</div>
      
   {/* Links Grid */}
<div className="md:col-span-8 lg:col-span-9">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
    
    {/* Company */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Company</h3>
      <ul className="space-y-3">
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            About Us
          </a>
        </li>
        <li className="ml-4">
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Our Team
          </a>
        </li>
        <li className="ml-4">
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Research
          </a>
        </li>
        <li className="ml-4">
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Events
          </a>
        </li>
      </ul>
    </div>
    
    {/* Support */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Support</h3>
      <ul className="space-y-3">
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            FAQ
          </a>
        </li>
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Community
          </a>
        </li>
      </ul>
    </div>
    
    {/* Resources */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Resources</h3>
      <ul className="space-y-3">
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Documentation
          </a>
        </li>
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Tutorials
          </a>
        </li>
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Case Studies
          </a>
        </li>
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Whitepapers
          </a>
        </li>
      </ul>
    </div>
    
    {/* Legal */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Legal</h3>
      <ul className="space-y-3">
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="#" className="inline-block text-slate-300 hover:text-cyan-400 transition-colors duration-200">
            Cookie Policy
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Social Links & Stats */}
  <div className="py-8 border-t border-slate-800/50 mt-8">
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
      {/* Social Links */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
        <span className="text-slate-400 font-medium">Connect with us:</span>
        <div className="flex items-center space-x-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`p-3 text-slate-400 ${social.color} bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all duration-300 group hover:scale-110 hover:shadow-lg`}
              title={social.name}
            >
              <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>
      </div>

      {/* Community Stats */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <div className="text-center group cursor-pointer">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
            100+
          </div>
          <div className="text-slate-400 text-sm font-medium">Active Members</div>
        </div>
        <div className="text-center group cursor-pointer">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
            50+
          </div>
          <div className="text-slate-400 text-sm font-medium">Research Projects</div>
        </div>
        <div className="text-center group cursor-pointer">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
            20+
          </div>
          <div className="text-slate-400 text-sm font-medium">Publications</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    
    {/* Copyright */}
    <div className="mt-8 pt-6 border-t border-slate-800 text-center text-sm text-slate-400">
      <p>
        © {new Date().getFullYear()} CLUSTER Community. Made with{' '}
        <Heart className="inline w-4 h-4 text-red-500 fill-current" />{' '}
        for data enthusiasts worldwide.
      </p>
    </div>
  </div>

</footer>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}
    </>
  );
};

export default Footer;