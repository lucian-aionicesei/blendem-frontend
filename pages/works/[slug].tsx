import HeroVideo from '@/components/HeroVideo'
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Category() {
  const router = useRouter();
  const currentPath = router.query.slug;
  console.log(router.route)

  return (
      <main>
        <HeroVideo />
        <h1 className='text-5xl'>{currentPath}</h1>
      </main>
  )
}