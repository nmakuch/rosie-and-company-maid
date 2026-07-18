import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./BookingForm.module.css";

import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";

import {
    StartStep,
    NameStep,
    EmailStep,
    AddressStep,
    DateStep,
    TimeStep,
    CleaningTypeStep,
    CleaningOptionStep,
    AddOnsStep,
    ReviewStep,
    ConfirmationStep,
} from "./steps";

import {
    bookingSchema,
    type BookingFormData,
} from "./bookingSchema";

import { bookingStepFields } from "./bookingStepFields";

import {
    hourlyOptions,
    packageOptions,
} from "./bookingOptions";

import { calculateBookingPrice } from "./calculateBookingPrice";

import {
    BOOKING_STEPS,
    TOTAL_BOOKING_STEPS,
} from "./bookingSteps";

export default function BookingForm() {
    const [step, setStep] = useState<number>(BOOKING_STEPS.START);
    const [editingStep, setEditingStep] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [submitError, setSubmitError] =
        useState<string | null>(null);

    const {
        register,
        handleSubmit,
        trigger,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            fullName: "",
            email: "",
            address: "",
            postalCode: "",
            date: "",
            time: undefined,
            cleaningType: undefined,
            cleaningOption: "",
            addOns: [],
        },
    });

    const booking = watch();
    const cleaningType = watch("cleaningType");
    const selectedCleaningOption = watch("cleaningOption");
    const selectedAddOns = watch("addOns") ?? [];

    const cleaningOptions =
        cleaningType === "hourly"
            ? hourlyOptions
            : packageOptions;

    const {
        cleaning,
        addOns: pricedAddOns,
        subtotal,
        tax,
        totalPrice,
    } = calculateBookingPrice({
        cleaningOption: selectedCleaningOption,
        addOns: selectedAddOns,
    });

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
    }, [step]);

    const startForm = () => {
        setStep(BOOKING_STEPS.NAME);
    };

    const editStep = (targetStep: number) => {
        setEditingStep(targetStep);
        setStep(targetStep);
    };

    const nextStep = async () => {
        const fields = bookingStepFields[step];

        if (!fields) return;

        const isValid = await trigger(fields);

        if (!isValid) return;

        const isEditingFromReview = editingStep !== null;

        if (
            isEditingFromReview &&
            editingStep === BOOKING_STEPS.CLEANING_TYPE &&
            step === BOOKING_STEPS.CLEANING_TYPE
        ) {
            setStep(BOOKING_STEPS.CLEANING_OPTION);
            return;
        }

        if (isEditingFromReview) {
            setEditingStep(null);
            setStep(BOOKING_STEPS.REVIEW);
            return;
        }

        setStep((currentStep) => currentStep + 1);
    };

    const backStep = () => {
        setStep((currentStep) =>
            Math.max(BOOKING_STEPS.START, currentStep - 1)
        );
    };

    const onSubmit = async (data: BookingFormData) => {
        const {
            subtotal,
            tax,
            totalPrice: submittedTotalPrice,
        } = calculateBookingPrice({
            cleaningOption: data.cleaningOption,
            addOns: data.addOns ?? [],
        });

        const submittedBooking = {
            ...data,
            subtotal,
            tax,
            totalPrice: submittedTotalPrice,
        };

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submittedBooking),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ??
                    "Unable to submit your booking."
                );
            }

            setEditingStep(null);
            setStep(BOOKING_STEPS.CONFIRMATION);
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Unable to submit your booking.";

            setSubmitError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const startOver = () => {
        reset();
        setEditingStep(null);
        setStep(BOOKING_STEPS.START);
    };

    return (
        <form
            className={styles.bookingForm}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={styles.formContainer}>
                {step === BOOKING_STEPS.START && (
                    <StartStep onStart={startForm} />
                )}

                {step > BOOKING_STEPS.START &&
                    step <= BOOKING_STEPS.REVIEW && (
                        <ProgressIndicator
                            currentStep={step}
                            totalSteps={TOTAL_BOOKING_STEPS}
                        />
                    )}

                {step === BOOKING_STEPS.NAME && (
                    <NameStep
                        register={register}
                        errors={errors}
                        onBack={backStep}
                        onNext={nextStep}
                    />
                )}

                {step === BOOKING_STEPS.EMAIL && (
                    <EmailStep
                        register={register}
                        errors={errors}
                        onBack={backStep}
                        onNext={nextStep}
                    />
                )}

                {step === BOOKING_STEPS.ADDRESS && (
                    <AddressStep
                        register={register}
                        errors={errors}
                        onBack={backStep}
                        onNext={nextStep}
                    />
                )}

                {step === BOOKING_STEPS.DATE && (
                    <DateStep
                        register={register}
                        errors={errors}
                        onBack={backStep}
                        onNext={nextStep}
                    />
                )}

                {step === BOOKING_STEPS.TIME && (
                    <TimeStep
                        register={register}
                        errors={errors}
                        onBack={backStep}
                        onNext={nextStep}
                    />
                )}

                {step === BOOKING_STEPS.CLEANING_TYPE && (
                    <CleaningTypeStep
                        register={register}
                        errors={errors}
                        onBack={backStep}
                        onNext={nextStep}
                        setValue={setValue}
                    />
                )}

                {step === BOOKING_STEPS.CLEANING_OPTION && (
                    <CleaningOptionStep
                        register={register}
                        errors={errors}
                        onBack={backStep}
                        onNext={nextStep}
                        cleaningType={cleaningType}
                        options={cleaningOptions}
                        cleaning={cleaning}
                        addOns={pricedAddOns}
                        subtotal={subtotal}
                        tax={tax}
                        totalPrice={totalPrice}
                    />
                )}

                {step === BOOKING_STEPS.ADD_ONS && (
                    <AddOnsStep
                        register={register}
                        errors={errors}
                        onBack={backStep}
                        onNext={nextStep}
                        cleaning={cleaning}
                        addOns={pricedAddOns}
                        subtotal={subtotal}
                        tax={tax}
                        totalPrice={totalPrice}
                    />
                )}

                {step === BOOKING_STEPS.REVIEW && (
                    <ReviewStep
                        booking={booking}
                        onBack={backStep}
                        editStep={editStep}
                        cleaning={cleaning}
                        addOns={pricedAddOns}
                        subtotal={subtotal}
                        tax={tax}
                        totalPrice={totalPrice}
                        isSubmitting={isSubmitting}
                        submitError={submitError}
                    />
                )}

                {step === BOOKING_STEPS.CONFIRMATION && (
                    <ConfirmationStep
                        onStartOver={startOver}
                        email={booking.email}
                    />
                )}
            </div>
        </form>
    );
}