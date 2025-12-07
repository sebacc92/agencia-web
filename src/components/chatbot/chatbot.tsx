import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";

interface Message {
  id: number;
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export default component$(() => {
  const isOpen = useSignal(false);
  const messages = useSignal<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: '¡Hola! 👋 Soy el asistente virtual de AgenciaTech. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    }
  ]);
  const inputMessage = useSignal('');
  const isTyping = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    // Auto-open chatbot after 30 seconds for new visitors
    const timer = setTimeout(() => {
      if (!isOpen.value) {
        isOpen.value = true;
      }
    }, 30000);

    return () => clearTimeout(timer);
  });

  const handleSendMessage = $(async () => {
    if (!inputMessage.value.trim()) return;

    // Add user message
    const newMessage: Message = {
      id: messages.value.length + 1,
      type: 'user',
      text: inputMessage.value,
      timestamp: new Date()
    };

    messages.value = [...messages.value, newMessage];
    const currentInput = inputMessage.value;
    inputMessage.value = '';
    isTyping.value = true;

    // Simulate bot response
    setTimeout(async () => {
      const botResponse = await getBotResponse(currentInput);
      const botMessage: Message = {
        id: messages.value.length + 2,
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      };

      messages.value = [...messages.value, botMessage];
      isTyping.value = false;
    }, 1500);
  });

  const getBotResponse = $((userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('precio') || message.includes('costo') || message.includes('presupuesto')) {
      return 'Nuestros precios varían según el proyecto: diseño web desde $800, automatizaciones IA desde $600, y marketing digital desde $700. ¿Te gustaría una cotización personalizada?';
    }

    if (message.includes('tiempo') || message.includes('entrega') || message.includes('deadline')) {
      return 'Los tiempos de entrega varían: sitios web básicos (2-3 semanas), plataformas complejas (6-8 semanas), campañas de marketing (3-4 semanas). ¿Cuál es tu timeline ideal?';
    }

    if (message.includes('servicio') || message.includes('qué hacen') || message.includes('qué ofrecen')) {
      return 'Somos especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico. ¿Te interesa algún servicio en particular?';
    }

    if (message.includes('portfolio') || message.includes('proyectos') || message.includes('trabajos')) {
      return '¡Claro! Puedes ver nuestros casos de éxito en agencia-tech.com/portfolio. Tenemos proyectos destacados en e-commerce, chatbots IA y campañas de marketing. ¿Te interesa algún sector específico?';
    }

    if (message.includes('contacto') || message.includes('hablar') || message.includes('llamar')) {
      return '¡Perfecto! Puedes contactarnos en hola@agenciatech.com o al +54 11 1234-5678. También puedes completar nuestro formulario en agencia-tech.com/contact para una consulta gratuita.';
    }

    if (message.includes('gracias') || message.includes('thank you')) {
      return '¡De nada! 😊 ¿Hay algo más en lo que pueda ayudarte?';
    }

    return '¡Excelente pregunta! Me encantaría ayudarte con eso. ¿Podrías darme más detalles sobre tu proyecto? También puedes contactarnos directamente en hola@agenciatech.com para una consulta más detallada.';
  });

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen.value && (
        <button
          onClick$={() => isOpen.value = true}
          aria-label="Toggle Chatbot"
          class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-pulse"
        >
          <span class="text-white text-xl">🤖</span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen.value && (
        <div class="fixed bottom-6 right-6 z-50 w-80 h-96 bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-700 flex flex-col animate-fade-in-up">
          {/* Header */}
          <div class="p-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-t-2xl flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span class="text-white text-sm font-bold">A</span>
              </div>
              <div>
                <h3 class="text-white font-semibold">Asistente IA</h3>
                <p class="text-white/80 text-xs">AgenciaTech</p>
              </div>
            </div>
            <button
              onClick$={() => isOpen.value = false}
              class="text-white/80 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div class="flex-1 p-4 space-y-4 overflow-y-auto">
            {messages.value.map((message: Message) => (
              <div
                key={message.id}
                class={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  class={`max-w-xs px-4 py-2 rounded-2xl ${message.type === 'user'
                      ? 'bg-indigo-500 text-white'
                      : 'bg-neutral-700 text-neutral-300'
                    }`}
                >
                  <p class="text-sm">{message.text}</p>
                  <p class={`text-xs mt-1 ${message.type === 'user' ? 'text-indigo-100' : 'text-neutral-400'
                    }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping.value && (
              <div class="flex justify-start">
                <div class="bg-neutral-700 text-neutral-300 px-4 py-2 rounded-2xl">
                  <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div class="p-4 border-t border-neutral-700">
            <div class="flex flex-wrap gap-2 mb-3">
              <button
                onClick$={() => inputMessage.value = '¿Cuáles son sus precios?'}
                class="px-3 py-1 bg-neutral-700 text-neutral-300 rounded-full text-xs hover:bg-indigo-500 hover:text-white transition-colors"
              >
                💰 Precios
              </button>
              <button
                onClick$={() => inputMessage.value = 'Ver portafolio'}
                class="px-3 py-1 bg-neutral-700 text-neutral-300 rounded-full text-xs hover:bg-indigo-500 hover:text-white transition-colors"
              >
                📋 Portafolio
              </button>
              <button
                onClick$={() => inputMessage.value = 'Contacto'}
                class="px-3 py-1 bg-neutral-700 text-neutral-300 rounded-full text-xs hover:bg-indigo-500 hover:text-white transition-colors"
              >
                📞 Contacto
              </button>
            </div>

            {/* Input */}
            <div class="flex space-x-2">
              <input
                type="text"
                value={inputMessage.value}
                onChange$={(e) => inputMessage.value = (e.target as HTMLInputElement).value}
                onKeyPress$={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                class="flex-1 px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white text-sm placeholder-neutral-400 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button
                onClick$={() => handleSendMessage()}
                disabled={!inputMessage.value.trim()}
                class="px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});