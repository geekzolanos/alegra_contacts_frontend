/**
 * ViewController de vista "EditContactForm"
 */
Ext.define('Contactos.view.component.EditContactController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.editcontact',

    /*
     * Actualiza los campos del formulario
     * @param data Objeto con datos del modelo "Contacto"
     */
    setFields: function(data) {
        if (typeof data.address == 'object') {
            data.address1 = data.address.address;
            data.address2 = data.address.city;
        }

        if (Array.isArray(data.type)) {
            data.client = (data.type.indexOf('client') != -1)
            data.provider = (data.type.indexOf('provider') != -1)
        }

        if (typeof data.priceList == 'object') {
            data.priceList = data.priceList.id;
        }

        if (typeof data.term == 'object') {
            data.term = data.term.id;
        }

        this.getView().getForm().setValues(data);
    }
});