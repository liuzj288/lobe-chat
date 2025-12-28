import { AIChatModelCard } from '../types/aiModel';

const sparkChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 65_535,
    description:
      'X1.5 capabilities: (1) Added dynamic thinking mode adjustment controlled through the thinking field; (2) Increased context length: 64K for both input and output; (3) Supports FunctionCall functionality.',
    displayName: 'Spark X1.5',
    enabled: true,
    id: 'spark-x',
    maxOutput: 65_535,
    settings: {
      extendParams: ['thinking'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8192 + 4096,
    description:
      'Spark Lite is a lightweight large language model with ultra-low latency and efficient processing capabilities, completely free and open, supporting real-time online search functionality. Its fast response characteristics make it excellent in inference applications and model fine-tuning on low-power devices, bringing outstanding cost-effectiveness and intelligent experience to users, especially performing well in knowledge Q&A, content generation, and search scenarios.',
    displayName: 'Spark Lite',
    enabled: true,
    id: 'lite',
    maxOutput: 4096,
    type: 'chat',
  },
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 8192 + 8192,
    description:
      'Spark Pro is a high-performance large language model optimized for professional domains, focusing on mathematics, programming, healthcare, education and other fields, and supports online search with built-in weather, date and other plugins. Its optimized model demonstrates excellent performance and efficiency in complex knowledge Q&A, language understanding and high-level text creation, making it an ideal choice for professional application scenarios.',
    displayName: 'Spark Pro',
    id: 'generalv3',
    maxOutput: 8192,
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description:
      'Spark Pro 128K is configured with ultra-large context processing capability, able to handle up to 128K context information, particularly suitable for long-form content requiring full-text analysis and long-term logical association processing, providing smooth consistent logic and diverse citation support in complex text communication.',
    displayName: 'Spark Pro 128K',
    id: 'pro-128k',
    maxOutput: 131_072,
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 8192 + 8192,
    description:
      'Spark Max is the most feature-complete version, supporting online search and numerous built-in plugins. Its comprehensively optimized core capabilities along with system role settings and function calling features make it perform exceptionally well in various complex application scenarios.',
    displayName: 'Spark Max',
    id: 'generalv3.5',
    maxOutput: 8192,
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
    contextWindowTokens: 32_768 + 32_768,
    description:
      'Spark Max 32K is configured with large context processing capability, stronger context understanding and logical reasoning ability, supports 32K tokens text input, suitable for long document reading, private knowledge Q&A and other scenarios',
    displayName: 'Spark Max 32K',
    id: 'max-32k',
    maxOutput: 32_768,
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 32_768 + 32_768,
    description:
      'Spark Ultra is the most powerful version in the Spark large model series, upgrading the online search chain while enhancing text content understanding and summarization capabilities. It is a comprehensive solution for improving office productivity and accurately responding to demands, and is an industry-leading intelligent product.',
    displayName: 'Spark 4.0 Ultra',
    id: '4.0Ultra',
    maxOutput: 32_768,
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
];

export const allModels = [...sparkChatModels];

export default allModels;
