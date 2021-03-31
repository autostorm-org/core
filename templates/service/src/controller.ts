// VENDOR
import express, { Request, Response } from "express";

// AUTOFICA IMPORTS
import { urlComposer } from "@autofica/common";

const router = express.Router();

/*****
 * Registration route
 */
router.post(urlComposer("route"), async (req: Request, res: Response) => {
  res.send("GOOD");
});

export default router;
