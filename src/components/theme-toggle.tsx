"use client";

import { Moon, Sun } from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

// Rótulos por idioma (aria-label/title) — sem depender dos arquivos de mensagens,
// já que o toggle é um elemento de chrome simples.
const LABELS: Record<string, { dark: string; light: string }> = {
  pt: { dark: "Ativar modo escuro", light: "Ativar modo claro" },
  en: { dark: "Switch to dark mode", light: "Switch to light mode" },
  es: { dark: "Activar modo oscuro", light: "Activar modo claro" },
  it: { dark: "Attiva modalità scura", light: "Attiva modalità chiara" },
};

/**
 * Alterna o tema claro/escuro adicionando/removendo a classe `dark` no <html>
 * (o tema é definido por @custom-variant dark no globals.css). Persiste a escolha
 * em localStorage; o script anti-flash no layout aplica a classe antes da pintura.
 * Padrão = claro (a identidade da marca é o "papel" off-white); o escuro é opt-in.
 */
export function ThemeToggle() {
  const locale = useLocale();
  const labels = LABELS[locale] ?? LABELS.pt;
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage indisponível (modo privado etc.) — segue só na sessão
    }
    setIsDark(next);
  };

  // Antes de montar, o estado real do tema (definido pelo script inline) ainda
  // não é conhecido no React — renderiza um placeholder do mesmo tamanho pra
  // evitar mismatch de hidratação e salto de layout.
  if (!mounted) {
    return (
      <Button
        type="button"
        variant="outline"
        size="icon-lg"
        className="rounded-none border-black/20"
        aria-hidden="true"
        tabIndex={-1}
      >
        <Sun className="h-4 w-4 opacity-0" />
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      className="rounded-none border-black/20"
      onClick={toggle}
      aria-label={isDark ? labels.light : labels.dark}
      title={isDark ? labels.light : labels.dark}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
