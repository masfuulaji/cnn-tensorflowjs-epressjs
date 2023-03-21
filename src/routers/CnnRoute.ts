import BaseRouter from "./base/BaseRouter";

import CnnController from "../controllers/CnnController";
class CnnRoute extends BaseRouter {
    public routes(): void {
        this.router.get("/", CnnController.trainData);
        this.router.post("/predict", CnnController.predictData);
        this.router.get("/test", (req, res) => {
            res.send("Hello World");
        });
    }
}

export default new CnnRoute().router;