const crypto = require('crypto')

export function createHash(value: string): string {
    return crypto.createHash('sha256').update(value).digest('hex')
}