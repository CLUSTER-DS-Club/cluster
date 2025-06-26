import React from 'react';
import { Calendar, User, Download, ExternalLink, Tag } from 'lucide-react';

const WhitepaperCard = ({ title, abstract, author, date, tags, url }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const generateSampleContent = () => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title} - CLUSTER Whitepaper</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            max-width: 900px; 
            margin: 0 auto; 
            padding: 40px 20px;
            color: #333;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
        }
        .container {
            background: white;
            padding: 50px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin-bottom: 40px;
        }
        .header { 
            text-align: center; 
            border-bottom: 3px solid #0ea5e9; 
            padding-bottom: 30px; 
            margin-bottom: 40px;
        }
        .title { 
            font-size: 32px; 
            font-weight: bold; 
            color: #0ea5e9; 
            margin-bottom: 15px;
            line-height: 1.2;
        }
        .meta { 
            color: #666; 
            margin-bottom: 25px;
            font-size: 16px;
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #0ea5e9;
        }
        .tags { 
            margin: 25px 0;
            text-align: center;
        }
        .tag { 
            background: linear-gradient(135deg, #0ea5e9, #3b82f6); 
            color: white; 
            padding: 8px 16px; 
            border-radius: 20px; 
            font-size: 13px; 
            margin: 0 6px 8px 0;
            display: inline-block;
            font-weight: 500;
            box-shadow: 0 2px 4px rgba(14, 165, 233, 0.3);
        }
        .content { 
            margin-top: 40px;
        }
        .section { 
            margin-bottom: 35px;
        }
        .section-title { 
            font-size: 22px; 
            font-weight: bold; 
            color: #0ea5e9; 
            margin-bottom: 18px;
            border-left: 5px solid #0ea5e9;
            padding-left: 20px;
            background: linear-gradient(90deg, #f0f9ff, transparent);
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .abstract-section {
            background: #f8fafc;
            padding: 25px;
            border-radius: 8px;
            border-left: 4px solid #0ea5e9;
            margin-bottom: 30px;
        }
        .footer {
            margin-top: 60px;
            padding-top: 30px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #666;
            font-size: 14px;
            background: #f8fafc;
            padding: 30px;
            border-radius: 8px;
        }
        ul {
            padding-left: 25px;
        }
        li {
            margin-bottom: 10px;
            color: #555;
        }
        p {
            margin-bottom: 15px;
            color: #444;
            text-align: justify;
        }
        .download-btn {
            background: linear-gradient(135deg, #0ea5e9, #3b82f6);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            margin: 20px 10px;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
            transition: all 0.3s ease;
        }
        .download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4);
        }
        .highlight {
            background: linear-gradient(120deg, #fef3c7, #fbbf24);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 500;
        }
        .code-block {
            background: #1e293b;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            margin: 15px 0;
            overflow-x: auto;
        }
        @media print {
            body { background: white; }
            .container { box-shadow: none; }
            .download-btn { display: none; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="title">${title}</div>
            <div class="meta">
                <strong>Author:</strong> ${author}<br>
                <strong>Published:</strong> ${formatDate(date)}<br>
                <strong>Source:</strong> CLUSTER Community Portal<br>
                <strong>Document Type:</strong> Technical Whitepaper
            </div>
            <div class="tags">
                ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <button class="download-btn" onclick="window.print()">📄 Print / Save as PDF</button>
            <button class="download-btn" onclick="window.close()">✖️ Close Window</button>
        </div>

        <div class="content">
            <div class="abstract-section">
                <div class="section-title">📋 Abstract</div>
                <p><strong>${abstract}</strong></p>
                <p>This comprehensive whitepaper provides detailed insights into the methodologies, implementations, and results of our research. The document serves as a complete guide for practitioners and researchers interested in applying these concepts in real-world scenarios.</p>
            </div>

            <div class="section">
                <div class="section-title">🚀 1. Introduction</div>
                <p>In today's rapidly evolving technological landscape, the need for <span class="highlight">innovative solutions</span> has never been more critical. This whitepaper explores the fundamental concepts and practical applications outlined in our research title.</p>
                <p>Our methodology demonstrates cutting-edge approaches to solving complex technical challenges, with a focus on scalability, performance, and maintainability. The research presented here has been validated through extensive testing and real-world implementations.</p>
                <p>Key objectives of this research include:</p>
                <ul>
                    <li>Establishing best practices for modern development workflows</li>
                    <li>Demonstrating measurable performance improvements</li>
                    <li>Providing actionable insights for implementation teams</li>
                    <li>Contributing to the broader community knowledge base</li>
                </ul>
            </div>

            <div class="section">
                <div class="section-title">🔧 2. Technical Overview</div>
                <p>The core implementation leverages state-of-the-art technologies and industry best practices. Our approach focuses on creating robust, scalable solutions that can adapt to changing requirements.</p>
                
                <p><strong>Architecture Components:</strong></p>
                <ul>
                    <li><strong>Advanced Algorithmic Approaches:</strong> Optimized algorithms for enhanced performance</li>
                    <li><strong>Scalable Architecture Patterns:</strong> Microservices and distributed system design</li>
                    <li><strong>Performance Monitoring:</strong> Real-time analytics and monitoring solutions</li>
                    <li><strong>Security Framework:</strong> Comprehensive security implementations and best practices</li>
                </ul>

                <div class="code-block">
// Example implementation snippet
function optimizedAlgorithm(data) {
    return data
        .filter(item => item.isValid)
        .map(item => processItem(item))
        .reduce((acc, curr) => acc + curr.value, 0);
}
                </div>
            </div>

            <div class="section">
                <div class="section-title">⚙️ 3. Implementation Strategy</div>
                <p>Our implementation follows a <span class="highlight">multi-phase approach</span> designed to minimize disruption while maximizing benefits. The strategy encompasses comprehensive planning, testing, and deployment phases.</p>
                
                <p><strong>Phase 1: Planning & Analysis</strong></p>
                <ul>
                    <li>Requirements gathering and stakeholder alignment</li>
                    <li>Technical feasibility assessment</li>
                    <li>Risk analysis and mitigation strategies</li>
                </ul>

                <p><strong>Phase 2: Development & Testing</strong></p>
                <ul>
                    <li>Iterative development with continuous integration</li>
                    <li>Comprehensive unit and integration testing</li>
                    <li>Performance benchmarking and optimization</li>
                </ul>

                <p><strong>Phase 3: Deployment & Monitoring</strong></p>
                <ul>
                    <li>Gradual rollout with feature flags</li>
                    <li>Real-time monitoring and alerting</li>
                    <li>Continuous improvement based on feedback</li>
                </ul>
            </div>

            <div class="section">
                <div class="section-title">📊 4. Results and Analysis</div>
                <p>Extensive testing and real-world deployment have validated our approach across multiple environments and use cases. The results demonstrate significant improvements in key performance indicators.</p>
                
                <p><strong>Performance Metrics:</strong></p>
                <ul>
                    <li><strong>Response Time:</strong> 40% improvement in average response times</li>
                    <li><strong>Throughput:</strong> 60% increase in request handling capacity</li>
                    <li><strong>Resource Utilization:</strong> 25% reduction in computational overhead</li>
                    <li><strong>Error Rate:</strong> 80% decrease in system errors and failures</li>
                </ul>

                <p><strong>Business Impact:</strong></p>
                <ul>
                    <li>Enhanced user experience and satisfaction</li>
                    <li>Reduced operational costs and maintenance overhead</li>
                    <li>Improved developer productivity and workflow efficiency</li>
                    <li>Increased system reliability and fault tolerance</li>
                </ul>
            </div>

            <div class="section">
                <div class="section-title">🎯 5. Best Practices & Recommendations</div>
                <p>Based on our research and implementation experience, we recommend the following best practices for organizations looking to adopt similar approaches:</p>
                
                <ul>
                    <li><strong>Start Small:</strong> Begin with pilot projects to validate the approach</li>
                    <li><strong>Invest in Training:</strong> Ensure team members are properly trained on new methodologies</li>
                    <li><strong>Monitor Continuously:</strong> Implement comprehensive monitoring from day one</li>
                    <li><strong>Document Everything:</strong> Maintain detailed documentation for future reference</li>
                    <li><strong>Iterate Frequently:</strong> Use feedback loops to continuously improve the implementation</li>
                </ul>
            </div>

            <div class="section">
                <div class="section-title">🔮 6. Future Work & Conclusion</div>
                <p>This research demonstrates the <span class="highlight">viability and significant benefits</span> of our proposed approach. The methodology has proven effective across diverse scenarios and environments.</p>
                
                <p><strong>Future Research Directions:</strong></p>
                <ul>
                    <li>Expansion to additional use cases and domains</li>
                    <li>Integration with emerging technologies and platforms</li>
                    <li>Development of automated optimization tools</li>
                    <li>Community-driven enhancements and contributions</li>
                </ul>

                <p>We encourage the broader community to adopt these practices and contribute to the ongoing development and refinement of these techniques. The open-source nature of our approach ensures that improvements benefit everyone.</p>
            </div>

            <div class="section">
                <div class="section-title">📚 7. References & Further Reading</div>
                <p><strong>Primary Sources:</strong></p>
                <p>[1] Smith, J. et al. "Advanced Patterns in Modern Development" (2024)<br>
                [2] Johnson, A. "Performance Optimization Techniques for Scalable Systems" (2024)<br>
                [3] Chen, L. "Security Best Practices in Distributed Architectures" (2023)<br>
                [4] Rodriguez, M. "Monitoring and Observability in Production Systems" (2024)</p>

                <p><strong>Additional Resources:</strong></p>
                <p>[5] CLUSTER Community Portal - Technical Documentation<br>
                [6] Industry Standards and Guidelines (ISO/IEC 27001:2022)<br>
                [7] Open Source Tools and Frameworks Documentation<br>
                [8] Performance Benchmarking Methodologies (IEEE Standards)</p>
            </div>
        </div>

        <div class="footer">
            <p><strong>© 2025 CLUSTER Community Portal</strong></p>
            <p>This is a comprehensive sample document demonstrating the structure and content of a technical whitepaper.</p>
            <p>For more information about our research and community, visit our portal or contact the author directly.</p>
            <p><em>Document generated on ${new Date().toLocaleDateString()} for demonstration purposes.</em></p>
        </div>
    </div>
</body>
</html>`;
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const content = generateSampleContent();
    const blob = new Blob([content], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_whitepaper.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleViewOnline = (e) => {
    e.preventDefault();
    const content = generateSampleContent();
    const newWindow = window.open('', '_blank', 'width=1000,height=800,scrollbars=yes,resizable=yes');
    newWindow.document.write(content);
    newWindow.document.close();
  };

  return (
    <div className="group bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden h-full flex flex-col">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {abstract}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 backdrop-blur-sm"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Author and Date */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 text-sm text-slate-400">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="font-medium text-slate-300">{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
            <span>{formatDate(date)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl text-cyan-300 text-sm font-semibold hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 group/btn"
          >
            <Download className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
            Download PDF
          </button>
          <button
            onClick={handleViewOnline}
            className="flex items-center justify-center px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-slate-300 text-sm font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-105 group/btn"
          >
            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
            View Online
          </button>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-6 right-6 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

export default WhitepaperCard;