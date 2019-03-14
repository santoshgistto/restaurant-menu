import Vue from 'vue'
import grapesjs from 'grapesjs'
import grapeExport from 'grapesjs-plugin-export'
import { userdb,auth } from './firebase'
import blocks from './blocks'
Vue.mixin({
    methods: {
        gramateria() {
            let self = this;
            var project_title =   'testing';
            var project_description = 'description';
            var editor = grapesjs.init({
                allowScripts: 1,
                showOffsets: 1,
                autorender: 0,
                noticeOnUnload: 0,
                container: '#gjs',
                height: '100%',
                fromElement: true,
                clearOnRender: 0,
                plugins: [grapeExport],
                pluginsOpts: {
                [grapeExport]: {
                        btnLabel: 'Download Zip',
                        preHtml: `<!doctype html>
                        <html>
                        <head>
                        <title>${project_title}</title>
                        <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon">
                        <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon">
                        <!-- Required meta tags -->
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                        <meta name="description" content="${project_description}">
                        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                        <link rel="stylesheet" href="css/style.css">
                        </head>
                        <body>`,
                        postHtml: `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/min/tiny-slider.js"></script><!-- this page is generateded by Gramateria -->
                        </body>
                        </html>`
                    }
                },
                canvas: {
                    styles: ['https://fonts.googleapis.com/css?family=Roboto', 
                    'https://fonts.googleapis.com/icon?family=Material+Icons', 
                    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
                    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
                    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css'
                ],
                    scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', 
                    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/min/tiny-slider.js'
                ],
                },
                commands: {
                    defaults: [
                        {
                            id: 'undo',
                            run: function (editor, sender) {
                                sender.set('active', false);
                                editor.UndoManager.undo(true);
                            }
                        }, {
                            id: 'redo',
                            run: function (editor, sender) {
                                sender.set('active', false);
                                editor.UndoManager.redo(true);
                            }
                        }, {
                            id: 'clean-all',
                            run: function (editor, sender) {
                                sender.set('active', false);
                                if (confirm('Are you sure to clean the canvas?')) {
                                    editor.runCommand('core:canvas-clear');
                                }
                            }
                        }],
                },


                assetManager: {
                    upload: 'https://test.page',
                    params: {
                        _token: 'pCYrSwjuiV0t5NVtZpQDY41Gn5lNUwo3it1FIkAj',
                    },
                    assets: [
                        {
                            type: 'image',
                            src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background_ckgyqe.jpg',
                            date: '2015-02-01',
                            height: 808,
                            width: 1440
                        },
                        {
                            type: 'image',
                            src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419441/background2_gjvaxs.jpg',
                            date: '2015-02-01',
                            height: 800,
                            width: 1600
                        },
                        {
                            type: 'image',
                            src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419443/background3_d0ghix.jpg',
                            date: '2015-02-01',
                            height: 743,
                            width: 1440
                        },
                        {
                            type: 'image',
                            src: 'https://res.cloudinary.com/ronaldaug/image/upload/v1515419446/background4_pzh5ou.jpg',
                            date: '2015-02-01',
                            height: 808,
                            width: 1440
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/0174DF/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/5FB404/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/BF00FF/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/B40431/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/088A68/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/DF7401/ffffff/',
                            height: 350,
                            width: 250
                        },
                        {
                            type: 'image',
                            src: 'http://via.placeholder.com/250x350/00BFFF/ffffff/',
                            height: 350,
                            width: 250
                        }
                    ]
                },
                blockManager: blocks,
                storageManager: {
                    id: 'gjs-',
                    type: 'local',
                    autosave: 1,
                    autoload: 1,
                    stepsBeforeSave: 1,
                    storeComponents: 1,
                    storeStyles: 1,
                    storeHtml: 1,
                    storeCss: 1,
                },
                styleManager: {
                    sectors: [{
                        name: 'General',
                        open: false,
                        buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
                    }, {
                        name: 'Dimension',
                        open: false,
                        buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
                    }, {
                        name: 'Typography',
                        open: false,
                        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
                        properties: [{
                            property: 'text-align',
                            list: [{
                                value: 'left',
                                className: 'fa fa-align-left'
                            },
                                {
                                    value: 'center',
                                    className: 'fa fa-align-center'
                                },
                                {
                                    value: 'right',
                                    className: 'fa fa-align-right'
                                },
                                {
                                    value: 'justify',
                                    className: 'fa fa-align-justify'
                                }
                            ],
                        }]
                    }, {
                        name: 'Decorations',
                        open: false,
                        buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
                    }, {
                        name: 'Extra',
                        open: false,
                        buildProps: ['opacity', 'transition', 'perspective', 'transform'],
                        properties: [{
                            type: 'slider',
                            property: 'opacity',
                            defaults: 1,
                            step: 0.01,
                            max: 1,
                            min: 0,
                        }]
                    }, {
                        name: 'Flex',
                        open: false,
                        properties: [{
                            name: 'Flex Container',
                            property: 'display',
                            type: 'select',
                            defaults: 'block',
                            list: [{
                                value: 'block',
                                name: 'Disable',
                            }, {
                                value: 'flex',
                                name: 'Enable',
                            }],
                        }, {
                            name: 'Flex Parent',
                            property: 'label-parent-flex',
                        }, {
                            name: 'Direction',
                            property: 'flex-direction',
                            type: 'radio',
                            defaults: 'row',
                            list: [{
                                value: 'row',
                                name: 'Row',
                                className: 'icons-flex icon-dir-row',
                                title: 'Row',
                            }, {
                                value: 'row-reverse',
                                name: 'Row reverse',
                                className: 'icons-flex icon-dir-row-rev',
                                title: 'Row reverse',
                            }, {
                                value: 'column',
                                name: 'Column',
                                title: 'Column',
                                className: 'icons-flex icon-dir-col',
                            }, {
                                value: 'column-reverse',
                                name: 'Column reverse',
                                title: 'Column reverse',
                                className: 'icons-flex icon-dir-col-rev',
                            }],
                        }, {
                            name: 'Wrap',
                            property: 'flex-wrap',
                            type: 'radio',
                            defaults: 'nowrap',
                            list: [{
                                value: 'nowrap',
                                title: 'Single line',
                            }, {
                                value: 'wrap',
                                title: 'Multiple lines',
                            }, {
                                value: 'wrap-reverse',
                                title: 'Multiple lines reverse',
                            }],
                        }, {
                            name: 'Justify',
                            property: 'justify-content',
                            type: 'radio',
                            defaults: 'flex-start',
                            list: [{
                                value: 'flex-start',
                                className: 'icons-flex icon-just-start',
                                title: 'Start',
                            }, {
                                value: 'flex-end',
                                title: 'End',
                                className: 'icons-flex icon-just-end',
                            }, {
                                value: 'space-between',
                                title: 'Space between',
                                className: 'icons-flex icon-just-sp-bet',
                            }, {
                                value: 'space-around',
                                title: 'Space around',
                                className: 'icons-flex icon-just-sp-ar',
                            }, {
                                value: 'center',
                                title: 'Center',
                                className: 'icons-flex icon-just-sp-cent',
                            }],
                        }, {
                            name: 'Align',
                            property: 'align-items',
                            type: 'radio',
                            defaults: 'center',
                            list: [{
                                value: 'flex-start',
                                title: 'Start',
                                className: 'icons-flex icon-al-start',
                            }, {
                                value: 'flex-end',
                                title: 'End',
                                className: 'icons-flex icon-al-end',
                            }, {
                                value: 'stretch',
                                title: 'Stretch',
                                className: 'icons-flex icon-al-str',
                            }, {
                                value: 'center',
                                title: 'Center',
                                className: 'icons-flex icon-al-center',
                            }],
                        }, {
                            name: 'Flex Children',
                            property: 'label-parent-flex',
                        }, {
                            name: 'Order',
                            property: 'order',
                            type: 'integer',
                            defaults: 0,
                            min: 0
                        }, {
                            name: 'Flex',
                            property: 'flex',
                            type: 'composite',
                            properties: [{
                                name: 'Grow',
                                property: 'flex-grow',
                                type: 'integer',
                                defaults: 0,
                                min: 0
                            }, {
                                name: 'Shrink',
                                property: 'flex-shrink',
                                type: 'integer',
                                defaults: 0,
                                min: 0
                            }, {
                                name: 'Basis',
                                property: 'flex-basis',
                                type: 'integer',
                                units: ['px', '%', ''],
                                unit: '',
                                defaults: 'auto',
                            }],
                        }, {
                            name: 'Align',
                            property: 'align-self',
                            type: 'radio',
                            defaults: 'auto',
                            list: [{
                                value: 'auto',
                                name: 'Auto',
                            }, {
                                value: 'flex-start',
                                title: 'Start',
                                className: 'icons-flex icon-al-start',
                            }, {
                                value: 'flex-end',
                                title: 'End',
                                className: 'icons-flex icon-al-end',
                            }, {
                                value: 'stretch',
                                title: 'Stretch',
                                className: 'icons-flex icon-al-str',
                            }, {
                                value: 'center',
                                title: 'Center',
                                className: 'icons-flex icon-al-center',
                            }],
                        }]
                    }

                    ],

                },
            });

           var pnm = editor.Panels;
            pnm.addButton('options', [{
                id: 'undo',
                className: 'fa fa-undo icon-undo',
                command: function (editor, sender) {
                    sender.set('active', 0);
                    editor.UndoManager.undo(1);
                },
                attributes: {
                    title: 'Undo (CTRL/CMD + Z)'
                }
            },
                {
                    id: 'redo',
                    className: 'fa fa-repeat icon-redo',
                    command: function (editor, sender) {
                        sender.set('active', 0);
                        editor.UndoManager.redo(1);
                    },
                    attributes: {
                        title: 'Redo (CTRL/CMD + SHIFT + Z)'
                    }
                },
                {
                    id: 'import',
                    className: 'fa fa-edit',
                    command: 'html-edit',
                    attributes: {
                        title: 'Import'
                    }
                }, {
                    id: 'clean-all',
                    className: 'fa fa-trash icon-blank',
                    command: function (editor, sender) {
                        if (sender) sender.set('active', false);
                        if (confirm('Are you sure to clean the canvas?')) {
                            editor.runCommand('core:canvas-clear');
                            setTimeout(function () {
                                localStorage.setItem('gjs-assets', '');
                                localStorage.setItem('gjs-components', '');
                                localStorage.setItem('gjs-html', '');
                                localStorage.setItem('gjs-css', '');
                                localStorage.setItem('gjs-styles', '');
                            }, 0);
                        }
                    },
                    attributes: {
                        title: 'Empty canvas'
                    }
                },
                {
                    id: 'save',
                    className: 'fa fa-save',
                    command: function (editor, sender) {
                        sender.set('active', 0);
                        let currentProjectId = localStorage.getItem('gjs-doc-id');
                        let gjsHTML =  localStorage.getItem('gjs-html');
                        let gjsCSS =  localStorage.getItem('gjs-css');
                        let gjsAssets =  localStorage.getItem('gjs-assets');
                        let gjsComponents =  localStorage.getItem('gjs-components');
                        let gjsStyles =  localStorage.getItem('gjs-styles');
                        const projectData = {
                            gjsHTML,
                            gjsCSS,
                            gjsAssets,
                            gjsComponents,
                            gjsStyles
                        }
                        userdb.doc(auth.currentUser.uid).collection('projects').doc(currentProjectId).set(projectData,{merge:true}).then(()=>{
                                self.$message.success('Successfully saved!', 2)
                        })
                        
                    },
                    attributes: {
                        title: 'Save project'
                    }
                },
                {
                    id: 'publish',
                    className: 'fa fa-globe',
                    command: function (editor, sender) {
                        sender.set('active', 0);
                        self.isModal = true;
                        self.isDeploying = true;
                    },
                    attributes: {
                        title: 'Publish web'
                    }
                }
            ]);

// ---------------------
// Import/Edit
// ---------------------
            var gra = {
                // append in container
                _a: function (appendName) {
                    return container.appendChild(appendName);
                },
                // create elements
                _c: function (tagName) {
                    return document.createElement(tagName);
                },
                // check extensions
                _e: function (fname) {
                    var ext = /^.+\.([^.]+)$/.exec(fname);
                    return ext == null ? "" : ext[1];
                },
                // select id
                _d: function (name, tag) {
                    switch (tag) {
                        case 'class':
                            return document.getElementsByClassName(name);
                        case 'id':
                            return document.getElementById(name);
                        default:
                            return document.getElementById(name);
                    }
                }
            }
            var pfx = editor.getConfig().stylePrefix;
            var modal = editor.Modal;
            var cmdm = editor.Commands;
            var container = gra._c("div");
            var btnEdit = gra._c("button");
            var copyHtml = gra._c("button");
            var copyCss = gra._c("button");
            var btnZip = gra._c("button");
            var exportTxt = gra._c("button");
            var loadTxt = gra._c("button");
            var fileLoader = gra._c("form");
            var anchor = gra._c("a");


            function buildCodeEditor(type) {
                var codeEditor = editor.CodeManager.getViewer('CodeMirror').clone();
                codeEditor.set({
                    codeName: type === 'html' ? 'htmlmixed' : 'css',
                    readOnly: 0,
                    theme: 'hopscotch',
                    autoBeautify: true,
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineWrapping: true,
                    styleActiveLine: true,
                    smartIndent: true,
                    indentWithTabs: true
                });
                return codeEditor;
            }
            var htmlCodeEditor = buildCodeEditor('html');
            var cssCodeEditor = buildCodeEditor('css');

            btnEdit.innerHTML = '<i class="fa fa-code"></i> Apply';
            btnZip.innerHTML = '<i class="fa fa-download"></i> Download Project (zip)';
            exportTxt.innerHTML = '<i class="fa fa-download"></i> Save as .gram file';
            loadTxt.innerHTML = '<i class="fa fa-upload"></i> Load .gram file';
            copyHtml.innerHTML = '<i class="fa fa-copy"></i> Copy HTML';
            copyCss.innerHTML = '<i class="fa fa-copy"></i> Copy CSS';
            fileLoader.innerHTML = '<input type="file" id="fileToLoad">';

            fileLoader.className = pfx + 'import-file';
            btnEdit.className = pfx + 'btn-prim ' + pfx + 'btn-import';
            copyHtml.className = pfx + 'btn-prim ' + pfx + 'btn-html';
            copyCss.className = pfx + 'btn-prim ' + pfx + 'btn-css';
            btnZip.className = pfx + 'btn-prim ' + pfx + 'btn-zip';
            exportTxt.className = pfx + 'btn-prim ' + pfx + 'btn-export';
            loadTxt.className = pfx + 'btn-prim ' + pfx + 'btn-load';

// import button inside import editor
            btnEdit.onclick = function () {
                var htmlCode = htmlCodeEditor.editor.getValue();
                var cssCode = cssCodeEditor.editor.getValue();
                editor.DomComponents.getWrapper().set('content', '');
                editor.setComponents(htmlCode.trim() + '<style>' + cssCode.trim() + '</style>');
                modal.close();
            };

            btnZip.onclick = function() {
                editor.runCommand('gjs-export-zip');
            };

// onclick load file button inside import editor
            loadTxt.onclick = function (e) {
                e.preventDefault();
                var fileToLoad = document.getElementById("fileToLoad").files[0];
                var fType = gra._e(fileToLoad['name']);
                if (fileToLoad === undefined) {
                    alert('Please select a file');
                    return;
                }
                if (fType === 'gram' || fType === 'txt') {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var fileData = e.target.result;
                        editor.DomComponents.getWrapper().set('content', '');
                        editor.setComponents(fileData);
                        modal.close();
                    }
                    reader.readAsText(fileToLoad);
                } else {
                    alert('You can only import .gram or .txt extension');
                }
            }

            copyHtml.onclick = function(){
                var htmlCodes = htmlCodeEditor.editor.getValue();
                var dummy = gra._c("input");
                document.body.appendChild(dummy);
                dummy.setAttribute('value', htmlCodes);
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                document.execCommand('copy');
                alert('You have copied HTML codes!');
            };
            copyCss.onclick = function(){
                var cssCodes = cssCodeEditor.editor.getValue();
                var dummy = gra._c("input");
                document.body.appendChild(dummy);
                dummy.setAttribute('value', cssCodes);
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                document.execCommand('copy');
                alert('You have copied CSS codes!');
            };

// onclick save as button inside import editor
            exportTxt.onclick = function () {
                    var InnerHtml = editor.getHtml();
                    var Css = editor.getCss();
                    var text = InnerHtml + "<style>" + Css + '</style>';
                    var blob = new Blob([text], {
                        type: "text/plain"
                    });
                    anchor.download = "download.gram";
                    anchor.href = window.URL.createObjectURL(blob);
                    anchor.target = "_blank";
                    anchor.style.display = "none"; // just to be safe!
                    document.body.appendChild(anchor);
                    anchor.click();
                    document.body.removeChild(anchor);
            }

// import nav button click event
            cmdm.add('html-edit', {
                run: function importArea(editor, sender) {
                    sender && sender.set('active', 0);
                    var htmlViewer = htmlCodeEditor.editor;
                    var cssViewer = cssCodeEditor.editor;
                    var htmlBox = gra._c('div');
                    htmlBox.className = 'html-wrapper';
                    htmlBox.innerHTML = "<h4>HTML</h4>";
                    var cssBox = gra._c('div');
                    cssBox.className = 'css-wrapper';
                    cssBox.innerHTML = "<h4>CSS</h4>";
                    modal.setTitle('Edit and Import');
                    var headline = gra._c('div');
                    headline.className = 'clear-head';
                    var htmlWrap = gra._c('textarea');
                    var cssWrap = gra._c('textarea');
                    htmlBox.appendChild(htmlWrap);
                    cssBox.appendChild(cssWrap);
                    if (!htmlViewer && !cssViewer) {
                        gra._a(fileLoader);
                        gra._a(loadTxt);
                        gra._a(exportTxt);
                        gra._a(headline);
                        gra._a(htmlBox);
                        gra._a(cssBox);
                        gra._a(copyCss);
                        gra._a(copyHtml);
                        gra._a(btnEdit);
                        gra._a(btnZip);
                        htmlCodeEditor.init(htmlWrap);
                        cssCodeEditor.init(cssWrap);
                    }
                    modal.setContent('');
                    modal.setContent(container);
                    htmlCodeEditor.setContent(editor.getHtml());
                    cssCodeEditor.setContent(editor.getCss({ avoidProtected: true }));
                    modal.open();
                    htmlCodeEditor.editor.refresh();
                    cssCodeEditor.editor.refresh();
                }
            });

            editor.BlockManager.getCategories().each(function (ctg) {
                ctg.set('open', false);
            })
            editor.Panels.removeButton('options', 'export-template');
            editor.render();
        }
    }
})