import {
    hourlyOptions,
    packageOptions,
    addOnOptions,
} from "./bookingOptions";

type CalculateBookingPriceArguments = {
    cleaningOption: string;
    addOns: string[];
};

export function calculateBookingPrice({
    cleaningOption,
    addOns,

}: CalculateBookingPriceArguments) {
    const allCleaningOptions = [
        ...hourlyOptions,
        ...packageOptions,
    ];

    const cleaning = allCleaningOptions.find(
        (option) => option.value === cleaningOption
    );

    const selectedAddOns = addOnOptions.filter(
        (option) => addOns.includes(option.value)
    );

    const cleaningPrice =
        allCleaningOptions.find(
            (option) => option.value === cleaningOption
        )?.price ?? 0;

    const addOnPrice = addOnOptions
        .filter((option) => addOns.includes(option.value))
        .reduce((sum, option) => sum + option.price, 0);

    const subtotal = cleaningPrice + addOnPrice;
    const tax = subtotal * 0.13;
    const totalPrice = subtotal + tax;

    return {
        cleaning,
        addOns: selectedAddOns,
        subtotal,
        tax,
        totalPrice,
    };
}