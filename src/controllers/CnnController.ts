import { Response, Request } from "express";
import { UploadedFile } from "express-fileupload";
import PredictService from "../services/PredictService";
import TrainingService from "../services/TrainingService";

class CnnController {
    trainData = async (req: Request, res: Response) => {
        try {
            const train = await TrainingService.trainModel();
            res.status(200).json({
                message: "Training Done",
            });
        } catch (err) {
            console.log(err);
        }
    };

    predictData = async (req: Request, res: Response) => {
        try {
            const imageObject = req.files?.image as UploadedFile;
            if (!imageObject) {
                return res.send("No Image");
            }
            const predict = await PredictService.predict(imageObject);
            res.status(200).json({
                message: "Prediction Done",
                predict,
            });
        } catch (err) {
            console.log(err);
        }
    };
}

export default new CnnController();
