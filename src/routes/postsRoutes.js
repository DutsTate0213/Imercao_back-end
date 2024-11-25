import express from 'express'


const routes = (app) => {
    app.use(express.json());
    app.get("/posts", async (req))
}






export default routes;