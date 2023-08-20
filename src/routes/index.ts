import express from "express";
import todoRoutes from "./todos";

const route = express.Router()

route.use('/v1/api/todos',todoRoutes)

export default route