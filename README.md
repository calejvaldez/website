# calejvaldez.com

## Description

This is the source code for my website,
[calejvaldez.com](https://calejvaldez.com/). It's meant to act as my portfolio.

## Blogging

This website has blogging capabilities, though it's pretty technical as compared
to that of [Docusaurus](https://docusaurus.io). Most of the blogging-related
things will happen in the `/content/` folder.

When you go to the `/blog/` section of the website, it will search for the
`metadata.json` file in `/content/metadata.json`. Here's a sample of what you'll
find:

```json
[
    {
        "slug": "",
        "title": "",
        "timestamp": 0,
        "tags": []
    }
]
```

Blog posts don't *have to* appear in the `metadata.json` file, but if it's not
there, it will not appear in `/blog/`.

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

> [!IMPORTANT]
> Make sure you have [nvm](https://github.com/nvm-sh/nvm) installed.

This website is built using [NextJS](https://nextjs.org/). You can start with:

```shell
nvm use
npm i
npm run dev
```

You can build the website with `npm run build`. The static files will be found
in `/out`.
