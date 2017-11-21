/**
 * Vista de detalles de contacto
 */
Ext.define('Contactos.view.contacts.View', {
    extend: 'Ext.container.Container',

    requires: [
        'Contactos.view.contacts.ViewController'
    ],

    xtype: 'contacts-view',
    controller: 'view',
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
            xtype: 'panel',
            ui: 'contacts-main',
            id: 'contacts-view-panel',
            title: 'Detalles de Contacto',
            layout: 'hbox',
            header: {
                items: [{
                    xtype: 'button',
                    ui: 'contacts-main',
                    scale: 'medium',
                    text: 'Editar',
                    handler: "editContact"
                }]
            },
            defaults: {
                border: false,
                xtype: 'panel',
                layout: {
                    type: 'table',
                    columns: 2
                },
                defaults: {
                    bodyPadding: 8
                },
                flex: 1
            },
            items: [{
                    title: 'Datos Generales',
                    items: [
                        { html: { cn: "Identificación " } },
                        { id: 'contacts-field-identification' },

                        { html: { cn: "Teléfono" } },
                        { id: 'contacts-field-phone' },

                        { html: { cn: "Teléfono 2" } },
                        { id: 'contacts-field-phone2' },

                        { html: { cn: "Fax" } },
                        { id: 'contacts-field-fax' },

                        { html: { cn: "Celular" } },
                        { id: 'contacts-field-mobileid' },

                        { html: { cn: "Dirección" } },
                        { id: 'contacts-field-address' },

                        { html: { cn: "Ciudad" } },
                        { id: 'contacts-field-city' },

                        { html: { cn: "Correo electrónico" } },
                        { id: 'contacts-field-email' },

                        { html: { cn: "Observaciones " } },
                        { id: 'contacts-field-observations' },

                        { html: { cn: "Archivos adjunto" } },
                        { id: 'contacts-field-file' },

                        { html: { cn: "Enlace estado de cuenta" } },
                        { id: 'contacts-field-balance' }
                    ]
                },
                {
                    title: 'Saldos',
                    items: [
                        { html: { cn: "Por cobrar" } },
                        { id: 'contacts-field-cobrar', html: "0.00" },

                        { html: { cn: "Por cobrar vencido" } },
                        { id: 'contacts-field-vencido', html: "0.00" },

                        { html: { cn: "Por pagar" } },
                        { id: 'contacts-field-pagar', html: "0.00" },

                        { html: { cn: "Anticipos recibidos" } },
                        { id: 'contacts-field-antrecibidos', html: "0.00" },

                        { html: { cn: "Anticipos entregados" } },
                        { id: 'contacts-field-antentregados', html: "0.00" },

                        { html: { cn: "Notas crédito por aplicar" } },
                        { id: 'contacts-field-notcredito', html: "0.00" },

                        { html: { cn: "Notas débito por aplicar" } },
                        { id: 'contacts-field-notdebito', html: "0.00" }
                    ]
                }
            ]
        },

        /* 
         * Internal Contacts
         */
        {
            xtype: 'grid',
            id: 'innercontactgrid-view',
            title: 'Contactos',
            store: {
                model: 'Contactos.model.InnerContact'
            },
            columns: [{
                    header: 'Nombres',
                    dataIndex: 'name',
                    flex: 1
                },
                {
                    header: 'Apellidos',
                    dataIndex: 'surname',
                    flex: 1
                },
                {
                    header: 'Correo Electronico',
                    dataIndex: 'email',
                    flex: 1
                },
                {
                    header: 'Telefono',
                    dataIndex: 'phonePrimary',
                    flex: 1
                },
                {
                    header: 'Celular',
                    dataIndex: 'mobileid',
                    flex: 1
                }
            ]
        },

        /* 
         * Stats Placeholder
         */
        {
            xtype: 'image',
            src: '/resources/images/contact_stats_placeholder.png',
            height: 615,
            margin: "20 0",
            listeners: {
                el: {
                    click: 'openStats'
                }
            }
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