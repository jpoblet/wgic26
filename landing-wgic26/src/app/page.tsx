import { NavigationComponent } from "@/components/NavigationComponent";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <NavigationComponent />
      <main className="mt-32">
        <section className="lg:pt-24">
          <div className="uppercase text-4xl pr-8 sm:text-5xl w-full md:text-6xl lg:text-5xl lg:w-3/5 xl:text-6xl leading-tight tracking-tight">
            World <strong>Green</strong> Infrastructure Congress 2026 <strong>Barcelona</strong>
          </div>
          <div className="flex flex-col h-auto content-between gap-10 w-full lg:w-2/5">
            <div className="flex w-full h-full justify-between pt-7 border-t-1 border-white">
              <h6 className="flex w-full h-full">27-28 OCT 2026</h6>
              <h6 className="flex w-full h-full">CCIB - Parc del Forum, Barcelona (Spain)</h6>
            </div>
            <div className="flex w-full h-full justify-between pt-7 border-t-1 border-white">
              <h6 className="flex w-full h-full">30 OCT 2026</h6>
              <h6 className="flex w-full h-full">Auditori, Universitat de Lleida, Lleida (Spain)</h6>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-[url(/img/hero.png)] bg-no-repeat bg-cover bg-center w-full h-[764px] bg-[blue]">
          </div>
        </section>
        <section className="gap-10">
          <Button variant="default" size="default">
            Button
          </Button>
          <Button variant="default" size="icon">
            <Menu className="size-6" />
          </Button>
          <Button variant="default" size="sm">
            Button
          </Button>
          <Button variant="default" size="lg">
            Button
          </Button>
        </section>
        <section className="gap-10">
          <Button variant="secondary" size="default">
            Button
          </Button>
          <Button variant="secondary" size="icon">
            <Menu className="size-6" />
          </Button>
          <Button variant="secondary" size="sm">
            Button
          </Button>
          <Button variant="secondary" size="lg">
            Button
          </Button>
        </section>
        <section className="">
          <Button variant="inverse" size="default">
            Button
          </Button>
          <Button variant="inverse" size="icon">
            <Menu className="size-6" />
          </Button>
          <Button variant="inverse" size="sm">
            Button
          </Button>
          <Button variant="inverse" size="lg">
            Button
          </Button>
        </section>

        <section>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Body Large</h6>
          <p>Body sm</p>
        </section>
      </main>
      <footer className="bg-[gray] flex justify-between px-24 py-20 w-full font-medium">
        <h4 className="font-medium w-1/8">World <strong>Green</strong> Infrastructure Congress 2026 <strong>Barcelona</strong></h4>
        <p>Footer Right</p>
      </footer>
    </div>
  );
}
