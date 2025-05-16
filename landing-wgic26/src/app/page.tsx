import HeaderComponent from "@/components/HeaderComponent";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <main className="flex flex-col items-center">
        <h1>World <strong>Green</strong> Infrastructure Congress 2026 <strong>Barcelona</strong></h1>

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Body Large</h6>
        <p>Body Small</p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        FOOTER
      </footer>
    </div>
  );
}
