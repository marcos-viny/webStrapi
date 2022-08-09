import { useState } from "react";

import "./styles.scss";

export default function Login(){
  let [abrir, setAbrir] = useState(0)

  function toogle(e: any) {
    if (abrir === e) {
        setAbrir((prevState) => prevState + 0)
    } else {
      setAbrir(e);
    }
  }
    return(
        <div className={`flex justify-center bg-[#03A9F4] transition-colors ${abrir === 1  ? "bg-[#F43648] transition-colors" : "bg-[#03A9F4] transition-colors"}`}>
         <div className="container">
            <div className="blueBg">
                <div className="absolute w-full top-0 h-40 md:relative md:w-1/2 md:h-full flex justify-center items-center flex-col">
                    <h2 className="text-lg text-white font-bold">Já tem uma conta ?</h2>
                    <button className="py-3 px-5 bg-white rounded-md font-medium mt-2" onClick={() => toogle(0)}>Entrar</button>
                </div>
                <div className="absolute w-full bottom-0 h-[9.375rem] flex justify-center items-center flex-col">
                    <h2 className="text-lg text-white font-bold">Não tem uma conta?</h2>
                    <button className="py-3 px-5 bg-white rounded-md font-medium mt-2" onClick={() => toogle(1)}>Criar conta</button>
                </div>
            </div>
            {/* <div className="blueBg">
                <div className="absolute w-full top-0 h-40 md:relative md:w-1/2 md:h-full flex justify-center items-center flex-col">
                    <h2 className="text-lg text-white font-bold">Já tem uma conta ?</h2>
                    <button className="py-3 px-5 bg-white rounded-md font-medium mt-2" onClick={() => toogle(0)}>Entrar</button>
                </div>
                <div className="relative w-1/2 h-full flex justify-center items-center flex-col">
                    <h2 className="text-lg text-white font-bold">Não tem uma conta?</h2>
                    <button className="py-3 px-5 bg-white rounded-md font-medium mt-2" onClick={() => toogle(1)}>Criar conta</button>
                </div>
            </div> */}
            <div className={`formBx ${abrir === 1  ? "active active-2" : "formBx"}`}>
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
                    <form action="">
                         <div className="social-container flex justify-center">
                          {/* <a href="#" className="social"><BsFacebook className="w-6 h-6 text-blue-400"/></a> */}
                          {/* <a href="#" className="social"><BsLinkedin className="w-6 h-6"/></a> */}
                          {/* <a href="#" className="social"><BsInstagram className="w-6 h-6 text-pink-900"/></a> */}
                        </div>
                        <h3>Criar conta</h3>
                        <input type="text" placeholder="Nome"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/>
                        <input type="password" placeholder="Confirmar Senha"/>
                        <input type="submit" value="Registrar"/>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};