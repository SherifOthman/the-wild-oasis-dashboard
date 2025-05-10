import styled, { css } from "styled-components";

// const Heading = styled.h1`
//   ${(props) =>
//     props.as === "h1" &&
//     css`
//       font-size: 3rem;
//       font-weight: 600;
//     `}

//   ${(props) =>
//     props.as === "h2" &&
//     css`
//       font-size: 2rem;
//       font-weight: 600;
//     `}

//     ${(props) =>
//     props.as === "h3" &&
//     css`
//       font-size: 2rem;
//       font-weight: 500;
//     `}

//   line-height:1.4;
// `;

const HeadingStyles = {
  h1: css`
    font-size: 3rem;
    font-weight: 600;
  `,
  h2: css`
    font-size: 2rem;
    font-weight: 600;
  `,
  h3: css`
    font-size: 2rem;
    font-weight: 500;
  `,

  h4: css`
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
  `,
};

const Heading = styled.h1`
  ${(props) => HeadingStyles[props.as || "h1"]}
  line-height: 1.4;
`;

export default Heading;
