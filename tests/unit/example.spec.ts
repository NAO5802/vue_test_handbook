import {mount, shallowMount} from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import {Vue} from "vue-class-component";
import Child from "@/components/Child.vue";
import Parent from "@/components/Parent.vue";
import SubmitButton from "@/components/SubmitButton.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("examples", () => {

  it('render component', () => {
    const shallowWrapper = shallowMount(Parent)
    const mountWrapper = mount(Parent)

    console.log(shallowWrapper.html())
    console.log(mountWrapper.html())
  })
})

describe('props', () => {
  it('権限がない場合のメッセージ', () => {
      const msg =  "送信する"
      const wrapper = shallowMount(SubmitButton, {
        propsData: {msg}
      })

      console.log(wrapper.html())

      expect(wrapper.find('span').text()).toBe("権限がありません")
      expect(wrapper.find('button').text()).toBe("送信する")
  });

  it('権限がる場合のメッセージ', () => {
    const msg =  "送信する"
    const isAdmin = true
    const wrapper = shallowMount(SubmitButton, {
      propsData: {msg, isAdmin}
    })

    expect(wrapper.find('span').text()).toBe('管理者権限を実行する')
    expect(wrapper.find('button').text()).toBe('送信する')
  });
})
