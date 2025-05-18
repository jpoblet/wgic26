import { NavigationComponent } from "@/components/NavigationComponent";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <NavigationComponent />
      <main className="mt-32">
        <section className="flex flex-col justify-center pt-20">
          <div className="flex pt-10 p-16">
            <div className="w-3/5">
              <h1>World <strong>Green</strong> Infrastructure Congress 2026 <strong>Barcelona</strong></h1>
            </div>
            <div className="flex flex-col w-2/5 h-auto content-between gap-10">
              <div className="flex w-full h-full justify-between pt-7 border-t-1 border-white">
                <h6 className="flex w-full h-full">27-28 OCT 2026</h6>
                <h6 className="flex w-full h-full">CCIB - Parc del Forum, Barcelona (Spain)</h6>
              </div>
              <div className="flex w-full h-full justify-between pt-7 border-t-1 border-white">
                <h6 className="flex w-full h-full">30 OCT 2026</h6>
                <h6 className="flex w-full h-full">Auditori, Universitat de Lleida, Lleida (Spain)</h6>
              </div>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center p-16">
          <div className="bg-[url(/img/hero.png)] bg-no-repeat bg-cover bg-center w-full h-[764px] bg-[blue]">
          </div>        </section>
        <section className="flex items-center justify-center bg-[darkblue] p-10">
          Section 3
        </section>
        <section className="flex flex-col items-center justify-center bg-[darkred] p-10">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Body Large</h6>
          <p>Body Small</p>
        </section>
      </main>
      <footer className="bg-[gray] flex justify-between px-24 py-20 w-full font-medium">
        <h4 className="font-medium w-1/8">World <strong>Green</strong> Infrastructure Congress 2026 <strong>Barcelona</strong></h4>
        <p>Footer Right</p>
      </footer>
    </div>
  );
}
