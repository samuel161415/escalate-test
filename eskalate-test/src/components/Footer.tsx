import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
              {['About us', 'Team', 'Careers', 'Blog'].map(item => (
                <li key={item} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Contact</h3>
            <ul>
              {['Help & Support', 'Partner with us', 'Ride with us'].map(item => (
                <li key={item} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Legal</h3>
            <ul>
              {['Terms & Conditions', 'Refund & Cancellation', 'Privacy Policy'].map(item => (
                <li key={item} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow us</h3>
            <div className="flex space-x-4 mb-4">
              {['fb', 'tw', 'ig', 'in'].map(platform => (
                <div key={platform} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  {platform.toUpperCase()}
                </div>
              ))}
            </div>
            <div>
              <p className="mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 rounded-l bg-gray-800 text-white flex-grow"
                  style={{ backgroundColor: '#F5F5F5', color: 'black' }}
                />
                <button 
                  className="bg-yellow-500 text-white px-4 py-2 rounded-r"
                  style={{ borderColor: '#FF9A0E' }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
