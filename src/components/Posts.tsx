import { CreateElement } from "vue";
import { defineComponent, onMounted } from "@vue/composition-api";
import useApi from "../composables/api";

interface Post {
  id: string;
  status: string;
}

const usePosts = () =>
  useApi<Post[]>("https://hidden-math-0362.jake8n.workers.dev/");

export default defineComponent({
  name: "Posts",
  setup() {
    const { response: posts, request: getPosts } = usePosts();
    onMounted(getPosts);
    return { posts };
  },
  render(h: CreateElement) {
    return (
      <div class="mt-8">
        {this.posts && this.posts.length ? (
          <div class="flex flex-col">
            {(this.posts || []).map((post) => (
              <article class="bg-white mb-4 px-6 py-4 rounded-lg shadow">
                <p class="text-xl">{post.status}</p>
              </article>
            ))}
          </div>
        ) : (
          <div
            slot="loading"
            class="bg-white p-8 animate-pulse rounded-lg"
          ></div>
        )}
      </div>
    );
  },
});
