"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";

const initValues = { firstName: "", lastName: "", email: "", message: "" };

const initState = { values: initValues };

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const apiKey = process.env.NEXT_PUBLIC_FORMS_KEY as string;

    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      setLoading(false);
      setError(false);
      setMessageSent(true);
      if (firstNameRef && firstNameRef.current) firstNameRef.current.value = "";
      if (lastNameRef && lastNameRef.current) lastNameRef.current.value = "";
      if (emailRef && emailRef.current) emailRef.current.value = "";
      if (messageRef && messageRef.current) messageRef.current.value = "";
    }
    if (!result.success) {
      console.log(result.error);
      setError(true);
      setLoading(false);
    }
  }

  return (
    <form className="flex flex-wrap w-1/2 p-12" onSubmit={handleSubmit}>
      <span className="w-full text-2xl font-bold text-comfy-blue underline decoration-light-comfy-red decoration-4 p-4 text-center">
        Skicka ett mail till oss
      </span>
      {error && (
        <text className="text-red-500 font-bold text-2xl text-center w-full">
          Error, Message was not sent!
        </text>
      )}
      {messageSent && (
        <text className="text-green-500 font-bold text-2xl text-center w-full">
          Tack för ditt email! <FontAwesomeIcon icon={faCheck} />
        </text>
      )}
      <label
        className="items-center flex w-full min-h-[55px] border-r border-l border-t border-comfy-blue p-6 text-comfy-blue underline decoration-light-comfy-red text-xl decoration-2 font-bold"
        htmlFor="firstName">
        Skriv ditt namn:
      </label>
      <div
        className="w-1/2 border-comfy-blue border-b border-l border-t"
        data-validate="Type first name">
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          minLength={3}
          maxLength={20}
          placeholder="Förnamn"
          className="w-full p-6"
          ref={firstNameRef}
        />
      </div>
      <div className="w-1/2 border border-comfy-blue">
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          minLength={2}
          maxLength={20}
          placeholder="Efternamn"
          className="w-full p-6"
          ref={lastNameRef}
        />
      </div>
      <label
        htmlFor="email"
        className="flex items-center w-full border-comfy-blue p-6 font-bold text-comfy-blue underline decoration-light-comfy-red decoration-2 mt-4 border-r border-l border-t">
        Din epost-adress:
      </label>
      <div className="w-full border border-comfy-blue ">
        <input
          type="email"
          name="email"
          id="email"
          required
          minLength={10}
          maxLength={70}
          placeholder="Ex. exempel@email.com"
          className="w-full p-6"
          ref={emailRef}
        />
      </div>
      <label
        htmlFor="message"
        className="w-full border-r border-l border-t border-comfy-blue p-6 font-bold text-comfy-blue underline decoration-light-comfy-red decoration-2 mt-4">
        Meddelande:
      </label>
      <div className="w-full border border-comfy-blue ">
        <textarea
          name="message"
          id="message"
          minLength={1}
          maxLength={500}
          placeholder="Skriv ett meddelande"
          className="w-full block overflow-auto resize-y min-h-[140px] p-6"
          ref={messageRef}></textarea>
      </div>
      <div className="w-full flex flex-wrap pt-6">
        <button
          className=" disabled:text-black disabled:bg-gray-400  disabled:shadow-black  rounded-lg border-2 border-solid shadow-purple-button-shadow bg-light-comfy-purple h-12 w-full hover:bg-comfy-purple border-comfy-purple hover:text-white"
          type="submit"
          disabled={loading}>
          Skicka Meddelande
        </button>
      </div>
      {/* Web3Forms hidden inputs */}
      <input
        type="hidden"
        name="subject"
        value="Nytt mail från Stuxis Kontaktformulär"
      />
      <input type="hidden" name="from_name" value="Stuxis.se Kontaktformulär" />
    </form>
  );
}

export default ContactForm;
