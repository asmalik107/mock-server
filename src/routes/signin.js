import { Router } from 'express';
import passport from 'passport';

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
 *                  username:
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
    passport.authenticate('login', (err, user, info) => {
        if(err || !user){
            return res.status(400).send(info);
          }

        res.send({status: 'success'});
    })(req, res, next);
});

export default router;
        