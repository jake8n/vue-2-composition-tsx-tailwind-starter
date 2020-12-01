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
      <main class="bg-gray-300 p-8 h-screen text-gray-900">
        <div class="max-w-5xl mx-auto my-0">
          <header class="flex justify-between items-center">
            <h1 class="font-bold text-4xl">Home</h1>
            <Button click={this.onClick}>Click me</Button>
          </header>
          <Posts />
        </div>
      </main>
    );
  },
});
