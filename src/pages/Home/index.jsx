import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Container,
  FifthSection,
  FirstSection,
  FourthSection,
  LinkWrapper,
  SecondSection,
  SixthSection,
  ThirdSection,
} from './styles';

import chevronLeft from '../../assets/images/icons/chevron-left.svg';
import chevronRight from '../../assets/images/icons/chevron-right.svg';
import barberShop from '../../assets/images/barber-shop.avif';

export default function Home() {
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
      setSlideMarginMobile((prevState) => (prevState < 0 ? prevState + 360 : -1800));
    } else if (dist < -threshold) {
      setSlideMarginMobile((prevState) => (prevState >= -1560 ? prevState - 360 : 0));
    }
    setStartX(null);
  };

  function handleNextSlideDesktop() {
    setSlideMarginDesktop((prevState) => (prevState >= -2510 ? prevState - 510 : 0));
  }
  function handlePrevSlideDesktop() {
    setSlideMarginDesktop((prevState) => (prevState < 0 ? prevState + 510 : 0));
  }

  function handleNextSlideMobile() {
    setSlideMarginMobile((prevState) => (prevState >= -1560 ? prevState - 360 : 0));
  }
  function handlePrevSlideMobile() {
    setSlideMarginMobile((prevState) => (prevState < 0 ? prevState + 360 : -1800));
  }
  return (
    <Container>
      <FirstSection id="section1">
        <div>
          <h2>Galieta Barbershop</h2>
          <h1>O toque artístico que vai além do corte.</h1>

          <LinkWrapper>
            <Link to="/schedule">
              Agendar horário
            </Link>
          </LinkWrapper>
        </div>
      </FirstSection>

      <SecondSection id="section2">
        <p>
          Olá!👋 Bem-vindo à nossa experiência exclusiva em Lisboa!
          Na nossa barbearia, não se trata apenas de cortar cabelo -
          é sobre proporcionar uma jornada incrível.
          Nossos profissionais estão aqui para entender exatamente
          o que você deseja e tornar isso realidade.
          Se busca uma equipe amigável e dedicada a ouvir você, encontrou o lugar certo.
          Venha nos visitar e faça parte dessa experiência única!
        </p>
      </SecondSection>

      <ThirdSection>
        <div className="text-wrapper">
          <div className="text">
            <h2>Jornada de Estilo e Elegância</h2>
            <p>
              Descubra uma experiência única e inigualável no Galieta, onde a paixão pela arte
              da barbearia e do cuidado pessoal se unem para realçar a sua autenticidade.
            </p>
            <LinkWrapper>
              <Link to="/schedule">Agendar agora</Link>
            </LinkWrapper>
          </div>

        </div>
        <div className="cards-container">
          <div className="card">
            <svg className="ikonik-5m9l2k" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><path className="path-2xzss" fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM183.2 132.6c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L176 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L242.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm160 0c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L336 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L402.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm6.3 175.8c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5c10.4-16.1-6.8-32.5-25.5-28.1z" /></svg>
            <h3>Experiência Única</h3>
            <p>
              Desfrute de uma experiência única em nossa barbearia,
              onde cada visita é memorável e centrada em você.
            </p>
          </div>
          <div className="card">
            <svg className="ikonik-gyjju" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path className="path-pq80a" fill="currentColor" d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" /><path className="path-r17be" fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" /></svg>
            <h3>No seu tempo, do seu jeito.</h3>
            <p>
              Faça do seu jeito! Na nossa barbearia, você manda.
              A gente adapta tudo do seu jeito, pra você sair daqui satisfeito e feliz.
            </p>
          </div>
          <div className="card">
            <svg className="ikonik-5fhcoh" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path className="path-k27qu" fill="currentColor" d="m21.707 11.293-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707zM18.001 20H6v-9.585l6-6 6 6V15l.001 5z" /><path className="path-lr3ou" fill="currentColor" d="m12.223 11.641-.223.22-.224-.22a2.224 2.224 0 0 0-3.125 0 2.13 2.13 0 0 0 0 3.07L12 18l3.349-3.289a2.13 2.13 0 0 0 0-3.07 2.225 2.225 0 0 0-3.126 0z" /></svg>
            <h3>Sinta-se em Casa</h3>
            <p>
              Entre e sinta-se em casa! Nosso espaço é moderno e cheio de boas energias,
              feito para você relaxar e se sentir bem.
            </p>
          </div>
          <div className="card">
            <svg className="ikonik-y7poyh" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 1024 1024"><path className="path-pftf8" fill="currentColor" d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" /></svg>
            <h3>Excelência em Cuidados</h3>
            <p>
              Cuidamos de você com o que há de melhor! Nossos produtos premium garantem resultados
              incríveis que vão te fazer se sentir ainda melhor.
            </p>
          </div>
        </div>
      </ThirdSection>

      <FourthSection
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
              <h3>5 €</h3>
            </div>

            <div className="slide slide5">
              <h3>Cabelo e Barba</h3>
              <h3>12 €</h3>
            </div>

            <div className="slide slide6">
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
      </FourthSection>

      <FifthSection>
        <h1>Para agendar é muito fácil.</h1>

        <div className="content">
          <img src={barberShop} alt="barber shop" />

          <div className="text">
            <span>1. Escolha o serviço para agendamento;</span>
            <span>2. Escolha o dia e horário;</span>
            <span>3. Preencha seus dados e confirme;</span>
            <span>4. Pronto! Agendamento realizado.</span>
            <LinkWrapper $backgroundColor="dark"><Link to="/schedule">Agendar agora</Link></LinkWrapper>
          </div>
        </div>
      </FifthSection>

      <SixthSection>
        <h1>Visite-nos</h1>
        <p>Uma experiência única espera por você.</p>

        <div className="cards-container">
          <div className="card">
            <svg className="ikonik-9szlk" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path className="path-54q4tg" fill="currentColor" d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" /><path className="path-i3qc1" fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" /></svg>
            <h4>Horários</h4>
            <p>Segunda a Sábado (10h às 19h)</p>
          </div>
          <div className="card">
            <svg className="ikonik-elepgg" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 1024 1024"><path className="path-bwueg" fill="currentColor" d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z" /></svg>
            <h4>Localização</h4>
            <p>Largo da Fonte do Cabo, N1, Ericeira.</p>
          </div>
          <div className="card">
            <svg className="ikonik-oe06bf" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 1024 1024"><path className="path-bl5u3i" fill="currentColor" d="M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z" /></svg>
            <h4>Trabalhe conosco</h4>
            <p className="wpp-link">
              <a href="https://wa.me/351965175554">
                <svg className="ikonik-mdng" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" version="1.1"><path className="path-ni9kh" fill="currentColor" d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z" /><path className="path-xhdq4" fill="currentColor" d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z" /><defs><style type="text/css" /></defs></svg>
                <span>+351 965 175 554</span>
              </a>
            </p>
          </div>
        </div>
      </SixthSection>
    </Container>
  );
}
