export interface userState {
    postIds: number[];
    posts: any;
}

export const state = (): userState => ({
    postIds: [],
    posts: {}
})
