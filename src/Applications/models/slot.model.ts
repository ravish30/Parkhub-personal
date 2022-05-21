import { string } from "yup"

export interface Slot {
    _id: string,
    basementNo: number,
    carNo: string,
    isVacant: boolean,
    mobileNumber: number,
    name: string,
    slotId: string
}