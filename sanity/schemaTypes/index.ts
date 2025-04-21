import { type SchemaTypeDefinition } from "sanity";
import project from "./project";
import category from "./category";
import stack from "./stack";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, category, stack],
};
