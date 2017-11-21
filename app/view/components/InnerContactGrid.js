/**
 * ViewController de vista "InnerContactGrid"
 */
Ext.define('Contactos.view.component.InnerContactController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.innercontact',

    /**
     * Agrega un elemento vacio a la grilla
     */
    onInnerContactAdd: function() {
        var view = this.getView(),
            rec = new Contactos.model.InnerContact();

        view.store.insert(0, rec);
        view.findPlugin('cellediting').startEdit(rec, 0);
    },

    /**
     * Elimina un contacto de la grilla
     */
    onInnerContactDelete: function(view, recIndex, cellIndex, item, e, record) {
        record.drop();
    },

    /**
     * Retorna los elementos de la grilla
     * @return Object InnerContacts
     */
    getItems: function() {
        return this.getView().store.data.items;
    }
});