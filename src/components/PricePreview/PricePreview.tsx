import styles from "./PricePreview.module.css";

import type {
    CleaningOption,
    AddOnOption,
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
    return (
        <aside
            className={styles.pricePreview}
            aria-labelledby="price-preview-heading"
        >

            {(cleaning || addOns.length > 0) && (
                <div className={styles.priceAddition}>
                    {cleaning && (
                        <div className={styles.priceRow}>
                            <span>{cleaning.label}</span>
                            <span>${cleaning.price.toFixed(2)}</span>
                        </div>
                    )}
                    {addOns.map((addOn) => (
                        <div
                            key={addOn.value}
                            className={styles.priceRow}
                        >
                            <span>+ {addOn.label}</span>
                            <span>${addOn.price.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
            )}

            {(cleaning || addOns.length > 0) && (
                <div className={styles.priceAddition}>
                    <div className={styles.priceRow}>
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>

                    <div className={styles.priceRow}>
                        <span>HST (13%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                </div>
            )}


            <div className={styles.totalRow}>
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
            </div>
        </aside>
    );
}