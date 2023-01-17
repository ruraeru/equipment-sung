import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0);
  color: #676767;
  font-size: 16px;
  margin-left: 24px;

  &:hover {
    color: black;
    cursor: pointer;
  }

  &[disabled] {
    color: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    color: black;
    font-weight: bold;
    cursor: revert;
  }
`;

  return (
    <div className="pagination">
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </div>
  );
}

export default Pagination;