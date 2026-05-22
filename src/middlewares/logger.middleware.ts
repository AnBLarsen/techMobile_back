
import { NextFunction } from 'express';


export function loggerGlobalMiddleware(req: Request, res: Response, next: NextFunction) {
    const timestamp = new Date().toISOString();
   
    console.log(`The method used is ${req.method}. The route is ${req.url}. Timestamp: ${timestamp} `);
    next();
}