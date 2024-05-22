#!/bin/bash
export DATABASE_URL="postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:5432/${PG_DB}"
yarn prisma:migrate
yarn prisma:generate
yarn start

