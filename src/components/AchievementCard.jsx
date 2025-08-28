import { useRef } from "react";

// The prop 'achievement' replaces 'card' and 'children' is kept for flexibility.
const AchievementCard = ({ achievement, children, index }) => {
  // Use a stable reference (Map or Array) for multiple instances.
  // Since this is one component and it's being used in a map, the parent
  // component's ref array logic is still needed for the glow effect to work
  // across all instances. However, for a clean component, we'll assume the
  // ref handling for the glow effect is managed externally or simplify the ref.
  // Since your original 'GlowCard' was storing refs in an array via the parent,
  // we'll keep that assumption and make a slight adjustment.

  // --- Simplified Ref Management for Clarity ---
  // In a real-world scenario, if you use the ref prop like this:
  // <GlowCard ref={(el) => (cardRefs.current[index] = el)} ...>
  // ...you would pass the ref from the parent. Since you're using 'useRef'
  // *inside* the mapped component, it's problematic for a global array.
  // The original component's ref logic was flawed for mapping, but we'll use a
  // local ref to make this component functional individually.

  const cardRef = useRef(null);

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
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      className="card card-border timeline-card rounded-xl p-10"
      ref={cardRef} // Use a local ref for simplicity
      onMouseMove={handleMouseMove}
    >
      <div className="glow"></div>
      {/* --- Achievement Content Start --- */}
      <h3 className="text-2xl font-bold mb-1 text-white-50">
        {achievement.title}
      </h3>
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm italic text-gray-400">{achievement.date}</p>
        <p className="text-base font-semibold px-3 py-1 rounded-full bg-green-400 text-black">
          👑{("  ", achievement.position)}
        </p>
      </div>
      {achievement.project && (
        <h4 className="text-lg font-medium mb-3 text-white">
          Project: {achievement.project}
        </h4>
      )}
      {/* --- Achievement Content End --- */}
      {children} {/* For any extra content passed in */}
    </div>
  );
};

export default AchievementCard;
