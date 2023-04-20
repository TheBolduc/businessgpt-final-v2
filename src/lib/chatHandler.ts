// chatHandler.ts
import type { ChatCompletionRequestMessage } from 'openai';
import { SSE } from 'sse.js';

export async function chatHandler() {
  let query: string = '';
  let answer: string = '';
  let loading: boolean = false;
  let chatMessages: ChatCompletionRequestMessage[] = [];

  let scrollToDiv: HTMLDivElement;
  let inputField: HTMLInputElement;
  let chatContainer: HTMLDivElement;

  async function handleSubmit() {
    if (loading) {
      return;
    }

    if (!query.trim()) {
      return;
    }

    loading = true;
    chatMessages = [...chatMessages, { role: 'user', content: query }];
    const eventSource = new SSE('/api/chat', {
      headers: {
        'Content-Type': 'application/json',
      },
      payload: JSON.stringify({ messages: chatMessages }),
    });
    query = '';
    inputField.disabled = true;
    eventSource.addEventListener('error', handleError);
    eventSource.addEventListener('message', (e) => {
      try {
        if (e.data === '[DONE]') {
          chatMessages = [...chatMessages, { role: 'assistant', content: answer }];
          answer = '';
          eventSource.close(); // Close the connection
          loading = false;
          inputField.disabled = false;
          scrollToDiv.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        const completionResponse = JSON.parse(e.data);
        const [{ delta }] = completionResponse.choices;
        if (delta.content) {
          answer = (answer ?? '') + delta.content;
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      } catch (err) {
        handleError(err);
      }
    });
    eventSource.stream();
  }

  function handleError<T>(err: T) {
    loading = false;
    query = '';
    answer = '';
    inputField.disabled = false;
    console.error(err);
  }

  return {
    query,
    answer,
    loading,
    chatMessages,
    scrollToDiv,
    inputField,
    chatContainer,
    handleSubmit,
  };
}
