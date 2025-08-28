import { useRef } from "react";

// The prop 'edu' replaces 'card' and 'children' is kept for flexibility.
const EducationCard = ({ edu, children, index }) => {
  // Local ref for the individual card's DOM element
  const cardRef = useRef(null);

  // Mouse move handler for the glow effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) {
      return;
    }
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    // Set the CSS variable for the glow rotation
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      className="card card-border timeline-card rounded-xl p-10 w-full"
      ref={cardRef} // Assign the local ref
      onMouseMove={handleMouseMove}
    >
      <div className="glow"></div>
      {/* --- Education Content Start --- */}
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white-50">
        {edu.degree}
      </h3>
      <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
        <p className="text-lg font-medium text-gray-300">{edu.school}</p>
        <p className="text-sm italic px-3 py-1 rounded-full bg-gray-700 text-white">
          {edu.date}
        </p>
      </div>
      {/* --- Education Content End --- */}
      {children} {/* For any extra content passed in */}
    </div>
  );
};

export default EducationCard;
