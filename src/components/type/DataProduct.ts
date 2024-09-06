export type DataProduct = {
    id?: number;
    name: string;
    image?: string;
    description: string;
    price: Float32Array;
    category: number;
    band: Band;
}

export type Band = {
    id?: number;
    name: string;
    genre: Array<number>;
    productlist: Array<number>;
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