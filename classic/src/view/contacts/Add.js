/**
 * Agregar contacto
 */
Ext.define('Contactos.view.contacts.Add', {
    extend: 'Ext.container.Container',
    requires: [
        'Contactos.view.contacts.AddController',
        'Contactos.view.component.InnerContactGrid',
        'Contactos.view.component.EditContactForm',
        'Contactos.store.Contacto',
        'Contactos.store.PriceList',
        'Contactos.store.Terms',
        'Contactos.store.Sellers',
    ],

    xtype: 'contacts-add',
    controller: 'add',
    autoScroll: true,

    layout: {
        type: 'vbox',
        align: 'center'
    },

    defaults: {
        width: 1024
    },

    items: [
        /* 
         * Header
         */
        {
            xtype: 'app-header'
        },

        /* 
         * Contenido
         */
        {
            xtype: 'editcontactform',
            id: 'form-contactadd',
            title: 'Agregar Contacto',
            icon: 'https://cdn1.alegra.com/images/create-icon.png'
        },
        {
            xtype: 'innercontactgrid',
            id: 'innercontactgrid-add',
            margin: "20px 0"
        },
        {
            xtype: 'button',
            text: 'Guardar Contacto',
            scale: 'medium',
            handler: 'onSubmit'
        },

        /* 
         * Footer
         */
        {
            xtype: 'app-footer',
            margin: '30 0'
        }
    ]
})