## Description
Bull Queue is a very simple-to-use message queue system that leverages Redis to store the queue, and facilitates the communication between multiple microservices that share the same Redis instance. So I create this simple demo to showcase the usage of Bull Queue.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Testing

can use below curl command to test after you started the application locally

```bash
curl --location --request POST 'http://localhost:3000/queue/job' \
--header 'Content-Type: application/json' \
--header 'Cookie: i18next=en' \
--data-raw '{
    "name": "event_001",
    "title": "hello world"
}'
```