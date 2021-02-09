import app from './App';
const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting server: ${err}`);
    process.abort();
  }
  console.log(`Hello! Listening to port ${PORT} for surveys`);
  return;
});
