const Laptops = require('../model/laptop.model');
const fs = require('fs');
const path = require("path");
const multer = require('multer');


const productController = {
    getProduct: async (req, res) => {
        var data =  await fs.readFileSync(path.resolve(__dirname, "../database/Products.txt"), 'utf-8');
        var laptopProducts = [];
        data.split('\r\n').forEach(laptop => {
            let info = laptop.split('|');
                laptopProducts.push(info);
        });
        laptopProducts.pop();
        res.render('product', {laptopProducts: laptopProducts});
    },
    postProduct: (req, res) => {

    },
    getIndex: async (req, res) => {
        try {
            var page = parseInt(req.query.page) || 1;
            var perPage = 10;
            var start = (page - 1) * perPage;
            var end = page * perPage
            var laptops = await Laptops.find({});
            res.render('productCRUD', {laptops: laptops.slice(start,end), page: page});
        }
        catch {
            return res.render('error'); 
        }
    },

    create: async (req, res) => {
        try {
                res.render('createProduct');
            }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    postCreate: async (req, res) => {
        try{
            var {id, title, summary, imageurl, price, number} = req.body;
            imageurl ="/" + req.file.path.split("\\").slice(1).slice(1).join("/");
            //imageurl = imageurl + "." +req.file.mimetype.split('/')[1];
            const newLaptop = new Laptops({
                id, title, summary, imageurl, price, number
            })
            await newLaptop.save();
            return res.render('createProduct', {success: "ok"});
            }
        catch {
            return res.render('createProduct', {fail: "ok"});
        }
    },

    update: async (req, res) => {
        try {
            var laptop = await Laptops.findById(req.query.id).exec(); 
            res.render('updateProduct', {laptop: laptop});
        }
        catch {
            return res.render('error'); 
        }
    },

    postUpdate: async (req, res) => {
        try {
            var { idd, title, Summary, ImageUrl, Price, number} = req.body;
            Price = parseInt(Price);
            number = parseInt(number);
            await Laptops.findByIdAndUpdate(idd, 
                {title: title, summary: Summary, imageurl: ImageUrl, price: Price, number: number},
                function (err, docs) {
                    if (err) {
                        return res.render('updateProduct', {laptop: docs, fail: "ok"});
                    } else {
                        return res.render('updateProduct', {laptop: docs, success: "ok"});
                    }
                })
        }
        catch {
            return res.render('error'); 
        }
    },
    delete: async (req, res) => {
        try {
            await Laptops.findByIdAndDelete(req.query.id, (err,docs) => {
                if (err) {
                    return res.render('error'); 
                } else {
                    res.redirect('/product/getIndex');
                }
            })
        }
        catch {
            return res.render('error'); 
        }
    }
}

module.exports = productController;