import type {
    FieldErrors,
    UseFormRegister,
    UseFormSetValue,
} from "react-hook-form";

import type { BookingFormData } from "./bookingSchema";

export type StartStepProps = {
    onStart: () => void;
};

export type StepNavigationProps = {
    onBack: () => void;
    onNext: () => void;
};

export type FormStepProps = {
    register: UseFormRegister<BookingFormData>;
    errors: FieldErrors<BookingFormData>;
} & StepNavigationProps;

export type CleaningTypeStepProps = FormStepProps & {
    setValue: UseFormSetValue<BookingFormData>;
};

export type CleaningOption = {
    id: string;
    value: string;
    label: string;
    price: number;
};

export type CleaningOptionStepProps = {
    cleaningType: "hourly" | "package" | undefined;
    options: readonly CleaningOption[];
    register: UseFormRegister<BookingFormData>;
    errors: FieldErrors<BookingFormData>;
} & StepNavigationProps;

export type AddOnOption = {
    value: string;
    label: string;
    price: number;
};

export type AddOnsStepProps = FormStepProps;

export type ReviewStepProps = {
    booking: BookingFormData;
    editStep: (targetStep: number) => void;
    onBack: () => void;
    isSubmitting: boolean;
    submitError: string | null;
};