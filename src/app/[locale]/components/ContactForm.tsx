"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

type ContactFormProps = {
  showForm?: boolean;
  handleFormButton?: () => void;
};

export default function ContactForm({ showForm, handleFormButton }: ContactFormProps) {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };

  useEffect(() => {
    if (!showForm) {
      setStatus("idle")
    }
  }, [showForm]);

  return (
    <form onSubmit={handleSubmit}
    className={`${showForm ? "rounded-asym2 items-center bg-glass2 md:border backdrop-blur-md border-zinc-700" : "rounded-asym"} 
    w-full h-full flex flex-col md:justify-center`}
    >
      <fieldset className="h-full w-full">
        <legend className={`${showForm && "hidden"} w-full text-center text-2xl md:mb-8`}>{t("form")}</legend>
        <div
          className={`${!showForm && "bg-glass md:border rounded-asym pb-10 lg:pb-8"} flex flex-col w-full h-full gap-8 border-zinc-700 w-full p-4 md:p-6 relative`}
        >
          {showForm && (
            <button
              type="button"
              onClick={handleFormButton}
              className="absolute right-4 md:right-6 top-10 md:top-6 text-zinc-400 font-bold border-2 border-zinc-400 rounded-full px-3 py-1 hover:cursor-pointer hover:bg-[rgba(60,60,82,0.4)] active:scale-75 duration-150"
            >
              X
            </button>
          )}

          <div className={`${showForm && "mt-10"} mt-8 w-full flex flex-col`}>
            <label htmlFor="name" className="text-start mb-2">
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("name-example")}
              aria-label="Your name"
              title="Enter your full name"
              required
              className="bg-[rgba(60,60,82,0.4)] h-10 rounded-lg px-4 py-1"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email" className="text-start mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              aria-label="Your email address"
              title="Enter your email address"
              required
              className="bg-[rgba(60,60,82,0.4)] h-10 rounded-lg px-4 py-1"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="subject" className="text-start mb-2">
              {t("subject")}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder={t("subject-example")}
              aria-label="Message subject"
              title="Enter the subject of your message"
              required
              className="bg-[rgba(60,60,82,0.4)] h-10 rounded-lg px-4 py-1"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col h-full flex-1">
            <label htmlFor="message" className="text-start mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t("message-example")}
              aria-label="Send your message"
              title="Send message"
              required
              className={`bg-[rgba(60,60,82,0.4)] min-h-24 2xl:min-h-40 flex-1 rounded-lg px-4 py-2 ${showForm && "resize-none"
                }`}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mx-auto w-full md:w-1/3 my-2 flex justify-center items-center h-12 rounded-full border flex-shrink-0
            border-zinc-400 hover:cursor-pointer hover:bg-[rgba(60,60,82,0.2)] hover:md:scale-110 duration-150
            active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
            <p className="px-2 text-lg">{t("submit")}</p>
          </button>

          {status === "success" && <p role="status" className="lg:w-full text-center text-green-500">Message sent successfully!</p>}
          {status === "error" && <p role="status" className="lg:w-full text-center text-red-500">Failed to send message. Please try again.</p>}
        </div>
      </fieldset>
    </form>
  );
}
