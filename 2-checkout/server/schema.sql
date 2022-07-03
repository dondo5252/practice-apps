DROP DATABASE checkout;
CREATE DATABASE checkout;

USE checkout;

CREATE TABLE responses (
        s_id VARCHAR(255) NOT NULL,
        name VARCHAR(30) NOT NULL,
        email VARCHAR(30) NOT NULL,
        password VARCHAR(30) NOT NULL,
        lineOne VARCHAR(30) NOT NULL,
        lineTwo VARCHAR(30) NOT NULL,
        state VARCHAR(30) NOT NULL,
        zip VARCHAR(30) NOT NULL,
        phoneNum VARCHAR(30) NOT NULL,
        CCNum VARCHAR(30) NOT NULL,
        expDate VARCHAR(30) NOT NULL,
        CVV VARCHAR(30) NOT NULL,
        billingZip VARCHAR(30) NOT NULL

)
