export interface Credentials {
    username: string;
    password: string;
}

export interface LoginProps {
    onLogin: (credentials: Credentials) => void;
}