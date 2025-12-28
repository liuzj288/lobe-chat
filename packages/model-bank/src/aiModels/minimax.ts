import { AIChatModelCard, AIImageModelCard } from '../types/aiModel';

const minimaxChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 204_800,
    description: 'Designed specifically for efficient coding and Agent workflows',
    displayName: 'MiniMax M2',
    enabled: true,
    id: 'MiniMax-M2',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.21, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheWrite', rate: 2.625, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-10-27',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 204_800,
    description: 'Designed specifically for efficient coding and Agent workflows, with higher concurrency for commercial use.',
    displayName: 'MiniMax M2 Stable',
    id: 'MiniMax-M2-Stable',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.21, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheWrite', rate: 2.625, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-10-27',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 1_000_192,
    description: 'Brand new self-developed reasoning model. Globally leading: 80K chain-of-thought x 1M input, performance on par with top international models',
    displayName: 'MiniMax M1',
    id: 'MiniMax-M1',
    maxOutput: 40_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-16',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_000_192,
    description:
      'In the MiniMax-01 series models, we made bold innovations: implementing linear attention mechanism at scale for the first time, making traditional Transformer architecture no longer the only choice. This model has up to 456 billion parameters with 45.9 billion activated per pass. The model\'s comprehensive performance matches top international models while efficiently handling the world\'s longest context of 4 million tokens, 32x that of GPT-4o and 20x that of Claude-3.5-Sonnet.',
    displayName: 'MiniMax Text 01',
    id: 'MiniMax-Text-01',
    maxOutput: 40_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-15',
    type: 'chat',
  },
];

const minimaxImageModels: AIImageModelCard[] = [
  {
    description: 'Brand new image generation model with delicate visual performance, supports text-to-image and image-to-image generation',
    displayName: 'Image 01',
    enabled: true,
    id: 'image-01',
    parameters: {
      aspectRatio: {
        default: '1:1',
        enum: ['1:1', '16:9', '4:3', '3:2', '2:3', '3:4', '9:16', '21:9'],
      },
      prompt: {
        default: '',
      },
      seed: { default: null },
    },
    releasedAt: '2025-02-28',
    type: 'image',
  },
  {
    description: 'Image generation model with delicate visual performance, supports text-to-image generation with art style configuration',
    displayName: 'Image 01 Live',
    enabled: true,
    id: 'image-01-live',
    parameters: {
      aspectRatio: {
        default: '1:1',
        enum: ['1:1', '16:9', '4:3', '3:2', '2:3', '3:4', '9:16', '21:9'],
      },
      prompt: {
        default: '',
      },
      seed: { default: null },
    },
    releasedAt: '2025-02-28',
    type: 'image',
  },
];

export const allModels = [...minimaxChatModels, ...minimaxImageModels];

export default allModels;
