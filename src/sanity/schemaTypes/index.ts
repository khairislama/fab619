import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./projectType";
import pressItemType from "./pressItemType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, pressItemType],
};
