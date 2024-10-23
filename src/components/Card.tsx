import React from "react";

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  align?: "left" | "center" | "right";
}

const Card: React.FC<CardProps> = ({ icon, title, subtitle, description, align = "center" }) => {
  const alignmentClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div className="bg-white bg-opacity-20 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
      {icon}
      <h4 className={`text-xl font-bold mb-2 ${alignmentClass}`}>{title}</h4>
      {subtitle && <h5 className={`text-lg mb-2 ${alignmentClass}`}>{subtitle}</h5>}
      <p className={alignmentClass}>{description}</p>
    </div>
  );
};

export default Card;