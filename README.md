# Inventory Management Platform

## Setup

### DOcker

1. Run docker locally
2. Clone the repository
3. Rename `.env.example` to `.env`
4. Run `docker compose up`

### Local

#### Pre requisite

1.Need to have postgres locally installed
2. Need node.js version 20 installed

#### How to start

1. Clone the repository
2. Rename .env.example to .env
3. In the .env file change the variable name “postgres:password”  to your postgres username and password  
`DATABASE_URL="postgres://postgres:password@db:5432/inventoryManagement?schema=public"`
4. Run npm install / yarn install
5. Run Postgres locally at port 5432
6. Run npm prisma:migrate / yarn prisma:migrate
7. Run npm prisma:generate / yarn prisma:generate
8. Run npm start

## Technology used

1. Express.js
2. Postgres
3. Prisma
4. Javascript

### Documentation

Postman documentation link: https://documenter.getpostman.com/view/17394671/2sA3QpBYXp
Entity Relationship Diagram (ERD): https://drive.google.com/file/d/1dSpn2eej3hkTJbjjkKlsHhphertJiCJ4/view?usp=sharing

### Doc File link
https://docs.google.com/document/d/183v4OswAJHpraWOKL9ilGfD3l23GehT2t87vC_jTaL4/edit?usp=sharing
