import {mutations} from "@/store/dog/mutations";
import {state} from "@/store/dog/state";
import {actions} from "@/store/dog/actions";
import {getters} from "@/store/dog/getters";

export const dogModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
