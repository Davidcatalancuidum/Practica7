export interface Sub{
    nick: string
    avatar: string
    subMonths: number
    sexo: string
    description?: string
    check: string
}

export type SubsResponseFromApi = Array<{
    nick: string
    months: number
    profileUrl: string
    description: string
    sexo: string
    check: string
}>