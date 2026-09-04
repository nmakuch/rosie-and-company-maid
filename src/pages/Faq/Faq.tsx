import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";
import Subheading from "../../components/Subheading/Subheading";
import styles from "./Faq.module.css";

const faqItems = [
    {
        question: "Who will clean my home?",
        answer:
            "For your first visit, we will send one of our professional cleaners to your home. We recommend being present so you can share any specific instructions or expectations. If you are happy with the service, we will make every effort to assign the same cleaner to future visits.",
    },
    {
        question: "What are the qualifications of your cleaning staff?",
        answer:
            "We hire experienced cleaning professionals who must pass a criminal record check, a detailed interview process, and a training program that includes a final assessment.",
    },
    {
        question: "What will be cleaned within my home?",
        answer:
            "Our cleaning packages cover the most commonly requested areas, but the service can be adjusted around your priorities. Our staff may refuse work they consider unsafe or outside the reasonable scope of a residential cleaning service.",
    },
    {
        question: "Do I need to provide cleaning supplies?",
        answer:
            "Yes. This allows your home to be cleaned with products that are appropriate for your surfaces and preferences. It also helps us keep our pricing affordable. Contact us if you would like a recommended list of supplies to have available.",
    },
    {
        question: "When will I be charged and how can I pay?",
        answer:
            "We will send you an invoice by email after the service is complete. You will never be asked to pay in advance. Payments can be made by credit card or Interac e-Transfer.",
    },
    {
        question: "What if I need to cancel an appointment?",
        answer:
            "No problem. You can cancel or reschedule free of charge when you provide at least 24 hours' notice.",
    },
    {
        question: "How will my cleaner access my home?",
        answer:
            "If you will not be home during the appointment, contact us ahead of time so we can arrange a safe and convenient way for your cleaner to enter.",
    },
];

export default function Faq() {
    return (
        <Layout hero={false}>
            <section className={styles.faqSection}>
                <Container>
                    <div className={styles.layout}>
                        <header className={styles.introduction}>
                            <Subheading
                                text="Learn more before booking"
                                alignment="left"
                            />

                            <h1>Frequently asked questions</h1>

                            <p className={styles.introText}>
                                Everything you need to know about our cleaners,
                                appointments, payments, and preparing your home.
                            </p>

                            <div className={styles.support}>
                                <p>Still have a question?</p>

                                <a href="mailto:hello@rosieco.ca">
                                    hello@rosieco.ca
                                </a>
                            </div>
                        </header>

                        <div className={styles.faqList}>
                            {faqItems.map((item) => (
                                <details
                                    key={item.question}
                                    className={styles.faqItem}
                                >
                                    <summary className={styles.faqQuestion}>
                                        <span>{item.question}</span>

                                        <span
                                            className={styles.icon}
                                            aria-hidden="true"
                                        />
                                    </summary>

                                    <div className={styles.faqAnswer}>
                                        <p>{item.answer}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    );
}