
namespace MathUtils {
    export function add(a: number, b: number): number{
        return a + b
    }
    export function subtract(a: number, b: number): number{
        return a - b;
    }

    add(1,2)
}

// addEventListener(1,2)
const sum = MathUtils.add(1,2)
const diff = MathUtils.subtract(1,2)

// ===================================
// namespace Models {
//     export interface User {
//         id: number;
//         name: string;
//     }    
//     export interface Product {
//         id: number;
//         name: string;
//         price: number;
//     }
// }

/*
<reference path="models-namespaces.ts" />
*/

import { User, Product } from './models-namespace';

const _user: User = {
    id: 0,
    name: "Artash"
}

const product: Product = {
    id: 0,
    name: "Laptop",
    price: 123
}