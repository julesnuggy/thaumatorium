import { app } from './app';
import { initialiseDatabase } from './db';

const port = process.env.PORT || 3001;

initialiseDatabase()
  .then(() =>  console.log("Successfully connected to the database."))
  .catch((err: any) => {
    throw new Error(err);
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
