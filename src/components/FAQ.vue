<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What LLM providers are supported?",
    answer:
      "Chatty supports OpenAI (GPT-4, o1, o3-mini), Anthropic (Claude 3.5 Sonnet, Opus, Haiku), Google Gemini (1.5 Pro/Flash), Mistral, Azure OpenAI (with Entra ID auth), and Ollama for fully local models. That's 100+ models across 6 providers.",
    value: "item-1",
  },
  {
    question: "Is it really free? What do I need?",
    answer:
      "Yes, completely free and open source (MIT license). You supply your own API keys for the cloud providers you want to use — there are no subscription fees from Chatty itself. For fully local inference, use Ollama and pay nothing at all.",
    value: "item-2",
  },
  {
    question: "Is my data private?",
    answer:
      "Your conversations are stored locally in JSON files on your machine. Chatty has zero telemetry and zero cloud storage. API keys are masked and never logged. Shell execution is sandboxed using bubblewrap on Linux and sandbox-exec on macOS. MCP servers are disabled by default and must be manually enabled.",
    value: "item-3",
  },
  {
    question: "Does it work offline or with local models?",
    answer:
      "Yes. Point Chatty at a running Ollama instance and you can chat entirely offline with local models. No internet connection required for local inference.",
    value: "item-4",
  },
  {
    question: "What platforms does Chatty support?",
    answer:
      "Chatty ships native binaries for macOS (Intel and Apple Silicon), Linux (x86_64), and Windows (x86_64). All platforms get the same GPU-accelerated experience built with GPUI.",
    value: "item-5",
  },
];
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQ</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Common Questions
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      Still have questions?
      <a
        href="https://github.com/boersmamarcel/chatty2/issues"
        target="_blank"
        class="underline text-primary"
      >
        Open an issue on GitHub
      </a>
    </h3>
  </section>
</template>
