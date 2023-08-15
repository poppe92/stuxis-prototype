"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface IContactFormInputs {
  "h-captcha-response": string;
  access_key: string;
  botcheck: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const { register, setValue, handleSubmit, reset } =
    useForm<IContactFormInputs>();
  const apiKey = process.env.NEXT_PUBLIC_FORMS_KEY as string;

  const onHCaptchaChange = (token: string) => {
    setValue("h-captcha-response", token);
  };

  async function onSubmit(data: IContactFormInputs) {
    setLoading(true);

    console.log(data);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    });

    const result = await response.json();
    if (result.success) {
      setLoading(false);
      setError(false);
      setMessageSent(true);
      reset();
    } else {
      setError(true);
      setLoading(false);
      console.log(result.error);
    }
  }

  return (
    <form
      className="flex flex-wrap w-1/2 p-12"
      onSubmit={handleSubmit(onSubmit)}>
      {/* Web3Forms hidden inputs */}
      <input type="hidden" value={apiKey} {...register("access_key")} />
      <input
        type="checkbox"
        id=""
        className="hidden"
        style={{ display: "none" }}
        {...register("botcheck")}
      />
      <input
        type="hidden"
        name="subject"
        value="Nytt mail från Stuxis Kontaktformulär"
      />
      <input type="hidden" name="from_name" value="Stuxis.se Kontaktformulär" />

      <span className="w-full text-2xl font-bold text-comfy-blue underline decoration-light-comfy-red decoration-4 p-4 text-center">
        Skicka ett mail till oss
      </span>
      {error && (
        <p className="text-red-500 font-bold text-2xl text-center w-full">
          Error, Message was not sent!
        </p>
      )}
      {messageSent && (
        <p className="text-green-500 font-bold text-2xl text-center w-full">
          Tack för ditt email!{" "}
          <span>
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </p>
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
          placeholder="Förnamn"
          required
          minLength={3}
          maxLength={20}
          className="w-full p-6"
          {...register("firstName")}
        />
      </div>
      <div className="w-1/2 border border-comfy-blue">
        <input
          type="text"
          id="lastName"
          required
          minLength={2}
          maxLength={20}
          placeholder="Efternamn"
          className="w-full p-6"
          {...register("lastName")}
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
          id="email"
          required
          minLength={10}
          maxLength={70}
          placeholder="Ex. exempel@email.com"
          className="w-full p-6"
          {...register("email")}
        />
      </div>
      <label
        htmlFor="message"
        className="w-full border-r border-l border-t border-comfy-blue p-6 font-bold text-comfy-blue underline decoration-light-comfy-red decoration-2 mt-4">
        Meddelande:
      </label>
      <div className="w-full border border-comfy-blue ">
        <textarea
          id="message"
          minLength={1}
          maxLength={500}
          placeholder="Skriv ett meddelande"
          className="w-full block overflow-auto resize-y min-h-[140px] p-6"
          {...register("message")}
        />
      </div>
      <HCaptcha
        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
        onVerify={onHCaptchaChange}
      />
      <div className="w-full flex flex-wrap pt-6">
        <button
          className=" disabled:text-black disabled:bg-gray-400  disabled:shadow-black  rounded-lg border-2 border-solid shadow-purple-button-shadow bg-light-comfy-purple h-12 w-full hover:bg-comfy-purple border-comfy-purple hover:text-white"
          type="submit"
          disabled={loading}>
          Skicka Meddelande
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
