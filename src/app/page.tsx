import Introduction from "@/components/sections/Introduction";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <Introduction />
      <Education />
    </main>
  );
}
