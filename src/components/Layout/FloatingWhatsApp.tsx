import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/4917398573699?text=Hallo! Ich würde gerne einen Termin vereinbaren.', '_blank');
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Floating Button */}
          <div 
            className={`
              group relative bg-green-500 hover:bg-green-600 text-white rounded-full 
              transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl
              ${isExpanded ? 'w-64 h-16 rounded-2xl' : 'w-14 h-14'}
            `}
            onClick={isExpanded ? handleClick : () => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            {/* Button Content */}
            <div className="flex items-center justify-center h-full px-4">
              {isExpanded ? (
                <div className="flex items-center space-x-3 animate-slide-in-left">
                  <MessageCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-sm whitespace-nowrap">
                    Jetzt Termin buchen
                  </span>
                </div>
              ) : (
                <MessageCircle className="w-7 h-7 animate-pulse-soft" />
              )}
            </div>

            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
            
            {/* Notification Dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse">
              <div className="absolute inset-0 rounded-full bg-red-500 animate-ping"></div>
            </div>
          </div>

          {/* Tooltip for Mobile */}
          {!isExpanded && (
            <div className="absolute bottom-16 right-0 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Termin vereinbaren
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;