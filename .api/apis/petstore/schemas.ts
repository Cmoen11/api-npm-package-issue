const CreatePets = {
  response: {
    default: {
      type: 'object',
      required: ['code', 'message'],
      properties: {
        code: { type: 'integer', format: 'int32', minimum: -2147483648, maximum: 2147483647 },
        message: { type: 'string' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ListPets = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          limit: {
            type: 'integer',
            maximum: 100,
            format: 'int32',
            minimum: -2147483648,
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'How many items to return at one time (max 100)',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      maxItems: 100,
      items: {
        type: 'object',
        required: ['id', 'name'],
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            minimum: -9223372036854776000,
            maximum: 9223372036854776000,
          },
          name: { type: 'string' },
          tag: { type: 'string' },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    default: {
      type: 'object',
      required: ['code', 'message'],
      properties: {
        code: { type: 'integer', format: 'int32', minimum: -2147483648, maximum: 2147483647 },
        message: { type: 'string' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ShowPetById = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          petId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The id of the pet to retrieve',
          },
        },
        required: ['petId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['id', 'name'],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          minimum: -9223372036854776000,
          maximum: 9223372036854776000,
        },
        name: { type: 'string' },
        tag: { type: 'string' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    default: {
      type: 'object',
      required: ['code', 'message'],
      properties: {
        code: { type: 'integer', format: 'int32', minimum: -2147483648, maximum: 2147483647 },
        message: { type: 'string' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
export { CreatePets, ListPets, ShowPetById };
