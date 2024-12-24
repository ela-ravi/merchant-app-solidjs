import { Store, SetStoreFunction } from 'solid-js/store';

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    img: string;
}

export interface ICartProduct extends IProduct {
    quantity: number;
}

export interface ICartContext {
    items: Store<ICartProduct[]>;
    setItems: SetStoreFunction<ICartProduct[]>;
};