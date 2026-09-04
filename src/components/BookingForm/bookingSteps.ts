export const BOOKING_STEPS = {
    START: 0,
    NAME: 1,
    EMAIL: 2,
    ADDRESS: 3,
    DATE: 4,
    TIME: 5,
    CLEANING_TYPE: 6,
    CLEANING_OPTION: 7,
    ADD_ONS: 8,
    REVIEW: 9,
    CONFIRMATION: 10,
} as const;

export const BOOKING_STEP_LABELS: Record<number, string> = {
    [BOOKING_STEPS.START]: "Start",
    [BOOKING_STEPS.NAME]: "Your name",
    [BOOKING_STEPS.EMAIL]: "Contact information",
    [BOOKING_STEPS.ADDRESS]: "Service address",
    [BOOKING_STEPS.DATE]: "Preferred date",
    [BOOKING_STEPS.TIME]: "Preferred time",
    [BOOKING_STEPS.CLEANING_TYPE]: "Cleaning plan",
    [BOOKING_STEPS.CLEANING_OPTION]: "Cleaning option",
    [BOOKING_STEPS.ADD_ONS]: "Optional add-ons",
    [BOOKING_STEPS.REVIEW]: "Review and submit",
};

export const TOTAL_BOOKING_STEPS = BOOKING_STEPS.REVIEW;