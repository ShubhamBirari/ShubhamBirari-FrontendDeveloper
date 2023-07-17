import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  // { name: 'Product', href: '#' },
  // { name: 'Features', href: '#' },
  // { name: 'Marketplace', href: '#' },
  // { name: 'Company', href: '#' },
]

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="h-screen flex items-center justify-center bg-[url('assets/images/hero.jpg')] bg-cover  bg-center">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-58 sm:py-48 lg:py-56 ">
          <div className="text-center transition-transform duration-500 delay-500 -translate-y-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl translate-up translate-y-full opacity-0 transition-all duration-[1650ms]">
              CAPSULES
            </h1>
            <p className="mt-6 text-lg leading-8 text-white translate-up1 translate-y-full opacity-0 transition-all duration-[1650ms]">
              Sending humans and cargo into space
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
