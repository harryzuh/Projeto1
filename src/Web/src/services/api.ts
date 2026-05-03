import axios from "axios"

export const api = axios.create({
    baseURL: "https://back-end-vitaltech.onrender.com",
})

export class ApiError extends Error {
    status: number
    constructor(status: number, message: string) {
        super(message)
        this.status = status
    }
}

export async function post<T>(path: string, body: unknown): Promise<T> {
    try {
        const res = await api.post<T>(path, body)
        return res.data
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            const msg = (e.response.data as { message?: string }).message ?? `Erro ${e.response.status}`
            throw new ApiError(e.response.status, msg)
        }
        throw e
    }
}
