/**
 * Store - Contacto
 */
Ext.define('Contactos.store.Contacto', {
    extend: 'Ext.data.Store',
    alias: 'store.contacto',
    model: 'Contactos.model.Contacto',
    autoLoad: true,
    autoSync: true,

    /*
     * La API de Alegra no entrega el total de registros disponibles,
     * por tanto no es posible hacer una paginacion real. Entregamos el maximo permitido
     * por la API (30 registros)
     */
    pageSize: 30
});