import { config, fields, singleton } from "@keystatic/core";

export const keystaticConfig = config({
  storage: {
    kind: "local",
  },
  singletons: {
    homepage: singleton({
      label: "Homepage",
      path: "src/content/_homepage",
      schema: {
        headline: fields.text({ label: "Headline" }),
      },
    }),
    about: singleton({
      label: "About",
      path: "content/about",
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
  },
});
