export type HTMLDivElements = HTMLDivElement | null;

interface LoaderContextInterface {
    up: boolean;
    name: string;
    type: string;
    ext: string;
    size: string;
    src: string;
}

export type LoaderContextInterfacePartialed = Partial<LoaderContextInterface>;