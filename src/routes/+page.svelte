<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import ChatMessage from '$lib/components/ChatMessage.svelte';
  import { chatHandler } from '$lib/chatHandler';
  let chatInstance;

  onMount(async () => {
    chatInstance = await chatHandler();
    chatInstance.startChat();
  });

  function goHome() {
    goto('/');
  }
</script>

<style>
  ::placeholder {
    color: #8e8e9e;
  }
</style>

<main>
  <button on:click={goHome} class="btn btn-primary">Go to Main Page</button>
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
          <div class="flex flex-col gap-2 h-[calc(100vh-300px)] overflow-y-auto mt-4 mb-4" bind:this={chatInstance.chatContainer}>
            <ChatMessage
              type="assistant"
              message="Hi! My name is Tommy, ask me any business-related questions, I'm here to help you grow your business, learn about business, start your business and much more!"
            />
            {#each chatInstance.chatMessages as message}
              <ChatMessage type={message.role} message={message.content} />
            {/each}
            {#if chatInstance.answer}
              <ChatMessage type="assistant" message={chatInstance.answer} />
            {/if}
            {#if chatInstance.loading && !chatInstance.answer}
              <ChatMessage type="assistant" message="Loading.." />
            {/if}
          </div>
          <div class="" bind:this={chatInstance.scrollToDiv} />
        </div>
        <form
          class="flex w-full rounded-md bg-gray-200 py-6 px-2 shadow-inner space-x-2"
          on:submit|preventDefault={() => chatInstance.handleSubmit()}
        >
          <input
            type="text"
            class="input input-bordered w-full shadow bg-white text-black"
            bind:this={chatInstance.inputField}
            bind:value={chatInstance.query}
            placeholder="Ask me anything about business..."
            disabled={chatInstance.loading}
          />
          <button
            type="submit"
            class="btn btn-primary bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600"
            disabled={chatInstance.loading}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</main>
