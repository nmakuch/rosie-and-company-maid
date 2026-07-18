import type { AddOnOption, CleaningOption } from "./stepTypes";

export const timeOptions = [
    {
        id: "8-10",
        label: "8:00am - 10:00am"
    },
    {
        id: "10-12",
        label: "10:00am - 12:00pm"
    },
    {
        id: "12-2",
        label: "12:00pm - 2:00pm"
    },
    {
        id: "2-4",
        label: "2:00pm - 4:00pm"
    },
] as const;

export const timeValues = [
    "8:00am - 10:00am",
    "10:00am - 12:00pm",
    "12:00pm - 2:00pm",
    "2:00pm - 4:00pm",
] as const;

export const hourlyOptions = [
    {
        id: "hourly-2",
        value: "2-hour",
        label: "2 hours",
        price: 70,
    },
    {
        id: "hourly-3",
        value: "3-hour",
        label: "3 hours",
        price: 105,
    },
    {
        id: "hourly-4",
        value: "4-hour",
        label: "4 hours",
        price: 140,
    },
] as const satisfies readonly CleaningOption[];

export const packageOptions = [
    {
        id: "package-basic",
        value: "basic",
        label: "Basic package",
        price: 70,
    },
    {
        id: "package-basic-plus",
        value: "basic-plus",
        label: "Basic Plus package",
        price: 105,
    },
    {
        id: "package-complete",
        value: "complete",
        label: "Complete package",
        price: 140,
    },
] as const satisfies readonly CleaningOption[];

export const addOnOptions = [
    {
        value: "deep-clean",
        label: "Deep clean",
        price: 50
    },
    {
        value: "oven",
        label: "Oven cleaning",
        price: 20
    },
    {
        value: "fridge",
        label: "Fridge cleaning",
        price: 20
    },
    {
        value: "windows",
        label: "Window cleaning",
        price: 20
    },
    {
        value: "powder-room",
        label: "Additional powder room",
        price: 15
    },
    {
        value: "bathroom",
        label: "Additional bathroom",
        price: 20
    },
] as const satisfies readonly AddOnOption[];