export const App = () => {
  return (
    <>
      <NetflixSeries />
    </>
  );
};

export default App;

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img
          src="./images/qot.jpg"
          alt="Queens Of Tears"
          height={300}
          width={500}
        />
      </div>
      <h2>Name: Queens Of Tears</h2>
      <h3>Rating: 8.2</h3>
      <p>Summary: A gripping tale of love and loss and redemption and hope.</p>
    </div>
  );
};
