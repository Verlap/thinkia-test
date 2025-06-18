"use client";

import React from "react";

interface CardProps {
  icon: string;
  title: string;
  label: string;
  width?: string;
  height?: string;
}

export default function Component() {
  const cards = [
    {
      icon: "dni",
      width: "88px",
      height: "53px",
      title: "100% Online",
      label:
        "Identificación y Firma telemática, envío a tu domicilio de tu nuevo Permiso de Circulación.",
    },
    {
      icon: "shield",
      width: "42px",
      height: "49px",
      title: "Seguro",
      label:
        "Garantizamos la seguridad del proceso, evita fraudes y/o estafas.",
    },
    {
      icon: "fast",
      width: "55px",
      height: "40px",
      title: "Rápido",
      label: "En 15 minutos, habrás tramitado la transferencia.",
    },
    {
      icon: "devices",
      width: "50px",
      height: "45px",
      title: "Cómodo",
      label:
        "Sin enviar papeles, sin tener que moverte, desde tu teléfono u ordenador.",
    },
  ];

  return (
    <div className="w-full flex mb-[69px]">
      {cards.map((card: CardProps, index: number) => {
        return (
          <div className="flex grow flex-col items-center">
            <img className="mb-[30px]" width={card.width} height={card.height} src={`/assets/icons/${card.icon}.png`}/>
            <h4 className="font-bold text-8 mb-4">{card.title}</h4>
            <p className="text-base w-[200px]">{card.label}</p>
          </div>
        );
      })}
    </div>
  );
}
