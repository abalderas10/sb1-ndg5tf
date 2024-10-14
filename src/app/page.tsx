import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Menu, Check, Globe, Pause, Play } from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { keyframes, styled } from '@stitches/react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translations } from '@/lib/translations'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translations.es },
      en: { translation: translations.en },
      zh: { translation: translations.zh },
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1>Prueba de Renderizado</h1>
      <p>Si puedes ver este texto, la página está renderizando correctamente.</p>
    </div>
  )
}