const blocks = {
    blocks: [
        
        // These are Menu Left and Right
        {
            id: 'menu-left',
            label: 'Menu left',
            category: 'Starters',
            attributes: {
                class: 'gly-menu-left'
            },
            content: `<div id="menu-left">
            <div class="video-wrap">
                <div class="slide-wrap">
                    <ul class="menu-left collection">
                        <li class="collection-item avatar">
                            <img src="https://picsum.photos/100/99" alt="" class="circle">
                            <span class="title">This is title</span>
                            <p>This is menu text</p>
                            <a href="#!" class="secondary-content"><i class="material-icons">attach_money</i> 30</a>
                        </li>
                        <li class="collection-item avatar">
                            <img src="https://picsum.photos/101/100" alt="" class="circle">
                            <span class="title">This is title</span>
                            <p>This is menu text</p>
                            <a href="#!" class="secondary-content"><i class="material-icons">attach_money</i> 30</a>
                        </li>
                        <li class="collection-item avatar">
                            <img src="https://picsum.photos/101/99" alt="" class="circle">
                            <span class="title">This is title</span>
                            <p>This is menu text</p>
                            <a href="#!" class="secondary-content"><i class="material-icons">attach_money</i> 30</a>
                        </li>
                        <li class="collection-item avatar">
                            <img src="https://picsum.photos/102/99" alt="" class="circle">
                            <span class="title">This is title</span>
                            <p>This is menu text</p>
                            <a href="#!" class="secondary-content"><i class="material-icons">attach_money</i> 30</a>
                        </li>
                    </ul>
                </div>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/D3jyV5eYODI?autoplay=1" allow="autoplay">
                </iframe>
            </div>
        </div><style>#menu-left .video-wrap .slide-wrap{
            position:absolute;
            z-index:999;
            width:40%;
            top:5%;
            left:0;
            border:0;
          }
          .collection{
              border:0;
          }
          .collection .collection-item .secondary-content{
              color:#fff;
          }
          .video-wrap .collection .collection-item{
            background:#5c5c5c61;
            color:#fff;
            border-bottom:1px solid #777;
          }
          .video-wrap iframe{
            position:absolute;
            top:0;
            left:0;
          }
          @media (max-width:576px){
            #menu-left .video-wrap .slide-wrap{
                width:60%;
                transform:scale(0.9);
                -moz-transform:scale(0.9);
            }
          }
          </style>`
        },
        {
            id: 'menu-right',
            label: 'Menu Right',
            category: 'Starters',
            attributes: {
                class: 'gly-menu-right'
            },
            content: `<div id="menu-right">
            <div class="video-wrap">
                <div class="slide-wrap">
                    <ul class="menu-right collection">
                        <li class="collection-item avatar">
                            <img src="https://picsum.photos/100/99" alt="" class="circle">
                            <span class="title">This is title</span>
                            <p>This is menu text</p>
                            <a href="#!" class="secondary-content"><i class="material-icons">attach_money</i> 30</a>
                        </li>
                        <li class="collection-item avatar">
                            <img src="https://picsum.photos/101/100" alt="" class="circle">
                            <span class="title">This is title</span>
                            <p>This is menu text</p>
                            <a href="#!" class="secondary-content"><i class="material-icons">attach_money</i> 30</a>
                        </li>
                        <li class="collection-item avatar">
                            <img src="https://picsum.photos/101/99" alt="" class="circle">
                            <span class="title">This is title</span>
                            <p>This is menu text</p>
                            <a href="#!" class="secondary-content"><i class="material-icons">attach_money</i> 30</a>
                        </li>
                        <li class="collection-item avatar">
                            <img src="https://picsum.photos/102/99" alt="" class="circle">
                            <span class="title">This is title</span>
                            <p>This is menu text</p>
                            <a href="#!" class="secondary-content"><i class="material-icons">attach_money</i> 30</a>
                        </li>
                    </ul>
                </div>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/D3jyV5eYODI?autoplay=1" allow="autoplay">
                </iframe>
            </div>
        </div><style>#menu-right .video-wrap .slide-wrap{
            position:absolute;
            z-index:999;
            width:40%;
            top:5%;
            right:0;
            border:0;
          }
          .collection{
              border:0;
          }
          .collection .collection-item .secondary-content{
              color:#fff;
          }
          .video-wrap .collection .collection-item{
            background:#5c5c5c61;
            color:#fff;
            border-bottom:1px solid #777;
          }
          .video-wrap iframe{
            position:absolute;
            top:0;
            left:0;
          }
          @media (max-width:576px){
            #menu-right .video-wrap .slide-wrap{
                width:60%;
                transform:scale(0.9);
                -moz-transform:scale(0.9);
            }
          }
          </style>`
        },

        // These are basic blocks
        {
            id: 'b1',
            label: '1 Block',
            category: 'Grid',
            attributes: {
                class: 'gly-one-column'
            },
            content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
<div class="col m12" data-gjs-draggable=".row" data-gjs-custom-name="col12"></div>
</div><style>.col:empty{display:table-cell;height:75px}</style>`
        },
        {
            id: 'b2',
            label: '2 Blocks',
            category: 'Grid',
            attributes: {
                class: 'gly-two-columns'
            },
            content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
<div class="col m6" data-gjs-draggable=".row" data-gjs-custom-name="m6"></div>
<div class="col m6" data-gjs-draggable=".row" data-gjs-custom-name="m6"></div>
</div><style>.col:empty{display:table-cell;height:75px}</style>`
        },
        {
            id: 'b3',
            label: '3 Blocks',
            category: 'Grid',
            attributes: {
                class: 'gly-three-columns'
            },
            content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
            + '<div class="col s6 m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
            + '<div class="col s6 m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
            + '<div class="col s6 m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
            + '</div><style>.col:empty{display:table-cell;height:75px}</style>',
        },
        {
            id: 'b5',
            label: '4/8 Block',
            category: 'Grid',
            attributes: {
                class: 'gly-four-eight'
            },
            content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
            + '<div class="col m4" data-gjs-draggable=".row" data-gjs-custom-name="m4"></div>'
            + '<div class="col m8" data-gjs-draggable=".row" data-gjs-custom-name="m8"></div>'
            + '</div><style>.col:empty{display:table-cell;height:75px}</style>',
        },
        {
            id: 'b6',
            label: '5/7 Block',
            category: 'Grid',
            attributes: {
                class: 'gly-four-eight'
            },
            content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
            + '<div class="col m5" data-gjs-draggable=".row" data-gjs-custom-name="m5"></div>'
            + '<div class="col m7" data-gjs-draggable=".row" data-gjs-custom-name="m7"></div>'
            + '</div><style>.col:empty{display:table-cell;height:75px}</style>',
        },
        {
            id: 'b7',
            label: '3/9 Block',
            category: 'Grid',
            attributes: {
                class: 'gly-three-nine'
            },
            content: '<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">'
            + '<div class="col m3" data-gjs-draggable=".row" data-gjs-custom-name="m3"></div>'
            + '<div class="col m9" data-gjs-draggable=".row" data-gjs-custom-name="m9"></div>'
            + '</div><style>.col:empty{display:table-cell;height:75px}</style>',
        },
        {
            id: 'text',
            label: 'Text',
            attributes: {
                class: 'fa fa-text-width'
            },
            category: 'Basic',
            content: {
                type: 'text',
                content: 'Insert your text here',
                activeOnRender: 1
            },
        }, {
            id: 'image',
            label: 'Image',
            category: 'Basic',
            attributes: {
                class: 'fa fa-file-image-o'
            },
            content: {
                type: 'image',
                activeOnRender: 1
            },
        }, {
            id: 'list',
            label: 'List',
            category: 'Basic',
            attributes: {
                class: 'fa fa-bars'
            },
            content: `<ul class="collection">
    <li class="collection-item">List One</li>
    <li class="collection-item">List Two</li>
    <li class="collection-item">List Three</li>
    <li class="collection-item">List Four</li>
    </ul>`,
        },

        {
            id: 'list2',
            label: 'List Two',
            category: 'Basic',
            attributes: {
                class: 'fa fa-bars'
            },
            content: '<ul class="collection">'
            + '<li class="collection-item avatar">'
            + '<img src="https://randomuser.me/api/portraits/women/83.jpg" alt="" class="circle">'
            + '<span class="title">Title</span>'
            + '<p>First Line <br> Second Line </p>'
            + '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
            + '</li>'
            + '<li class="collection-item avatar">'
            + '<i class="material-icons circle">folder</i>'
            + '<span class="title">Title</span>'
            + '<p>First Line <br>Second Line</p>'
            + '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
            + '</li>'
            + '<li class="collection-item avatar">'
            + '<i class="material-icons circle green">insert_chart</i>'
            + '<span class="title">Title</span>'
            + '<p>First Line <br>Second Line</p>'
            + '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
            + '</li>'
            + '<li class="collection-item avatar">'
            + '<i class="material-icons circle red">play_arrow</i>'
            + '<span class="title">Title</span>'
            + '<p>First Line <br>Second Line</p>'
            + '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'
            + '</li>'
            + '</ul>',
        },
        {
            id: 'table',
            label: 'Table',
            category: 'Basic',
            attributes: {
                class: 'fa fa-table'
            },
            content: '<table class="responsive-table centered striped highlight bordered">'
            + '<thead>'
            + '<tr>'
            + '<th>Name</th>'
            + '<th>Item Name</th>'
            + '<th>Item Price</th>'
            + '</tr>'
            + '</thead>'
            + '<tbody>'
            + '<tr>'
            + '<td>Alvin</td>'
            + '<td>Eclair</td>'
            + '<td>$0.87</td>'
            + '</tr>'
            + '<tr>'
            + '<td>Alan</td>'
            + '<td>Jellybean</td>'
            + '<td>$3.76</td>'
            + '</tr>'
            + '<tr>'
            + '<td>Jonathan</td>'
            + '<td>Lollipop</td>'
            + '<td>$7.00</td>'
            + '</tr>'
            + '</tbody>'
            + '</table>',
        },
        {
            id: 'res',
            label: 'respon image',
            category: 'Media',
            content: '<img src="http://via.placeholder.com/250x250/0174DF/ffffff/" class="responsive-img">',
            attributes: {
                class: 'fa fa-image'
            }
        },
        {
            id: 'popup',
            label: 'popup image',
            category: 'Media',
            content: '<img class="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="250" src="http://via.placeholder.com/250x250/BF00FF/ffffff/">'
            + '<script type="text/javascript">$(".materialboxed").materialbox();</script>',
            attributes: {
                class: 'fa fa-object-group'
            }
        },  
        {
            id: 'video',
            label: 'Video',
            category: 'Media',
            attributes: {
                class: 'fa fa-youtube-play'
            },
            content: {
                type: 'video',
                src: 'img/video2.webm',
                style: {
                    height: '350px',
                    width: '615px',
                }
            },
        }, {
            id: 'h1p',
            label: 'Text section',
            category: 'Typography',
            content: '<div>'
            + '<h3>Insert title here</h3>'
            + '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>'
            + '</div>',
            attributes: {
                class: 'fa fa-align-center'
            }
        }, {
            id: 'quo',
            label: 'Quote',
            category: 'Typography',
            content: '<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
            attributes: {
                class: 'fa fa-quote-right'
            }
        }
    ],
}

export default blocks;