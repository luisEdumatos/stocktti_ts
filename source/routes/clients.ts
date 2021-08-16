import express from 'express';
import controller from '../controllers/clients'; 

const router = express.Router(); 

router.get('/client', controller.getClients);
router.get('/client/:id', controller.getClient);
router.put('/client/:id', controller.updateClient); 
router.delete('/client/:id', controller.deleteClient); 
router.post('/client', controller.addClient); 

export = router; 
