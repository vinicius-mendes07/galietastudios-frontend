import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from './styles';
import logo from '../../assets/images/galieta.png';

export default function Footer() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  const handleClick = (event, sectionId) => {
    if (!isHomePage) {
      event.preventDefault();
      window.location.href = `/#${sectionId}`;
    }
  };

  useEffect(() => {
    if (isHomePage) {
      const { hash } = window.location;
      if (hash) {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView();
        }
      }
    }
  }, [isHomePage]);

  return (
    <Container>
      <div className="footer-body">
        <div className="text-wrapper">

          <div className="logo-wrapper">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <p>
              Não apenas cortamos cabelo, moldamos estilos.
              Cada visita é uma oportunidade para aprimorar a sua aparência
              e elevar a sua confiança. Agende hoje mesmo!
            </p>
          </div>
          <div className="info-wrapper">
            <p>Email</p>
            <span>support@spark.design</span>
            <p>Mailing</p>
            <span>Largo da Fonte do Cabo, N1, Ericeira.</span>
          </div>
        </div>
        <ul>
          <li>
            <a
              href={isHomePage ? '#visit-us' : '/#visit-us'}
              onClick={(event) => handleClick(event, 'visit-us')}
            >
              Visite-nos
            </a>
          </li>

          <li>
            <a
              href={isHomePage ? '#about' : '/#about'}
              onClick={(event) => handleClick(event, 'about')}
            >
              Sobre Nós
            </a>
          </li>

          <li>
            <a
              href={isHomePage ? '#services' : '/#services'}
              onClick={(event) => handleClick(event, 'services')}
            >
              Serviços
            </a>
          </li>
          <li><Link to="/schedule">Agendar</Link></li>
        </ul>
      </div>

      <div className="footer">
        <span>Galieta © 2024</span>
        <ul>
          <li>
            <a href="https://www.instagram.com/galieta_studios/" target="_blank" rel="noreferrer">
              <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_462_11051)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.66675 2C3.19399 2 2.00008 3.19391 2.00008 4.66667V11.3333C2.00008 12.8061 3.19399 14 4.66675 14H11.3334C12.8062 14 14.0001 12.8061 14.0001 11.3333V4.66667C14.0001 3.19391 12.8062 2 11.3334 2H4.66675ZM0.666748 4.66667C0.666748 2.45753 2.45761 0.666666 4.66675 0.666666H11.3334C13.5426 0.666666 15.3334 2.45753 15.3334 4.66667V11.3333C15.3334 13.5425 13.5426 15.3333 11.3334 15.3333H4.66675C2.45761 15.3333 0.666748 13.5425 0.666748 11.3333V4.66667Z" fill="currentColor" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.32226 5.99279C7.90614 5.93108 7.48115 6.00216 7.10775 6.19591C6.73435 6.38966 6.43155 6.69622 6.24242 7.07198C6.05329 7.44774 5.98746 7.87357 6.05429 8.2889C6.12113 8.70423 6.31722 9.08791 6.61468 9.38537C6.91214 9.68283 7.29582 9.87892 7.71115 9.94576C8.12648 10.0126 8.55231 9.94676 8.92807 9.75763C9.30383 9.5685 9.61039 9.2657 9.80414 8.8923C9.99789 8.5189 10.069 8.09391 10.0073 7.67779C9.94432 7.25333 9.74653 6.86036 9.44311 6.55694C9.13969 6.25352 8.74672 6.05573 8.32226 5.99279ZM6.49366 5.01241C7.11599 4.6895 7.8243 4.57103 8.51784 4.67388C9.22527 4.77878 9.88021 5.10843 10.3859 5.61413C10.8916 6.11984 11.2213 6.77478 11.3262 7.48221C11.429 8.17575 11.3106 8.88406 10.9876 9.50639C10.6647 10.1287 10.1538 10.6334 9.52753 10.9486C8.90126 11.2638 8.19155 11.3735 7.49933 11.2622C6.80711 11.1508 6.16764 10.8239 5.67187 10.3282C5.1761 9.83241 4.84928 9.19294 4.73789 8.50072C4.62651 7.8085 4.73623 7.09879 5.05144 6.47252C5.36666 5.84626 5.87133 5.33533 6.49366 5.01241Z" fill="currentColor" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M11 4.33333C11 3.96514 11.2985 3.66667 11.6667 3.66667H11.6733C12.0415 3.66667 12.34 3.96514 12.34 4.33333C12.34 4.70152 12.0415 5 11.6733 5H11.6667C11.2985 5 11 4.70152 11 4.33333Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_462_11051">
                    <rect width="16" height="16" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://wa.me/351965175554" target="_blank" rel="noreferrer">
              <svg className="ikonik-mdng" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" version="1.1"><path className="path-ni9kh" fill="currentColor" d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z" /><path className="path-xhdq4" fill="currentColor" d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z" /><defs><style type="text/css" /></defs></svg>
            </a>
          </li>
        </ul>

      </div>
    </Container>
  );
}
