const Quote = ({ color, quote, author }) => {
  return (
    <>
      <h1 style={{ color: color }}>&quot;{quote}&quot;</h1>
      <h5 style={{ color: color }}>-{author}-</h5>
    </>
  );
};

export default Quote;
