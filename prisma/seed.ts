// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  // build 500 fake contacts
  const contacts = Array.from({ length: 500 }).map(() => ({
    first: faker.person.firstName(),
    last: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    country: faker.location.country(),
  }))

  // bulk insert
  await prisma.contact.createMany({
    data: contacts,
    skipDuplicates: true,
  })

  console.log(`🌱 Seeded ${contacts.length} contacts.`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
