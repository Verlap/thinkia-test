"use client";

import React from "react";

interface CardProps {
  icon: string;
  title: string;
  label: string;
}

export default function Component() {
  const cards = [
    {
      icon: "dni",
      title: "100% Online",
      label:
        "Identificación y Firma telemática, envío a tu domicilio de tu nuevo Permiso de Circulación.",
    },
    {
      icon: "shield",
      title: "Seguro",
      label:
        "Garantizamos la seguridad del proceso, evita fraudes y/o estafas.",
    },
    {
      icon: "fast",
      title: "Rápido",
      label: "En 15 minutos, habrás tramitado la transferencia.",
    },
    {
      icon: "devices",
      title: "Cómodo",
      label:
        "Sin enviar papeles, sin tener que moverte, desde tu teléfono u ordenador.",
    },
  ];

  return (
    <div className="w-full flex mb-[69px]">
      {cards.map((card: CardProps, index: number) => {
        return (
          <div className="flex grow flex-col items-center gap-4 px-6 " key={index}>
            <img className="h-[3rem]"  src={`/assets/icons/${card.icon}.png`}/>
            <h4 className="font-bold text-8">{card.title}</h4>
            <p className="text-base max-w-[250px] text-pretty">{card.label}</p>
          </div>
        );
      })}
    </div>
  );
}
