import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [verificationId, setVerificationId] = useState(null);
    const [isVerified,setIsVerified] = useState(false);
    

    const updateId = (id) => {
        setVerificationId(id);
    }

    const clearId = () => {
        setVerificationId(null);
    }

    const verified = (bool) => {
        setIsVerified(verified);
    }

    const logout = () => {
        setIsVerified(false);
    }

    const values = {
        id: verificationId,
        isLogin: isVerified,
        updateId,
        clearId,
        verified,
        logout
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext }
