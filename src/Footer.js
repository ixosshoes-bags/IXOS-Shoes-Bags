import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareWhatsapp,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSquarePhone,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
      <p>
          <FontAwesomeIcon icon={faSquareInstagram} />
          Instagram:{" "}
          <a
            href="https://www.instagram.com/ixos_shoes_and_bags/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ixos_shoes_and_bags
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faSquarePhone} />
          Telephone: <span>07/734948</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faSquareWhatsapp} />
          WhatsApp:{" "}
          <a href="https://wa.me/+96103856611" target="_blank" rel="noreferrer">
          03/856611
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faMapLocationDot} />
          Location:{" "}
          <a
            href="https://maps.app.goo.gl/L94FhitpRrAzpeAr6"
            target="_blank"
            rel="noreferrer"
          >
            Duaar Morjan, Saida, Lebanon
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
