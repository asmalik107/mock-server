import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { configure } from './src/auth/auth';

const app = express();
const port = 3002

const options = {
    swaggerDefinition: {
        info: {
            // API informations (required)
            title: 'Mock', // Title (required)
            version: '1.0.0', // Version (required)
            description: 'A mock API', // Description (optional)
        }
    },
    explorer: true,
    apis: ['./src/routes/*.js']
};
const swaggerSpec = swaggerJSDoc(options);

app.use(bodyParser.json()); 
configure(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

require('./src/routes/test')(app);
app.use('/', require('./src/routes/test2').default);
app.use('/', require('./src/routes/signin').default);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Mock listening on port ${port}!`));