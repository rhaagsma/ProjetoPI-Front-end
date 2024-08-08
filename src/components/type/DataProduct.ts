export type DataProduct = {
    id?: number;
    name: string;
    image?: string;
    description: string;
    price: Float32Array;
    category: number;
}

export type Band = {
    id?: number;
    name: string;
    genre: Array<number>;
    products: Array<DataProduct>;
}

export type Genre = {
    id?: number;
    name: string;
    bandlist: Array<number>;
}

export type Category = {
    id?: number;
    name: string;
}