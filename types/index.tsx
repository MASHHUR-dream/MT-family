export interface UserRespons {
    username: string,
    avatar: null | string,
    bio: null | string,
    id: number,
}

export interface TokenRespons {
    access_token: string,
    token_type: string,
}

export interface RegisterRequest {
    username: string,
    password: string,
}

export interface LoginRequest {
    username: string,
    password: string,
}

