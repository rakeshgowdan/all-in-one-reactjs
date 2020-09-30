
//we can define urls and other configuration

Example
Suppose file name is apiConfig.js
    import axios from 'axios';

    export default axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`
    });



In component

1.Import the file  apiConfig.js
2.Use config name to get details

ApiConfig.Method('/){
    //code      
}
// you no longer need to type out the 
whole URL each time you want to hit a different endpoint on the API.