"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Slide, ToastContainer, toast } from 'react-toastify';


export default function Home() {
  const [phone, setPhone] = useState("");

  const sendEmail = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    const templateParams = {
      user_name: form.name.value,
      user_email: form.email.value,
      user_phone: phone,
      time: new Date().toLocaleString(),
      message: form.message.value,
    };

    try {
      await emailjs.send(
        "service_d36lzv4",        
        "template_bayn3or",       
        templateParams,
        "g_aq-uDeSczFuOdtD"         
      );
      toast.success('Success!')

      form.reset();
      setPhone("");
    } catch (error) {
      console.log(error);
      toast.error('Error!')
    }
  };

  return (
    <section className="h-[80vh] flex justify-center items-center px-4">
      <div className="w-full max-w-xs text-center">

        <div className="mb-2">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-bold mb-4"
          >
            Contact Me
          </motion.h2>

          <p className="text-gray-200 mb-2 text-sm">
            If you have any questions or want to work together, please fill out the form below.
          </p>
        </div>

        <form className="grid gap-3" onSubmit={sendEmail}>

          <motion.input
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-white bg-transparent text-white placeholder-gray-200 text-sm"
          />

          <motion.input
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-white bg-transparent text-white placeholder-gray-200 text-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PhoneInput
              country={"uz"}
              value={phone}
              onChange={setPhone}
              inputStyle={{
                width: "100%",
                height: "36px",
                backgroundColor: "transparent",
                color: "#fff",
                borderRadius: "0.5rem",
                border: "1px solid #fff",
                fontSize: "14px",
              }}
              buttonStyle={{
                border: "none",
                background: "transparent",
              }}
            />
          </motion.div>

          <motion.textarea
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            required
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-white bg-transparent text-white placeholder-gray-200 h-24 resize-none text-sm"
          />

          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-2 bg-white text-black rounded-lg hover:bg-gray-200 transition text-sm"
          >
            Send Message
          </motion.button>

        </form>
      </div>
      <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="dark"
transition={Slide}
/>
    </section>
  );
}
