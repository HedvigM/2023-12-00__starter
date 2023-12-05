import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2023-12-05T14:39:19.065Z',
        updatedAt: '2023-12-05T14:39:19.065Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2023-12-05T14:39:19.065Z',
        updatedAt: '2023-12-05T14:39:19.065Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
