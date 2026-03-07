
import "./FeaturedPropertyTypes.css"

const ArrayItems = [
  {
    id: 1,
    img: "/images/hero/h1.png",
    title: "Family House",
    dis: "122 Property"
  },
  {
    id: 2,
    img: "/images/hero/h2.png",
    title: "House & Villa",
    dis: "155 Property"
  },
  {
    id: 3,
    img: "/images/hero/h3.png",
    title: "Apartment",
    dis: "300 Property"
  },
  {
    id: 4,
    img: "/images/hero/h4.png",
    title: "Office & Studio",
    dis: "80 Property"
  },
  {
    id: 5,
    img: "/images/hero/h6.png",
    title: "Villa & Condo",
    dis: "80 Property"
  }
];


export default function FeaturedPropertyTypes() {
  return (
    <div className="Box">
      <div className="continer continerFeaturedPropertyTypes">
        <div className="BoxMap">
          {ArrayItems.map(({id, img, title, dis}) => (
            <div className="card" key={id}>
              <img src={img}></img>
              <h3>{title}</h3>
              <p>{dis}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
