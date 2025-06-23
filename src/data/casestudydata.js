const caseStudies = [
  {
    title: 'Smart Waste Segregator',
    summary: 'Problem: Manual waste sorting is inefficient and hazardous.\nSolution: AI-powered smart bin classifies waste automatically.\nImpact: Reduced landfill input and improved recycling efficiency.',
    fullDetails: 'This project was developed over 6 months with a team of 3 engineers. The system uses computer vision to classify waste into 5 categories with 92% accuracy. We deployed 15 units across campus, resulting in a 40% reduction in landfill waste. The technology stack includes Python, TensorFlow, Raspberry Pi, and custom mechanical components.',
    image: '/images/waste-project.jpg',
    tags: ['AI', 'Computer Vision', 'IoT', 'Sustainability'],
    developers: [
      { name: 'Alex Chen', role: 'AI Engineer', github: '#', linkedin: '#' }
    ],
    links: { github: '#'}
  },
  {
    title: 'Urban Traffic Optimization',
    summary: 'Problem: City traffic congestion wastes time and fuel.\nSolution: ML algorithm that optimizes traffic light timing.\nImpact: Reduced average commute time by 22%.',
    fullDetails: 'Developed in collaboration with the city transportation department, this system uses real-time traffic data and machine learning to dynamically adjust traffic light patterns. The system reduced peak hour congestion by 22% and decreased emissions in the pilot area by 15%. Built with Python, TensorFlow, and integrated with existing city infrastructure.',
    image: '/images/traffic-project.jpg',
    tags: ['Machine Learning', 'Smart Cities', 'Data Science'],
    developers: [
      { name: 'Maria Rodriguez', role: 'Data Scientist', github: '#', linkedin: '#' }
    ],
    links: { github: '#' }
  },
  {
    title: 'Precision Agriculture Drone',
    summary: 'Problem: Inefficient crop monitoring leads to wasted resources.\nSolution: Autonomous drones with multispectral imaging.\nImpact: Increased crop yield by 18% while reducing water usage.',
    fullDetails: 'Our precision agriculture solution uses autonomous drones equipped with multispectral cameras to monitor crop health. The system provides farmers with actionable insights, helping them optimize irrigation and fertilizer use. The technology stack includes computer vision, drone control systems, and a farmer-friendly dashboard. Field tests showed an 18% increase in yield while reducing water consumption by 30%.',
    image: '/images/agriculture-project.jpg',
    tags: ['Drones', 'Computer Vision', 'Agriculture Tech'],
    developers: [
      { name: 'Sarah Johnson', role: 'Computer Vision Engineer', github: '#', linkedin: '#' },
    ],
    links: { github: '#'}
  },
  {
    title: 'AI-Powered Medical Diagnosis',
    summary: 'Problem: Early disease detection is challenging in rural areas.\nSolution: Portable device with AI diagnostic capabilities.\nImpact: Detected early-stage conditions with 89% accuracy.',
    fullDetails: 'This portable diagnostic device uses machine learning to analyze medical images and patient data for early detection of diseases. Designed for use in rural clinics with limited resources, the system achieved 89% accuracy in clinical trials for detecting early-stage conditions. The project involved developing both the hardware device and the AI models, with a focus on creating an intuitive interface for healthcare workers.',
    image: '/images/medical-project.jpg',
    tags: ['Healthcare', 'Machine Learning', 'Edge Computing'],
    developers: [
      { name: 'Raj Patel', role: 'Embedded Systems', github: '#', linkedin: '#' }
    ],
    links: { github: '#' }
  },
  {
    title: 'Renewable Energy Forecasting',
    summary: 'Problem: Unpredictable renewable energy generation.\nSolution: Deep learning models for accurate energy forecasting.\nImpact: Improved grid stability and reduced energy waste.',
    fullDetails: 'Our deep learning models predict renewable energy generation from solar and wind sources with 94% accuracy, helping grid operators better manage energy distribution. The system integrates weather data, historical generation patterns, and real-time sensor inputs. Implemented for a regional utility company, the solution reduced energy waste by 25% and improved grid stability during peak demand periods.',
    image: '/images/energy-project.jpg',
    tags: ['Deep Learning', 'Energy', 'Time Series Forecasting'],
    developers: [
      { name: 'Thomas Lee', role: 'ML Engineer', github: '#', linkedin: '#' },
    ],
    links: { github: '#' }
  },
];

export default caseStudies;