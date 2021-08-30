import "./Card.css";
interface CardItem {
  className?: string;
}

const Card: React.FC<CardItem> = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
