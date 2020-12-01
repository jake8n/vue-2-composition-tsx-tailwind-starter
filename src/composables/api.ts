import { ref, Ref } from "@vue/composition-api";

export type ApiRequest = () => Promise<any>;

export interface UsableApi<T> {
  response: Ref<T | undefined>;
  request: ApiRequest;
}

export default function useApi<T>(url: RequestInfo): UsableApi<T> {
  const response: Ref<T | undefined> = ref();
  const request = async () => {
    const value = await fetch(url);
    response.value = await value.json();
  };
  return { response, request };
}
