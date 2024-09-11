import React, { useState, useContext } from 'react';
import { Context } from 'src/services/context';
import { Button } from 'src/components/ui/button';

const LoginSignup = () => {
    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerTelefone, setRegisterTelefone] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const { SubmitLogin, SubmitRegister } = useContext(Context);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await SubmitLogin({ login: loginName, password: loginPassword });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        
        try {
            const user = { 
                login: registerName, 
                email: registerEmail, 
                telephone: registerTelefone,
                password: registerPassword 
            };
            await SubmitRegister(user);
            setFeedbackMessage("Registration successful!");
        } catch (error) {
            console.error(error);
            setFeedbackMessage("Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="flex items-center justify-center w-full max-w-screen-xl p-4 space-x-4 bg-white rounded-md shadow-md">

                <h2 className="text-xl font-semibold text-gray-600">Faça o seu login ou crie uma conta caso ainda não possua cadastro</h2>

                <div className="w-full max-w-md">
                    <div className="p-4 border border-gray-300 rounded-md">
                        <h1 className="text-2xl font-bold text-gray-800">Já é cadastrado?</h1>
                        <form className="flex flex-col space-y-2" onSubmit={handleLogin}>
                            <input type="text" placeholder="Nome" value={loginName} onChange={(e) => setLoginName(e.target.value)} className="p-2 border border-gray-300 rounded-md" />
                            <input type="password" placeholder="Senha" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="p-2 border border-gray-300 rounded-md" />
                            <Button className="w-full cursor-pointer">Entrar</Button>
                            <p className="text-sm text-gray-600">Esqueceu a senha?</p>
                        </form>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full max-w-xs h-40">

                    <h2 className="px-4 text-2xl font-bold text-gray-600">ou</h2>

                </div>

                <div className="w-full max-w-md">
                    <div className="p-4 border border-gray-300 rounded-md">
                        <h1 className="text-2xl font-bold text-gray-800">Se cadastre!</h1>
                        <form className="flex flex-col space-y-2" onSubmit={handleRegister}>
                            <input type="text" placeholder="Nome" value={registerName} onChange={(e) => setRegisterName(e.target.value)} className="p-2 border border-gray-300 rounded-md" />
                            <input type="email" placeholder="E-mail" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} className="p-2 border border-gray-300 rounded-md" />
                            <input type="text" placeholder="Telefone" value={registerTelefone} onChange={(e) => setRegisterTelefone(e.target.value)} className="p-2 border border-gray-300 rounded-md" />
                            <input type="password" placeholder="Senha" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} className="p-2 border border-gray-300 rounded-md" />
                            <Button className="w-full cursor-pointer">Cadastrar</Button>
                    {feedbackMessage && <p className="text-sm text-green-600">{feedbackMessage}</p>}
                </form>
            </div>
        </div>
            </div>
        </div>
    );
};

export default LoginSignup;