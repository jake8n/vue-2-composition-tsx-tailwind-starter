import { CreateElement } from "vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "App",
  render(h: CreateElement) {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    );
  },
});
