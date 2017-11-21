/**
 * ViewController de vista "Contacto.Edit"
 */
Ext.define('Contactos.view.contacts.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.edit',
    requires: ['Ext.window.Toast'],

    /**
     * Instancia actual de modelo "Contacto"
     */
    curModel: {},

    /**
     * Handler de enrutado
     */
    onInitView: function(id) {
        var t = this;

        // Cargamos el modelo
        Contactos.model.Contacto.load(id, {
            success: function(data) {
                // Almacenamos la referencia y actualizamos la vista
                t.curModel = data;
                t.setDetailsView();
            },
            failed: function() {
                Ext.toast({
                    html: 'Ha ocurrido un error, por favor intente nuevamente mas tarde.',
                    title: 'Operacion fallida',
                    width: 300,
                    align: 't'
                });
                Contactos.app.getController('Router').redirectTo('all');
            }
        });
    },

    /**
     * Refresca la vista con los datos del modelo actual
     */
    setDetailsView: function() {
        var editForm = Ext.getCmp('form-contactedit');
        var innerContact = Ext.getCmp('innercontactgrid-edit');

        // Actualizamos el formulario
        editForm.controller.setFields(this.curModel.data);

        // Inner Contacts
        var ic = [];

        Array.forEach(this.curModel.data.internalContacts, function(c) {
            ic.push(Ext.create("Contactos.model.InnerContact", c));
        });

        innerContact.store.loadData(ic);
        innerContact.getView().refresh();
    },

    /**
     * Envia los datos al servidor
     * TODO: Reforzar validacion
     */
    onSubmit: function(e) {
        var innercontactCmp, innercontactVal, formBodyCmp, formBodyVal;

        innercontactCmp = Ext.getCmp('innercontactgrid-edit');
        formBodyCmp = Ext.getCmp('form-contactedit');

        // Verificamos que los componentes existan
        if (!innercontactCmp || !formBodyCmp) {
            console.error("No se encuentran los componentes requeridos");
            throw new Exception("NULL_CMP_REQUIRED");
        }

        // Obtenemos los datos
        innercontactVal = innercontactCmp.controller.getItems();
        formBodyVal = formBodyCmp.form.getFieldValues();

        // Internal Contacts
        formBodyVal.internalContacts = [];
        if (innercontactVal.length > 0) {
            Array.forEach(innercontactVal, function(contact) {
                formBodyVal.internalContacts.push(contact.data);
            });
        }

        // Type
        formBodyVal.type = [];
        if (formBodyVal.client) {
            formBodyVal.type.push("client");
        }
        if (formBodyVal.provider) {
            formBodyVal.type.push("provider");
        }

        // Direccion
        formBodyVal.address = { address: formBodyVal.address1, city: formBodyVal.address2 };

        // Actualizamos los datos recolectamos en el modelo
        this.curModel.set(formBodyVal);

        // Enviamos los datos
        this.curModel.save({
            success: function(e) {
                Ext.toast({
                    html: 'Contacto actualizado satisfactoriamente',
                    title: 'Operacion exitosa',
                    width: 300,
                    align: 't'
                });
                Contactos.app.getController('Router').redirectTo('all');
            },
            failure: function(e) {
                Ext.toast({
                    html: 'Ha ocurrido un error, por favor verifique los datos e intente nuevamente.',
                    title: 'Operacion fallida',
                    width: 300,
                    align: 't'
                });
            }
        })
    }
});