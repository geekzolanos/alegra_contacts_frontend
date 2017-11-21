/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Contactos.Application', {
    extend: 'Ext.app.Application',

    name: 'Contactos',
    defaultToken: 'all',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    controllers: ['Router'],

    launch: function() {
        // Almacenamos una referencia del Viewport
        this.viewport = Ext.ComponentQuery.query('viewport')[0];
    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Actualizacion', 'Hay actualizaciones disponibles. ¿Desea recargar?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});