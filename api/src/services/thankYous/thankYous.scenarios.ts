import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-05T14:40:27.999Z',
            updatedAt: '2023-12-05T14:40:27.999Z',
          },
        },
        user: {
          create: {
            email: 'String7256340',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:40:27.999Z',
          },
        },
        toUser: {
          create: {
            email: 'String4927970',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:40:27.999Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-05T14:40:27.999Z',
            updatedAt: '2023-12-05T14:40:27.999Z',
          },
        },
        user: {
          create: {
            email: 'String7641443',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:40:27.999Z',
          },
        },
        toUser: {
          create: {
            email: 'String2651908',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:40:27.999Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
