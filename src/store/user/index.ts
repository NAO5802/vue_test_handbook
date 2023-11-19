import {mutations} from "@/store/user/mutations";
import {state} from "@/store/user/state";
import {actions} from "@/store/user/actions";
import {getters} from "@/store/user/getters";

export const userModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
