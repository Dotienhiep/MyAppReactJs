import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: auto;
  /* background-color: #f8f9fa; */
  background-color: #f2f4f6;
  overflow: hidden;
  .canvas {
    position: absolute;
    top: 100px;
    z-index: 99999;
    pointer-events: none;
  }
`;
