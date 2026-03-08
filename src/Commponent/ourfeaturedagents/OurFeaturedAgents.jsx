import "./OurFeaturedAgents.css"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";



const ArrayCustomer = [
  {
    id: 1,
    countListings: "50 Listings",
    img: "/images/customer/team-1.jpg",
    locattion: "Liverpool, Canada",
    nameCustomer: "Sargam S. Singh",
    linkFacebook: "",
    linkLinkedin: "",
    linkTwitter: "",
    linkInstagram:"",
  },
  {
    id: 2,
    countListings: "70 Listings",
    img: "/images/customer/team-2.jpg",
    locattion: "Montreal, Canada",
    nameCustomer: "Harijeet M. Siller",
    linkFacebook: "",
    linkLinkedin: "",
    linkTwitter: "",
    linkInstagram:"",
  },
  {
    id: 3,
    countListings: "80 Listings",
    img: "/images/customer/team-3.jpg",
    locattion: "Denever, USA",
    nameCustomer: "Anna K. Young",
    linkFacebook: "",
    linkLinkedin: "",
    linkTwitter: "",
    linkInstagram:"",
  },
  {
    id: 4,
    countListings: "51 Listings",
    img: "/images/customer/team-4.jpg",
    locattion: "2272 Briarwood Drive",
    nameCustomer: "Michael P. Grimaldo",
    linkFacebook: "",
    linkLinkedin: "",
    linkTwitter: "",
    linkInstagram:"",
  },
  {
    id: 5,
    countListings: "42 Listings",
    img: "/images/customer/team-5.jpg",
    locattion: "2272 Briarwood Drive",
    nameCustomer: "Michael P. Grimaldo",
    linkFacebook: "",
    linkLinkedin: "",
    linkTwitter: "",
    linkInstagram:"",
  },
  {
    id: 6,
    countListings: "38 Listings",
    img: "/images/customer/team-5.jpg",
    locattion: "Liverpool, Canada",
    nameCustomer: "Sargam S. Singh",
    linkFacebook: "",
    linkLinkedin: "",
    linkTwitter: "",
    linkInstagram:"",
  },
];





export default function OurFeaturedAgents () {
  return (
    <div className="Box">
      <div className="continer continerOurFeaturedAgents">
        <div className="BoxMainOurFeaturedAgents">
          {ArrayCustomer.map(
            ({
              id,
              countListings,
              img,
              locattion,
              nameCustomer,
              linkFacebook,
              linkLinkedin,
              linkTwitter,
              linkInstagram
            }) => (
              <div className="BoxMainArrayCustomer" key={id}>
                <div className="cardCustomer">
                  <div className="listings">
                    <p>{countListings}</p>
                    <div></div>
                  </div>
                  <div className="informationCustomer">
                    <div className="imgcustomer">
                      <div className="img">
                        <img src={img}></img>
                        <FaCircleCheck  className="Check"/>
                      </div>
                    </div>
                    <div className="locationcustomer">
                      <FaLocationDot />
                      <p>{locattion}</p>
                    </div>
                    <div className="namecustomer">
                      <h3>{nameCustomer}</h3>
                    </div>
                    <div className="sochialcustomer">
                      <ul>
                        <li>
                          <a href={linkFacebook}>
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a href={linkLinkedin}>
                            <FaLinkedin />
                          </a>
                        </li>
                        <li>
                          <a href={linkTwitter}>
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a href={linkInstagram}>
                            <FaInstagram />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="concationcustomer">
                    <h3>
                      <MdEmail />
                      Massage
                    </h3>
                    <h3>
                      <FaPhone />
                    </h3>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}