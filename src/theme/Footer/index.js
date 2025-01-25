import React from "react";
import OriginalFooter from "@theme-original/Footer";
import FooterContact from "@site/src/components/FooterContact/FooterContact";
import { faFacebookF, faLinkedinIn, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faPhone, faBookmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

export default function Footer(props) {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        {/* Logo and Bio Section */}
        <div className={styles.footerColumn}>
          <FooterContact
            logoSrc="img/avt.png"
            bio="Learn Anything. Be Anything. No Limits."
            socialLinks={[
              { href: "https://www.facebook.com", icon: faFacebookF },
              { href: "https://www.youtube.com", icon: faYoutube },
              { href: "https://your-channel.substack.com/", icon: faBookmark },
            ]}
            contactInfo={[
              { icon: faMapMarkerAlt, text: "Tp. Hồ Chí Minh, Việt Nam" },
              { icon: faEnvelope, text: "your-mail@docusaurus.io", href: "mailto:info@example.com" },
            ]}
          />
        </div>

        {/* Footer Navigation Links Section */}
        <div className={styles.footerNavigation}>
          <OriginalFooter {...props} />
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>Copyright © {new Date().getFullYear()} Learn Anything.</p>
      </div>
    </footer>
  );
}
