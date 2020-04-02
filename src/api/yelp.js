import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer DWaJj4qcn09ZiSKjkK9fJmSWjDZPN66bsrAsIuOtSEWnncafzTDtvQ9Di1qnLNyrS9-TFLNj0MTL7D-kV4dW9eKW8fHHw0sBmpZYvCX3fUzd5u3xo_-Lom1geNGEXnYx'
    }
});