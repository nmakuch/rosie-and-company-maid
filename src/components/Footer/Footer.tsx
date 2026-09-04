import { Link } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerMain}>
                    <div className={styles.brandColumn}>
                        <Link className={styles.brand} to="/" onClick={scrollToTop}>
                            <img
                                className={styles.brandLogo}
                                src="/images/logo/rosie-logo.svg"
                                alt=""
                                width="69"
                                height="63"
                                aria-hidden="true"
                            />

                            <span className={styles.brandText}>
                                <span className={styles.brandName}>Rosie & Company</span>
                                <small>Cleaning service</small>
                            </span>
                        </Link>

                        <p>
                            Reliable, detail-oriented cleaning for homes throughout
                            Toronto&apos;s west end.
                        </p>
                    </div>

                    <nav className={styles.linkColumn} aria-label="Footer navigation">
                        <h2>Explore</h2>

                        <ul>
                            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                            <li><Link to="/#how-it-works">How it works</Link></li>
                            <li><Link to="/#service-area">Service area</Link></li>
                            <li><Link to="/#pricing">Pricing</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </nav>

                    <div className={styles.linkColumn}>
                        <h2>Service area</h2>

                        <ul>
                            <li>Etobicoke</li>
                            <li>High Park</li>
                            <li>Liberty Village</li>
                        </ul>
                    </div>

                    <div className={styles.linkColumn}>
                        <h2>Contact</h2>

                        <ul>
                            <li>
                                <a href="tel:+11234567890">(123) 456-7890</a>
                            </li>

                            <li>
                                <a href="mailto:hello@rosieco.ca">
                                    hello@rosieco.ca
                                </a>
                            </li>

                            <li>
                                <Link className={styles.bookingLink} to="/booking">
                                    Book a cleaning
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© {currentYear} Rosie & Company. All rights reserved.</p>

                    <button type="button" onClick={scrollToTop}>
                        Back to top <span aria-hidden="true">↑</span>
                    </button>
                </div>
            </Container>
        </footer>
    );
}