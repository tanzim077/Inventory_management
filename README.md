# E-Commerce Platform

## Setup

1. Clone the repository
2. overwrite the file .env.example to .env
2. Install dependencies: `npm install / yarn install`
3. Start the application: `docker compose up`

## API Endpoints

### Create Order
`POST /orders`
- Request Body: `{ items: [{ productId: string, quantity: number }] }`

## Testing
Run tests: `npm test`
