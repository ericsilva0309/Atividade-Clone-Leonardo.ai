import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 80vh;
  background-image: url('background.jpg'); /* Imagem de fundo que cobre toda a tela */
  background-size: cover;
  background-position: center;
  justify-content: left;
  align-items: center;
  margin-left: 20px;
`;

export const Sidebar = styled.div`
  width: 200px;
  height: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #171717;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
`;

export const ContentForms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 200px;
`;

export const Logo = styled.img`
  width: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 8px;
  margin-bottom: 8px;
  text-align: center;
  color: white;
`;

export const Divider = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid gray;
  line-height: 0.1em;
  margin: 8px 0;
  color: gray;
  font-size: 0.6rem;
`;

export const HInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 12px;

  p {
    font-size: 0.5rem;
    margin-bottom: 3px;
    color: white;
  }
`;


export const Input = styled.input`
  width: 150px;
  height: 20px;
  padding: 6px;
  margin-bottom: 8px;
  font-size: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #111111;
  color: white;

  p{
    font-size: 10px;
  }

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    border-color: #00f;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
  }
`;

export const ButtonStyled = styled.button`
  width: 150px;
  height: 25px;
  padding: 3px;
  font-size: 0.5rem;
  margin-top: 4px;
  margin-bottom: 2px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(160deg, #F3546E, #B64CE9, #558BFE);
  color: white;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    box-shadow: 0 0 5px #2f0352, 0 0 8px #2f0352;
  }
`;

export const ForgotPasswordLink = styled.a`
  color: #00f;
  font-size: 0.4rem;
  margin-bottom: 10px;
  text-decoration: none;
`;

export const SignUpText = styled.p`
  color: white;
  font-size: 0.4rem;
  margin-top: 10px;

  a {
    color: #00f;
    text-decoration: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  text-align: center;

  p {
    margin-top: 20px;
    font-size: 0.4rem;
  }

  

  .store-icons {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 5px;

    img {
      width: 40px;
      height: 40px;
    }
  }

  .footer-links {
    margin-top: 8px;

    a {
      color: gray;
      font-size: 0.4rem;
      text-decoration: none;
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const AccountButton = styled.button`
  width: 150px;
  align-items: center;
  height: 20px;
  margin: 3px;
  border: none;
  border-radius: 5px;
  background-color: #26272C;
  color: white;
  font-size: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #3C3C3C;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  svg {
    width: 8px;
    height: 8px;
    margin-right: 2px;
    color: white;
  }
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0px;

  img {
    max-width: 655px;
    height: auto;
    left: 1000px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
