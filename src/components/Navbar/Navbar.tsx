import Container from "../Container/Container";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.navContent}>
                    <Link to="/">
                        <img src="/images/logo/RosieLogo-WhiteOutline.png" alt="Rosie & Company" />
                    </Link>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
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
            </Container>
        </nav>
    );
}