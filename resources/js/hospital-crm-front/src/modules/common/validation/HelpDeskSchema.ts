import { z } from "zod";

export const HelpDeskSchema = z.object({
    title: z.string().min(1, "You must enter a title.").max(255, "Title can't exceed 255 characters."),
    description: z.string().min(1, "You must enter a description."),
    doctor_id: z.number().int("Doctor ID must be an integer."),
});
