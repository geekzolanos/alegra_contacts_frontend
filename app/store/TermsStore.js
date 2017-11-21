/**
 * Store - Terms
 */
// La API no proporciona un endpoint para solicitar los metodos de pagos disponibles,
// asi que los establecemos localmente.
Ext.define('Contactos.store.Terms', {
    extend: 'Ext.data.Store',
    alias: 'store.terms',
    fields: ['name'],
    data: [
        { id: 1, name: 'Vencimiento Manual', days: 0 },
        { id: 2, name: 'De contado', days: 1 },
        { id: 3, name: '8 Dias', days: 8 },
        { id: 4, name: '15 Dias', days: 15 },
        { id: 5, name: '30 Dias', days: 30 },
        { id: 6, name: '60 Dias', days: 60 }
    ]
});