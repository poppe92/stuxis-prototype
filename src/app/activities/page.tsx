"use client";
import Hero from "@/components/Hero";
import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googlePlugin from "@fullcalendar/google-calendar";
import List from "@/components/List";

function activities() {
  return (
    <div>
      <Hero image="/heroImage.png">
        <h1 className="w-1/3 flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12  underline decoration-light-comfy-red decoration-4 pb-12">
          Aktiviteter
        </h1>
      </Hero>

      <div className="flex flex-col justify-center items-center text-xl px-24">
        <h1 className="text-xl font-bold text-comfy-blue underline decoration-light-comfy-red decoration-4 p-2 w-2/3">
          Stuxisdagen
        </h1>
        <p className="w-2/3 p-2 ">
          Stuxisdagen är en dag som vi arrangerar för våra medlemmar en gång om
          året på hösten. under stuxisdagen kommer det finnas:
        </p>
        <div className="w-2/3">
          <List>
            <p>Hoppborg blåses upp på gräsmattan</p>
            <p>Ansiktsmålningar</p>
            <p>Roliga aktiviteter</p>
            <p>Hemliga besök</p>
            <p>Filtloppis</p>
            <p>Fika</p>
            <p>Grillad korv</p>
          </List>
        </div>
        <p className="w-2/3 p-2 ">
          Vi letar alltid hjälp inför och under Stuxisdagen, om detta skulle
          vara intressant kan man höra av sig till oss i styrelsen på
          <a
            className="font-bold p-1 underline decoration-light-comfy-red decoration-3"
            href="mailto:stuxisparklek@gmail.com">
            stuxisparklek@gmail.com
          </a>
        </p>
        <h1 className="text-xl font-bold text-comfy-blue underline decoration-light-comfy-red decoration-4 p-2 w-2/3">
          Styrelsemöten
        </h1>
        <p className="w-2/3 p-2 ">
          Styrelsemöten hålls två till tre gånger per år och sedan efter behov.
          Vill man engagera sig i styrelsen kan man läsa mer om det här: “om
          oss”
        </p>
        <h1 className="text-xl font-bold text-comfy-blue underline decoration-light-comfy-red decoration-4 p-2 w-2/3">
          Årsmöte
        </h1>
        <p className="w-2/3 p-2 ">
          Årsmöte hålls en gång om året och det är då välkommet för alla
          medlemmar som vill vara med att komma ner. Då bestämmer vi datum för
          stuxisdagen, städdag och vad som ska köpas in, som inte köps in på
          löpande band.
        </p>
      </div>

      <h1 className="text-center font-bold text-2xl text-comfy-blue underline decoration-light-comfy-red decoration-4 py-12">
        Stuxis öppettider och bokade dagar
      </h1>

      {/* calendar grid */}
      <div className="w-full justify-center items-center bg-reen-200 px-24">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            googlePlugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height={600}
          googleCalendarApiKey={process.env.NEXT_PUBLIC_API_KEY}
          events={{
            googleCalendarId: "stuxisparklek@gmail.com",
            borderColor: "green",
            editable: false,
          }}
          lazyFetching={true}
        />
      </div>
    </div>
  );
}

export default activities;
