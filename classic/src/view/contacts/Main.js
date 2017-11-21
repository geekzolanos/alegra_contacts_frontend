/**
 * Indice de contactos
 */
Ext.define('Contactos.view.contacts.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Contactos.view.contacts.MainController',
        'Contactos.store.Contacto'
    ],

    xtype: 'contacts-main',
    controller: 'main',
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
            xtype: 'app-header',
        },

        /* 
         * Contenido
         */
        {
            xtype: 'panel',
            ui: 'contacts-main',
            title: 'Contactos',
            icon: 'https://cdn1.alegra.com/images/index-icon.png',
            header: {
                items: [{
                        xtype: 'button',
                        ui: 'contacts-main',
                        scale: 'medium',
                        text: 'Nuevo Contacto',
                        icon: 'https://cdn1.alegra.com/images/plus-icon.png',
                        href: '#add',
                        hrefTarget: '_self'
                    },
                    {
                        xtype: 'tbspacer',
                        flex: 2.4
                    },
                    {
                        xtype: 'button',
                        text: 'Importar desde excel',
                        href: '#'
                    },
                    {
                        xtype: 'button',
                        text: 'Exportar',
                        href: '#'
                    }
                ],
            },
            items: [{
                    xtype: 'gridpanel',
                    id: 'contacts-main-grid',
                    store: {
                        type: 'contacto'
                    },
                    columns: [{
                            text: 'Nombre',
                            dataIndex: 'name',
                            align: 'center',
                            flex: 1
                        },
                        {
                            text: 'Identificacion',
                            dataIndex: 'identification',
                            align: 'center',
                            flex: 1
                        },
                        {
                            text: 'Telefono 1',
                            dataIndex: 'phonePrimary',
                            align: 'center',
                            flex: 1
                        },
                        {
                            text: 'Observaciones',
                            dataIndex: 'observations',
                            align: 'center',
                            flex: 1
                        },
                        {
                            text: 'Acciones',
                            xtype: 'actioncolumn',
                            width: 200,
                            align: 'center',
                            items: [{
                                    icon: 'https://cdn1.alegra.com/images/icons/zoom.png',
                                    tooltip: 'Detalles',
                                    handler: 'viewContact'
                                },
                                {
                                    icon: 'https://cdn1.alegra.com/images/icons/page_edit.png',
                                    tooltip: 'Modificar',
                                    handler: 'editContact'
                                },
                                {
                                    icon: 'https://cdn1.alegra.com/images/icons/delete.png',
                                    tooltip: 'Eliminar',
                                    handler: "requestRemoval"
                                }
                            ]
                        },
                    ],
                    bbar: [{
                        xtype: 'pagingtoolbar',
                        displayInfo: true,
                        displayMsg: 'Mostrando {0} - {1} de {2}',
                        emptyMsg: 'No hay contactos'
                    }]
                },

                /* 
                 * Footer
                 */
                {
                    xtype: 'app-footer',
                    margin: '30 0'
                }
            ]
        }
    ]
})