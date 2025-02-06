import axios from 'axios';

class PayPalService {
  
    async createOrderPaypal(plan: string) {
        try {
          console.log("Enviando plan a PayPal:", plan); 
      
          const response = await axios.post("https://c23-53-webapp-production.up.railway.app/api/v1/paypal/create-order", {
            plan, 
          });
      
          console.log("Respuesta completa del backend:", response); 
          console.log("Respuesta de PayPal:", response.data); 
      
          const { approvalUrl } = response.data; 
      
          if (approvalUrl) {
            return approvalUrl;
          } else {
            throw new Error("No se encontró el enlace de aprobación en la respuesta de PayPal.");
          }
        } catch (error) {
          console.error("Error creando orden en PayPal", error);
          throw error; 
        }
      }
      

  async handleCheckoutPaypal(plan: string) {
    try {
      const url = await this.createOrderPaypal(plan); 
      if (url) {
        console.log("Redirigiendo a PayPal con URL:", url); 
        window.location.href = url;
      }
    } catch (error) {
      console.error("Error durante el proceso de pago con PayPal", error);
    }
  }
}

export default new PayPalService();
