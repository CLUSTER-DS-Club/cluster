import React, { useState } from 'react';
import { useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Star, Filter } from 'lucide-react';

function Events() {
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const events = [
    {
      id: 1,
      title: "AI & Machine Learning Bootcamp",
      date: "2025-07-15",
      time: "09:00 AM",
      location: "Tech Institute Auditorium",
      category: "AI & ML",
      attendees: 120,
      price: "$199",
      image: "https://images.unsplash.com/photo-1581093588401-9ff7c8f8a4d2?w=400&h=250&fit=crop",
      featured: true,
      description: "An intensive hands-on bootcamp on AI and Machine Learning techniques."
    },
    {
      id: 2,
      title: "Web Development Workshop",
      date: "2025-07-22",
      time: "10:00 AM",
      location: "Innovation Lab",
      category: "Web Development",
      attendees: 90,
      price: "$99",
      image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=400&h=250&fit=crop",
      featured: false,
      description: "Learn modern web development with HTML, CSS, JavaScript, and React."
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      date: "2025-07-08",
      time: "11:00 AM",
      location: "Online",
      category: "Marketing",
      attendees: 200,
      price: "$49",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      featured: true,
      description: "Master the skills to boost your business using digital marketing tools."
    },
    {
      id: 4,
      title: "Data Analysis with Python",
      date: "2025-07-12",
      time: "01:00 PM",
      location: "Data Science Center",
      category: "Python",
      attendees: 75,
      price: "$89",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=400&h=250&fit=crop",
      featured: false,
      description: "Explore data analysis techniques using Python libraries like Pandas and Matplotlib."
    },
    {
      id: 5,
      title: "Cybersecurity Essentials",
      date: "2025-07-18",
      time: "03:00 PM",
      location: "Tech Park",
      category: "Cybersecurity",
      attendees: 60,
      price: "$59",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=250&fit=crop",
      featured: false,
      description: "Understand cybersecurity basics and how to protect systems from attacks."
    },
    {
      id: 6,
      title: "UI/UX Design Thinking",
      date: "2025-07-25",
      time: "05:30 PM",
      location: "Design Studio",
      category: "Designing",
      attendees: 85,
      price: "$79",
      image: "https://images.unsplash.com/photo-1587614382346-4ec2f4c25a52?w=400&h=250&fit=crop",
      featured: true,
      description: "Hands-on workshop on user experience design and interface prototyping."
    }
  ];

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.category === filter
  );

  const categories = [
    { value: 'all', label: 'All Workshops' },
    { value: 'AI & ML', label: 'AI & ML' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Pyhton', label: 'Pyhton' },
    { value: 'Cybersecurity', label: 'Cybersecurity' },
    { value: 'Designing', label: 'Designing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <div className="mt-30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Upcoming Events
          </h1>
          <p className="text-blue-200 text-lg">
            Discover amazing events happening in your area
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-blue-200">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category.value
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-700/50 text-blue-200 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="bg-slate-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-800/20 hover:border-blue-600/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 group"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {event.featured && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.price}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {event.title}
                </h3>
                <p className="text-blue-200 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-blue-300 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2 text-blue-300 text-sm">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-blue-300 text-sm">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-blue-300 text-sm">
                    <Users className="w-4 h-4" />
                    {event.attendees} attendees
                  </div>
                </div>

                {/* Category Tag */}
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {event.category}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:shadow-lg hover:shadow-blue-600/30">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-blue-300 text-6xl mb-4">🎭</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No events found
            </h3>
            <p className="text-blue-200">
              Try adjusting your filter to see more events.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;