# Token DB

Um token é um código.

A composição do token é a seguinte:

## Requisição

Cada requisição é única e contem um ID, um TimeStamp (que a torna única) e o conteúdo que posteriormente – após sua confirmação – será adicionado ao token.

## Conteúdo

O conteúdo de um token pode ser duplicado, porque a requisição autentica sua originalidade. Os dados do conteúdo são criptografados em sha256.

## Vigência

Ao requisitar um token, sua vigência pode ser determinada pelo requisitante, como “indeterminada”, “limitada ao uso” ou “limitada a um período”.

Caso a vigência seja indeterminada, o token não perderá sua validade enquanto a plataforma garantir sua efetividade. Caso a vigência seja limitada ao uso, o requisitante deve especificar a quantidade de vezes limite em que o token será considerado válido. No caso de vigência limitada a um período, o requisitante deve especificar uma data e hora limites para que o token seja considerado válido.

---

## Premissas

As requisições são adicionadas a uma fila.
A estrutura de dados para armazenamento dos tokens é uma blockchain.
O conteúdo de cada bloco minerado é um token.
Quando o novo bloco contendo o token requisitado é adicionado à blockchain, a requisição é confirmada.
Ao ser confirmada a requisição sai da fila e o código gerado a partir dela é entregue ao requisitante.
A blockchain será armazenada em arquivo e, periodicamente, em um banco de dados.
A blockchain será inserida no banco de dados em formato blob.
Os token com vigência expirada serão mantidos na blockchain para auditoria futura.

### Informações adicionais

Acredito que a IBM tenha feito algo parecido ao criar o JWT. Não sei no entanto como eles armazenam os tokens.

---

## Modelo (payload)

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
            }
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

---

## Tecnologia

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Deployed on Vercel
