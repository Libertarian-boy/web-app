declare module "*.png" {
    const value: string;
    export default value;
};

declare function fetch(input: string | URL, init?: {
    body?: any;
    method?: string;
    headers?: {};
    mode?: string;
    keepalive?: boolean;
    cache?: string;
    signal?: AbortSignal | undefined;
}): Promise<any>;