import express from "express";
import {
    requestTest,
    queryParamTest,
    urlTest,
    headerTest
} from "../controllers/request.js";

import {
    statusCodeTest,
    responseHeaderTest,
    responseBodyTest,
    responseRedirectTest
} from "../controllers/response.js";

const router = express.Router();

// begin:: request
router.get("/request", requestTest);
router.get("/query", queryParamTest);
router.get("/url", urlTest);
router.get("/header", headerTest);
// end:: request

// begin:: response
router.get("/status-code", statusCodeTest);
router.get("/response-header", responseHeaderTest);
router.get("/response-body", responseBodyTest);
router.get("/response-redirect", responseRedirectTest);
// end:: response

export default router;