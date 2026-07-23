import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

type LayoutProps = {
    children: React.ReactNode;
    hero: boolean;
};

export default function Layout({ children, hero }: LayoutProps) {
    return (
        <div className={styles.page}>
            <Navbar />

            {hero && <Hero />}

            <main className={styles.main}>
                {children}
            </main>

            <Footer />
        </div>
    );
}