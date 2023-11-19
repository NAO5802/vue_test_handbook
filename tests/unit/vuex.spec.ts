import { mutations } from "@/store/user/mutations";
import { actions } from "@/store/user/actions";
import {getters} from "@/store/dog/getters";

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

    // FIXME: jestがaxiosをESMとして読み込めるようにする
    // await actions.authenticate({ commit }, { username, password });

    expect(url).toBe("/api/authenticate");
    expect(body).toEqual({ username, password });
    expect(commit).toHaveBeenCalledWith("SET_AUTHENTICATED", true);
  });
});

describe("getter test", () => {
  const dogs = [
    { name: "lucky", breed: "poodle", age: 1 },
    { name: "pochy", breed: "dalmatian", age: 2 },
    { name: "blackie", breed: "poodle", age: 4 }
  ]
  const state = {dogs}

  it('should return poodles', () => {
    const actual = getters.poodles(state)

    expect(actual).toEqual([{ name: "lucky", breed: "poodle", age: 1 },{ name: "blackie", breed: "poodle", age: 4 }])
  });

  it('should return poodles by age', () => {
    // poodlesゲッターをスタブする
    const poodles = [{ name: "lucky", breed: "poodle", age: 1 },{ name: "blackie", breed: "poodle", age: 4 }]

    const actual = getters.poodlesByAge(state, {poodles})(1)

    expect(actual).toEqual([{ name: "lucky", breed: "poodle", age: 1 }])
  });
})
