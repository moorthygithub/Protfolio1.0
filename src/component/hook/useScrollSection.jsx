import { useEffect, useState } from "react";

const useScrollSection = (sectionIds) => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);
        setVisibleSections((prev) => {
          const merged = [...new Set([...prev, ...visible])];
          return sectionIds.filter((id) => merged.includes(id));
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return visibleSections;
};

export default useScrollSection;
