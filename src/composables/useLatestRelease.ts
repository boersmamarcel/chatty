import { ref, onMounted } from "vue";

// Fetches the latest chatty2 release so the site never shows a stale version.
// Falls back to showing nothing when offline or rate-limited.
export function useLatestRelease() {
  const version = ref<string | null>(null);
  onMounted(async () => {
    try {
      const res = await fetch(
        "https://api.github.com/repos/boersmamarcel/chatty2/releases/latest"
      );
      if (!res.ok) return;
      const data = await res.json();
      if (typeof data.tag_name === "string") version.value = data.tag_name;
    } catch {
      // Offline or blocked: the badge simply omits the version.
    }
  });
  return { version };
}
