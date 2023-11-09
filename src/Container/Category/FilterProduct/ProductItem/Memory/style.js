import styled from "styled-components";

export const MemoryWrapper = styled.div`
  width: 100%;

  .list-storage {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #e8ecef;
    border-radius: 4px;
  }
  .storage-item {
    width: calc(100% / 4);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    color: #000;
  }
  .storage-item:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-color: #000;
    color: #fff;
  }
  .active {
    color: #fff;
    background-color: #000;
  }
  .title-storage {
    font-size: 1rem;
    padding: 5px;
  }
  .list-content {
    list-style-type: none;
    padding: 1.5rem 0;
  }
  .content-item {
    font-size: 15px;
  }
  .button {
    background-color: #004a7f;

    -webkit-border-radius: 10px;

    border-radius: 10px;

    border: none;

    color: #ffffff;

    display: inline-block;

    font-family: Arial;

    font-size: 20px;

    padding: 5px;

    text-align: center;

    text-decoration: none;
  }
  @-webkit-keyframes glowing {
    0% {
      background-color: #004a7f;
      -webkit-box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      -webkit-box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      -webkit-box-shadow: 0 0 3px #004a7f;
    }
  }

  @-moz-keyframes glowing {
    0% {
      background-color: #004a7f;
      -moz-box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      -moz-box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      -moz-box-shadow: 0 0 3px #004a7f;
    }
  }

  @-o-keyframes glowing {
    0% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
  }

  @keyframes glowing {
    0% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
  }

  .button {
    -webkit-animation: glowing 1500ms infinite;
    -moz-animation: glowing 1500ms infinite;
    -o-animation: glowing 1500ms infinite;
    animation: glowing 1500ms infinite;
  }
`;
