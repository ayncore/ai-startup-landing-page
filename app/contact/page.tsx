"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Page: React.FC = () => {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setFormStatus(null);

    try {
      // Create a form-like object for emailjs
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      setFormStatus("Email sent successfully!");
      reset(); // Clear form after successful submission
    } catch (error) {
      console.error(error);
      setFormStatus("Failed to send email. Please try again.");
    }
  };

  const socialMediaLinks = [
    {
      name: "GitHub",
      link: "#",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      link: "#",
      icon: FaLinkedin,
    },
    {
      name: "Twitter / X",
      link: "#",
      icon: FaTwitter,
    },
  ];
  

  return (
    <section
      id="contact"
      className="relative w-full pt-16 min-h-screen bg-black text-indigo-400"
    >
      {/* Header */}
      <motion.h1
        className="text-4xl p-4 font-bold tracking-wide text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact
      </motion.h1>

      {/* Background Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-400 h-32 w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
        {/* Social Media Section */}
        <motion.div
          className="w-full md:w-1/2 p-5 md:px-0 mx-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900 border border-secondaryBackground w-full lg:w-1/2 h-full p-5 pt-8">
            <h3 className="text-2xl font-semibold mb-5">Our Social Media</h3>
            <div className="flex flex-col gap-3">
              {socialMediaLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  className="flex items-center hover:text-white hover:bg-indigo-400 p-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <item.icon className="w-6 h-6 m-2" />
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 border border-ingido-500 p-6 bg-gray-900"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl pb-3 font-semibold">Send Message</h2>
          <div>
            <div className="flex flex-col mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-secondaryBackground focus:outline-none focus:bg-gray-800 focus:text-secondaryBackground"
                autoComplete="off"
              />
              {errors.name && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-secondaryBackground focus:outline-none focus:bg-gray-800 focus:text-secondaryBackground"
                autoComplete="off"
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                rows={4}
                id="message"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-indigo-500 focus:outline-none focus:bg-gray-800 focus:text-indigo-500"
              ></textarea>
              {errors.message && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>
          <div className="w-full pt-3">
            <motion.button
              type="submit"
              className="w-full bg-gray-900 border border-indigo-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-indigo-500 hover:text-white text-xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </div>
          {/* Status Message */}
          {formStatus && (
            <p
              className={`pt-3 text-center ${
                formStatus.includes("successfully")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {formStatus}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Page;
