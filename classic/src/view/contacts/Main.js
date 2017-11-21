/**
 * ViewController de vista 'Contacto.Main'
 */
Ext.define('Contactos.view.contacts.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: ['Ext.window.Toast', 'Ext.window.MessageBox'],

    /**
     * Handler de enrutado
     */
    onInitView: function() {
        this.refreshGrid();
    },

    /**
     * Confirma la eliminacion de un contacto a partir de la vista.
     */
    requestRemoval: function() {
        var t = this;

        // El metodo actual es un handler de un ActionColumn
        // Por la cantidad de parametros enviados, accedemos manualmente
        // solo a los que necesitamos
        var grid = arguments[0];
        var contact = arguments[5];

        // Confirmacion
        Ext.Msg.show({
            title: 'Confirmacion',
            message: 'Confirme, ¿Desea eliminar el contacto ' + contact.data.name + '? (Esta accion no se puede deshacer)',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                    // Borramos el contacto
                    t.removeContact(contact);
                }
            }
        })
    },

    /**
     * Muestra la vista "Detalles de contacto"
     */
    viewContact: function() {
        var contact = arguments[5];
        Contactos.app.getController('Router').redirectTo('view/' + contact.id);
    },

    /**
     * Muestra la vista "Edicion de contacto"
     */
    editContact: function() {
        var contact = arguments[5];
        Contactos.app.getController('Router').redirectTo('edit/' + contact.id);
    },

    /**
     * Elimina un contacto
     * @param contact Instancia de modelo "Contacto"
     */
    removeContact: function(contact) {
        var t = this;
        contact.erase({
            success: function(e) {
                Ext.toast({
                    html: 'Contacto eliminado satisfactoriamente',
                    title: 'Operacion exitosa',
                    width: 300,
                    align: 't'
                });

                t.refreshGrid();
            },

            failure: function(e) {
                Ext.toast({
                    html: 'Ha ocurrido un error, por favor intente nuevamente mas tarde.',
                    title: 'Operacion fallida',
                    width: 300,
                    align: 't'
                });
            }
        });
    },

    /**
     * Refresca el indice de contactos
     */
    refreshGrid: function() {
        var grid = Ext.getCmp('contacts-main-grid');
        grid.store.load();
        grid.getView().refresh();
    }
});