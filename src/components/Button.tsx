import { CreateElement } from "vue";
import { defineComponent, PropType } from "@vue/composition-api";
import { NormalizedScopedSlot } from "vue/types/vnode";

export default defineComponent({
  name: "Button",
  props: {
    click: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  render(h: CreateElement) {
    return (
      <button
        onClick={() => this.click()}
        class="bg-blue-600 text-white px-5 py-3 rounded-full uppercase font-bold"
      >
        {(this.$scopedSlots.default as NormalizedScopedSlot)(this.$props)}
      </button>
    );
  },
});
