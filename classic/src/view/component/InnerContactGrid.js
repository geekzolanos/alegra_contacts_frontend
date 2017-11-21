/**
 * InnerContactGrid
 * Grilla para el manejo de InnerContacts
 */
Ext.define('Contactos.view.component.InnerContactGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'innercontactgrid',
    requires: ['Contactos.view.component.InnerContactController'],
    controller: 'innercontact',
    title: 'Contactos',
    tbar: [{
        text: 'Agregar persona',
        handler: 'onInnerContactAdd'
    }],
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    store: {
        model: 'Contactos.model.InnerContact'
    },
    columns: [{
            header: 'Nombres',
            dataIndex: 'name',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Apellidos',
            dataIndex: 'surname',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Correo Electronico',
            dataIndex: 'email',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Telefono',
            dataIndex: 'phonePrimary',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            header: 'Celular',
            dataIndex: 'mobileid',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            xtype: 'checkcolumn',
            header: 'Recibir Notificaciones',
            dataIndex: 'notifications'
        },
        {
            xtype: 'actioncolumn',
            items: [{
                icon: 'https://cdn1.alegra.com/images/icons/delete.png',
                tooltip: 'Borrar',
                handler: 'onInnerContactDelete'
            }]
        }
    ]
});