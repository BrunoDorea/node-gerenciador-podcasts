import * as http from "http";
import {
    getFilterEpisodes,
    getListEpisodes,
} from "./controllers/podcasts-controller";

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        // queryString
        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];
        console.log(baseUrl, "&&", queryString);

        // Listar podcasts
        if (req.method === "GET" && baseUrl === "/api/list") {
            await getListEpisodes(req, res);
        }

        // Filtrar podcast
        if (req.method === "GET" && baseUrl === "/api/episode") {
            await getFilterEpisodes(req, res);
        }
    }
);

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});
