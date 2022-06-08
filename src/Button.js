export const Button = (props) => {
  return (
    <button onClick={() => props.onClickHandler(props.increment)}>
      +{props.increment}
    </button>
  );
};
