/**
 * ViewController de vista Contacts.View
 */
Ext.define('Contactos.view.contacts.ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.view',
    requires: ['Ext.window.Toast'],

    /**
     * ID de contacto actual
     */
    curId: 0,

    /**
     * Handler de enrutado
     */
    onInitView: function(id) {
        var t = this;

        // Cargamos el modelo
        Contactos.model.Contacto.load(id, {
            success: function(data) {
                // Preparamos la vista
                t.curId = id;
                t.setDetailsView(data);
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
     * Actualiza componentes de la vista con detalles del contacto
     * @param contact Instancia de Modelo 'Contacto'
     */
    setDetailsView: function(contact) {
        // Referencias
        var rootPanel = Ext.getCmp('contacts-view-panel');
        var fieldidentification = Ext.getCmp('contacts-field-identification');
        var fieldphone = Ext.getCmp('contacts-field-phone');
        var fieldphone2 = Ext.getCmp('contacts-field-phone2');
        var fieldfax = Ext.getCmp('contacts-field-fax');
        var fieldmobileid = Ext.getCmp('contacts-field-mobileid');
        var fieldaddress = Ext.getCmp('contacts-field-address');
        var fieldcity = Ext.getCmp('contacts-field-city');
        var fieldemail = Ext.getCmp('contacts-field-email');
        var fieldobservations = Ext.getCmp('contacts-field-observations');
        var fieldfile = Ext.getCmp('contacts-field-file');
        var fieldbalance = Ext.getCmp('contacts-field-balance');
        var fieldcobrar = Ext.getCmp('contacts-field-cobrar');
        var fieldvencido = Ext.getCmp('contacts-field-vencido');
        var fieldpagar = Ext.getCmp('contacts-field-pagar');
        var fieldantrecibidos = Ext.getCmp('contacts-field-antrecibidos');
        var fieldantentregados = Ext.getCmp('contacts-field-antentregados');
        var fieldnotcredito = Ext.getCmp('contacts-field-notcredito');
        var fieldnotdebito = Ext.getCmp('contacts-field-notdebito');
        var innerContact = Ext.getCmp('innercontactgrid-view');

        // Titulo de panel
        rootPanel.setTitle(contact.data.name);

        fieldidentification.update(contact.data.identification);
        fieldemail.update(contact.data.email);
        fieldphone.update(contact.data.phonePrimary);
        fieldphone2.update(contact.data.phoneSecondary);
        fieldfax.update(contact.data.fax);
        fieldmobileid.update(contact.data.mobile);
        fieldobservations.update(contact.data.observations);
        fieldaddress.update(contact.data.address.address);
        fieldcity.update(contact.data.address.city);

        // TODO: Manejo de subida de archivos
        //fieldfile.update()

        // Internal Contacts
        var ic = [];
        Array.forEach(contact.data.internalContacts, function(c) {
            ic.push(Ext.create("Contactos.model.InnerContact", c));
        });
        innerContact.store.loadData(ic);
        innerContact.getView().refresh();
    },

    /**
     * Abre la vista de edicion de contacto
     */
    editContact: function() {
        Contactos.app.getController('Router').redirectTo('edit/' + this.curId);
    },

    /**
     * Redirecciona a la aplicacion Alegra para detalles de estadisticas
     */
    openStats: function() {
        // La API no proporciona suficiente informacion para generar las estadisticas
        // Por tanto, redireccionamos a la app oficial para mostrar estos detalles.
        window.open('https://app.alegra.com/client/view/id/' + this.curId, '_blank');
    }
});