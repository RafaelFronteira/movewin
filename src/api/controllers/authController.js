const path = require('path');
const httpRequest = require('request');



module.exports = {
    login: (req, res, next) => {
        const options = {
            url: 'https://api.uber.com/v1.2/history?limit=35',
            headers: {
              'User-Agent': 'request',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAG8AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAkAAAABwAAAAEAAAAEAAAAJiyuB0xbDGlCMWX6fJUzftsAAAAHXLqOQWfTig1L2DwvwZ7afIll3_LO1o-1XzMZeLFVgU77e7NyLixPnjDSvDif33rTb29yHBxrkj4NObcj2WdxxVBSXD3PJBFeLneHYGIO47Yx7Jw-w9HRXRDsM9tiKIoryLf_ciK7-VN8v33DAAAADVSxStXzg-YgOpRWSQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU'
            }
        };


        httpRequest(options, (err, request) => {
            const data = JSON.parse(request.body).history
            
            const dataMapped = data.map(item => {
                return {
                    product_id: data.product_id,
                    distance: data.distance,
                    duration: item.end_time - item.start_time
                };
            });

            console.log('Data => ', dataMapped)
            
            res.send(dataMapped);

        });
    },
    teste: (req, res, next) => {
        console.log('Req -> ', req);

        res.status(201).send({ message: 'sucesso' });
    }
}