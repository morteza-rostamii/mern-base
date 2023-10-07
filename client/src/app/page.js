"use client"

import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {

    async function fetchData() {
      const url = 'http://localhost:4000/api/home';
      const response = await fetch(url);

      const data = await response.json();

      console.log(data);
    }

    fetchData();

  }, []);

  return (
    <main>
      hoem page
    </main>
  )
}
