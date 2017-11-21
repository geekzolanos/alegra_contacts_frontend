/**
 * Vista principal de aplicacion
 */

// Creamos manualmente el viewport para establecer un layout de tarjetas
// De esta manera podremos cargar toda la aplicacion localmente.

Ext.define('Contactos.view.main.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Contactos.view.contacts.Main',
        'Contactos.view.contacts.Add',
        'Contactos.view.contacts.View',
        'Contactos.view.contacts.Edit'
    ],
    layout: {
        type: 'card',
        align: 'center'
    },
    items: [
        /* 
         * Indice de contactos
         */
        {
            xtype: 'contacts-main',
            itemId: 'contactsMain'
        },

        /* 
         * Agregar Contactos
         */
        {
            xtype: 'contacts-add',
            itemId: 'contactsAdd'
        },

        /* 
         * Detalles de contacto
         */
        {
            xtype: 'contacts-view',
            itemId: 'contactsView'
        },

        /* 
         * Editar contacto
         */
        {
            xtype: 'contacts-edit',
            itemId: 'contactsEdit'
        }
    ]
});