import axios from "axios";

export const actions = {
  async authenticate({ commit }: any, { username, password }: any) {
    const authenticated = await axios.post("/api/authenticate", {
      username,
      password,
    });

    commit("SET_AUTHENTICATED", authenticated);
  },
};
