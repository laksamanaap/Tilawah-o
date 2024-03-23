"use-client"
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen	">
        <Navbar />
        <div className="flex flex-row">
          <Sidebar />
          <MainContent />
        </div>
      </main>
    </>
  );
}
