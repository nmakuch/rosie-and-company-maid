import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

type LayoutProps = {
    children: React.ReactNode;
    hero: boolean;
}

export default function Layout({ children, hero }: LayoutProps) {
    return (
        <>
            <Navbar />
            {hero && (<Hero />)}
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}