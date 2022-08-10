
import Service from "./service";
export default {
    // Validar: async (body: any) => {
    //     return await Service(false).post(`/api/participante/validar`, body);
    // },
    // FaleConosco: async (body: any) => {
    //     return await Service(false).post(`/api/Faleconosco`, body);
    // },
    // Login: async (body: any) => {
    //     return await Service(false).post(`/api/token`, body);
    // },
    // EsqueceuSenha: async (body: any) => {
    //     return await Service(false).post(`/api/conta/esquecisenha`, body);
    // },
    // RedefinirSenha: async (body: any) => {
    //     return await Service(false).post(`/api/conta/alterarsenha`, body);
    // },
    Cadastro: async (body: any) => {
        return await Service(false).post(`/auth/local/register`, body);
    },
    Me: async () => {
        return await Service(false).get(`/posts`);
    }
}