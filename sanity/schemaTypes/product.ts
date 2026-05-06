import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "One Gram Jewellery", value: "One Gram Jewellery" },
          { title: "Handcrafted & ODOP", value: "Handcrafted & ODOP" },
          { title: "Corporate Gifts", value: "Corporate Gifts" },
          { title: "Customized Art", value: "Customized Art" },
          {
            title: "Eco-Friendly (Second Life)",
            value: "Eco-Friendly (Second Life)",
          },
        ],
      },
    }),
    defineField({
      name: "price",
      title: "Current Price (₹)",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "oldPrice",
      title: "Old Price (₹) - Optional for discounts",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "sourcedFrom",
      title: "Sourced From (Location/Details)",
      type: "string",
    }),
  ],
});
