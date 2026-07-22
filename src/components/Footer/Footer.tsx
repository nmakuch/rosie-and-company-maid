import styles from "./Footer.module.css";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className={styles.globalFooter}>
            <Container>
                <div className={styles.footerContent}>

                    <div className={styles.ctaContainer}>
                        <div className={styles.ctaContent}>
                            <div className={styles.footerBrand}>
                                <Link to="/">
                                    <img
                                        src="/images/logo/RosieLogo-WhiteOutline.png"
                                        alt="Rosie & Company"
                                    />
                                </Link>

                                <p>
                                    Reliable, detail-oriented cleaning services for homes
                                    throughout Toronto&apos;s west end.
                                </p>
                            </div>


                            <div className={styles.socialMedia}>
                                <a>
                                    <Icon name="facebook" height={40} width={40} />
                                </a>

                                <a>
                                    <Icon name="instagram" height={40} width={40} />
                                </a>

                                <a>
                                    <Icon name="linkedin" height={40} width={40} />
                                </a>
                            </div>
                        </div>

                        <button
                            type="button"
                            className={styles.backToTop}
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }
                        >
                            Back to top
                        </button>
                    </div>

                    <div className={styles.footerLinkColumn}>
                        <h3>Site map</h3>
                        <ul>
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/#steps">How it works</Link>
                            </li>
                            <li>
                                <Link to="/#service-area">Service area</Link>
                            </li>
                            <li>
                                <Link to="/#pricing">Pricing</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/booking">Booking</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footerLinkColumn}>
                        <h3>Service area</h3>
                        <ul>
                            <li>Etobicoke</li>
                            <li>High Park</li>
                            <li>The West End</li>
                        </ul>
                    </div>

                    <div className={styles.footerLinkColumn}>
                        <h3>Contact</h3>
                        <ul>
                            <li>(123) 456-7890</li>
                            <li>hello@rosieco.ca</li>
                        </ul>
                    </div>
                </div>

            </Container>
        </footer>
    )
}