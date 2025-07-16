# LinkedIn Power Tools

[![Netlify Status](https://api.netlify.com/api/v1/badges/c4b10787-f2f9-42aa-9864-82a1cca79ffd/deploy-status)](https://app.netlify.com/sites/ai4li/deploys)
[![Project Version](https://img.shields.io/badge/version-0.0.0-blue.svg)](package.json)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
<!-- Note: The LICENSE file in the repository contains the full text of GPL v3. -->

**LinkedIn Power Tools** is a web application designed to enhance your presence on LinkedIn. By leveraging the power of OpenAI's artificial intelligence (GPT-4o and DALL-E 3), this suite of tools helps you create engaging posts, relevant comments, and captivating images quickly and efficiently.

🚀 The application is accessible online: **[ai4li.netlify.app](https://ai4li.netlify.app/)**

## 📚 Table of Contents

- [Introduction](#introduction)
- [Main Features](#main-features)
  - [Create Post](#create-post)
  - [Create Comment](#create-comment)
  - [Create Image](#create-image)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Configuration](#configuration)
  - [Using the Tools](#using-the-tools)
- [Local Development](#local-development)
  - [Installing Dependencies](#installing-dependencies)
  - [Starting the Development Server](#starting-the-development-server)
  - [Build for Deployment](#build-for-deployment)
- [Technologies Used](#technologies-used)
- [Project Origin](#project-origin)
- [Contributions](#contributions)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## ✨ Introduction

**LinkedIn Power Tools** is a web application designed to enhance your presence on LinkedIn. By leveraging the power of OpenAI's artificial intelligence (GPT-4o and DALL-E 3), this suite of tools helps you create engaging posts, relevant comments, and captivating images quickly and efficiently.

LinkedIn is a crucial platform for professional networking and sharing valuable content. However, constantly creating original posts, insightful comments, and supporting images can be time-consuming and energy-draining. **LinkedIn Power Tools** was created to simplify this process, offering an AI assistant to:

- Generate post drafts based on articles or ideas.
- Create contextual and thought-provoking comments for others' posts.
- Produce corporate and personalized images to enrich your content.

## 🛠️ Main Features

The application offers three main tools:

### Create Post

This tool allows you to generate LinkedIn posts from a URL of an article or from text you provide.
- **Input**: URL of an article or custom text.
- **AI Model**: GPT-4o.
- **Output**: A text for a LinkedIn post, optimized to capture attention, summarize content, stimulate discussion, and follow platform best practices.
- **Customization**: You can modify the basic prompt to adapt the tone, style, and specific goals of the post.

### Create Comment

Ideal for interacting meaningfully with your network.
- **Input**: The text of the LinkedIn post you want to comment on.
- **AI Model**: GPT-4o.
- **Output**: A relevant, positive, and constructive comment, designed to encourage further interaction.
- **Customization**: The prompt is configurable to refine the type of comment generated (maximum 1000 characters).

### Create Image

Add a professional visual touch to your posts.
- **Input**: A text description (maximum 1000 characters) for the desired image.
- **AI Model**: DALL-E 3.
- **Output**: An image in 16:9 format, with a corporate yet personalized style, ready to be attached to your posts.
- **Customization**: Modify the prompt to influence the style and content of the image.

## 🚀 Getting Started

To use LinkedIn Power Tools, follow these simple steps:

### Prerequisites

- An OpenAI account.
- An OpenAI API key. You can get it from your OpenAI dashboard.

### Configuration

1.  Visit [ai4li.netlify.app](https://ai4li.netlify.app/).
2.  The application will redirect you to the Login page. Currently, login is a formal step; actual authentication for AI features is done via the API key.
3.  Once "logged in," navigate to the **"Config"** section (accessible from the side menu).
4.  Enter your **OpenAI API key** in the appropriate field and save it. The key will be stored locally in your browser.

### Using the Tools

After configuring your API key:

1.  Select the desired tool from the side menu: "Create Post," "Create Comment," or "Create Image."
2.  Provide the required input (URL, post text, image description).
3.  (Optional) Review and adapt the pre-filled prompt to customize the AI's output.
4.  Click the "Generate..." button and wait for the result.

## 💻 Local Development

If you want to run the project locally or contribute to its development:

### Installing Dependencies

The project was initialized with Vite and uses npm as a package manager.

```bash
# Clone the repository (if you haven't already)
# git clone <REPOSITORY_URL>
# cd <PROJECT_FOLDER_NAME>

npm install
```

The following section lists the commands originally used for setting up the project. Normally, running `npm install` in the terminal after cloning the repository should be sufficient to install all the necessary dependencies listed in the `package.json` file.

```bash
# Original commands for project creation (for informational purposes)
# npm init -y
# npm install vue@latest vue-router@latest
# npm install --save-dev vite @vitejs/plugin-vue
# npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
# npm install -D @tailwindcss/postcss # Note: may be obsolete or integrated into tailwindcss/postcss7-compat
# npm i -d @tailwindcss/vite # Note: verify the necessity and correctness of this specific command for recent versions
```

### Starting the Development Server

```bash
npm run dev
```
This will start the application in development mode, usually accessible at `http://localhost:5173`.

### Build for Deployment

```bash
npm run build
```
This command will generate the static files ready for deployment in the `dist/` folder.

## ⚙️ Technologies Used

- **Vue.js 3**: Progressive JavaScript framework for building user interfaces.
- **Vite**: Modern and fast build tool for frontend projects.
- **Vue Router**: Official routing library for Vue.js.
- **TailwindCSS**: Utility-first CSS framework for rapid and custom design.
- **Axios**: Promise-based HTTP client for making API requests.
- **OpenAI API**: For access to GPT-4o (text) and DALL-E 3 (image) models.

## Project Origin

This project originated as an evolution and practical exercise, inspired by an article by **Matteo Flora** on publishing on LinkedIn with AI:
[Publishing on LinkedIn with AI](https://www.matteoflora.com/Pubblicare-su-Linkedin-con-la-AI-1020eadfaffe802e975af4bab780d9ef).

The initial goal was to put the learned concepts into practice by developing a complete frontend in Vue.js to interact with the OpenAI APIs and provide useful tools to the community.

## 🤝 Contributions

Contributions are welcome! If you have ideas for improving the application, fixing bugs, or adding new features, feel free to open an Issue or a Pull Request in the project repository (if publicly available).

## License

This project is released under the **GNU General Public License v3.0 (GPL-3.0-or-later)**, as specified in the `package.json`.
The full text of the license is available in the `LICENSE` file within this repository.
You can also view the license online at [gnu.org/licenses/gpl-3.0.html](https://www.gnu.org/licenses/gpl-3.0.html).

## 🙏 Acknowledgments

- A special thanks to **Matteo Flora** for the original article that inspired this project.
- To the Vue.js and TailwindCSS developer community for the excellent tools and documentation.

_The "Project Status" section has been integrated at the beginning of the document via the Netlify badge._
