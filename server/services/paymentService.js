const axios = require('axios');

exports.verifyPaystackPayment = async (reference) => {
    const response = await axios.get(
        `https://api.paystack.co/transaction/verify/${reference}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
            }
        }
    );

    if (response.data.data.status === 'success') {
        const { amount, customer } = response.data.data;
        // Update DB logic here
        return { success: true, data: response.data.data };
    }
    return { success: false };
};