export const formFields = [
    { label: "Overall Quality", name: "overall_quality", type: "number", required: true, min: 1, max: 5 },
    { label: "Meet Expectations", name: "meet_expectations", type: "number", required: true, min: 1, max: 5 },
    { label: "Useful Topics", name: "useful_topics", type: "text", required: false },
    { label: "Material Quality", name: "material_quality", type: "number", required: true, min: 1, max: 5 },
    {
        label: "Schedule Convenience",
        name: "schedule_convenience",
        type: "select",
        required: true,
        options: [
            { value: "", label: "Select" },
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
        ],
    },
    { label: "Organization Quality", name: "organization_quality", type: "number", required: true, min: 1, max: 5 },
    { label: "Favorite Sessions", name: "fav_sessions", type: "text", required: false },
    { label: "Speaker Competence", name: "speaker_competence", type: "number", required: true, min: 1, max: 5 },
    { label: "Disappointed Sessions", name: "disappointed_sessions", type: "text", required: false },
];
