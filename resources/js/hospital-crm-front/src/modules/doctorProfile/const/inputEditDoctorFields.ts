export const inputEditDoctorFields1 = [
    { label: "First Name", name: "first_name", type: "text" },
    { label: "Last Name", name: "last_name", type: "text" },
    { label: "Date of Birth", name: "date_of_birth", type: "date" },
    { label: "Address", name: "address", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone Number", name: "phone_number", type: "tel" }
];

export const inputEditDoctorFields2 = [
    { label: "Religion", name: "religion", type: "text" },
    { label: "Languages", name: "languages", type: "text", isArrayField: true },
    { label: "Current Location", name: "current_location", type: "text", isArrayField: true },
    { label: "Years of Experience", name: "years_of_experience", type: "number" },
    { label: "Certifications", name: "certifications", type: "text", isArrayField: true }
];
