import React, { useEffect } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import degradeImage from '../../components/images/degrade.png';

export const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Captura a posição de rolagem
      const parallaxImages = document.querySelectorAll('.parallax-image');

      // Aplica a transformação para cada imagem parallax
      parallaxImages.forEach((img) => {
        const speedX = 0.02; // Ajuste a velocidade do movimento horizontal
        const speedY = 0.3; // Ajuste a velocidade do movimento vertical
        const translateX = (scrollPosition * speedX); 
        const translateY = (scrollPosition * speedY) / 2;
        
        // Aplique a transformação na imagem
        img.style.transform = `translate(${translateX}px, ${-translateY}px)`; // Move a imagem
      });
    };

    // Adiciona o event listener
    window.addEventListener('scroll', handleScroll);

    // Chama a função de rolagem imediatamente para evitar movimento brusco na primeira rolagem
    handleScroll();

    // Limpa o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <img
        src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/06/bg-grid-hero-m.svg"
        alt="Creative Image"
        className="hero-grid"
      />
      <div className="hero-content">
        <h1>Creativity, Unleashed.</h1>
        <p>Leverage generative AI with a unique suite of tools to convey your ideas to the world.</p>
        <div className="hero-buttons">
        <Link to="/login">
            <button className="cta-button">Get Started</button>
          </Link>
          <button className="secondary-button">Developer API</button>
        </div>
      </div>
      <div className="hero-images">
        <video
          src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/cat-space-med-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          onClick={(e) => e.target.paused ? e.target.play() : e.target.pause()}
          className="hero-video parallax-image"
        >
          <p>Your browser does not support the video tag.</p>
        </video>
        <img
          src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Default_Insanity_1-768x1152.jpg"
          alt="Creative Image"
          className="hero-image parallax-image"
        />
        <img
          src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/UniversalUpscaler-768x512.jpg"
          alt="Creative Image"
          className="hero-image1 parallax-image"
        />
        <img
          src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/07/Shoey2-1.jpg"
          alt="Creative Image"
          className="hero-image2 parallax-image"
        />
      </div>
      <div className="hero-images">
        <img
          src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/10/leoHomeUpdated-oct2024-1920x1453.jpg"
          alt="EX image"
          className="hero-imageEx"
        />
        <img
          src={degradeImage}
          alt="degrade"
          className="degrade"
        />
      </div>
    </section>
  );
};
