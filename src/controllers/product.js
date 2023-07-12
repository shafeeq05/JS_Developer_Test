import axios from 'axios';
import * as cheerio from 'cheerio';

export const controller = {
    product:async (req,res)=>{
       
        const { keyword } = req.params;
        const searchUrl = `https://www.flipkart.com/search?q=${keyword}`;
      
        try {
          const response = await axios.get(searchUrl);
          const $ = cheerio.load(response.data);
      
          //find the first search result product
          const product = $('._2kHMtA').first()
      
          //find the css class name of the price tag
          const price = product.find('._30jeq3._1_WHN1').text(); 
      
          //find the css class name of the seller tag
          const seller = product.find('a._1fQZEK').text();
      
          res.json({ price, seller });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while fetching product details.' });
        }
    }
}