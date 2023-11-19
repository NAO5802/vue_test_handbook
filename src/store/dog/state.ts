export class Dog {
    constructor(readonly name: string, readonly breed: string, readonly age: number) {}
}

export interface dogState {
    dogs: Dog[];
}

export const state = (): dogState => ({
    dogs: [],
});
