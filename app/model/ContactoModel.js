/**
 * Modelo "Contacto"
 */
Ext.define('Contactos.model.Contacto', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.Rest'],
    fields: [{
            name: 'name',
            type: 'string'
        },
        {
            name: 'identification',
            type: 'string',
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'phonePrimary',
            type: 'string',
        },
        {
            name: 'phoneSecondary',
            type: 'string'
        },
        {
            name: 'fax',
            type: 'string'
        },
        {
            name: 'mobile',
            type: 'string'
        },
        {
            name: 'observations',
            type: 'string'
        },
        {
            name: 'ignoreRepeated',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'type',
            type: 'auto'
        },
        {
            name: 'address',
            type: 'auto'
        },
        {
            name: 'seller',
            type: 'auto'
        },
        {
            name: 'term',
            type: 'auto'
        },
        {
            name: 'priceList',
            type: 'auto'
        },
        {
            name: 'internalContacts',
            type: 'auto'
        }
    ],
    proxy: {
        type: 'rest',
        url: '/contacts',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        },
        writer: {
            type: 'json'
        }
    },
});