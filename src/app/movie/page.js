'use client'
import Link from 'next/link'


import { useSearchParams } from 'next/navigation';

export default function Movie() {
  const searchParams = useSearchParams()
  
  return (
      <>
        <h2>Viewing Movie: {searchParams.get('movie')}</h2>
        
      </>
  )
}