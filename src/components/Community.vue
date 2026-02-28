<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import GithubIcon from "@/icons/GithubIcon.vue";
</script>

<template>
  <section
    id="community"
    class="py-12"
  >
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <GithubIcon class="w-20 h-20 m-auto mb-4" />
              Star us on
              <span
                class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >
                GitHub
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            Chatty is built in the open. Star the repo to follow development,
            report bugs, request features, or contribute. Every star helps!
          </CardContent>

          <CardFooter class="flex flex-col sm:flex-row gap-4">
            <Button as-child>
              <a
                href="https://github.com/boersmamarcel/chatty2"
                target="_blank"
              >
                <GithubIcon class="size-5 mr-2" />
                Star on GitHub
              </a>
            </Button>
            <Button as-child variant="secondary">
              <a
                href="https://github.com/boersmamarcel/chatty2/issues"
                target="_blank"
              >
                Report an Issue
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>
