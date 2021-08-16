import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Client { 
    id: number; 
    name: string; 
    cnpj: string;
    address: string; 
}

const getClients = async (req: Request, res: Response, next: NextFunction) => { 
    let result: AxiosResponse = await axios.get(`https:http://localhost:8080/api/v1/client`);
    let clients: [Client] = result.data;
    return res.status(200).json({
        message: clients
    });
};

const getClient = async (req: Request, res: Response, next: NextFunction) => { 
    let id: string = req.params.id; 
    let result: AxiosResponse = await axios.get(`https:http://localhost:8080/api/v1/client/${id}`); 
    let client: Client = result.data; 
    return res.status(200).json({
        message: client
    });
};

const updateClient = async (req: Request, res: Response, next: NextFunction) => { 
    let id: string = req.params.id; 
    let name: string = req.body.name ?? null; 
    let cnpj: string = req.body.cnpj ?? null; 
    let address: string = req.body.address ?? null; 

    let response: AxiosResponse = await axios.put(`https:http://localhost:8080/api/v1/client/${id}`, {
        ...(name && { name }),
        ...(cnpj && { cnpj }),
        ...(address && { address })
    });

    return res.status(200).json({
        message: response.data
    })
}

const deleteClient = async (req: Request, res: Response, next: NextFunction) => { 
    let id: string = req.params.id; 

    let response: AxiosResponse = await axios.delete(`https:http://localhost:8080/api/v1/client/${id}`);

    return res.status(200).json({
        message: `Client with id ${id} deleted successfully`
    });
}; 

const addClient = async (req: Request, res: Response, next: NextFunction) => { 
    let name: string = req.body.name; 
    let cnpj: string = req.body.cnpj;
    let address: string = req.body.address; 

    let response: AxiosResponse = await axios.post(`https:http://localhost:8080/api/v1/client`, {
        name,
        cnpj,
        address
    }); 

    return res.status(200).json({
        message: response.data
    }); 
};

export default {getClients, getClient, updateClient, deleteClient, addClient};