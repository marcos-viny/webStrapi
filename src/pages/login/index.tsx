import { useEffect, useState } from "react";
import api from "../../services/api";

import "./styles.scss";

const initialForm = {
    username: '',
	email:'',
    password: '',
}

export default function Login(){
const [form, setForm] = useState<any>(initialForm);
const [error, setError] = useState<any>('');
const [sending, setSending] = useState(false);
  let [abrir, setAbrir] = useState(0)

  function toogle(e: any) {
    if (abrir === e) {
        setAbrir((prevState) => prevState + 0)
    } else {
      setAbrir(e);
    }
  }

  function handleFormChange(username: string, value: any) {
    setForm({
        ...form,
        [username]: value
    })
}
async function getUser(initialLoading = false) {
    try {
        const token = localStorage.getItem('token');
        const data = token ? JSON.parse(token) : null;
       
        const resp = await api.Me();
      console.log('teste', resp.data);
      
    } catch (error) {
        console.log('erro');
    } 
}

useEffect(() => {
    getUser();

},[])
  
  async function handleSubmit(e: any) {
    const formData = { ...form };
    e.preventDefault();
    try {
        const resp = await api.Cadastro(formData);
        if (resp) {
            setTimeout(() => {
               alert('teste')
                setForm({ ...initialForm });
            }, 500);
        } else {
            throw new Error("");
        }
    } catch (e: any) {
        const errors = e?.response?.data?.mensagem;
        console.log(errors)
        if (errors) {
            setError(errors);
            return;
        }
        setError("Ops! ocorreu um erro. Tente novamente mais tarde.");
    } finally {
        setSending(false);
    }
}
    return(
        <div className={`flex h-[100vh] justify-center bg-[#03A9F4] transition-colors ${abrir === 1  ? "bg-[#F43648] transition-colors" : "bg-[#03A9F4] transition-colors"}`}>
         <div className="container">
            <div className="blueBg">
                <div className="absolute lg:relative w-full lg:w-1/2 top-0 h-40 lg:h-full flex justify-center items-center flex-col">
                    <h2 className="text-lg text-white font-bold">Já tem uma conta ?</h2>
                    <button className="py-3 px-5 bg-white rounded-md font-medium mt-2" onClick={() => toogle(0)}>Entrar</button>
                </div>
                <div className="absolute lg:relative w-full lg:w-1/2 bottom-0 h-[9.375rem] lg:h-full flex justify-center items-center flex-col">
                    <h2 className="text-lg text-white font-bold">Não tem uma conta?</h2>
                    <button className="py-3 px-5 bg-white rounded-md font-medium mt-2" onClick={() => toogle(1)}>Criar conta</button>
                </div>
            </div>
            <div className={
                `formBx absolute bg-white flex justify-center items-center top-0 duration-500 overflow-hidden
                 w-full lg:w-1/2 h-[31.25rem] lg:h-full shadow-none lg:shadow-shadowContainer
                ${abrir === 1  ? "left-1/2 active-2" : "left-0"}`}>
                <div className="form signinForm">
                    <form action="">
                        <h3>Entrar</h3>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/>
                        <input type="submit" value="Login"/>
                        <a href="#" className="forgot">esqueçeu sua senha?</a>
                    </form>
                </div>

                    {/* create conta */}
                <div className="form signupForm">
                    <form onSubmit={handleSubmit}>
                        <h3>Criar conta</h3>
                        <input type="text" placeholder="Nome" onChange={(e) => handleFormChange('username', e.target.value)} value={form.username}/>
                        <input type="email" placeholder="Email" onChange={(e) => handleFormChange('email', e.target.value)} value={form.email}/>
                        <input type="password" placeholder="Senha" onChange={(e) => handleFormChange('password', e.target.value)} value={form.password}/>
                        <button type="submit" className={`btn-submit px-12 py-1 bg-red-500 ${sending ? 'opacity-50' : ''}`} disabled={sending}
                                data-bb-acao="botao" data-bb-rotulo="Envie">
                                <span>{sending ? 'Aguarde...' : 'Envie'}</span>
                            </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};