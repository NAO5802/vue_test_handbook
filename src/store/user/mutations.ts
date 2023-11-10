export default {
    SET_POST(state: any, {post}: any) {
        state.postIds.push(post.id)
        state.posts = {...state.posts, [post.id]: post}
    }
}
