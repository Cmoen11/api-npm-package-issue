import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type CreatePetsResponseDefault = FromSchema<(typeof schemas.CreatePets.response)['default']>;
export type ListPetsMetadataParam = FromSchema<typeof schemas.ListPets.metadata>;
export type ListPetsResponse200 = FromSchema<(typeof schemas.ListPets.response)['200']>;
export type ListPetsResponseDefault = FromSchema<(typeof schemas.ListPets.response)['default']>;
export type ShowPetByIdMetadataParam = FromSchema<typeof schemas.ShowPetById.metadata>;
export type ShowPetByIdResponse200 = FromSchema<(typeof schemas.ShowPetById.response)['200']>;
export type ShowPetByIdResponseDefault = FromSchema<
  (typeof schemas.ShowPetById.response)['default']
>;
