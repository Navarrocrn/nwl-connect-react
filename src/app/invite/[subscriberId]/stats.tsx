import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

interface StatsProps {
  subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId)
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId)
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscriberId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <span className="text-gray-200 font-heading text-3xl font-semibold leading-none">
          {accessCount}
        </span>
        <span className=" text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>
        <MousePointerClick className="size-6 absolute top-2 left-2 text-purple" />
      </div>

      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl  relative">
        <span className="text-gray-200 font-heading text-3xl font-semibold leading-none">
          {inviteCount}
        </span>
        <span className=" text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>
        <BadgeCheck className="size-6 absolute top-2 left-2 text-purple " />
      </div>

      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl  relative">
        <span className="text-gray-200 font-heading text-3xl font-semibold leading-none">
          {rankingPosition ? <>{rankingPosition}&ordm;</> : '-'}{' '}
        </span>
        <span className=" text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>
        <Medal className="size-6 absolute top-2 left-2 text-purple " />
      </div>
    </div>
  )
}
