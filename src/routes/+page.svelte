<script lang="ts">
	import ChatMessage from '$lib/components/ChatMessage.svelte'
	import type { ChatCompletionRequestMessage } from 'openai'
	import { SSE } from 'sse.js'

	let query: string = ''
	let answer: string = ''
	let loading: boolean = false
	let chatMessages: ChatCompletionRequestMessage[] = []
	let scrollToDiv: HTMLDivElement

	function scrollToBottom() {
		setTimeout(function () {
			scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
		}, 100)
	}

	const handleSubmit = async () => {
		if (!query.trim()) return; // Add this line to check if the input is empty
		loading = true
		chatMessages = [...chatMessages, { role: 'user', content: query }]

		const eventSource = new SSE('/api/chat', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ messages: chatMessages })
		})

		query = ''

		eventSource.addEventListener('error', handleError)

		eventSource.addEventListener('message', (e) => {
			scrollToBottom()
			try {
				loading = false
				if (e.data === '[DONE]') {
					chatMessages = [...chatMessages, { role: 'assistant', content: answer }]
					answer = ''
					return
				}

				const completionResponse = JSON.parse(e.data)
				const [{ delta }] = completionResponse.choices

				if (delta.content) {
					answer = (answer ?? '') + delta.content
				}
			} catch (err) {
				handleError(err)
			}
		})
		eventSource.stream()
		scrollToBottom()
	}

	function handleError<T>(err: T) {
		loading = false
		query = ''
		answer = ''
		console.error(err)
	}

<script lang="ts">
  // ... (The script section remains the same)
</script>

<div class="flex flex-col h-screen pt-4 w-full px-8 items-center gap-2 bg-white">
	<div class="flex-1 flex flex-col items-center justify-center">
		<h1 class="text-2xl font-bold w-full text-center">BusinessGPT</h1>
		<div class="w-full border-b border-gray-300 mb-4"></div>
		<p class="text-sm italic">Your own personal business analyst and assistant.</p>
		<div class="w-full border-b border-gray-300 mb-4"></div>
	</div>
	<div class="flex flex-col pt-4 w-full h-full px-8 items-center gap-2">
		<div class="flex flex-col gap-2">
			<ChatMessage type="assistant" message="Hi! My name is Tommy, ask me any business-related questions, I'm here to help you grow your business, learn about business, start your business and much more!" />
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
		<div class="" bind:this={scrollToDiv} />
	</div>
	<form
		class="flex w-full rounded-md bg-gray-200 p-4 shadow-inner space-x-2"
		on:submit|preventDefault={() => handleSubmit()}
	>
		<input type="text" class="input input-bordered w-full shadow bg-white" bind:value={query} />
		<button type="submit" class="btn btn-primary bg-green-500 hover:bg-green-600 hover:border-transparent"> Send </button>
	</form>
</div>
