import { NavigationComponent } from "@/components/NavigationComponent";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <NavigationComponent />
      <main className="mt-32">
        <section className="flex flex-col items-center pt-10 bg-[darkgreen] p-10">
          Section 1
          <h1>World <strong>Green</strong> Infrastructure Congress 2026 <strong>Barcelona</strong></h1>
        </section>
        <section className="flex items-center justify-center bg-[purple] p-10">
          Section 2
        </section>
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
