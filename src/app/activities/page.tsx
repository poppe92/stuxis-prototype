"use client";
import Hero from "@/components/Hero";
import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googlePlugin from "@fullcalendar/google-calendar";

function activities() {
  return (
    <div>
      <Hero image="/heroImage.png">
        <h1 className="w-1/3 flex justify-center text-center font-bold text-2xl text-comfy-blue pt-12  underline decoration-light-comfy-red decoration-4 pb-12">
          Aktiviteter
        </h1>
      </Hero>

      <div className="flex flex-col w-full items-center justify-center text-xl px-14">
        <h2 className="text-xl font-bold text-comfy-blue underline decoration-light-comfy-red decoration-4 p-4">
          Stuxisdagen
        </h2>
        <p>Berätta lite om vad stuxisdagen är</p>
        <h2 className="text-xl font-bold text-comfy-blue underline decoration-light-comfy-red decoration-4 p-4">
          Styrelsemöten
        </h2>
        <p>beskriva lite hur ofta vi har styrelsemöten och vad vi pratar om</p>
        <h2 className="text-xl font-bold text-comfy-blue underline decoration-light-comfy-red decoration-4 p-4">
          Årsmöte
        </h2>
        <p>
          Förklara kort att vi har årsmöte som alla medlemmar är välkomna på
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
