# Setup

Follow these steps to set up your JustJelly server

## Step 0

### .env file

You can use the following sample `.env` file as a base for your own:

**BE SURE TO CHANGE THE POSTGRES_PASSWORD BEFORE THE FIRST RUN**

```
JUSTJELLY_PORT=3000
ADMINER_PORT=8080
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=justjelly
POSTGRES_USER=justjelly_admin
POSTGRES_PASSWORD=YourPasswordHere:123!
```

## Step 1

Navigate to the root directory of the project and run `docker compose up -d` to launch the stack

# drizzle ORM
Applying changes to the database
You can generate migrations using drizzle-kit generate command and then run them using the drizzle-kit migrate command.

Generate migrations:
```npx drizzle-kit generate```

These migrations are stored in the `drizzle/migrations` directory, as specified in your `drizzle.config.ts`. This directory will contain the SQL files necessary to update your database schema and a `meta` folder for storing snapshots of the schema at different migration stages.

Run migrations:
```npx drizzle-kit migrate```

# Next.js
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
