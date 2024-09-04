const NoResults = () => {
  return (
    <div className="text-center text-gray-500 text-4xl mt-10 animate__animated animate__fadeIn">
      <img
        src="/search.png"
        alt="no search results"
        className="w-28 h-28 mx-auto mb-10"
      />
      <p>Unfortunately, there are no results...</p>
    </div>
  );
};

export default NoResults;
