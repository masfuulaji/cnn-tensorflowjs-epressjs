import { Response, Request } from "express";
import PredictService from "../services/PredictService";
import TrainingService from "../services/TrainingService";

class CnnController {
    trainData = async (req: Request, res: Response) => {
        try {
            const train =await TrainingService.trainModel();
            res.status(200).json({
                message: "Training Done"
            });
        } catch (err) {
            console.log(err);
        }
    };

    predictData = async (req: Request, res: Response) => {
        try {
            const predict =await PredictService.predict(req.body);
            res.status(200).json({
                message: "Prediction Done"
            });
        } catch (err) {
            console.log(err);
        }
    }
}

export default new CnnController();
