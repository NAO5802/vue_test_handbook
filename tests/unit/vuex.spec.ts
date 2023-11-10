import mutations from "@/store/user/mutations";

describe("SET_POST", () => {
    it('add a post to the state', () => {
        const post = {id: 1, title: "Post"}
        const state = {
            postIds: [],
            posts: {}
        }

        mutations.SET_POST(state, {post})

        expect(state).toEqual({
            postIds: [1],
            posts: {"1": post}
        })
    });
})
