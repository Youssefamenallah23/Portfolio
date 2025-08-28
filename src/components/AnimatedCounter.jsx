import { counterItems } from "../constants/index1";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 my-32 ">
      <div className="mx-auto grid-4-cols ">
        {counterItems.map((item, index) => (
          <div
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
            key={index}
          >
            <div
              key={item.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <CountUp end={item.value} duration={4} /> {item.suffix}
            </div>
            <div className="text-white-50 text-lg ">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
