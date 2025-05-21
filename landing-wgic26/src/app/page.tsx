"use client"

import { NavigationComponent } from "@/components/NavigationComponent";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Countdown from "@/components/Countdown";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <NavigationComponent />
      <main className="mt-32">
        <section className="lg:pt-24">
          <div className="uppercase text-3xl xs:text-4xl pr-8 sm:text-5xl w-full md:text-6xl lg:text-5xl lg:w-3/5 xl:text-6xl leading-tight tracking-tight">
            World <strong>Green</strong> Infrastructure Congress 2026 <strong>Barcelona</strong>
          </div>
          <div className="flex flex-col h-auto content-between gap-10 w-full lg:w-2/5">
            <div className="flex w-full h-full justify-between pt-7 border-t-1 border-white/50">
              <h6 className="flex w-full h-full">27-28 OCT 2026</h6>
              <h6 className="flex w-full h-full">CCIB - Parc del Forum, Barcelona (Spain)</h6>
            </div>
            <div className="flex w-full h-full justify-between pt-7 border-t-1 border-white/50">
              <h6 className="flex w-full h-full">30 OCT 2026</h6>
              <h6 className="flex w-full h-full">Auditori, Universitat de Lleida, Lleida (Spain)</h6>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-0">
          <div className="bg-[url(/img/hero.png)] bg-no-repeat bg-cover bg-center w-full h-[700px]"></div>
          <Countdown />
          <div id="banner" className="bg-cement text-mortar w-full h-[500px] pl-12 pr-14 py-12 flex flex-col justify-between items-end">
            <div className="flex flex-col gap-3 uppercase text-5xl w-full">
              <div>Talks</div>
              <div>Exhibitions</div>
              <div>Networking</div>
              <div>Content</div>
            </div>
            <img src="/img/wgic26_logo.svg" className="max-h-32" />
          </div>
        </section>
        <section id="locations" className="flex flex-col gap-6">
          <div className="text-xs uppercase w-full border-b border-white/50 py-2 tracking-wider">Locations</div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="bg-cactus text-white aspect-square flex-1 px-12 py-10">Barcelona</div>
            <div className="bg-sansiviera text-white aspect-square flex-1 px-12 py-10">Lleida</div>
            <div className="bg-transparent text-white aspect-square flex-1 px-12 py-10 border-2 border-sansiviera">Online</div>

          </div>
        </section>
        <section id="banner-img" className="flex flex-col lg:flex-row gap-0">
          <div className="bg-[url(/img/image.png)] bg-no-repeat bg-cover bg-center w-full xl:w-1/2 h-[500px]"></div>
          <div className="bg-cement text-mortar w-full xl:w-1/2 h-[500px] pl-10 pr-12 py-10 flex flex-col justify-between items-end">
            <div className="flex flex-col gap-2 uppercase text-4xl w-full">
              <div>Talks</div>
              <div>Exhibitions</div>
              <div>Networking</div>
              <div>Content</div>
            </div>
            <img src="/img/wgic26_logo.svg" className="max-h-24" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
