import { z } from "zod";

export const PatientRequestSchema = z.object({
    first_name: z.string().max(255),
    last_name: z.string().max(255),
    date_of_birth: z.date(),
    religion: z.string().max(255),
    occupation: z.string().max(255),
    address: z.string().max(255),
    phone_number: z.string().optional(),
    email: z.string().email().optional(),
    identity_code: z.string(),
    legal_representative_first_name: z.string().max(255),
    legal_representative_last_name: z.string().max(255),
    legal_representative_relationship: z.string().max(255),
    legal_representative_phone_number: z.string().max(20),
});

export type PatientRequest = z.infer<typeof PatientRequestSchema>;

