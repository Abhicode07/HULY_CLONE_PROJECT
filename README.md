# Huly Clone

Huly Clone is a modern web application inspired by Huly. It features a responsive design, a sleek user interface, and essential components to deliver a rich user experience.

## Features

- Fully responsive design for seamless viewing on mobile, tablet, and desktop.
- Footer with navigation links and social media icons.
- Inspired by Huly's layout and design principles.

## Tech Stack

- **Frontend:** React, Next.js, Tailwind CSS
- **Icons:** Lucide React
- **Tools:** Node.js, npm

## Live at
https://hulycloneab.netlify.app/

## Screenshots

![image](https://github.com/user-attachments/assets/a068c858-7264-44eb-aa61-31d74207af5a)

![image](https://github.com/user-attachments/assets/95cae69c-eb15-4385-91de-4531552c217e)

![image](https://github.com/user-attachments/assets/c8192129-6996-4473-9e3f-66d27a5a465b)

![image](https://github.com/user-attachments/assets/a48960eb-9e46-49a1-ae28-ffab69ff47dd)


## Getting Started

Follow the steps below to run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hulyclone.git
   cd hulyclone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx next dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```plaintext
hulyclone/
├── public/               # Static assets
├── src/
│   ├── app/             # Next.js 13+ app directory
│   ├── components/      # Reusable components
│   ├── lib/             # Utility functions
├── .gitignore           # Git ignored files
├── package.json         # Project metadata and scripts
├── README.md            # Project documentation
```

## Customization

To customize the footer with your own links and social media profiles:

1. Open the `src/components/Footer.js` file.
2. Replace placeholder URLs with your actual profile links:

   ```javascript
   <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
     <GithubIcon size={18} className="text-gray-300 hover:text-white" />
   </a>
   ```

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by Huly.
- Built with Next.js and Tailwind CSS.

## Contact

For questions or feedback, please reach out:

- GitHub: [Abhicode07](https://github.com/Abhicode07)
- Email: abhibhavsar1520@gmail.com
- Deployed at: [HulyCloneAB](https://hulycloneab.netlify.app/)

