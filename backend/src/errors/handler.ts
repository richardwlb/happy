import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => { 
    // Tratativa para verificar se o erro é de validação 
    if(error instanceof ValidationError){
        let errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });

        return response.status(400).json({ message: 'Validation fails', errors});
    }
    // Erro padrão
    console.log(error);

    return response.status(500).json({ message: "Internal server error"});
};

export default errorHandler;