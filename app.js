const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Page Title</title>
        
    </head>
    <body>
        <header>
            <h1>Your Website</h1>
        </header>
        <main>
            <p>Welcome to your website! Edit this main content section.</p>
        </main>
        <footer>
            <p>&copy; 2023 Your Website. All rights reserved.</p>
        </footer>
    </body>
    </html>`
    );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
