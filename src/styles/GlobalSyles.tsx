/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'DM Sans', sans-serif;
    font-optical-sizing: auto;
    background-color: #1b1d1f;
  }

  p,
  h1,
  h3,
  ul {
    margin: 0;
    padding: 0;
  }
`;
