"use client";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import toast from "react-hot-toast";
import FormField from "@/shared/form/FormField";
import { FormTextarea } from "@/shared/form/FormTextarea";
import Container from "@/shared/Container";

export default function Contact() {
  const container = useRef();
  const formRef = useRef();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  // Entrance Animation
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      tl.from(".contact-info", { x: -50, opacity: 0, duration: 0.8 }).from(
        ".contact-field",
        { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 },
        "-=0.4",
      );
    },
    { scope: container },
  );

  const onSubmit = async (data) => {
    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact Data:", data);
    toast.success("Message sent! We'll get back to you soon.");
    reset();
  };

  return (
    <section
      ref={container}
      className="py-10 overflow-hidden"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side: Info */}
          <div className="contact-info">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
              Let’s build something <br />
              <span className="text-blue-600">extraordinary.</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-8 max-w-md">
              Have a question about our production-ready Next.js architecture?
              Drop us a message and our team will reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                  📍
                </div>
                <span className="font-medium">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                  ✉️
                </div>
                <span className="font-medium">hello@veo-architect.io</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div
          ref={formRef}
          className="contact-field bg-zinc-50 dark:bg-zinc-900/50 px-4 py-8 lg:p-12 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800">
          <div className="">
              <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <FormField
                name="name"
                label="Product Name"
                control={control}
                placeholder="e.g. Wireless Headphone"
                rules={{ required: "Product name is required" }}
              />
              <FormField
                name="email"
                label="Your Email"
                control={control}
                placeholder="Enter Your Email"
                rules={{ required: "Email is required" }}
              />
              <FormTextarea
                name="description"
                label="Sort Description"
                placeholder="Enter product details..."
                control={control}
                rules={{ required: "Description is required" }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
