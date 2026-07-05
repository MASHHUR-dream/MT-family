import { AuthApi, userApi } from '@/lib/api'
import { LoginRequest, RegisterRequest, UserRespons } from "@/types";
import { create } from "zustand";

interface AuthState {
    user: UserRespons | null
    isloading: boolean
    error: string | null

    login: (data: LoginRequest) => Promise<void>
    register: (data: RegisterRequest) => Promise<void>
    logout: () => void
    fetchme: () => Promise<void>
    clearError: () => void
    setUser: (user: UserRespons) => void
}