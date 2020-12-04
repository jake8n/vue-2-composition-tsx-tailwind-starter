import { CreateElement } from "vue";
import { defineComponent } from "@vue/composition-api";
import Posts from "./components/Posts";
import Button from "./components/Button";

export default defineComponent({
  name: "App",
  methods: {
    onClick() {
      alert("🐍");
    },
  },
  render(h: CreateElement) {
    return (
      <main class="p-8 h-screen text-gray-900 bg-gray-300">
        <div class="mx-auto my-0 max-w-5xl">
          <header class="flex items-center justify-between">
            <h1 class="text-4xl font-bold">Home</h1>
            <Button click={this.onClick}>Click me</Button>
          </header>
          <Posts />
        </div>
      </main>
    );
  },
});
