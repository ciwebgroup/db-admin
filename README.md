# Dev Container Prisma DB Management

This project provides a VS Code Dev Container setup for database management using Prisma.

## Prerequisites

- Docker & Docker Compose installed
- VS Code with "Remote - Containers" extension


## 🚀 Quick Start

1. **Clone the repo**:
   ```bash
   git clone <repository-url> my-prisma-devcontainer
   cd db-admin
   ```


2.  **Configure environment**  
    ```bash
    cp .env.example .env
    # Edit .env:
    #   REGISTRY, IMAGE_NAME, DATABASE_URL
    source .env
    ```

3.  **Modify Data Model**  

4.  **Dev → generate & migrate**  
    ```bash
    npm install
    npm run generate
    npm run migrate:dev
    ```

5.  **Add, Commit, Push & Create PR**
    ```bash
    git add -u
    git commit -m "<description-of-changes>"
    git push
    ```

6.  **Run migrations on production container**  
    ```bash
    npm run migrate:prod
    ```

---

## 🎯 VS Code Tasks

Press **Ctrl+Shift+B** (or **Cmd+Shift+B**) in the Dev Container and pick:

- **Prisma: studio**  
- **Prisma: generate**  
- **Prisma: migrate (dev)**
- **Docker: build prod image**
- **Docker: push prod image**
- **Prisma: migrate (prod)**

---

With those four steps in place:

- **`npx prisma migrate dev --name init`** runs on container spin-up  
- **Faker** is installed and your `prisma/seed.ts` spins up 500 contacts  
- All of it is wired into NPM scripts so your team can also run them manually  

Let me know if you want to customize the faker fields or adjust batch sizes!
