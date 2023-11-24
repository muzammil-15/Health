import { type ClassValue, clsx } from "clsx"
import { twMerge } from 'tailwind-merge'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



// checkup Timming

export const checkupTimings = [
  { time: '12:00 PM', isAvailable: true },
  { time: '01:00 PM', isAvailable: true },
  { time: '02:00 PM', isAvailable: true },
  { time: '03:00 PM', isAvailable: true },
  { time: '04:00 PM', isAvailable: true },
  { time: '05:00 PM', isAvailable: true },
  { time: '06:00 PM', isAvailable: true },
  { time: '07:00 PM', isAvailable: true },
  { time: '08:00 PM', isAvailable: true },
  { time: '09:00 PM', isAvailable: true },
  { time: '10:00 PM', isAvailable: true },
  { time: '11:00 PM', isAvailable: true },
  { time: '12:00 AM', isAvailable: true },
  { time: '01:00 AM', isAvailable: true },
  { time: '02:00 AM', isAvailable: false },
  { time: '03:00 AM', isAvailable: true },
  { time: '04:00 AM', isAvailable: true },
  { time: '05:00 AM', isAvailable: true },
  { time: '06:00 AM', isAvailable: false },
  { time: '07:00 AM', isAvailable: true },
  { time: '08:00 AM', isAvailable: true },
  { time: '09:00 AM', isAvailable: true },
  { time: '10:00 AM', isAvailable: true },
  { time: '11:00 AM', isAvailable: true },
];