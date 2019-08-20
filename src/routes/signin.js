import { Router } from 'express';
const router = Router({mergeParams: true});

/** 
 * @swagger
 * /signin:
 *  post:
 *      tags: 
 *      - "Auth"
 *      summary: "Summary"
 *      description: "Description"
 *      operationId: "postSignin"
 *      produces:
 *        - "application/json"
 *      parameters:
 *        - in: "body"
 *          name: "body"
 *          description: "username and password"
 *          required: true
 *          schema:
 *              type: "object"
 *              properties:
 *                  user:
 *                      type: "string"
 *                  password:
 *                      type: "string"
 *      responses:
 *          200:
 *              description: "successful operation"
 *          400:
 *              description: "error"
 *          500:
 *              description: "server error"
*/
router.post('/signin', (req, res, next) => {
    console.log('req.body', req.body)
    res.send({status: 'success'});
});

export default router;
        