import { config, fields, singleton } from "@keystatic/core";

const dzikirSchema = {
  title: fields.text({ label: "Title" }),
  description: fields.text({ label: "Description" }),
  dzikir: fields.array(
    fields.object({
      arabic: fields.text({ label: "Arabic", multiline: true }),
      latin: fields.text({ label: "Latin", multiline: true }),
      translation: fields.text({ label: "Translation", multiline: true }),
      source: fields.text({ label: "Source", multiline: true }),
      read: fields.text({ label: "Read", multiline: true }),
      benefit: fields.text({ label: "Benefit", multiline: true }),
    }),
    {
      itemLabel: (item) => item.fields.arabic.value,
      label: "Dzikir",
    },
  ),
};

export const keystaticConfig = config({
  storage: {
    kind: "local",
  },
  singletons: {
    about: singleton({
      label: "About",
      path: "public/content/about",
      format: "json",
      schema: {
        title: fields.text({ label: "Title" }),
        // description: fields.text({ label: "Description" }),
        source: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            url: fields.text({ label: "URL" }),
          }),
          {
            itemLabel: (item) => item.fields.label.value,
            label: "Source",
          },
        ),
      },
    }),
    dzikirPagi: singleton({
      label: "Dzikir Pagi",
      path: "public/content/dzikir-pagi",
      format: "json",
      schema: dzikirSchema,
    }),
    dzikirSore: singleton({
      label: "Dzikir Sore",
      path: "public/content/dzikir-sore",
      format: "json",
      schema: dzikirSchema,
    }),
  },
});
