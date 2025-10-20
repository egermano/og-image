# OG Image Generator

A dynamic Open Graph image generator built with TypeScript that runs on the edge. Generate custom social media preview images on-the-fly with customizable titles, subtitles, and templates.

## Usage Information

_Install dependencies_

```bash

npm install
#or
yarn install
#or
pnmp install

```

To start using this template with **Vulcan**, you need to:

_Build Command_: To run the application build command

```bash

pnpm run build
```

_Run local DEV_: To run the application locally with Vulcan

```bash

pnpm run dev

```

## API Endpoint Usage

Once the application is running, you can generate OG images by making GET requests to the root endpoint with the following query parameters:

### Parameters

- `title` (optional): The main title text to display on the image
  - Default: "Hello, world!"
  - Example: "How functions delivers value faster with Azion"

- `subtitle` (optional): The subtitle text to display above the title
  - Default: "" (empty)
  - Example: "A comprehensive guide"

- `type` (optional): The template style to use
  - Default: "default"
  - Available options: `default`, `dotGrid`

### Example Requests

**Basic usage:**

```http
GET /?title=My Awesome Post
```

**With subtitle:**

```http
GET /?title=My Awesome Post&subtitle=Blog Post
```

**With custom template:**

```http
GET /?title=My Awesome Post&subtitle=Blog Post&type=dotGrid
```

**Full example URL:**

```http
https://your-domain.com/?title=How%20functions%20delivers%20value%20faster%20with%20Azion&subtitle=A%20comprehensive%20guide&type=dotGrid
```

### Response

The endpoint returns a PNG image (1200x630px) that can be used directly in your HTML meta tags:

```html
<meta property="og:image" content="https://your-domain.com/?title=My%20Post&subtitle=Blog" />
<meta name="twitter:image" content="https://your-domain.com/?title=My%20Post&subtitle=Blog" />
```
