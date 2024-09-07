
import { appointmentTypes } from "../constants/appointmentTypes";
import { AppointmentData } from "../store";

export const initializeFormData = (doctorId: number): AppointmentData => ({
    appointment_datetime: "",
    reason: "",
    symptoms: "",
    notes: "",
    status: "active",
    type: appointmentTypes[0],
    reminder_datetime: "",
    patient_id: null,
    doctor_id: doctorId,
    medical_service_id: null,
});

export const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    setFormData: React.Dispatch<React.SetStateAction<AppointmentData>>
) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
};

export const handleSelectChange = (
    setFormData: React.Dispatch<React.SetStateAction<AppointmentData>>,
    field: keyof AppointmentData,
    value: any
) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
};
