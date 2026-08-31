import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import { Link, useLocation } from "react-router-dom";
import { config } from "../config";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    // Start paused
    lenis.stop();

    // Handle smooth scroll animation frame
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle navigation links
    let links = document.querySelectorAll(".header ul a[data-href]");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024 && isHomePage) {
          e.preventDefault();
          let currentTarget = e.currentTarget as HTMLAnchorElement;
          let section = currentTarget.getAttribute("data-href");
          if (section && lenis) {
            const target = document.querySelector(section) as HTMLElement;
            if (target) {
              lenis.scrollTo(target, {
                offset: 0,
                duration: 1.5,
              });
            }
          }
        }
      });
    });

    // Handle resize
    const handleResize = () => {
      lenis?.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      lenis?.destroy();
    };
  }, [isHomePage]);

  return (
    <>
      <header className="header">
        <Link to="/" className="navbar-title" data-cursor="disable">
          AK
        </Link>
        <a
          href={`mailto:${config.contact.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {config.contact.email}
        </a>
        <nav>
          <ul>
            <li>
              <a data-href="#journey" href="/#journey">
                <HoverLinks text="JOURNEY" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="/#work">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#achievements" href="/#achievements">
                <HoverLinks text="ACHIEVEMENTS" />
              </a>
            </li>
            <li>
              <a data-href="#certificates" href="/#certificates">
                <HoverLinks text="CERTIFICATES" />
              </a>
            </li>
            <li>
              <a data-href="#cv" href="/#cv">
                <HoverLinks text="CV" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="/#contact">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
