import { AIChatModelCard } from '../types/aiModel';

const baichuanChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 32_768,
    description:
      'China\'s leading model capability, surpassing mainstream international models in Chinese tasks such as knowledge encyclopedia, long text processing, and creative generation. Features industry-leading multimodal capabilities with excellent performance across multiple authoritative benchmarks.',
    displayName: 'Baichuan 4',
    enabled: true,
    id: 'Baichuan4',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 100, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 100, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 32_768,
    description:
      'China\'s leading model capability, surpassing mainstream international models in Chinese tasks such as knowledge encyclopedia, long text processing, and creative generation. Features industry-leading multimodal capabilities with excellent performance across multiple authoritative benchmarks.',
    displayName: 'Baichuan 4 Turbo',
    enabled: true,
    id: 'Baichuan4-Turbo',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 32_768,
    description:
      'China\'s leading model capability, surpassing mainstream international models in Chinese tasks such as knowledge encyclopedia, long text processing, and creative generation. Features industry-leading multimodal capabilities with excellent performance across multiple authoritative benchmarks.',
    displayName: 'Baichuan 4 Air',
    enabled: true,
    id: 'Baichuan4-Air',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.98, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.98, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Optimized for high-frequency enterprise scenarios with significantly improved performance and high cost-effectiveness. Compared to Baichuan2 model, achieves 20% improvement in content creation, 17% improvement in knowledge Q&A, and 40% improvement in role-playing capabilities. Overall performance surpasses GPT-3.5.',
    displayName: 'Baichuan 3 Turbo',
    id: 'Baichuan3-Turbo',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description:
      'Features 128K ultra-long context window, optimized for high-frequency enterprise scenarios with significantly improved performance and high cost-effectiveness. Compared to Baichuan2 model, achieves 20% improvement in content creation, 17% improvement in knowledge Q&A, and 40% improvement in role-playing capabilities. Overall performance surpasses GPT-3.5.',
    displayName: 'Baichuan 3 Turbo 128k',
    id: 'Baichuan3-Turbo-128k',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      'Implements search-enhanced technology to achieve comprehensive connection between large models and domain knowledge as well as web-wide knowledge. Supports uploading various documents such as PDF and Word, as well as URL input, enabling timely and comprehensive information retrieval with accurate and professional output results.',
    displayName: 'Baichuan 2 Turbo',
    id: 'Baichuan2-Turbo',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
];

export const allModels = [...baichuanChatModels];

export default allModels;
