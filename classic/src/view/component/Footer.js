/**
 * Footer de aplicacion
 */
Ext.define('Contactos.view.component.Footer', {
    extend: 'Ext.container.Container',
    xtype: 'app-footer',
    layout: 'hbox',
    defaults: {
        flex: 1,
        xtype: 'panel',
        ui: 'app-footer',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            xtype: 'box',
            style: {
                padding: "10px 0",
                fontSize: "14px",
                color: "#7d7d7d"
            }
        }
    },
    items: [{
            title: "Ayudas paso a paso",
            icon: 'https://cdn1.alegra.com/images/ayuda_icon.png',
            items: [{
                    autoEl: { tag: 'a', href: 'http://ayuda.alegra.com/hc/es/articles/205798409-C%C3%B3mo-hacer-una-Factura-de-venta-', html: 'Como crear una factura de venta' }
                },
                {
                    autoEl: { tag: 'a', href: 'http://ayuda.alegra.com/hc/es/articles/206509365--C%C3%B3mo-crear-una-Factura-de-Proveedor-', html: 'Como crear una factura de proveedor' }
                },
                {
                    autoEl: { tag: 'a', href: 'http://ayuda.alegra.com/hc/es/articles/206509615--C%C3%B3mo-importar-contactos-', html: 'Como importar contactos' }
                },
                {
                    autoEl: { tag: 'a', href: 'http://ayuda.alegra.com/hc/es/articles/206512955--C%C3%B3mo-crear-un-Banco-', html: 'Como crear una cuenta de Banco' }
                },
                {
                    autoEl: { tag: 'a', href: 'http://ayuda.alegra.com/hc/es/articles/206509105-Agregar-un-pago-a-una-factura', html: 'Como registrar un pago a una factura de venta' }
                },
                {
                    autoEl: { tag: 'a', href: 'http://ayuda.alegra.com/hc/es/articles/205798349--C%C3%B3mo-crear-una-Nota-Cr%C3%A9dito-', html: 'Como crear una nota credito' }
                }
            ]
        },
        {
            title: "Soporte",
            icon: 'https://cdn1.alegra.com/images/soporte_icon.png',
            items: [
                // No podemos asignar esta ruta (Abre un panel de la vista)
                {
                    autoEl: { tag: 'a', href: '', html: 'Contactenos' }
                },
                {
                    autoEl: { tag: 'a', href: 'http://ayuda.alegra.com/hc/es', html: 'Centro de ayuda' }
                },
                {
                    autoEl: { tag: 'a', href: 'http://www.alegra.com/manual.pdf', html: 'Manual de primeros pasos en alegra' }
                },
                {
                    autoEl: { tag: 'a', href: 'http://www.alegra.com/acrecer-con-alegra', html: 'Plan de referidos' }
                },
                {
                    autoEl: { tag: 'a', href: 'http://ayuda.alegra.com/hc/es/articles/205761789-Caso-de-%C3%A9xito', html: 'Comparte tu historia' }
                }
            ]
        },
        {
            title: "Contactos",
            icon: 'https://cdn1.alegra.com/images/info_icon_1.png',
            items: [{
                    autoEl: { tag: 'a', href: 'http://ayuda.alegra.com/hc/es/articles/206509595--C%C3%B3mo-crear-un-cliente-y-o-proveedor-', html: '¿Como crear un cliente?' }
                },
                {
                    autoEl: { tag: 'a', href: 'http://ayuda.alegra.com/hc/es/articles/206509615--C%C3%B3mo-importar-contactos-', html: '¿Como importar contactos?' }
                }
            ]
        }
    ]
});