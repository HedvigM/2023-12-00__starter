import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-05T14:39:49.373Z',
        user: {
          create: {
            email: 'String2149052',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:39:49.373Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-05T14:39:49.373Z',
            updatedAt: '2023-12-05T14:39:49.373Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-05T14:39:49.373Z',
        user: {
          create: {
            email: 'String7396886',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-05T14:39:49.373Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-05T14:39:49.373Z',
            updatedAt: '2023-12-05T14:39:49.373Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
