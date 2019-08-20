/** 
 * @swagger
 * /test:
 *  get:
 *      tags: 
 *      - "Test"
 *      summary: "Summary"
 *      description: "Description"
 *      operationId: "getTest"
 *      produces:
 *        - "application/json"
 *      responses:
 *          200:
 *              description: "successful operation"
*/
module.exports = app => {
    app.get('/test', (req, res, next) => {
        res.send({status: 'success'});
    });
};