import { createServer } from './Server'

let server = createServer();

const port = 8080;
server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});