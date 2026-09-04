import styles from "./PricePreview.module.css";

import type {
    AddOnOption,
    CleaningOption,
} from "../BookingForm/stepTypes";

type PricePreviewProps = {
    cleaning: CleaningOption | undefined;
    addOns: AddOnOption[];
    subtotal: number;
    tax: number;
    totalPrice: number;
};

export default function PricePreview({
    cleaning,
    addOns,
    subtotal,
    tax,
    totalPrice,
}: PricePreviewProps) {
    const hasEstimate = Boolean(cleaning);

    return (
        <aside
            className={styles.pricePreview}
            aria-labelledby="price-preview-heading"
        >
            <p
                className={styles.heading}
                id="price-preview-heading"
            >
                Price estimate
            </p>

            {!hasEstimate ? (
                <p className={styles.emptyState}>
                    Choose a cleaning option to see your estimated total.
                </p>
            ) : (
                <>
                    <div className={styles.selectedItems}>
                        {cleaning && (
                            <div className={styles.priceRow}>
                                <span>{cleaning.label}</span>
                                <span>${cleaning.price.toFixed(2)}</span>
                            </div>
                        )}

                        {addOns.map((addOn) => (
                            <div
                                className={styles.priceRow}
                                key={addOn.value}
                            >
                                <span>{addOn.label}</span>
                                <span>${addOn.price.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.calculation}>
                        <div className={styles.priceRow}>
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className={styles.priceRow}>
                            <span>HST</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className={styles.totalRow}>
                        <span>Estimated total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </>
            )}
        </aside>
    );
}