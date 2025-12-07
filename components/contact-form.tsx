"use client";
import React from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {cn} from "@/lib/utils";
import {useForm} from "react-hook-form";
import {ContactFormData, contactSchema} from "@/lib/contactForm";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "sonner";

export default function ContactForm() {
    const {
        register, handleSubmit, formState: {errors, isSubmitting}, reset
    } = useForm<ContactFormData>({resolver: zodResolver(contactSchema)})

    const onSubmit = async (data: ContactFormData) => {
        try {
            const formData = new FormData();
            formData.append("Name", data.name);
            formData.append("Email", data.email);
            formData.append("Phone number", data.phone);
            formData.append("Message", data.message || "");

            const res = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_SCRIPT as string, {
                method: "POST",
                body: formData,
            })
            const json = await res.json();
            if (json.result == "success") {
                toast.success("Message sent successfully!", {
                    description: "Thank you for reaching out. I'll get back to you soon.",
                });
                reset();
            } else {
                toast.error("Failed to send message", {
                    description: json.error || "Something went wrong. Please try again later.",
                });
            }
        } catch (error) {
            toast.error("Failed to send message", {
                description: "An unexpected error occurred. Please try again later.",
            });
        }
    }
    return (
        <div className="shadow-input w-full max-w-full lg:max-w-[60%] flex flex-col justify-center">
            <div className="space-y-2">
                <div className="section-title font-jetbrains-mono text-gray-600 dark:text-gray-400">
                    /* Contact */
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Get In Touch
                </h2>
            </div>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                Want to build something or just say hi? My inbox is open.
            </p>

            <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            placeholder="Your Name"
                            type="text"
                            className="bg-zinc-100 placeholder:text-neutral-500"
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className={'text-red-500 text-xs'}>{errors.name.message}</p>
                        )}
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="yourexample@gmail.com"
                        type="email"
                        className="bg-zinc-100 placeholder:text-neutral-500"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className={'text-red-500 text-xs'}>{errors.email.message}</p>
                    )}
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        placeholder="9876543210"
                        type="tel"
                        className="bg-zinc-100 placeholder:text-neutral-500"
                        {...register("phone")}
                    />
                    {errors.phone && (
                        <p className={'text-red-500 text-xs'}>{errors.phone.message}</p>
                    )}
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        placeholder="Your Message"
                        rows={3}
                        className="bg-zinc-100 placeholder:text-neutral-500"
                        {...register("message")}
                    />
                    {errors.message && (
                        <p className={'text-red-500 text-xs'}>{errors.message.message}</p>
                    )}
                </LabelInputContainer>

                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <BottomGradient/>
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"/>
            <span
                className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"/>
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
