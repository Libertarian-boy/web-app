declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*";

declare function fetch(input: string | URL, init?: {
    body?: {} | BodyInit;
    method?: string;
    headers?: {};
    mode?: string;
    keepalive?: boolean;
    cache?: string
})