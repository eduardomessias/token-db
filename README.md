# Token DB

A token is a hash code.

It is composed by:

## Request

Each request is unique and contains an ID, a TimeStamp (which makes it unique) and the content that later - after being confirmed - will be added to the token.

## Content

The content of a token can be duplicated because the request itself authenticates its originality. The content data is encrypted using SHA256.

## Effectiveness

When requesting a token, its effectiveness can be determined by the requisitioner, as "unlimited", "limited by usage" or "limited by time".

Case "unlimited", the token will not loose its validity for a lifetime, or as long as the platform can guarantee its efficiency. Case "limited by usage", the requisitioner must specify the quantity the token can be used before it is considered expired. Case "limited by time", the requisitioner must specify a date and time before the token can be considered expired.

---

## Assumptions

The request is added to a queue.
The data structure chosen to store the tokens is a blockchain.
Each block mined is a new token.
When the block is mined and added to the chain, the request is confirmed.
When confirmed the request is dequeued and the generated hash code is returned to the requisitioner.
The blockchain will be stored in file and periodically saved into a database.
The blockchain will be stored in a blob format.
The expired tokens will be kept in the blockchain for future audit.
Maybe IBM has done something similar with JWT. It is worth to have a look as an inspiration.

---

## Models and Operations

Models:

| Effectiveness                        |
| ------------------------------------ |
| type (string)                        |
| expires (UTC date-time, int, string) |

| Requisition                         |
| ----------------------------------- |
| id (hash)                           |
| timestamp (UTC date-time)           |
| content (blob)                      |
| effectiveness (ref[Effectiveness])  |
| push-back (URL)                     |

| Token                  |
| ---------------------- |
| req (ref[Requisition]) |
| status (string)        |
| valid (boolean)        |
| identity (string)      |

### Applying the models

When adding a new token req:

```code
payload = {
    token: {
        req: {
            id: <hash>,
            timestamp: <utc datetime>,
            content: <any>,
            effectiveness: {
                type: 'unlimited'|'usage'|'period',
                expires: 'never'|<int>|<utc datetime>
            },
            pushBack: <URL>
        },
        status: pending,
        valid: false,
        identity: null|<hash>
    }
}
```

Fetching the queue size:

```code
payload = {
    queueSize: <int>,
    pageCount: <int>,
    pageSize: <int>,
    pages: [<int>]
}
```

When retrieving the queue:

```code
payload = {
    queuePage: [token],
    pageNumber: <int>,
    pageSize: <int>
}
```

When a new token is generated:

```code
payload = {
    token: {
        req: {
            id: <hash>,
            timestamp: <utc datetime>,
            content: <any>,
            effectiveness: {
                type: 'unlimited'|'usage'|'period',
                expires: 'never'|<int>|<utc datetime>
            }
        },
        status: success,
        valid: true,
        identity: <hash>
    }
}
```

### Inbound operations

```code
<tokendb>/api/token/request
<tokendb>/api/token/queue/size
<tokendb>/api/token/queue(/:pg)
<tokendb>/api/token/validate
<tokendb>/api/token/status
```

#### Checking if a token is valid

It is possible to verify if a specific token is valid fetching the validate operation, by passing the hash as a parameter.

For being a block in a blockchain, the token already contains a valid method that verifies if its hash is valid. An additional verification is performed to check if the effectiveness is also valid and, if so, TRUE is the returned message. Otherwise, FALSE.

### Outbound operations

When requesting a new token, it is possible to define a push-back URL.
The application will push the succeeded token to the appointed URL, but no treatment or handling will be applied in case of exceptions.

*The application will not hold responsibility over the push-back URL in any occasion whatsoever.*

```code
<tokendb>/api/token/request
```

---

## Architecture

### Class diagram
Interfaces

![Interfaces diagram](https://github.com/eduardomessias/token-db/blob/master/docs/anex/TokenDB%20interfaces.svg)


This is a [Next.JS](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Deployed on VERCEL
