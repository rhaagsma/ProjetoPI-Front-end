export type DataProduct = {
    id?: number;
    name: string;
    image?: string;
    description: string;
    price: Float32Array;
    category: number;
}

export type band = {
    id?: number;
    name: string;
    genre: Array<number>;
    products: Array<DataProduct>;
}

export type genre = {
    id?: number;
    name: string;
    bandlist: Array<number>;
}

export type category = {
    id?: number;
    name: string;
}