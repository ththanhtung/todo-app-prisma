import app from "./src/app";
import { loadConfig } from "./src/configs/config";

const config = loadConfig()

app.listen(config.serverPort, ()=>{
    console.log(`server is up on port: ${config.serverPort}`);
})
