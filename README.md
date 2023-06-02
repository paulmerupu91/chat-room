
# ChatRoom
A performant and light-weight chat application built with React, Express, MongoDB, and Socker.IO.
## Features

- Instant chat messages
- Chat rooms
- Sign in with Google
- Automatic URL to clickable link conversion
- Dynamic favicon/site icons
- Emojis


## Technologies

Socket.IO
[Link](https://socket.io/)

Parcel
[Link](https://parceljs.org/)

React
[Link](https://react.dev/)

ExpressJS
[Link](https://expressjs.com/)

MongoDB
[Link](https://www.mongodb.com/)

Prisma ORM
[Link](https://www.prisma.io/)

Sign In with Google for Web
[Link](https://developers.google.com/identity/gsi/web/guides/display-google-one-tap)

Linkify
[Link](https://linkify.js.org/)




## API Reference

#### Get past 10 messages from each chat room

```http
  GET /api/
```

No parameters required.


## Installation

Install and launch a dev server with Parcel and Express.

```bash
  npm install
```
    
Parcel builds the files.

```bash
  npm run start
```

Nodemon watches for file changes in the build and relaunches the Express server.

```bash
  npm run watch
```

Generate Prisma client after modifying Prisma Schema.

```bash
  npm run prisma:generate
```
