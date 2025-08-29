// src/components/LazyTechicon.jsx
import { lazy, Suspense } from "react";

// The original Techicon component is now lazy-loaded
const Techicon = lazy(() => import("../TechLogos/Techicon"));

const LazyTechicon = ({ model }) => {
  return (
    <Suspense fallback={<img src="ff" alt="fsefesf"></img>}>
      <Techicon model={model} />
    </Suspense>
  );
};

export default LazyTechicon;
