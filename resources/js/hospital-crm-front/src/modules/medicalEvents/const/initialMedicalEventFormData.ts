export const initialMedicalEventFormData = (medicalEventId: string, doctorId: number) => ({
    overall_quality: "",
    meet_expectations: "",
    useful_topics: "",
    material_quality: "",
    schedule_convenience: "",
    organization_quality: "",
    fav_sessions: "",
    speaker_competence: "",
    disappointed_sessions: "",
    medical_event_id: medicalEventId,
    doctor_id: doctorId,
});
