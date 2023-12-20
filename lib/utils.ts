import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Persona } from "./types"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// prettier-ignore
export const personas: Persona[] = [
  { id: 1, name: "Arthur Taylor", src: "/personas/Persona-Arthur-Taylor.png" },
  { id: 2, name: "Emma Wright", src: "/personas/Persona-Emma-Wright.png" },
  { id: 3, name: "James Brown", src: "/personas/Persona-James-Brown.png" },
  { id: 4, name: "Juma Omondi", src: "/personas/Persona-Juma-Omondi.png" },
  { id: 5, name: "Laura Perez", src: "/personas/Persona-Laura-Perez.png" },
  { id: 6, name: "Lena Müller", src: "/personas/Persona-Lena-Müller.png" },
  { id: 7, name: "Matthew Johnson", src: "/personas/Persona-Matthew-Johnson.png" },
  { id: 8, name: "Natalia Nowak", src: "/personas/Persona-Natalia-Nowak.png" },
  { id: 9, name: "Nuray Aksoy", src: "/personas/Persona-Nuray-Aksoy.png" },
  { id: 10, name: "Ravi Patel", src: "/personas/Persona-Ravi-Patel.png" },
  { id: 11, name: "Sophia Williams", src: "/personas/Persona-Sophia-Williams.png" },
  { id: 12, name: "Wei Chen", src: "/personas/Persona-Wei-Chen.png" },
]
