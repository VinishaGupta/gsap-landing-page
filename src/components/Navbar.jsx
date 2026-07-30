import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navLinks } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    gsap.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
      },
      {
        backgroundColor: "rgba(7, 11, 52, 0.75)",
        backdropFilter: "blur(12px)",
        ease: "power2.out",
        duration: 0.3,
        scrollTrigger: {
          trigger: "#hero",
          start: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-10 h-10 object-contain"
          />
          <p className="text-3xl font-bold text-white">Velvet Pour</p>
        </a>

        <ul className="flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-white text-lg hover:text-yellow-300 transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;