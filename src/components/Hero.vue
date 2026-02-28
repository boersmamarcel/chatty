<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-vue-next";
import GithubIcon from "@/icons/GithubIcon.vue";
</script>

<template>
  <section class="container">
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
    >
      <div class="text-center space-y-8">
        <Badge
          variant="outline"
          class="text-sm py-2"
        >
          <span class="mr-2 text-primary">
            <Badge>Open Source</Badge>
          </span>
          <span>MIT License · Free forever</span>
        </Badge>

        <div
          class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
        >
          <h1>
            The fastest
            <span
              class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
            >
              native LLM client
            </span>
            for your desktop
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          GPU-accelerated and privacy-first. Connect to Claude, GPT-4, Gemini,
          Mistral, and local models — all in one app. No subscriptions, no
          cloud storage, no telemetry.
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <Button
            as-child
            class="w-5/6 md:w-1/4 font-bold group/arrow"
          >
            <a
              href="https://github.com/boersmamarcel/chatty2/releases"
              target="_blank"
            >
              <Download class="size-5 mr-2" />
              Download Free
              <ArrowRight
                class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
              />
            </a>
          </Button>

          <Button
            as-child
            variant="secondary"
            class="w-5/6 md:w-1/4 font-bold"
          >
            <a
              href="https://github.com/boersmamarcel/chatty2"
              target="_blank"
            >
              <GithubIcon class="size-5 mr-2" />
              View on GitHub
            </a>
          </Button>
        </div>

        <p class="text-sm text-muted-foreground">
          macOS · Linux · Windows &nbsp;·&nbsp; v0.1.50
        </p>
      </div>

      <div class="relative group mt-14 w-full max-w-5xl mx-auto">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <div
          class="w-full mx-auto rounded-lg relative leading-none flex flex-col items-center justify-center border border-t-2 border-t-primary/30 img-border-animation bg-card/50 p-12 gap-6"
        >
          <div class="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" class="text-base px-4 py-2">Claude 3.5</Badge>
            <Badge variant="secondary" class="text-base px-4 py-2">GPT-4o</Badge>
            <Badge variant="secondary" class="text-base px-4 py-2">Gemini 1.5</Badge>
            <Badge variant="secondary" class="text-base px-4 py-2">Mistral</Badge>
            <Badge variant="secondary" class="text-base px-4 py-2">Ollama</Badge>
            <Badge variant="secondary" class="text-base px-4 py-2">Azure OpenAI</Badge>
          </div>
          <p class="text-muted-foreground text-lg text-center">
            100+ models across 6 providers · Syntax highlighting · LaTeX math · MCP support
          </p>
        </div>

        <!-- gradient effect -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>
