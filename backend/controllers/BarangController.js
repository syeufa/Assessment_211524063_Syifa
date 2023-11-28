import Barang from "../models/BarangModel.js";

export const getBarangs = async(req, res)=>{
    try{
        const response = await Barang.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const getBarangById = async(req, res)=>{
    try{
        const response = await Barang.findOne({
            where:{
                KodeBarang: req.params.KodeBarang
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const createBarang = async(req, res)=>{
    try{
       await Barang.create(req.body);
        res.status(201).json({msg: "Barang Created"});
    } catch (error){
        console.log(error.message);
    }
}

export const updateBarang = async(req, res)=>{
    try{
       await Barang.update(req.body, {
        where: {
            KodeBarang: req.params.KodeBarang
        }
       });
        res.status(200).json({msg: "Barang Updated"});
    } catch (error){
        console.log(error.message);
    }
}


export const deleteBarang = async(req, res)=>{
    try{
       await Barang.destroy(req.body, {
        where: {
            KodeBarang: req.params.KodeBarang
        }
       });
        res.status(200).json({msg: "Barang Deleted"});
    } catch (error){
        console.log(error.message);
    }
}

 