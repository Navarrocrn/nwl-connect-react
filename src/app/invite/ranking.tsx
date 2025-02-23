import Image from 'next/image'

import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold text-gray-300">1º </span>| Tiago
            Souza
          </span>
          <span className="font-heading text-2xl font-semibold">1.000</span>
          <Image
            className="absolute right-8 top-0"
            src={gold}
            alt="Medal Gold"
          />
        </div>
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold text-gray-300">2º </span>| Larissa
            Navarro
          </span>
          <span className="font-heading text-2xl font-semibold">1.000</span>
          <Image
            className="absolute right-8 top-0"
            src={silver}
            alt="Medal Silver"
          />
        </div>
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold text-gray-300">3º </span>| Luara
            Silva
          </span>
          <span className="font-heading text-2xl font-semibold">1.000</span>
          <Image
            className="absolute right-8 top-0"
            src={cooper}
            alt="Medal Cooper"
          />
        </div>
      </div>
    </div>
  )
}
