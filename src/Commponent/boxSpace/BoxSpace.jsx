import "./BoxSpace.css"

export default function BoxSpace({title, dis}) {
  return (
    <div className="Box">
      <div className="continer continerBoxSpace">
        <div className="MainBox">
          <h1>{title}</h1>
          <p>{dis}</p>
        </div>
      </div>
    </div>
  );
}