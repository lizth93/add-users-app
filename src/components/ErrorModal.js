import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <Card>
      <div className="backdrops" onClick={props.onConfirm}>
        <div className={props.className}>
          <header className="header">
            <h2>{props.title}</h2>
          </header>
          <div className="content">
            <p>{props.message}</p>
          </div>
          <footer className="actions">
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </div>
      </div>
    </Card>
  );
};
export default ErrorModal;
