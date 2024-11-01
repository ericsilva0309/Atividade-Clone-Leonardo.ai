import {
  Container,
  Sidebar,
  ContentForms,
  Logo,
  Title,
  Divider,
  Input,
  ButtonStyled,
  ForgotPasswordLink,
  SignUpText,
  Footer,
  AccountButton,
  HInput,
  ImageContainer, // Importando o novo container para a imagem
} from "./style"; 
import { FaApple, FaGoogle, FaGooglePlay, FaMicrosoft } from "react-icons/fa";

export const Login = () => {
  const handleLogin = () => {
    alert("Login");
  };

  return (
    <Container>
      <Sidebar>
        <ContentForms>
          <Logo
            src="https://app.leonardo.ai/_next/image?url=%2Fimg%2Fleonardo-logo.png&w=96&q=75"
            alt="Logo"
          />
          <Title>Sign up or Login with</Title>
          <div className="accounts">
            <AccountButton>
              <FaApple /> Apple
            </AccountButton>
            <AccountButton>
              <FaGoogle /> Google
            </AccountButton>
            <AccountButton>
              <FaMicrosoft /> Microsoft
            </AccountButton>
          </div>
          <Divider>OR</Divider>
          <HInput>
            <p>Email</p>
            <Input placeholder="name@host.com" type="email" />
            <p>Password</p>
            <Input placeholder="Password" type="password" />
          </HInput>
          <ForgotPasswordLink href="#">
            Forgot your password?
          </ForgotPasswordLink>
          <ButtonStyled onClick={handleLogin}>Sign in</ButtonStyled>
          <SignUpText>
            Need an account? <a href="#">Sign up</a>
          </SignUpText>
        </ContentForms>
        <Footer>
          <p>Available now on iOS and Android</p>
          <div className="store-icons">
            <FaApple />
            <FaGooglePlay />
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </Footer>
      </Sidebar>
      <ImageContainer>
        <img 
          src="https://app.leonardo.ai/_next/image?url=%2Fimg%2Flogin-hero-images%2FMotorCycle.webp&w=3840&q=75" // Altere isso para o caminho da sua imagem grande
          alt="moto"
        />
      </ImageContainer>
    </Container>
  );
};

export default Login;
