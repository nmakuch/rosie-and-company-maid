import {
    useEffect,
    useRef,
    useState,
} from "react";
import { Link } from "react-router-dom";

import Container from "../Container/Container";
import styles from "./Navbar.module.css";

const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/#service-area", label: "Service area" },
    { to: "/#pricing", label: "Pricing" },
    { to: "/faq", label: "FAQ" },
    { to: "/booking", label: "Booking" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        if (menuOpen && !dialog.open) {
            dialog.showModal();
        }

        if (!menuOpen && dialog.open) {
            dialog.close();
        }
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.navContent}>
                    <Link className={styles.brand} to="/" onClick={closeMenu}>
                        <img
                            className={styles.brandLogo}
                            src="/images/logo/rosie-logo.svg"
                            alt=""
                            width="69"
                            height="63"
                            aria-hidden="true"
                        />

                        <span className={styles.brandText}>
                            <span className={styles.brandName}>
                                Rosie & Company
                            </span>

                            <small>Cleaning service</small>
                        </span>
                    </Link>

                    <ul className={styles.desktopNav}>
                        {navigationLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className={styles.menuButton}
                        aria-label="Open navigation menu"
                        aria-controls="mobile-navigation"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(true)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </Container>

            <dialog
                ref={dialogRef}
                id="mobile-navigation"
                className={styles.mobileDialog}
                aria-label="Navigation menu"
                onClose={closeMenu}
                onCancel={closeMenu}
            >
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <button
                            type="button"
                            className={styles.closeButton}
                            aria-label="Close navigation menu"
                            onClick={closeMenu}
                        >
                            <span />
                            <span />
                        </button>
                    </div>

                    <ul className={styles.mobileNav}>
                        {navigationLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </dialog>
        </nav>
    );
}