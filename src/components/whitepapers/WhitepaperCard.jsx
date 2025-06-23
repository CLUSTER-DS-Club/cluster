import React from 'react';
import { Calendar, User, Download, ExternalLink, Tag } from 'lucide-react';

const WhitepaperCard = ({ title, abstract, author, date, tags, url }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const generateSamplePDF = () => {
    // Create a simple PDF-like content using HTML and convert to blob
    const pdfContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 40px 20px;
            color: #333;
        }
        .header { 
            text-align: center; 
            border-bottom: 2px solid #0ea5e9; 
            padding-bottom: 20px; 
            margin-bottom: 30px;
        }
        .title { 
            font-size: 24px; 
            font-weight: bold; 
            color: #0ea5e9; 
            margin-bottom: 10px;
        }
        .meta { 
            color: #666; 
            margin-bottom: 20px;
        }
        .tags { 
            margin: 20px 0;
        }
        .tag { 
            background: #e0f2fe; 
            color: #0369a1; 
            padding: 4px 8px; 
            border-radius: 4px; 
            font-size: 12px; 
            margin-right: 8px;
        }
        .content { 
            margin-top: 30px;
        }
        .section { 
            margin-bottom: 25px;
        }
        .section-title { 
            font-size: 18px; 
            font-weight: bold; 
            color: #0ea5e9; 
            margin-bottom: 10px;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            text-align: center;
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="title">${title}</div>
        <div class="meta">
            <strong>Author:</strong> ${author}<br>
            <strong>Published:</strong> ${formatDate(date)}<br>
            <strong>Source:</strong> CLUSTER Community Portal
        </div>
        <div class="tags">
            ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    </div>

    <div class="content">
        <div class="section">
            <div class="section-title">Abstract</div>
            <p>${abstract}</p>
        </div>

        <div class="section">
            <div class="section-title">1. Introduction</div>
            <p>This whitepaper explores the fundamental concepts and practical applications outlined in the title. Our research demonstrates innovative approaches to solving complex technical challenges in the modern development landscape.</p>
            <p>The methodology presented here has been tested across multiple environments and has shown significant improvements in performance, scalability, and maintainability.</p>
        </div>

        <div class="section">
            <div class="section-title">2. Technical Overview</div>
            <p>The core implementation focuses on leveraging cutting-edge technologies and best practices. Key components include:</p>
            <ul>
                <li>Advanced algorithmic approaches for optimization</li>
                <li>Scalable architecture patterns</li>
                <li>Performance monitoring and analytics</li>
                <li>Security considerations and implementations</li>
            </ul>
        </div>

        <div class="section">
            <div class="section-title">3. Implementation Details</div>
            <p>Our implementation strategy involves a multi-phase approach that ensures minimal disruption while maximizing benefits. The process includes comprehensive testing, gradual rollout, and continuous monitoring.</p>
            <p>Performance benchmarks show improvements of up to 40% in key metrics, with enhanced user experience and reduced operational overhead.</p>
        </div>

        <div class="section">
            <div class="section-title">4. Results and Analysis</div>
            <p>Extensive testing and real-world deployment have validated our approach. Key findings include:</p>
            <ul>
                <li>Significant performance improvements across all tested scenarios</li>
                <li>Enhanced reliability and fault tolerance</li>
                <li>Improved developer experience and productivity</li>
                <li>Reduced maintenance overhead and operational costs</li>
            </ul>
        </div>

        <div class="section">
            <div class="section-title">5. Conclusion</div>
            <p>This research demonstrates the viability and benefits of the proposed approach. Future work will focus on expanding the methodology to additional use cases and further optimization opportunities.</p>
            <p>We encourage the community to adopt these practices and contribute to ongoing development and refinement of these techniques.</p>
        </div>

        <div class="section">
            <div class="section-title">6. References</div>
            <p>[1] Industry Best Practices in Modern Development (2024)<br>
            [2] Performance Optimization Techniques (2024)<br>
            [3] Scalable Architecture Patterns (2023)<br>
            [4] Security in Modern Applications (2024)</p>
        </div>
    </div>

    <div class="footer">
        <p>© 2025 CLUSTER Community Portal. This is a sample document for demonstration purposes.</p>
        <p>For more information, visit our community portal or contact the author.</p>
    </div>
</body>
</html>`;

    // Create blob and download
    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_whitepaper.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleDownload = (e) => {
    e.preventDefault();
    generateSamplePDF();
  };

  const handleViewOnline = (e) => {
    e.preventDefault();
    // Open the same content in a new window for online viewing
    const viewContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title} - CLUSTER Whitepaper</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 40px 20px;
            color: #333;
            background: #f8fafc;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .header { 
            text-align: center; 
            border-bottom: 2px solid #0ea5e9; 
            padding-bottom: 20px; 
            margin-bottom: 30px;
        }
        .title { 
            font-size: 28px; 
            font-weight: bold; 
            color: #0ea5e9; 
            margin-bottom: 10px;
        }
        .meta { 
            color: #666; 
            margin-bottom: 20px;
            font-size: 14px;
        }
        .tags { 
            margin: 20px 0;
        }
        .tag { 
            background: #e0f2fe; 
            color: #0369a1; 
            padding: 6px 12px; 
            border-radius: 6px; 
            font-size: 12px; 
            margin-right: 8px;
            display: inline-block;
            margin-bottom: 4px;
        }
        .content { 
            margin-top: 30px;
        }
        .section { 
            margin-bottom: 30px;
        }
        .section-title { 
            font-size: 20px; 
            font-weight: bold; 
            color: #0ea5e9; 
            margin-bottom: 15px;
            border-left: 4px solid #0ea5e9;
            padding-left: 15px;
        }
        .footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            text-align: center;
            color: #666;
            font-size: 12px;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        .download-btn {
            background: #0ea5e9;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            margin-top: 20px;
        }
        .download-btn:hover {
            background: #0284c7;
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
                <strong>Source:</strong> CLUSTER Community Portal
            </div>
            <div class="tags">
                ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <button class="download-btn" onclick="window.print()">Print / Save as PDF</button>
        </div>

        <div class="content">
            <div class="section">
                <div class="section-title">Abstract</div>
                <p>${abstract}</p>
            </div>

            <div class="section">
                <div class="section-title">1. Introduction</div>
                <p>This whitepaper explores the fundamental concepts and practical applications outlined in the title. Our research demonstrates innovative approaches to solving complex technical challenges in the modern development landscape.</p>
                <p>The methodology presented here has been tested across multiple environments and has shown significant improvements in performance, scalability, and maintainability.</p>
            </div>

            <div class="section">
                <div class="section-title">2. Technical Overview</div>
                <p>The core implementation focuses on leveraging cutting-edge technologies and best practices. Key components include:</p>
                <ul>
                    <li>Advanced algorithmic approaches for optimization</li>
                    <li>Scalable architecture patterns</li>
                    <li>Performance monitoring and analytics</li>
                    <li>Security considerations and implementations</li>
                </ul>
            </div>

            <div class="section">
                <div class="section-title">3. Implementation Details</div>
                <p>Our implementation strategy involves a multi-phase approach that ensures minimal disruption while maximizing benefits. The process includes comprehensive testing, gradual rollout, and continuous monitoring.</p>
                <p>Performance benchmarks show improvements of up to 40% in key metrics, with enhanced user experience and reduced operational overhead.</p>
            </div>

            <div class="section">
                <div class="section-title">4. Results and Analysis</div>
                <p>Extensive testing and real-world deployment have validated our approach. Key findings include:</p>
                <ul>
                    <li>Significant performance improvements across all tested scenarios</li>
                    <li>Enhanced reliability and fault tolerance</li>
                    <li>Improved developer experience and productivity</li>
                    <li>Reduced maintenance overhead and operational costs</li>
                </ul>
            </div>

            <div class="section">
                <div class="section-title">5. Conclusion</div>
                <p>This research demonstrates the viability and benefits of the proposed approach. Future work will focus on expanding the methodology to additional use cases and further optimization opportunities.</p>
                <p>We encourage the community to adopt these practices and contribute to ongoing development and refinement of these techniques.</p>
            </div>

            <div class="section">
                <div class="section-title">6. References</div>
                <p>[1] Industry Best Practices in Modern Development (2024)<br>
                [2] Performance Optimization Techniques (2024)<br>
                [3] Scalable Architecture Patterns (2023)<br>
                [4] Security in Modern Applications (2024)</p>
            </div>
        </div>

        <div class="footer">
            <p>© 2025 CLUSTER Community Portal. This is a sample document for demonstration purposes.</p>
            <p>For more information, visit our community portal or contact the author.</p>
        </div>
    </div>
</body>
</html>`;

    const newWindow = window.open('', '_blank');
    newWindow.document.write(viewContent);
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