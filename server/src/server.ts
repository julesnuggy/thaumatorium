import { app } from './app';
import { sql } from './db';

const port = process.env.PORT || 3001;

sql.connect((error: any) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
