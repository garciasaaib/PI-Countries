
const PageButtons = ({ currentPage, setCurrentPage, lastPage }) => {
  const [previousPage, nextPage] = [currentPage - 1, currentPage + 1]

  return (
    <div>
      {
        previousPage !== 0 &&
        <button onClick={() => setCurrentPage(previousPage)} type="button">
          {previousPage}
        </button>
      }
      <button type="button" disabled>{currentPage}</button>
      {
        lastPage !== currentPage &&
        <button onClick={() => setCurrentPage(nextPage)} type="button" >
          {nextPage}
        </button>
      }
    </div>
  );
}

export default PageButtons;