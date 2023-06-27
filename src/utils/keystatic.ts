import { createReader } from "@keystatic/core/reader";
import { z } from "zod";
import { keystaticConfig } from "~/keystatic.config";

export const keystaticReader = createReader(process.cwd(), keystaticConfig);

export const keystaticSchema = {
  dzikir: z.object({
    title: z.string(),
    description: z.string().optional(),
    dzikir: z.array(
      z.object({
        arabic: z.string(),
        latin: z.string().optional(),
        translation: z.string(),
        source: z.string(),
        read: z.string(),
        benefit: z.string().optional(),
      }),
    ),
  }),
};
