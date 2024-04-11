import "dotenv/config";
import { setupApp } from "./app";

const bootstrap = async () => {
  const port = process.env.PORT || 3000;
  const app = await setupApp();
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

bootstrap();
