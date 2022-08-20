import { Router, Request } from "express";

const routes = Router();

routes.post("/", (req: Request, res: any) => {
	try {
        res.io.emit("event", req.body)
		return res.status(200).json(req.body);
	} catch (err) {
		return res.status(500).json(err);
	}
});

export default routes;