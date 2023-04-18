<script lang="ts">
  import ChatMessage from '$lib/components/ChatMessage.svelte';
  import { onMount } from "svelte";

  let query: string = '';
  let answer: string = '';
  let loading: boolean = false;
  let chatMessages: { role: string, content: string }[] = [];

  let inputField: HTMLInputElement;

  async function askQuestion() {
    if (query.trim() === "") return;
    loading = true;
    try {
      // Replace this with the actual function to get the answer
      const response = await getAnswer(query);
      answer = response;
    } catch (error) {
      console.error(error);
      answer = "An error occurred. Please try again.";
    } finally {
      chatMessages = [...chatMessages, { role: 'user', content: query }];
      query = '';
      loading = false;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await askQuestion();
    chatMessages = [...chatMessages, { role: 'assistant', content: answer }];
    answer = '';
    inputField.focus();
  }

  onMount(() => {
    inputField.focus();
  });

  // Dummy getAnswer function, replace it with the actual API call or function
  async function getAnswer(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`You asked: ${query}`);
      }, 1000);
    });
  }
</script>

<style>
  ::placeholder {
    color: #8e8e9e;
  }
</style>

<div class="chatbot-wrapper">
  <div class="flex flex-col min-h-screen pt-4 w-full px-8 items-center gap-2">
    <div class="flex flex-col w-full max-w-screen-md bg-white p-6 rounded-lg shadow-lg">
      <div class="flex flex-col items-center justify-center mb-4">
        <h1 class="text-2xl font-bold w-full text-center">BusinessGPT</h1>
        <p class="text-sm italic">
          Your own personal business analyst and assistant.
        </p>
        <div class="w-full border-b border-gray-400 mb-6"></div>
      </div>
      <div class="flex flex-col pt-4 w-full h-full px-8 items-center gap-2">
        <div class="flex flex-col gap-2 h-[calc(100vh-300px)] overflow-y-auto mt-4 mb-4">
          {#each chatMessages as message}
            <ChatMessage type={message.role} message={message.content} />
          {/each}
          {#if answer}
            <ChatMessage type="assistant" message={answer} />
          {/if}
          {#if loading}
            <ChatMessage type="assistant" message="Loading.." />
          {/if}
        </div>
      </div>
      <form class="flex w-full rounded-md bg-gray-200 py-6 px-2 shadow-inner space-x-2"
            on:submit|preventDefault={handleSubmit}>
        <input type="text" class="input input-bordered w-full shadow bg-white text-black"
               bind:this={inputField} bind:value={query} placeholder="Ask me anything about business..."
               on:keydown={(event) => event.key === "Enter" && askQuestion()}
               disabled={loading} />
        <button type="submit" class="btn btn-primary bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  </div>
</div>
