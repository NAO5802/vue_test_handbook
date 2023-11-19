import {Dog, dogState} from "@/store/dog/state";

export const getters = {
    poodles: (state: dogState)=>{
        return state.dogs.filter((dog: Dog) => dog.breed === "poodle")
    },
    poodlesByAge: (state: dogState, getters: any) => (age: number) =>{
        return getters.poodles.filter((dog: Dog) => dog.age === age)
    },
};
