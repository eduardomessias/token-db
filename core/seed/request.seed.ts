import { EffectivenessType } from "../enums/effectivenessType.enum"
import { Request } from "../interfaces/request.interface"

export function seedRequest (): Request {
    return {
        id: '0x23jfsllkjnlchbw38r7w9fhw8tr6wr6==',
        timestamp: new Date(),
        content: '',
        effectiveness: {
            type: EffectivenessType.Unlimited,
            expires: 'never'
        },
        pushBack: 'https://localhost:3000/token/request/confirm'
    }
}