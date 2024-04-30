import React, { useRef, useState } from "react";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from "@emailjs/browser";


import mtu from "@/assets/img/myTutorsUnlimited.png";

function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useRef()

  const notify = () => toast(msg);


  const sendEmail = (e) => {
    e.preventDefault()
    setSuccess("");
    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!message) {
      setError("Please enter your message");
      return;
    }

    setError("");
    setIsLoading(true);


    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID},
      )
      .then(
        () => {

          setIsLoading(false)
          setSuccess("Your message has been sent. We will get back to you soon.")
          setName("")
          setEmail("")
          setMessage("")
          toast.success("Your message has been sent. We will get back to you soon.");
        },
        (error) => {
          setError("An error occurred. Please try again later.")
          console.log(error);
          setIsLoading(false)
          toast.error("An error occurred. Please try again later.");
        })
        
  };
  
  
  return (
    <div className="w-full md:w-3/4 md:mx-auto flex justify-center items-center ">
      <div className="flex justify-center items-center flex-col gap-10 sm:gap-0 md:flex-row border-[1px] border-slate-500">
        <div className="flex-1 p-4 lg:p-10 w-full">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold  text-slate-900 mb-10">
              Get In touch with us
            </h1>
            <div></div>
            <div>
              <form className="space-y-5 w-full" ref={form} onSubmit={sendEmail}>
                <div className="grid w-full md:max-w-md items-center gap-1.5">
                  <Label htmlFor="name" className="text-slate-900 font-light">
                    Name
                  </Label>
                  <Input type="text" id="name" name="userName" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="grid w-full md:max-w-md items-center gap-1.5">
                  <Label htmlFor="email" className="text-slate-900 font-light">
                    Email
                  </Label>
                  <Input type="email" id="email" name="userEmail" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="grid w-full md:max-w-md gap-1.5">
                  <Label
                    htmlFor="messageBox"
                    className="text-slate-900 font-light"
                  >
                    Your Message
                  </Label>
                  <Textarea id="messageBox" name="userMessage" onChange={(e) => setMessage(e.target.value)} />
                  <p className="text-sm text-muted-foreground">
                    Your message will be copied to the support team.
                  </p>
                </div>

                <div>
                  <Button type="submit">{isLoading? (<span className="loading loading-spinner">Loading</span>) : success ? "Sent" : "Send"}</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 sm:hidden lg:block lg:w-full lg:h-full">
          <Image
            src={mtu}
            alt="My Tutors Unlimited Home"
            className="w-full h-full"
          />
        </div>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
}

export default contact;
