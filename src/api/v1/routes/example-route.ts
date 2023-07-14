import { Router } from "express";
const exampleRouter = Router();

exampleRouter.get<{}, string>("/", (req, res) => {
  res.json("Example Route");
});

export default exampleRouter;
