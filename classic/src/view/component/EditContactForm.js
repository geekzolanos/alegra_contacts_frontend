/**
 * EditContactForm
 * Formulario de edicion de contacto
 */
Ext.define('Contactos.view.component.EditContactForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'Contactos.view.component.EditContactController',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.form.field.ComboBox',
    ],
    xtype: 'editcontactform',
    controller: 'editcontact',
    ui: 'contacts-main',

    defaults: {
        border: false,
        xtype: 'panel'
    },

    items: [{
        layout: 'hbox',
        title: 'Datos Basicos',
        defaults: {
            border: false,
            xtype: 'panel',
            flex: 1,
            layout: 'anchor',
            style: { padding: "10px 18px" }
        },
        items: [{
                defaults: {
                    xtype: 'textfield',
                    width: '100%'
                },
                items: [{
                        fieldLabel: 'Nombres',
                        name: 'name'
                    },
                    {
                        fieldLabel: 'Identificacion',
                        name: 'identification'
                    },
                    {
                        fieldLabel: 'Correo electronico',
                        name: 'email'
                    },
                    {
                        fieldLabel: 'Telefono 1',
                        name: 'phonePrimary'
                    },
                    {
                        fieldLabel: 'Telefono 2',
                        name: 'phoneSecondary'
                    },
                    {
                        fieldLabel: 'Fax',
                        name: 'fax'
                    },
                    {
                        fieldLabel: 'Celular',
                        name: 'mobile'
                    },
                    {
                        xtype: 'fieldcontainer',
                        defaultType: 'textfield',
                        layout: 'hbox',
                        defaults: {
                            flex: 1
                        },
                        items: [{
                                fieldLabel: 'Direccion',
                                name: 'address1'
                            },
                            {
                                fieldLabel: 'Ciudad',
                                margin: "0 0 0 5px",
                                name: 'address2'
                            }
                        ]
                    }
                ]
            },
            {
                defaults: {
                    xtype: 'textfield',
                    width: '100%'
                },
                items: [{
                        name: 'priceList',
                        xtype: 'combobox',
                        fieldLabel: 'Lista de precios',
                        store: {
                            type: 'pricelist'
                        },
                        displayField: 'name',
                        valueField: 'id'

                    },
                    {
                        name: 'seller',
                        xtype: 'combobox',
                        fieldLabel: 'Vendedor',
                        store: {
                            type: 'sellers'
                        },
                        displayField: 'name',
                        valueField: 'id'

                    },
                    {
                        name: 'term',
                        xtype: 'combobox',
                        fieldLabel: 'Terminos de pago',
                        store: {
                            type: 'terms'
                        },
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'id'

                    },
                    {
                        xtype: 'checkbox',
                        fieldLabel: 'Cliente',
                        name: 'client'
                    },
                    {
                        xtype: 'checkbox',
                        fieldLabel: 'Proveedor',
                        name: 'provider'
                    },
                    {
                        fieldLabel: 'Observaciones',
                        name: 'observations',
                        xtype: 'textarea'
                    }
                ]
            }
        ]
    }]
});