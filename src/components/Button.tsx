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
        class="px-5 py-3 text-white font-bold bg-blue-600 rounded-full uppercase"
      >
        {(this.$scopedSlots.default as NormalizedScopedSlot)(this.$props)}
      </button>
    );
  },
});
