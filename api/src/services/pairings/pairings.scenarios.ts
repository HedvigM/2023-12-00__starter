import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2023-12-05T14:39:37.407Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-05T14:39:37.407Z',
            updatedAt: '2023-12-05T14:39:37.407Z',
          },
        },
        santa: {
          create: {
            email: 'String1270645',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:39:37.407Z',
          },
        },
        person: {
          create: {
            email: 'String1558071',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:39:37.407Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-12-05T14:39:37.407Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-05T14:39:37.407Z',
            updatedAt: '2023-12-05T14:39:37.407Z',
          },
        },
        santa: {
          create: {
            email: 'String5208032',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:39:37.407Z',
          },
        },
        person: {
          create: {
            email: 'String6622618',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:39:37.407Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
