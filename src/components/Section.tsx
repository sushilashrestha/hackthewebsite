import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, title }) => {
  return (
    <section className={`py-16 px-4 ${className}`}>
      {title && <h3 className="text-4xl font-bold mb-8 text-center">{title}</h3>}
      {children}
    </section>
  );
};

export default Section;