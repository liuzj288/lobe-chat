import { AIChatModelCard, AIImageModelCard } from '../types/aiModel';

// https://platform.stepfun.com/docs/pricing/details

const stepfunChatModels: AIChatModelCard[] = [
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 64_000,
    description:
      'This model possesses powerful visual perception and complex reasoning capabilities. It can accurately complete cross-domain complex knowledge understanding, cross-analysis of mathematics and visual information, and various visual analysis problems in daily life.',
    displayName: 'Step 3',
    enabled: true,
    id: 'step-3',
    pricing: {
      currency: 'CNY',
      units: [
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 1.5, upTo: 0.004 },
            { rate: 4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 4, upTo: 0.004 },
            { rate: 8, upTo: 'infinity' }, // Still differs from documentation
          ],
          unit: 'millionTokens',
        },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      // functionCall: true,
      reasoning: true,
      // search: true,
      vision: true,
    },
    contextWindowTokens: 100_000,
    description:
      'This model is a reasoning large model with powerful image understanding capabilities, able to process both image and text information, and generate text content after deep thinking. This model excels in visual reasoning while also possessing first-tier capabilities in mathematics, coding, and text reasoning. Context length is 100k.',
    displayName: 'Step R1 V Mini',
    id: 'step-r1-v-mini',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    // settings: {
    //   searchImpl: 'params',
    // },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 8000,
    description: 'Small model suitable for lightweight tasks.',
    displayName: 'Step 1 8K',
    id: 'step-1-8k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 32_000,
    description: 'Supports medium-length conversations, suitable for various application scenarios.',
    displayName: 'Step 1 32K',
    id: 'step-1-32k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 70, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 256_000,
    description: 'Features ultra-long context processing capability, especially suitable for long document analysis.',
    displayName: 'Step 1 256K',
    id: 'step-1-256k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 95, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 300, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 8000,
    description:
      'Ultra-fast large model based on the new generation self-developed Attention architecture MFA, achieving similar performance to step1 at extremely low cost while maintaining higher throughput and faster response latency. Capable of handling general tasks with particular strength in code capabilities.',
    displayName: 'Step 2 Mini',
    enabled: true,
    id: 'step-2-mini',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-14',
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
    contextWindowTokens: 16_000,
    description: 'Supports large-scale context interaction, suitable for complex conversation scenarios.',
    displayName: 'Step 2 16K',
    id: 'step-2-16k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 38, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 120, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 16_000,
    description: 'Experimental version of the step-2 model, contains latest features with rolling updates. Not recommended for formal production environments.',
    displayName: 'Step 2 16K Exp',
    id: 'step-2-16k-exp',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 38, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 120, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-15',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 8000,
    description: 'Small vision model suitable for basic image-text tasks.',
    displayName: 'Step 1V 8K',
    id: 'step-1v-8k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
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
      vision: true,
    },
    contextWindowTokens: 32_000,
    description: 'Supports visual input, enhancing multimodal interaction experience.',
    displayName: 'Step 1V 32K',
    id: 'step-1v-32k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 70, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_000,
    description: 'This model has powerful image understanding capabilities. Compared to the step-1v series models, it has stronger visual performance.',
    displayName: 'Step 1o Vision 32K',
    enabled: true,
    id: 'step-1o-vision-32k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 70, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-22',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_000,
    description:
      'This model has powerful image understanding capabilities, stronger than 1o in mathematics and coding domains. The model is smaller than 1o with faster output speed.',
    displayName: 'Step 1o Turbo Vision',
    enabled: true,
    id: 'step-1o-turbo-vision',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-02-14',
    type: 'chat',
  },
];

const stepfunImageModels: AIImageModelCard[] = [
  // https://platform.stepfun.com/docs/llm/image
  {
    description:
      'StepFun\'s new generation image generation model focuses on image generation tasks, capable of generating high-quality images based on user-provided text descriptions. The new model generates more realistic images with stronger Chinese and English text generation capabilities.',
    displayName: 'Step 2X Large',
    enabled: true,
    id: 'step-2x-large',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['256x256', '512x512', '768x768', '1024x1024', '1280x800', '800x1280'],
      },
      steps: { default: 50, max: 100, min: 1 },
    },
    releasedAt: '2024-08-07',
    type: 'image',
  },
  {
    description:
      'This model has powerful image generation capabilities, supporting text descriptions as input. Features native Chinese support for better understanding and processing of Chinese text descriptions, and can more accurately capture semantic information from text descriptions and convert it into image features for more precise image generation. The model can generate high-resolution, high-quality images based on input and has certain style transfer capabilities.',
    displayName: 'Step 1X Medium',
    enabled: true,
    id: 'step-1x-medium',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['256x256', '512x512', '768x768', '1024x1024', '1280x800', '800x1280'],
      },
      steps: { default: 50, max: 100, min: 1 },
    },
    releasedAt: '2025-07-15',
    type: 'image',
  },
  {
    description:
      'This model focuses on image editing tasks, capable of modifying and enhancing images based on user-provided images and text descriptions. Supports multiple input formats including text descriptions and example images. The model can understand user intent and generate image editing results that meet requirements.',
    displayName: 'Step 1X Edit',
    enabled: true,
    id: 'step-1x-edit',
    parameters: {
      imageUrl: { default: null },
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['512x512', '768x768', '1024x1024'],
      },
      steps: { default: 28, max: 100, min: 1 },
    },
    releasedAt: '2025-03-04',
    type: 'image',
  },
];

export const allModels = [...stepfunChatModels, ...stepfunImageModels];

export default allModels;
