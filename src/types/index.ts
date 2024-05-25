export type Patient = {
    id: string
    name: string
    maxLength: number
    caretaker: string
    email: string
    date: Date
    symptoms: string
}

export type DraftPatient = Omit<Patient, 'id'>