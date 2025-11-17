# calejvaldez.com

## Description

This is the source code for my website,
[calejvaldez.com](https://calejvaldez.com/). It's meant to act as my portfolio.

## Blogging

This website has blogging capabilities, though it's pretty technical as compared
to that of [Docusaurus](https://docusaurus.io). Most of the blogging-related
things will happen in the `/content/` folder.

Next, when you go to `/blog/[slug]/`, the website will attempt to search for
`/content/[slug].md` to find the Markdown file. It will then convert it from
Markdown to HTML for you to read!

> [!NOTE]
> It may be a good idea to add this snippet to the top of blog Markdown files:
>
> ```markdown
> <!--
> Credit
> 
> Author: Carlos Valdez
> License: Creative Commons Attribution 4.0 International
> Metadata: https://calejvaldez.com/content/metadata.json
> 
> -->
> ```

## Running and Building

This website is built using [NextJS](https://nextjs.org/). You can start with:

```shell
pnpm env use --global v22.3.0
pnpm i
pnpm run dev
```

You can build the website with `pnpm run build`. The static files will be found
in `/out`. You can run the build using `pnpm run serve`.

## Database

Generate TypeScript:

```shell
pnpx prisma generate
```

Add migrations to current database:

```shell
pnpx prisma migrate dev --name ""
```
