import { app } from './app';
import { getDatabasePool } from './db';

const port = process.env.PORT || 3001;

getDatabasePool()
  .then(() => console.log('Successfully connected to the database.'))
  .catch((err) => {
    throw new Error(err);
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
