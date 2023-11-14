import mutations from "@/store/user/mutations";
import { actions } from "@/store/user/actions";

describe("mutation test", () => {
  it("add a post to the state", () => {
    const post = { id: 1, title: "Post" };
    const state = {
      postIds: [],
      posts: {},
    };

    mutations.SET_POST(state, { post });

    expect(state).toEqual({
      postIds: [1],
      posts: { "1": post },
    });
  });
});

describe("actions test", () => {
  it("authenticated a user", async () => {
    // axios mock
    let url = "";
    let body = {};
    jest.mock("axios", () => ({
      post: (_url: string, _body: object) => {
        return new Promise((resolve) => {
          url = _url;
          body = _body;
          resolve(true);
        });
      },
    }));

    const commit = jest.fn();
    const username = "alice";
    const password = "password";

    await actions.authenticate({ commit }, { username, password });

    expect(url).toBe("/api/authenticate");
    expect(body).toEqual({ username, password });
    expect(commit).toHaveBeenCalledWith("SET_AUTHENTICATED", true);
  });
});

// TODO
// Jestだけの設定がおかしいのか、ソール自体が悪いのか切り分ける
// export default と export const の違い調べる
