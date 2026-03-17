<script setup lang="ts">
import { MessageSquare } from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";
</script>

<template>
  <footer
    id="footer"
    class="container py-24 pb-16 sm:py-32 sm:pb-24"
  >
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div
        class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8"
      >
        <div class="col-span-full xl:col-span-2">
          <a
            href="#"
            class="flex font-bold items-center"
          >
            <MessageSquare
              class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white p-1.5"
            />
            <h3 class="text-2xl">Chatty</h3>
          </a>
          <p class="mt-3 text-sm text-muted-foreground">
            Native desktop AI agent.<br />Fast. Private. Open source.
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Project</h3>
          <div>
            <a
              href="https://github.com/boersmamarcel/chatty2"
              target="_blank"
              class="opacity-60 hover:opacity-100"
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              href="https://github.com/boersmamarcel/chatty2/releases"
              target="_blank"
              class="opacity-60 hover:opacity-100"
            >
              Releases
            </a>
          </div>
          <div>
            <a
              href="https://github.com/boersmamarcel/chatty2/issues"
              target="_blank"
              class="opacity-60 hover:opacity-100"
            >
              Issues
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Platforms</h3>
          <div>
            <a
              href="https://github.com/boersmamarcel/chatty2/releases"
              target="_blank"
              class="opacity-60 hover:opacity-100"
            >
              macOS
            </a>
          </div>
          <div>
            <a
              href="https://github.com/boersmamarcel/chatty2/releases"
              target="_blank"
              class="opacity-60 hover:opacity-100"
            >
              Linux
            </a>
          </div>
          <div>
            <a
              href="https://github.com/boersmamarcel/chatty2/releases"
              target="_blank"
              class="opacity-60 hover:opacity-100"
            >
              Windows
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Providers</h3>
          <div class="opacity-60">OpenAI</div>
          <div class="opacity-60">Anthropic</div>
          <div class="opacity-60">Google Gemini</div>
          <div class="opacity-60">Ollama</div>
        </div>
      </div>

      <Separator class="my-6" />
      <section>
        <h3 class="text-sm text-muted-foreground">
          &copy; 2026
          <a
            target="_blank"
            href="https://github.com/boersmamarcel"
            class="text-primary transition-all border-primary hover:border-b-2"
          >
            Marcel Boersma
          </a>
          · MIT License
        </h3>
      </section>
    </div>
  </footer>
</template>
