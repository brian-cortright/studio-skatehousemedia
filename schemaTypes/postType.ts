import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      initialValue: 'SkateHouseMedia',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'object',
      fields: [
        defineField({
          name: 'file',
          title: 'Upload Image',
          type: 'image',
        }),
        defineField({
          name: 'url',
          title: 'Image URL',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'featuredVideo',
      title: 'Featured Video',
      type: 'object',
      fields: [
        defineField({
          name: 'file',
          title: 'Upload Video',
          type: 'file',
        }),
        defineField({
          name: 'url',
          title: 'Video URL',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'featuredPost',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})