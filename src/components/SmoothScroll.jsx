import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      const targetHash = event.currentTarget.hash;
      if (targetHash) {
        const targetElement = document.querySelector(targetHash);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          })
          window.history.pushState(null, null, targetHash);
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleClick);
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleClick);
      })
    }
  }, [])
  return null;
};

export default SmoothScroll;
