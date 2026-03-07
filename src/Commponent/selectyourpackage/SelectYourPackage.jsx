import "./SelectYourPackage.css";
import { IoClose } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";

const ArrayNamberPackage = [
  {
    id: 1,
    NameCard: "Basic",
    PriceCard: "29",
    TextCard: "per user, per month",
    IconTextOne: <IoCheckmarkSharp />,
    TextOne: "99.5% Uptime Guarantee",
    IconTextTow: <IoCheckmarkSharp />,
    TextTow: "120GB CDN Bandwidth",
    IconTextThree: <IoCheckmarkSharp />,
    TextThree: "5GB Cloud Storage",
    IconTextFor: <IoClose />,
    TextFor: "Personal Help Support",
    IconTextFiv: <IoClose />,
    TextFiv: "Enterprise SLA",
    Start: "Start Basic"
  },
  {
    id: 2,
    BestCard: "BestCard",
    NameCard: "Standard",
    PriceCard: "49",
    TextCard: "per user, per month",
    IconTextOne: <IoCheckmarkSharp />,
    TextOne: "99.5% Uptime Guarantee",
    IconTextTow: <IoCheckmarkSharp />,
    TextTow: "150GB CDN Bandwidth",
    IconTextThree: <IoCheckmarkSharp />,
    TextThree: "10GB Cloud Storage",
    IconTextFor: <IoCheckmarkSharp />,
    TextFor: "Personal Help Support",
    IconTextFiv: <IoClose />,
    TextFiv: "Enterprise SLA",
    Start: "Start Standard"
  },
  {
    id: 3,
    NameCard: "Platinum",
    PriceCard: "79",
    TextCard: "2 user, per month",
    IconTextOne: <IoCheckmarkSharp />,
    TextOne: "100% Uptime Guarantee",
    IconTextTow: <IoCheckmarkSharp />,
    TextTow: "200GB CDN Bandwidth",
    IconTextThree: <IoCheckmarkSharp />,
    TextThree: "20GB Cloud Storage",
    IconTextFor: <IoCheckmarkSharp />,
    TextFor: "Personal Help Support",
    IconTextFiv: <IoCheckmarkSharp />,
    TextFiv: "Enterprise SLA",
    Start: "Start Platinum"
  }
];

export default function SelectYourPackage() {
  return (
    <div className="Box">
      <div className="continer continerSelectYourPackage">
        <div className="BoxMainMap">
          {ArrayNamberPackage.map(
            ({
              id,
              BestCard,
              NameCard,
              PriceCard,
              TextCard,
              IconTextOne,
              TextOne,
              IconTextTow,
              TextTow,
              IconTextThree,
              TextThree,
              IconTextFor,
              TextFor,
              IconTextFiv,
              TextFiv,
              Start
            }) => (
              <div
                className="Card"
                key={id}
                style={{
                  height: id === 1 || id === 3 ? "600px" : "700px",
                  top: id === 2 ? "-50px" : ""
                }}
              >
                <div className="BestCard">
                  <h3
                    style={{
                      display:
                        NameCard === "Basic" || NameCard === "Platinum"
                          ? "none"
                          : "block"
                    }}
                  >
                    {BestCard}
                  </h3>
                </div>
                <h3 className="NameCard">{NameCard}</h3>
                <div className="BoxPrice">
                  <span>$</span>
                  <h2>{PriceCard}</h2>
                </div>
                <p className="TextCard">{TextCard}</p>
                <div className="CardOption">
                  <ul>
                    <li>
                      <span
                        className={
                          IconTextOne.type === IoCheckmarkSharp
                            ? "CheckTrue"
                            : "CheckClos"
                        }
                      >
                        {IconTextOne}
                      </span>
                      <p>{TextOne}</p>
                    </li>
                    <li>
                      <span
                        className={
                          IconTextTow.type === IoCheckmarkSharp
                            ? "CheckTrue"
                            : "CheckClos"
                        }
                      >
                        {IconTextTow}
                      </span>
                      <p>{TextTow}</p>
                    </li>
                    <li>
                      <span
                        className={
                          IconTextThree.type === IoCheckmarkSharp
                            ? "CheckTrue"
                            : "CheckClos"
                        }
                      >
                        {IconTextThree}
                      </span>
                      <p>{TextThree}</p>
                    </li>
                    <li>
                      <span
                        className={
                          IconTextFor.type === IoCheckmarkSharp
                            ? "CheckTrue"
                            : "CheckClos"
                        }
                      >
                        {IconTextFor}
                      </span>
                      <p>{TextFor}</p>
                    </li>
                    <li>
                      <span
                        className={
                          IconTextFiv.type === IoCheckmarkSharp
                            ? "CheckTrue"
                            : "CheckClos"
                        }
                      >
                        {IconTextFiv}
                      </span>
                      <p>{TextFiv}</p>
                    </li>
                  </ul>
                </div>
                <div className="StartCard">
                  <p
                    style={{
                      background:
                        id === 2 ? "oklch(72.3% 0.219 149.579)" : "transparent",
                      color: id === 2 ? "white" : "oklch(72.3% 0.219 149.579)",
                      border:
                        id === 2 ? "none" : "3px solid rgba(0, 128, 0, 0.315)",
                    }}
                  >
                    {Start}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
