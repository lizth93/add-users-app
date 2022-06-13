import styled from "styled-components";

const Card = (props) => {
  return <div className={props.className}>{props.children}</div>;
};
export default styled(Card)`
  .backdrops {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
  }
`;
