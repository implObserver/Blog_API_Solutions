import cors from 'cors'
import { app } from '../../../../app.js';

const corsOptions = {
    origin: 'http://localhost:5000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

export const useCORS = () => {
    app.use(cors(corsOptions));
}