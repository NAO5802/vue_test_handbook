import { userState } from "@/store/user/state";

export const mutations = {
  SET_POST(state: userState, { post }: any) {
    state.postIds.push(post.id);
    state.posts = { ...state.posts, [post.id]: post };
  },
};
