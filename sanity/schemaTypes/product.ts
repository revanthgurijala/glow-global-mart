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
          { title: "Home & Kitchen", value: "Home & Kitchen" },
          { title: "Handicrafts", value: "Handicrafts" },
          { title: "One Gram Jewellery", value: "One Gram Jewellery" },
          { title: "Gift Items", value: "Gift Items" },
          { title: "Eco Products", value: "Eco Products" },
          { title: "Decorative Products", value: "Decorative Products" },
          {
            title: "Spiritual & Cultural Products",
            value: "Spiritual & Cultural Products",
          },
          { title: "Fashion Accessories", value: "Fashion Accessories" },
          {
            title: "Toys & Handmade Creations",
            value: "Toys & Handmade Creations",
          },
          { title: "Pet Care Products", value: "Pet Care Products" },
          { title: "Trending Now", value: "Trending Now" },
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
      name: "images", // Changed to plural "images"
      title: "Product Images (Upload Multiple)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) =>
        Rule.min(1).error("You must upload at least one image."),
    }),
    defineField({
      name: "video",
      title: "Short Product Video (Optional)",
      type: "file",
      options: { accept: "video/mp4,video/webm" }, // Only accepts web-friendly video formats
      description: "Upload a short video (under 10MB) showing the product.",
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
