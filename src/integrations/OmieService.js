
const IntegrationGeneric = require('./IntegrationGeneric');

const OMIE_APP_KEY = '852287147712';
const OMIE_APP_SECRET = '71ca51b47c3936ad4fe2c15c7dfbd81d';

module.exports = {

    async listPurchaseOrdersPaged(page, size){
        const params = {
            "call": "ListarPedidos",
            "app_key": OMIE_APP_KEY,
            "app_secret": OMIE_APP_SECRET,
            "param": [{
            "pagina": page,
            "registros_por_pagina": size,
            "apenas_importado_api": "N"
            }]
        }
            
        const options = {
            url: 'https://app.omie.com.br/api/v1/produtos/pedido/',
            method: "POST",
            json: true,
            body: params
        }

        const resp = await IntegrationGeneric.promisifiedRequest(options)          
        return resp.body    
    },

    async getClientByCode(clientCode){
        const params = {
            "call": "ConsultarCliente",
            "app_key": OMIE_APP_KEY,
            "app_secret": OMIE_APP_SECRET,
            "param": [{
              "codigo_cliente_omie": clientCode,
              "codigo_cliente_integracao": ""
            }]
          }
         
          const options = {
            url: 'https://app.omie.com.br/api/v1/geral/clientes/',
            method: "POST",
            json: true,
            body: params
          }
      
          const resp = await IntegrationGeneric.promisifiedRequest(options)   
          return resp.body
        }

}