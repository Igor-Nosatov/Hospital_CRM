import { maritalStatusOptions } from "./maritalStatusOptions";

export const fieldConfigCreatePatient = [
    { label: "First Name", name: "first_name", type: "text", required: true },
    { label: "Last Name", name: "last_name", type: "text", required: true },
    { label: "Date of Birth", name: "date_of_birth", type: "date", required: true },
    { label: "Religion", name: "religion", type: "text", required: true },
    { label: "Occupation", name: "occupation", type: "text", required: true },
    { label: "Address", name: "address", type: "text", required: true },
    { label: "Phone Number", name: "phone_number", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Identity Code", name: "identity_code", type: "text", required: true },
    { label: "Legal Representative First Name", name: "legal_representative_first_name", type: "text", required: true },
    { label: "Legal Representative Last Name", name: "legal_representative_last_name", type: "text", required: true },
    { label: "Legal Representative Relationship", name: "legal_representative_relationship", type: "text", required: true },
    { label: "Legal Representative Phone Number", name: "legal_representative_phone_number", type: "text", required: true },
    { label: "Marital Status", name: "marital_status", type: "select", options: maritalStatusOptions, required: true },
    { label: "Status", name: "status", type: "text", value: "Active", disabled: true }
];
