/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'vdr:': 'vendors/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'vdr:@angular/core/bundles/core.umd.js',
            '@angular/common': 'vdr:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'vdr:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'vdr:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'vdr:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'vdr:@angular/http/bundles/http.umd.js',
            '@angular/router': 'vdr:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'vdr:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'vdr:rxjs'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                main: './Rx.js'
                //defaultExtension: 'js'
            }
        }
    });
})(this);
