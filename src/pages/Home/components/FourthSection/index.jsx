import { useState } from 'react';

import chevronLeft from '../../../../assets/images/icons/chevron-left.svg';
import chevronRight from '../../../../assets/images/icons/chevron-right.svg';
import { Container } from './styles';

export default function FourthSection() {
  const [slideMarginDesktop, setSlideMarginDesktop] = useState(0);
  const [slideMarginMobile, setSlideMarginMobile] = useState(0);
  const [startX, setStartX] = useState(null);
  const [dist, setDist] = useState(0);
  const threshold = 50;

  const handleTouchStart = (e) => {
    const touchObj = e.changedTouches[0];
    setStartX(touchObj.pageX);
    setDist(0);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const touchObj = e.changedTouches[0];
    const deltaX = touchObj.pageX - startX;

    setDist(deltaX);
  };

  const handleTouchEnd = () => {
    if (dist > threshold) {
      setSlideMarginMobile((prevState) => (prevState < 0 ? prevState + 360 : -2160));
    } else if (dist < -threshold) {
      setSlideMarginMobile((prevState) => (prevState >= -1920 ? prevState - 360 : 0));
    }
    setStartX(null);
  };

  function handleNextSlideDesktop() {
    setSlideMarginDesktop((prevState) => (prevState >= -3020 ? prevState - 510 : 0));
  }
  function handlePrevSlideDesktop() {
    setSlideMarginDesktop((prevState) => (prevState < 0 ? prevState + 510 : 0));
  }

  function handleNextSlideMobile() {
    setSlideMarginMobile((prevState) => (prevState >= -1920 ? prevState - 360 : 0));
  }
  function handlePrevSlideMobile() {
    setSlideMarginMobile((prevState) => (prevState < 0 ? prevState + 360 : -2160));
  }
  return (
    <Container
      id="services"
      $slideMargin={slideMarginDesktop}
      $slideMarginMobile={slideMarginMobile}
      className="carrossel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h1>Serviços</h1>
      <div className="slider">
        <div className="slides">
          <div className="slide slide1">
            <h3>Corte Fade</h3>
            <h3>12 €</h3>
          </div>

          <div className="slide slide2">
            <h3>Corte Social</h3>
            <h3>10 €</h3>
          </div>

          <div className="slide slide3">
            <h3>Corte Somente Máquina</h3>
            <h3>8 €</h3>
          </div>

          <div className="slide slide4">
            <h3>Corte Tesoura</h3>
            <h3>10 €</h3>
          </div>

          <div className="slide slide5">
            <h3>Cabelo e Barba</h3>
            <h3>15 €</h3>
          </div>

          <div className="slide slide6">
            <h3>Barba</h3>
            <h3>5 €</h3>
          </div>

          <div className="slide slide7">
            <h3>Limpeza Fácil</h3>
            <h3>Em breve</h3>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button type="button" onClick={handlePrevSlideDesktop} className="button-left-desktop btn">
          <img src={chevronLeft} alt="chevron-left" />
        </button>
        <button type="button" onClick={handleNextSlideDesktop} className="button-right-desktop btn">
          <img src={chevronRight} alt="chevron-right" />
        </button>
      </div>

      <div className="buttons">
        <button type="button" onClick={handlePrevSlideMobile} className="button-left-mobile">
          <img src={chevronLeft} alt="chevron-left" />
        </button>
        <button type="button" onClick={handleNextSlideMobile} className="button-right-mobile">
          <img src={chevronRight} alt="chevron-right" />
        </button>
      </div>
    </Container>
  );
}
