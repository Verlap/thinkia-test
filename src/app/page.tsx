import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Stepper from "@/app/components/stepper/Component";
import Cards from "@/app/components/cards/Component";
import Navbar from "@/app/components/navbar/Component";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-[family-name:var(--font-poppins)]">
        <header className="container py-16">
          <Image
            src={"/assets/logos/isotipo.png"}
            width={80}
            height={120}
            alt="Logo de Tramicar"
          />
        </header>
        <main className="container flex relative my-30">
          <div className="w-3/5">
            <h1 className="font-bold leading-[52px] text-[46px] mb-8">
              <b>
                <span className="text-indigo">Esto es una prueba</span>
              </b>{" "}
              para demostrar tus capacidades de{" "}
              <span className="text-indigo">maquetación</span>
            </h1>
            <p className="font-medium text-[19px] leading-[24px] w-[599px] text-blue mb-6">
              Solo pagarás los impuestos (ITP) y tasas (DGT).
              <br />
              Línea Directa te regala el 100% de los gastos de gestión*
            </p>
            <p className="text-[19px] leading-[24px] w-[538px] mb-6">
              En Tramicar, tenemos un equipo de profesionales listos para
              gestionar el cambio de nombre de tu vehículo de manera
              completamente online, desde cualquier lugar y en cualquier momento
              del año.
            </p>

            <button className="flex gap-[10px] rounded-[10px] py-5 px-8 bg-indigo text-white font-bold cursor-pointer">
              Realiza tu trámite ahora
              <ArrowRight />
            </button>
          </div>
          <Image
            src={"/assets/background/main.png"}
            width={606}
            height={462}
            alt=""
            className="absolute right-0 top-0"
          />
        </main>
        <section className="container flex flex-col items-center bg-blue-grey rounded-[30px] text-center my-30 p-16">
          <h2 className="font-semibold text-[44px] leading-[48px] w-[773px] mb-[82px]">
            <span className="text-indigo">Pasos</span> para hacer la
            transferencia de tu coche con nosotros:
          </h2>
          <Stepper />
          <button className="flex gap-[10px] rounded-[10px] py-5 px-8 bg-indigo text-white font-bold cursor-pointer">
            Realiza tu trámite
            <ArrowRight />
          </button>
        </section>
        <section className="container text-center flex flex-col items-center my-30">
          <h2 className="font-semibold text-[44px] leading-[48px] w-[723px] mb-[82px]">
            <span className="text-indigo">Ventajas</span> de hacer el cambio de
            titularidad online con Tramicar.
          </h2>
          <Cards />
          <button className="flex gap-[10px] rounded-[10px] py-5 px-8 bg-indigo text-white font-bold cursor-pointer">
            Realiza tu trámite
            <ArrowRight />
          </button>
        </section>
        <hr className="opacity-13 w-full container" />
        <section className="container my-16">
          <p className="text-[14px] leading-[24px] tracking-[-1.1%] text-blue">
            *Línea Directa asume únicamente los gastos de gestión del servicio
            “transferencia estándar”. En el caso de que desees contratar nuestro
            servicio “transferencia express”, será necesario abonar la cantidad
            adicional correspondiente, 15€, la cual no está cubierta por Línea
            Directa.
          </p>
          <br />
          <p className="text-[14px] leading-[24px] tracking-[-1.1%] text-blue">
            * TRAMICAR es una empresa dedicada a representación de las partes
            involucradas ante la Dirección General de Tráfico. Para el servicios
            de “transferencia estándar”, Tramicar lleva a cabo la gestión de
            expediente con la administración pública, ejecutando el trámite en
            nombre de las partes interesadas. La Dirección General de Tráfico
            enviará la documentación provisional y definitiva según sus
            procesos.  Los plazos de entrega del nuevo permiso de circulación
            oscilan entorno a 3 - 6 semanas, no obstante, Tramicar no se
            responsabiliza ante cualquier demora por parte de la administración
            pública. En el caso de la contratación del servicio de
            “transferencia express”, Tramicar trabaja con las mejores gestorías
            colegiadas, lo cual nos permite llevar a cabo la gestión del
            expediente con plazos más reducidos, estos oscilan entorno a 7-15
            días. Tramicar no se responsabiliza ante cualquier demora por parte
            de la gestoría en cuestión.
          </p>
          <br />
          <p className="text-[14px] leading-[24px] tracking-[-1.1%] text-blue">
            La documentación entregada por TRAMICAR al final del flujo web
            (certificado de operaciones) es un documento con validez jurídica
            que acredita la compraventa realizada entre las partes involucradas
            proporcionando cobertura legal desde el primer momento.
          </p>
        </section>
        <section className="w-full flex items-center justify-center gap-24">
          <Image
            src={"/assets/logos/imagotipo.png"}
            width={250}
            height={34}
            alt="imagotipo de Tramicar"
          />
          <Image
            src={"/assets/misc/lda.png"}
            width={294}
            height={104}
            alt="Linea de atención"
          />
        </section>
        <footer className="container flex justify-between text-grey pb-[77px] pt-[72px]">
          <span>©2023 Tramicar. Todos los derechos reservados.</span>
          <Navbar />
        </footer>
    </div>
  );
}
