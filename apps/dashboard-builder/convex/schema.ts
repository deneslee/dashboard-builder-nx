import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  dashboards: defineTable({
    title: v.string(),
    layout: v.any(), 
    panels: v.array(v.object({
      id: v.string(),
      type: v.string(),
      datasourceId: v.string(),
      config: v.any(),
    })),
  }),
});
