"use client";
import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    const obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.07 });
    
    document.querySelectorAll('.rv').forEach(function(el) {
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return null;
}
