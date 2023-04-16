<script lang="ts">
	import type { ChatCompletionRequestMessageRoleEnum } from 'openai'
	export let type: ChatCompletionRequestMessageRoleEnum
	export let message: string
</script>

<div class="flex {type === 'user' ? 'justify-end' : 'justify-start'} py-2">
	<div class="hidden md:block w-10">
		{#if type === 'assistant'}
			<img src="https://ui-avatars.com/api/?name=Tommy" alt="Tommy avatar" class="rounded-full" />
		{/if}
	</div>
	<div class="px-2">
		{#if type === 'assistant'}
			<div class="text-sm text-gray-500">Tommy</div>
		{/if}
		<div class="bg-gray-250 text-gray-900 p-2 rounded-lg {type === 'user' ? 'bg-blue-500 text-black' : ''}">
			{message}
		</div>
	</div>
</div>
