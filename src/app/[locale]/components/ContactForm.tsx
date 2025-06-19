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
    <form onSubmit={handleSubmit} className="w-full h-full">
      <fieldset className="h-full">
        <legend className={`${showForm && "hidden"} w-full text-center text-2xl mb-8`}>{t("form")}</legend>
        <div
          className={`${showForm ? "bg-glass2 backdrop-blur-md md:border rounded-asym2" : "bg-glass border rounded-asym pb-10 lg:pb-8"} grid grid-cols-1 lg:grid-cols-2 h-full gap-8 border-zinc-700 col-span-2 p-4 md:p-6 relative`}
        >
          {showForm && (
            <button
              type="button"
              onClick={handleFormButton}
              className="absolute right-8 top-4 text-zinc-400 font-bold border-2 border-zinc-400 rounded-full px-3 py-1 hover:cursor-pointer hover:bg-[rgba(60,60,82,0.4)] active:scale-75 duration-150"
            >
              X
            </button>
          )}

          <div className={`${showForm && "mt-10"} mt-8 col-span-1 flex flex-col`}>
            <label htmlFor="name" className="text-start mb-2">
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("name-example")}
              required
              className="bg-[rgba(60,60,82,0.4)] h-10 rounded-lg px-4 py-1"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={`${showForm && "lg:mt-10"} lg:mt-8 col-span-1 flex flex-col`}>
            <label htmlFor="email" className="text-start mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              required
              className="bg-[rgba(60,60,82,0.4)] h-10 rounded-lg px-4 py-1"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="lg:col-span-2 flex flex-col">
            <label htmlFor="subject" className="text-start mb-2">
              {t("subject")}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder={t("subject-example")}
              required
              className="bg-[rgba(60,60,82,0.4)] h-10 rounded-lg px-4 py-1"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="lg:col-span-2 flex flex-col">
            <label htmlFor="message" className="text-start mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t("message-example")}
              required
              className={`bg-[rgba(60,60,82,0.4)] min-h-32 2xl:min-h-40 rounded-lg px-4 py-2 ${showForm && "resize-none"
                }`}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="lg:col-span-2 mx-auto w-full md:w-1/3 my-2 flex justify-center items-center h-12 rounded-full border border-zinc-400 hover:cursor-pointer hover:bg-[rgba(60,60,82,0.2)] hover:md:scale-110 duration-150 active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
            <p className="px-2 text-lg">{t("submit")}</p>
          </button>

          {status === "success" && <p className="lg:col-span-2 text-center text-green-500">Message sent successfully!</p>}
          {status === "error" && <p className="lg:col-span-2 text-center text-red-500">Failed to send message. Please try again.</p>}
        </div>
      </fieldset>
    </form>
  );
}
