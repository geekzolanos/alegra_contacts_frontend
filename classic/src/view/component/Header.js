/**
 * Cabecera de la aplicacion
 */
Ext.define('Contactos.view.component.Header', {
    extend: 'Ext.container.Container',
    xtype: 'app-header',
    requires: [
        'Contactos.view.widget.HoverButton'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        /* 
         * Area superior
         */
        {
            xtype: 'container',
            cls: 'header-container-top',
            width: 'auto',
            padding: '20, 0',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [{
                    xtype: 'image',
                    src: 'https://cdn1.alegra.com/images/logo_alegra.png',
                    href: "#all",
                    hrefTarget: '_self',
                    width: 178
                },
                {
                    xtype: 'form',
                    flex: 1,
                    margin: '0 0 0 20',
                    layout: 'fit',
                    items: [{
                        xtype: 'textfield',
                        ui: 'header',
                        cls: 'search-input',
                        emptyText: 'Buscar...'
                    }]
                },
                {
                    xtype: 'container',
                    flex: 3,
                    layout: {
                        type: 'hbox',
                        pack: 'end'
                    },
                    items: [{
                        xtype: 'button',
                        href: 'http://ayuda.alegra.com/hc/es',
                        text: 'Ayuda'
                    }, {
                        xtype: 'button',
                        href: 'https://app.alegra.com/configuration',
                        text: 'Configuracion'
                    }, {
                        xtype: 'button',
                        href: 'https://app.alegra.com/user/view/id/1',
                        text: 'Usuario'
                    }]
                }
            ]
        },

        /* 
         * Barra de navegacion
         */
        {
            xtype: 'container',
            cls: 'header-container-bottom',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            height: 50,
            items: [{
                    xtype: 'container',
                    flex: 4,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [{
                            xtype: 'button',
                            text: 'Inicio',
                            disabled: true
                        },
                        {
                            xtype: 'button',
                            text: 'Ingresos',
                            disabled: true
                        },
                        {
                            xtype: 'button',
                            text: 'Gastos',
                            disabled: true
                        },
                        {
                            xtype: 'hoverButton',
                            text: 'Contactos',
                            arrowVisible: false,
                            menu: {
                                xtype: 'menu',
                                items: [{
                                        text: 'Todos',
                                        href: '#all',
                                        hrefTarget: '_self'
                                    }, {
                                        text: 'Clientes',
                                        href: '#all?type=0',
                                        hrefTarget: '_self'
                                    },
                                    {
                                        text: 'Proveedores',
                                        href: '#all?type=1',
                                        hrefTarget: '_self'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Inventario',
                            disabled: true
                        },
                        {
                            xtype: 'button',
                            text: 'Bancos',
                            disabled: true
                        },
                        {
                            xtype: 'button',
                            text: 'Categorias',
                            disabled: true
                        },
                        {
                            xtype: 'button',
                            text: 'Reportes',
                            disabled: true
                        }
                    ]
                },
                {
                    xtype: 'hoverButton',
                    text: 'Nuevo',
                    icon: 'https://cdn1.alegra.com/images/create-icon.png',
                    flex: 1,
                    menu: {
                        xtype: 'menu',
                        items: [{
                                text: 'Todos',
                                disabled: true
                            }, {
                                text: 'Clientes',
                                href: '#add',
                                hrefTarget: '_self'
                            },
                            {
                                text: 'Proveedores',
                                disabled: true
                            }
                        ]
                    }
                }
            ]
        }
    ]
});