import Container from "../../components/Container/Container";
import Layout from "../../components/Layout/Layout";
import Subheading from "../../components/Subheading/Subheading";
import styles from "./Faq.module.css";

const faqItems = [
    {
        question: "Who will clean my home?",
        answer:
            "For your first visit, we will send one of our professional maids to your home. We strongly recommend that you are present during this visit, as it will give you the opportunity to provide your own detailed instructions and expectations. If you are satisfied with the service, we will assign this maid to your home for all future visits.",
    },
    {
        question: "What are the qualifications of the cleaning staff?",
        answer:
            "We only hire experienced personnel who have years of experience in the industry. In addition to their experience level, they must all pass a criminal record check, a rigorous interview process, and a training program that involves passing a final examination.",
    },
    {
        question: " What will the maid service clean within my home?",
        answer:
            "While we do offer pre-structured plans that cover the usual items, our prices are on an hourly rate basis. This means that you can ask our staff to spend the time exactly how you want, on anything you want, within reason. Our staff retains the right to refuse work they deem unsafe. You must also provide all the necessary tools and equipment required to perform these tasks.",
    },
    {
        question: "Do I need to provide the cleaning supplies?",
        answer:
            "Yes. There are a couple of major reasons for this. Firstly, this allows your home to be cleaned with the products of your choice that are best suited for your home. Secondly, part of what allows us to offer the best rates in the area is the fact that our staff operates independently and does not always have access to crew vehicles where supplies and equipment can be carried. Many of them use public transit to get around. Some of our staff may bring their own products, but they will only use them with your authorization. For a list of the required items to have on hand, click here.",
    },
    {
        question: "When will I be charged for a service and how can I make payments?",
        answer:
            "You will be sent an invoice via e-mail following the service. You never pay in advance. Payment options are via credit card or interac e-transfer.",
    },
    {
        question: "What if I need to cancel an appointment?",
        answer:
            "No problem. As long as you give us a minimum of 24 hours notice, you will be able to cancel the visit free of charge.",
    },
    {
        question: "How will my maid access my home?",
        answer:
            "If you will not be home during our visit, you must contact us ahead of time in order to make arrangements.",
    },
];

export default function Faq() {
    return (
        <Layout hero={false}>
            <section className={styles.faqSection}>
                <Container>
                    <Subheading
                        text="Learn more before booking"
                        alignment="center"
                    />
                    <div className={styles.faqContent}>
                        <h1>Frequently asked questions</h1>

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