"use client";

import React from "react";

interface StepProps {
  title: string;
  label: React.ReactNode | string;
}

export default function Component() {
  const steps = [
    {
      title: "Matrícula y datos",
      label:
        "Ingresa la matrícula del coche, comunidad autónoma del comprador, precio de venta del coche, y tus datos básicos de contacto.",
    },
    {
      title: "Presupuesto y pago ",
      label: (
        <>
          ¡Calculamos tu presupuesto al momento!{" "}
          <span className="text-indigo">
            Solo pagarás las tasas DGT e impuestos ITP
          </span>
          . Se aplicará tu descuento automático y continúa para realizar el
          pago.{" "}
        </>
      ),
    },
    {
      title: "Identificación biométrica",
      label: (
        <>
          Es hora de identificar vuestras identidades mediante la captura de
          ambos lados del DNI/NIE y un reconocimiento facial. <br /> ¡100%
          online!
        </>
      ),
    },
    {
      title: "Firma electrónica",
      label:
        "Firma digitalmente los documentos. ¡Y listo! Tramicar se encarga de la gestión con la DGT y de enviarte tu nuevo permiso de circulación a casa.",
    },
  ];

  return (
    <div className="w-full flex mb-[69px]">
      {steps.map((step: StepProps, index: number) => {
        let lineStyle = "";

        if (index === 0) {
          lineStyle = "w-1/2 self-end";
        } else if (index === steps.length - 1) {
          lineStyle = "w-1/2 self-start";
        } else {
          lineStyle = "w-full";
        }
        const stepNumber = index + 1;
        return (
          <div className="flex grow flex-col items-center relative" key={index}>
            <h4 className="font-bold text-[20xp] mb-4">{step.title}</h4>
            <span
              className={`${lineStyle} line h-px bg-cian absolute translate-y-19 z-1`}
            ></span>
            <div className="rounded-full flex items-center justify-center w-[61px] h-[61px] bg-indigo text-white text-[30px] mb-6 relative z-2">
              {stepNumber}
            </div>
            <p className="text-base px-8">{step.label}</p>
          </div>
        );
      })}
    </div>
  );
}
