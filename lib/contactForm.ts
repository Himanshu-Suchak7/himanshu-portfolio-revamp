import {z} from "zod";

// Phone number regex pattern - exactly 10 digits
const phoneRegex = /^[0-9]{10}$/;

export const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),

    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email"),

    phone: z
        .string()
        .min(1, "Phone number is required")
        .regex(phoneRegex, "Please enter a valid 10-digit mobile number"),

    message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
