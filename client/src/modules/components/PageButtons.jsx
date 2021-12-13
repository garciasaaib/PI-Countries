
const PageButtons = ({ pages, setCurrentPage }) => {
  const [previousPage, nextPage] = [pages.currentPage - 1, pages.currentPage + 1]
  return (
    <div>
      {
        previousPage !== 0 &&
        <button className="btn" type="button"
          onClick={() => setCurrentPage({
            ...pages,
            currentPage: previousPage,
            slicedNumber: ((pages.currentPage-2) * 9)
          })}
        >
          {previousPage}
        </button>
      }
      <button className="btn" type="button" disabled>{pages.currentPage}</button>
      {
        pages.lastPage > pages.currentPage &&
        <button className="btn" type="button"
          onClick={() => setCurrentPage({
            ...pages,
            currentPage: nextPage,
            slicedNumber: (pages.currentPage * 9)
          })}
        >
          {nextPage}
        </button>
      }
    </div>
  );
}

export default PageButtons;