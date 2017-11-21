/**
 * Controlador para el manejo de rutas de aplicacion
 */
Ext.define('Contactos.controller.Router', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            contactsMain: {
                autocreate: true,
                selector: '#contactsMain',
                xtype: 'contactsMain'
            },
            contactsAdd: {
                autocreate: true,
                selector: '#contactsAdd',
                xtype: 'contactsAdd'
            },
            contactsView: {
                autocreate: true,
                selector: '#contactsView',
                xtype: 'contactsView'
            },
            contactsEdit: {
                autocreate: true,
                selector: '#contactsEdit',
                xtype: 'contactsEdit'
            }
        },
        routes: {
            'add': 'onAdd',
            'all': 'onIndexAll',
            'view/:id': 'onView',
            'edit/:id': 'onEdit'
        }
    },

    onIndexAll: function() {
        this._openView(this.getContactsMain());
    },

    onAdd: function() {
        this._openView(this.getContactsAdd());
    },

    onView: function(param) {
        this._openView(this.getContactsView(), param);
    },

    onEdit: function(param) {
        this._openView(this.getContactsEdit(), param);
    },

    _openView: function(view, param) {
        Contactos.app.viewport.getLayout().setActiveItem(view);
        if (view.controller) {
            view.controller.onInitView(param);
        }
    }
})