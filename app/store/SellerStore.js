/**
 * Store - Sellers
 */
Ext.define('Contactos.store.Sellers', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.Ajax'],
    alias: 'store.sellers',
    fields: ['name', 'id'],
    proxy: {
        type: 'ajax',
        url: '/sellers',
        reader: {
            rootProperty: 'data'
        }
    }
});