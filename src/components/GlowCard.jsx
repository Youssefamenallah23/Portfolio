import { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]);
  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
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
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" alt="star" key={i} className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p>{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
