import styled, { css } from "styled-components";

// const Row = styled.div`
//   display: flex;

//   ${(props) =>
//     props.type === "horizontal" &&
//     css`
//       justify-content: space-between;
//       align-items: center;
//     `}

//   ${(props) =>
//     props.type === "vertical" &&
//     css`
//       flex-direction: column;
//       gap: 1.6rem;
//     `}
// `;

const RowStyles = {
  horizontal: css`
    justify-content: space-between;
    align-items: center;
  `,
  vertical: css`
    flex-direction: column;
    gap: 1.6rem;
  `,
};

const Row = styled.div`
  ${(props) => RowStyles[props.type]}
  display: flex;
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
