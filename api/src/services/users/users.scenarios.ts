import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String3193228',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-05T14:37:39.641Z',
      },
    },
    two: {
      data: {
        email: 'String8688261',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-05T14:37:39.641Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
