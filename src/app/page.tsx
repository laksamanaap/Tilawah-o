"use client"
import React, { useEffect, useState } from 'react'
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
import axiosHelper from '@/lib/axiosHelper';
import { AxiosResponse } from 'axios';

export default function Home() {

  interface Surah {
    nomor: number
    nama: string
    namaLatin: string
    jumlahAyat: number
    tempatTurun: string
    arti: string
    deskripsi: string
  }

  const [surah, setSurah] = useState<Array<Surah>>([]);

  const fetchSurah = async () => {
    try {
      const response: AxiosResponse = await axiosHelper({
        url: '/v2/surat',
        method: 'GET',
      })
      setSurah(response?.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchSurah()
  }, [])

  console.log(surah, 'SURAH RESPONSE')

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
