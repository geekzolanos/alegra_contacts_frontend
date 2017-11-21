/**
 * Store - PriceList
 */
Ext.define('Contactos.store.PriceList', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.Ajax'],
    alias: 'store.pricelist',
    fields: ['name', 'status'],
    proxy: {
        type: 'ajax',
        url: '/pricelists',
        reader: {
            rootProperty: 'data'
        }
    }
});