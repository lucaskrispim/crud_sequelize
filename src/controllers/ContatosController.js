import Contato from '../models/Contatos';

module.exports = {
    async store(req,res){
        const {name,phone,email} = req.body;

        const contato = await Contato.create({name,phone,email});
    }

    
}

