# MarkDoc Documentation deployment for Teams

This is a full-featured boilerplate for a creating a documentation website using Markdoc and Next.js.

<img width="2032" alt="image" src="https://user-images.githubusercontent.com/62121649/174916143-16f18270-0463-402c-8b48-33c627ea7a7e.png">

## Setup

First, clone this repo and install the dependencies required:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `index.md`. The page auto-updates as you edit the file.

## Contribute
{% callout type="note" %}
To contribute to this documentation page, create a new branch, and make your PR to the dev branch. Any PR to the Main branch will be rejected.
{% /callout %}

To add a new page, go to the docs folder (placed inside the pages folder), create a new `.md` file with your desired title, populate with the content and save.

To add the page to the page, go to the component folder, open the `sideNav` component, then add it as a children to the `get started` array. 

Test locally, and if your changes is fine, make the push to the dev branch and raise a PR.

## Deploy

The quickest way to deploy your own version of this boilerplate is by deploying it with [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com/) by clicking one of the buttons below.

### Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/markdoc/next.js-starter)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/markdoc/next.js-starter)

## Contribute