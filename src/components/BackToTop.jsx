import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Ubah dari 300 jadi 100, jadi baru scroll dikit aja tombolnya udah standby
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-60">
      <button
        onClick={scrollToTop}
        className={`p-4 bg-accent-red text-white rounded-full shadow-xl shadow-rose-200 transition-all duration-500 transform ${
          isVisible 
            ? 'opacity-40 hover:opacity-100 visible translate-y-0 hover:-translate-y-2' 
            : 'opacity-0 invisible translate-y-8'
        }`}
        aria-label="Back to top"
      >
        <FaArrowUp size={16} />
      </button>
    </div>
  );
};

export default BackToTop;