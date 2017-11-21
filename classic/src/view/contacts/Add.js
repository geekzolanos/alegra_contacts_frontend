/**
 * ViewController de vista "Contacto.Add"
 */
Ext.define('Contactos.view.contacts.AddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.add',
    requires: ['Ext.window.Toast'],

    /*
     * Handler de enrutado
     */
    onInitView: function() {
        // Agregamos una fila vacia en la grilla de InnerContact
        Ext.getCmp('innercontactgrid-add').controller.onInnerContactAdd();
    },

    /**
     * Envia los datos al servicio
     * TODO: Reforzar validacion
     */
    onSubmit: function(e) {
        var innercontactCmp, innercontactVal, formBodyCmp, formBodyVal;

        innercontactCmp = Ext.getCmp('innercontactgrid-add');
        formBodyCmp = Ext.getCmp('form-contactadd');

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

        // Creamos la instancia del modelo a partir de los datos
        var contact = Ext.create('Contactos.model.Contacto', formBodyVal);

        // Subimos al servicio
        contact.save({
            success: function(e) {
                Ext.toast({
                    html: 'Contacto almacenado satisfactoriamente',
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