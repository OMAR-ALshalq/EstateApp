import "./ExploreByLocation.css";

const ArrayCity = [
  {
    id: 1,
    img: "../../../public/images/location/city-1.png",
    title: "New Orleans, Louisiana",
    countVillas: "12 Villas",
    countOffices: "07 Offices",
    countApartments: "10 Apartments"
  },
  {
    id: 2,
    img: "../../../public/images/location/city-2.png",
    title: "Jerrsy, United State",
    countVillas: "12 Villas",
    countOffices: "07 Offices",
    countApartments: "10 Apartments"
  },
  {
    id: 3,
    img: "../../../public/images/location/city-3.png",
    title: "Liverpool, London",
    countVillas: "12 Villas",
    countOffices: "07 Offices",
    countApartments: "10 Apartments"
  },
  {
    id: 4,
    img: "../../../public/images/location/city-4.png",
    title: "NewYork, United States",
    countVillas: "12 Villas",
    countOffices: "07 Offices",
    countApartments: "10 Apartments"
  },
  {
    id: 5,
    img: "../../../public/images/location/city-5.png",
    title: "Montreal, Canada",
    countVillas: "12 Villas",
    countOffices: "07 Offices",
    countApartments: "10 Apartments"
  },
  {
    id: 6,
    img: "../../../public/images/location/city-6.png",
    title: "California, USA",
    countVillas: "12 Villas",
    countOffices: "07 Offices",
    countApartments: "10 Apartments"
  }
];

export default function ExploreByLocation() {
  return (
    <div className="Box">
      <div className="continer continerExploreByLocation">
        <div className="BoxMainExploreByLocation">
          {ArrayCity.map(
            ({
              id,
              img,
              title,
              countVillas,
              countOffices,
              countApartments
            }) => (
              <div className="BoxMapArrayCity" key={id}>
                <div className="img" style={{ backgroundImage: `url(${img})` }}>
                  <div className="title">{title}</div>
                  <div className="dis">
                    <p>{countVillas}</p>
                    <p>{countOffices}</p>
                    <p>{countApartments}</p>
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
