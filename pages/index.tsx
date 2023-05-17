import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main>
        <img src="/mtbike.png" alt="logo"></img>
      </main>
  )
}
