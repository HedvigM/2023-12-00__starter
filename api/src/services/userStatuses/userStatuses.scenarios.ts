import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String3086023',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:39:01.590Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-05T14:39:01.590Z',
            updatedAt: '2023-12-05T14:39:01.590Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String3021435',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:39:01.590Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-05T14:39:01.590Z',
            updatedAt: '2023-12-05T14:39:01.590Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
