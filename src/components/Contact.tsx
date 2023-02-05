import { useInView } from "framer-motion";
import React, { ChangeEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Swal from "sweetalert2";
import Head from "./Head";
import SubHead from "./SubHead";

type Props = {};

const Contact = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const form = useRef(null);
  // State
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      if (name && email && subject && message) {
        emailjs
          .sendForm(
            "service_wigfx2t",
            "template_8lrdot6",
            form.current,
            "UacrM18BertjSOKq8"
          )
          .then((result) => {
            Swal.fire({
              title: "Your request has been sent successfully!",
              icon: "success",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          });
      } else {
        Swal.fire(
          "Lack of information",
          "Please fill in all the fields of the contact form",
          "error"
        );
      }
    }
  };
  return (
    <div className="container" ref={ref}>
      <div className="flex flex-col items-center gap-10 text-center py-[100px] transition-all duration-1000 ease-linear">
        <Head>Contact me</Head>
        <SubHead>
          If you have other request or question, don't hesitate to contact me
          using below form
        </SubHead>
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 w-full lg:w-1/2"
            autoComplete="off"
          >
            <div className="flex gap-4">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={`w-1/2 input transition-all duration-1000 ease-linear ${
                  isInView
                    ? "translate-y-0 opacity-1"
                    : "translate-y-10 opacity-0"
                }`}
                placeholder="Name"
              />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={`w-1/2 input transition-all duration-1000 ease-linear ${
                  isInView
                    ? "translate-y-0 opacity-1"
                    : "translate-y-10 opacity-0"
                }`}
                placeholder="Email"
              />
            </div>
            <input
              type="text"
              className={`input transition-all duration-1000 ease-linear ${
                isInView
                  ? "translate-y-0 opacity-1"
                  : "translate-y-10 opacity-0"
              }`}
              id="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              name="subject"
              placeholder="Subject"
            />
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={`input resize-none h-[300px] transition-all duration-1000 ease-linear ${
                isInView
                  ? "translate-y-0 opacity-1"
                  : "translate-y-10 opacity-0"
              }`}
              placeholder="Message"
            ></textarea>
            <div className="flex justify-start">
              <button className="py-2 px-4 rounded border border-solid border-white text-white bg-transparent">
                Send
              </button>
            </div>
          </form>
          <div
            className={`w-full lg:w-1/2 h-[460px] relative transition-all ease-linear duration-1000 ${
              isInView ? "opacity-1" : "opacity-0"
            }`}
          >
            <div className="absolute top-1 right-1 z-[999999] p-5 text-left bg-black text-gray-200 shadow-sm">
              <p>Thành phố Hồ Chí Minh</p>
              <p>Đường số 1, Gò Vấp</p>
              <p className="text-sm text-yellow-300/60">
                trungnguyenhuynhminh46@gmail.com
              </p>
            </div>
            <MapContainer
              center={[10.821773, 106.683827]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[10.821773, 106.683827]}>
                <Popup>This is where I live</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
