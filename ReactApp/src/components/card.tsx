import "../style/CardComponent/card.css";
function Card() {
  return (
    <a className="card-mine" href="">
      <h3>made by me</h3>
      <p className="small">
        this is the card made by sameer again stating , its made by me
      </p>
      <div className="corner">
        <div className="plus">+</div>
      </div>
    </a>
  );
}

export default Card;
