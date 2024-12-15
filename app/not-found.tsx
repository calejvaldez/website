/*
not-found.tsx
Carlos Valdez
*/
"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
 
export default function NotFound() {
  const pathname = usePathname();
  return (
    <>
      <h1>Not Found</h1>
      <p>The page could not be found.</p>
      <p>Searched for: <span style={{textTransform: 'none'}}>{pathname}</span></p>
      <Link href="/">Consider going home?</Link>
    </>
  )
}
