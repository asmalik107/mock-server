import { Router } from 'express';
const router = Router({mergeParams: true});

/** 
 * @swagger
 * /test2:
 *  get:
 *      tags: 
 *      - "Test2"
 *      summary: "Summary"
 *      description: "Description"
 *      operationId: "getTest2"
 *      produces:
 *        - "application/json"
 *      responses:
 *          200:
 *              description: "successful operation"
*/
router.get('/test2', (req, res, next) => {
    res.send({status: 'success'});
});

export default router;
        