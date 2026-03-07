import "./OurAwards.css";

import { GiTrophyCup } from "react-icons/gi";
import { PiBagFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const ArrayOurAwards = [
  {
    id: 1,
    icon: <GiTrophyCup />,
    reting: "32M",
    text: "Blue Burmin Award"
  },
  {
    id: 2,
    icon: <PiBagFill />,
    reting: "43M",
    text: "Mimo X11 Award"
  },
  {
    id: 3,
    icon: <FaLightbulb />,
    reting: "51M",
    text: "Australian UGC Award"
  },
  {
    id: 4,
    icon: <FaHeart />,
    reting: "42M",
    text: "IITCA Green Award"
  }
];

export default function OurAwards() {
  return (
    <div className="Box">
      <div className="continer continerOurAwards">
        <div className="BoxOurAwards">
          <div className="TextOurAwards">
            <p>Our Awards</p>
            <h2>
              Over 1,24,000+ Happy User Bieng With Us Still They Love Our
              Services
            </h2>
          </div>
          <div className="RetingOurAwards">
            {ArrayOurAwards.map(({ id, icon, reting, text }) => (
              <div className="BoxArrayOurAwards" key={id}>
                <div className="card">
                  <div className="icon"> {icon}</div>
                  <div className="reting"> {reting}</div>
                  <div className="text">{text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
