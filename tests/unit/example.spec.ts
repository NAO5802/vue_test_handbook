import {mount, shallowMount} from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Parent from "@/components/Parent.vue";
import SubmitButton from "@/components/SubmitButton.vue";
import NumberRenderer from "@/components/NumberRenderer.vue";

describe("HelloWorld.vue", () => {
    it("renders props.msg when passed", () => {
        const msg = "new message";
        const wrapper = shallowMount(HelloWorld, {
            props: {msg},
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
    const msg = "送信する"
    const factory = (prppsData?: any) => {
        return shallowMount(SubmitButton, {
            propsData: {
                msg,
                ...prppsData
            }
        })
    }

    it('権限がない場合のメッセージ', () => {
        const wrapper = factory()

        expect(wrapper.find('span').text()).toBe("権限がありません")
        expect(wrapper.find('button').text()).toBe("送信する")
    });

    it('権限がある場合のメッセージ', () => {
        const wrapper = factory({isAdmin: true})

        expect(wrapper.find('span').text()).toBe('管理者権限を実行する')
        expect(wrapper.find('button').text()).toBe('送信する')
    });
})

describe('computed', () => {
    it('偶数をレンダー', () => {
        const wrapper = shallowMount(NumberRenderer, {
            propsData: {
                even: true
            }
        })

        expect(wrapper.text()).toBe('2,4,6,8')
    });

    it('奇数をレンダー', () => {
        const wrapper = shallowMount(NumberRenderer, {
            propsData: {
                even: false
            }
        })

        expect(wrapper.vm.numbers).toBe('1,3,5,7,9')

        // const localThis = {even: false}

        // @ts-ignore
        // expect(NumberRenderer.computed?.numbers.call(localThis)).toBe('1,3,5,7,9')
    })
})
