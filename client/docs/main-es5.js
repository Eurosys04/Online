(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n<app-footer></app-footer>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h1>Вход</h1>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <form class=\"w-50\" (ngSubmit)=\"login()\" [formGroup]=\"loginForm\">\r\n        <div class=\"form-group\">\r\n          <label>Потребителско име</label>\r\n          <input class=\"form-control\" formControlName=\"username\" type=\"text\"\r\n                 placeholder=\"Въведете Вашето потребителско име\">\r\n          <span class=\"text-danger\"\r\n                *ngIf=\"loginForm.get('username').touched && loginForm.get('username').hasError('required')\">\r\n            Потребителското име е задължително!\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Парола</label>\r\n          <input class=\"form-control\" formControlName=\"password\" type=\"password\" placeholder=\"Въведете Вашата парола\">\r\n          <span class=\"text-danger\"\r\n                *ngIf=\"loginForm.get('password').touched && loginForm.get('password').hasError('required')\">\r\n            Паролата е задължителена!\r\n          </span>\r\n        </div>\r\n        <button [disabled]=\"loginForm.invalid\" type=\"submit\" class=\"btn btn-primary\">Вход</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h1>Регистрация</h1>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <form class=\"w-50\" (ngSubmit)=\"signup()\" [formGroup]=\"signupForm\">\r\n        <div class=\"form-group\">\r\n          <label>Потребителско име</label>\r\n          <input class=\"form-control\" formControlName=\"username\" type=\"text\"\r\n                 placeholder=\"Въведете Вашето потребителско име\">\r\n          <span class=\"text-danger\"\r\n                *ngIf=\"signupForm.get('username').touched && signupForm.get('username').hasError('required')\">\r\n            Потребителското име е задължително!\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Email адрес</label>\r\n          <input class=\"form-control\" formControlName=\"email\" type=\"email\" placeholder=\"Въведете Вашият email адрес\">\r\n          <span class=\"text-danger\" *ngIf=\"signupForm.get('email').touched && signupForm.get('email').hasError('required')\">\r\n            Email адреса е задължителен!\r\n          </span>\r\n          <span class=\"text-danger\" *ngIf=\"signupForm.get('email').touched && signupForm.get('email').hasError('email')\">\r\n            Email адреса e невалиден!\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Парола</label>\r\n          <input class=\"form-control\" formControlName=\"password\" type=\"password\" placeholder=\"Въведете Вашата парола\">\r\n          <span class=\"text-danger\"\r\n                *ngIf=\"signupForm.get('password').touched && signupForm.get('password').hasError('required')\">\r\n            Паролата е задължителена!\r\n          </span>\r\n          <span class=\"text-danger\"\r\n                *ngIf=\"signupForm.get('password').touched && signupForm.get('password').hasError('minlength')\">\r\n            Паролата трябва да е дълга поне 6 символа!\r\n          </span>\r\n        </div>\r\n        <button [disabled]=\"signupForm.invalid\" type=\"submit\" class=\"btn btn-primary\">Регистрация</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer id=\"footer\">\r\n  <div class=\"footer_content\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col text-center\">\r\n          <!-- Logo -->\r\n          <div class=\"logo\">\r\n            <a href=\"#\" class=\"d-flex flex-row align-items-end justify-content-start\">\r\n              <span class=\"logo_bars d-flex flex-row align-items-end justify-content-between\"><span></span><span></span><span></span><span></span><span></span></span>\r\n              <span class=\"logo_text\">EUROSYS</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer_bar\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"copyright text-center\">\r\n            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\r\n            Copyright &copy;{{today.getFullYear()}} All rights reserved\r\n            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer><!--/#footer-->\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/nav-bar/nav-bar.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/nav-bar/nav-bar.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div><a routerLink=\"/\">Онлайн магазин</a></div>\r\n<ul class=\"navigation-links\">\r\n  <li><a *ngIf=\"!isAuth\" routerLink=\"/login\">Вход</a></li>\r\n  <li><a *ngIf=\"!isAuth\" routerLink=\"/signup\">Регистрация</a></li>\r\n  <li><a routerLink=\"/product/all\">Продукти</a></li>\r\n  <li><a routerLink=\"/category/all\">Категории</a></li>\r\n   <li><a *ngIf=\"isAuth\" routerLink=\"/product\">Products</a></li> -->\r\n<!-- <li>\r\n    <a>Админ панел</a>\r\n    <button routerLink=\"/product/create\">Добавяне на продукт</button>\r\n    <button routerLink=\"/category/create\">Добавяне на категория</button>\r\n  </li>\r\n  <li><a *ngIf=\"isAuth\" (click)=\"logout()\" class=\"logout-link\">Изход</a></li>\r\n</ul> -->\r\n\r\n<div class=\"container\">\r\n\r\n  <header id=\"header\">\r\n    <nav id=\"main-menu\" class=\"navbar navbar-default navbar-fixed-top\" role=\"banner\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"index.html\">\r\n            <h1 class=\"logo\">EUROSYS</h1>\r\n            <!--<img src=\"../../../assets/images/logo.png\" alt=\"logo\">-->\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"collapse navbar-collapse navbar-right\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li class=\"scroll\">\r\n              <a routerLink=\"/\">Начало</a>\r\n            </li>\r\n            <li class=\"scroll\"><a routerLink=\"/products\">Продукти</a></li>\r\n            <!--<li class=\"scroll\"><a routerLink=\"/price\">Цени</a></li>-->\r\n            <li class=\"scroll\"><a routerLink=\"/news\">Новини</a></li>\r\n            <li class=\"scroll\"><a routerLink=\"/team\">Екип</a></li>\r\n            <li class=\"scroll\"><a routerLink=\"/contacts\">Контакти</a></li>\r\n          </ul>\r\n        </div>\r\n      </div><!--/.container-->\r\n    </nav><!--/nav-->\r\n  </header><!--/header-->\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/about/about.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/about/about.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"homepage\">\r\n  <div class=\"container\">\r\n    <div class=\"text-center\">\r\n      <h2 class=\"wow fadeInUp\" data-wow-duration=\"300ms\" data-wow-delay=\"0ms\">\r\n        <span>EUROSYS</span>\r\n      </h2>\r\n        <!--<span>EUROSYS</span> - софтуерна фирма, разработваща специализиран продукт, насочен към дейността на\r\n        инвестиционни посредници, управляващи дружества и управляваните от тях колективни инвестиционни схеми.</h2-->\r\n      <h3 class=\"wow fadeInUp\" data-wow-duration=\"300ms\" data-wow-delay=\"100ms\">\r\n        Софтуерна фирма, разработваща специализирани продукти, насочен към дейността на\r\n        инвестиционни посредници, управляващи дружества и кредитни институции\r\n      </h3>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"about\">\r\n  <div class=\"container\">\r\n    <div class=\"section-header\">\r\n      <h2 class=\"section-title text-center wow fadeInDown\">За нас</h2>\r\n      <div class=\"row\">\r\n        <img src=\"../../../../assets/images/eurosys_logo.jpg\" class=\"col-md-6\"/>\r\n        <div class=\"col-md-6\">\r\n          <p class=\"wow fadeInDown\">\r\n            Много инвестиционни посредници, управляващи дружества и кредитни институции имат проблем с обработката на\r\n            информацията по инвестиционни схеми. Затова ние от Eurosys разработихме и подържаме различни\r\n            софтуерни продукти повече от 20 години. Те има за цел да помогнат и улеснят дейността\r\n            на различните дружества в процесите по съхранение и обработката на информация.\r\n            Резултатът за клиента е стуктурирана ......\r\n            Също така, нашите продукти са интегрирани спрямо нуждите и особенностите на клиентите ни.\r\n            По този начин ние улесняваме потребителите най-много, предлагайки лесни и удобни за ползване продукти.<br />\r\n            Ние вярваме, че времето е най-важно. Затова винаги сме готови да отделим време и да помогнем на\r\n            клиент в даден монент, за да намерим най-доброто решение на проблема заедно. \r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section><!--/#about-->\r\n\r\n<section id=\"portfolio\">\r\n  <div class=\"container\">\r\n    <div class=\"section-header\">\r\n      <h2 class=\"section-title text-center wow fadeInDown\">Портфолио</h2>\r\n      <p class=\"text-center wow fadeInDown\">\r\n        Нашите продукти са се доказали успешно в реална среда с реални данни, като работят повече от 20 години.\r\n      </p>\r\n    </div>\r\n  </div><!--/.container-->\r\n</section><!--/#portfolio-->\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/contact/contact.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/contact/contact.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"get-in-touch\">\r\n  <div class=\"container\">\r\n    <div class=\"section-header\">\r\n      <h2 class=\"section-title text-center wow fadeInDown\">Свържете се с нас</h2>\r\n      <p class=\"text-center wow fadeInDown\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore magna aliqua. Ut enim ad minim veniam</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section id=\"contact\">\r\n  <div id=\"google-map\" style=\"height:650px\" data-latitude=\"42.693302\" data-longitude=\"23.323356\"></div>\r\n  <div class=\"container-wrapper\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4 col-sm-offset-8\">\r\n          <div class=\"contact-form\">\r\n            <h3>За контакти</h3>\r\n            <address>\r\n              <strong>Местоположение:</strong><br>\r\n              София - 1000, ул. \"Граф Игнатиев\" &#8470;9, вх. Б<br>\r\n              България<br>\r\n              <abbr title=\"Phone\">Тел.:</abbr> 02 123456789\r\n            </address>\r\n            <div id=\"main-contact-form\" name=\"contact-form\" method=\"post\"\r\n                 action=\"sendemail.php\">\r\n              <div class=\"form-group\">\r\n                <input name=\"name\" class=\"form-control\"\r\n                       placeholder=\"Name\" required=\"\" type=\"text\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input name=\"email\" class=\"form-control\"\r\n                       placeholder=\"E-mail\" required=\"\" type=\"email\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input name=\"subject\" class=\"form-control\"\r\n                       placeholder=\"Subject\" required=\"\" type=\"text\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <textarea name=\"message\" class=\"form-control\"\r\n                          rows=\"8\" placeholder=\"Message\" required=\"\"></textarea>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary\">Send Message</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/news/news.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/news/news.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"blog\">\r\n  <div class=\"container\">\r\n    <div class=\"section-header\">\r\n      <h2 class=\"section-title text-center wow fadeInDown\">Последни новини</h2>\r\n      <p class=\"text-center wow fadeInDown\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore magna aliqua. Ut enim ad minim veniam</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/price/price.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/price/price.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"pricing\">\r\n  <div class=\"container\">\r\n    <div class=\"section-header\">\r\n      <h2 class=\"section-title text-center wow fadeInDown\">Ценова листа</h2>\r\n      <p class=\"text-center wow fadeInDown\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore magna aliqua. Ut enim ad minim veniam</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/products/products.component.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/products/products.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"features\">\r\n  <div class=\"container\">\r\n    <div class=\"section-header\">\r\n      <h2 class=\"section-title text-center wow fadeInDown\">Продукти</h2>\r\n      <p class=\"text-center wow fadeInDown\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore magna aliqua. Ut enim ad minim veniam</p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 wow fadeInLeft\">\r\n        <div class=\"media service-box wow fadeInLeft\">\r\n          <div class=\"pull-left\">\r\n            <i class=\"fa fa-line-chart\"></i>\r\n          </div>\r\n          <div class=\"media-body\">\r\n            <h4 class=\"media-heading\">Продукт1</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"media service-box wow fadeInLeft\">\r\n          <div class=\"pull-left\">\r\n            <i class=\"fa fa-pie-chart\"></i>\r\n          </div>\r\n          <div class=\"media-body\">\r\n            <h4 class=\"media-heading\">Продукт2</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-sm-6\" wow fadeInRight>\r\n        <div class=\"media service-box wow fadeInRight\">\r\n          <div class=\"pull-left\">\r\n            <i class=\"fa fa-cubes\"></i>\r\n          </div>\r\n          <div class=\"media-body\">\r\n            <h4 class=\"media-heading\">Продукт3</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"media service-box wow fadeInRight\">\r\n          <div class=\"pull-left\">\r\n            <i class=\"fa fa-pie-chart\"></i>\r\n          </div>\r\n          <div class=\"media-body\">\r\n            <h4 class=\"media-heading\">Продукт4</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"services\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"section-header\">\r\n      <h2 class=\"section-title text-center wow fadeInDown\">Услуги</h2>\r\n      <p class=\"text-center wow fadeInDown\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore magna aliqua. Ut enim ad minim veniam</p>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"features\">\r\n        <div class=\"col-md-4 col-sm-6 wow fadeInUp\" data-wow-duration=\"300ms\" data-wow-delay=\"0ms\">\r\n          <div class=\"media service-box\">\r\n            <div class=\"pull-left\">\r\n              <i class=\"fa fa-line-chart\"></i>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h4 class=\"media-heading\">-1-</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua</p>\r\n            </div>\r\n          </div>\r\n        </div><!--/.col-md-4-->\r\n\r\n        <div class=\"col-md-4 col-sm-6 wow fadeInUp\" data-wow-duration=\"300ms\" data-wow-delay=\"100ms\">\r\n          <div class=\"media service-box\">\r\n            <div class=\"pull-left\">\r\n              <i class=\"fa fa-cubes\"></i>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h4 class=\"media-heading\">-2-</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua</p>\r\n            </div>\r\n          </div>\r\n        </div><!--/.col-md-4-->\r\n\r\n        <div class=\"col-md-4 col-sm-6 wow fadeInUp\" data-wow-duration=\"300ms\" data-wow-delay=\"200ms\">\r\n          <div class=\"media service-box\">\r\n            <div class=\"pull-left\">\r\n              <i class=\"fa fa-pie-chart\"></i>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h4 class=\"media-heading\">-3-</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua</p>\r\n            </div>\r\n          </div>\r\n        </div><!--/.col-md-4-->\r\n\r\n        <div class=\"col-md-4 col-sm-6 wow fadeInUp\" data-wow-duration=\"300ms\" data-wow-delay=\"300ms\">\r\n          <div class=\"media service-box\">\r\n            <div class=\"pull-left\">\r\n              <i class=\"fa fa-bar-chart\"></i>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h4 class=\"media-heading\">-4-</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua</p>\r\n            </div>\r\n          </div>\r\n        </div><!--/.col-md-4-->\r\n\r\n        <div class=\"col-md-4 col-sm-6 wow fadeInUp\" data-wow-duration=\"300ms\" data-wow-delay=\"400ms\">\r\n          <div class=\"media service-box\">\r\n            <div class=\"pull-left\">\r\n              <i class=\"fa fa-language\"></i>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h4 class=\"media-heading\">-5-</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua</p>\r\n            </div>\r\n          </div>\r\n        </div><!--/.col-md-4-->\r\n\r\n        <div class=\"col-md-4 col-sm-6 wow fadeInUp\" data-wow-duration=\"300ms\" data-wow-delay=\"500ms\">\r\n          <div class=\"media service-box\">\r\n            <div class=\"pull-left\">\r\n              <i class=\"fa fa-bullseye\"></i>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h4 class=\"media-heading\">-6-</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua</p>\r\n            </div>\r\n          </div>\r\n        </div><!--/.col-md-4-->\r\n      </div>\r\n    </div><!--/.row-->\r\n  </div><!--/.container-->\r\n</section><!--/#services-->\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/team/team.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/team/team.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"meet-team\">\r\n  <div class=\"container\">\r\n    <div class=\"section-header\">\r\n      <h2 class=\"section-title text-center wow fadeInDown\">Нашият екип</h2>\r\n      <p class=\"text-center wow fadeInDown\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore magna aliqua. Ut enim ad minim veniam</p>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"team-member wow fadeInUp\" data-wow-duration=\"400ms\" data-wow-delay=\"0ms\">\r\n          <div class=\"team-img\">\r\n            <img class=\"img-responsive\" src=\"images/team/01.jpg\" alt=\"\">\r\n          </div>\r\n          <div class=\"team-info\">\r\n            <h3>Име</h3>\r\n            <span>Позиция</span>\r\n          </div>\r\n          <p>...</p>\r\n          <ul class=\"social-icons\">\r\n            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <div class=\"team-member wow fadeInUp\" data-wow-duration=\"400ms\" data-wow-delay=\"100ms\">\r\n          <div class=\"team-img\">\r\n            <img class=\"img-responsive\" src=\"images/team/02.jpg\" alt=\"\">\r\n          </div>\r\n          <div class=\"team-info\">\r\n            <h3>Име</h3>\r\n            <span>Позиция</span>\r\n          </div>\r\n          <p>...</p>\r\n          <ul class=\"social-icons\">\r\n            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"divider\"></div>\r\n\r\n    <div class=\"col-sm-12\">\r\n      <h3 class=\"column-title\">Нашата история</h3>\r\n      <div role=\"tabpanel\">\r\n        <ul class=\"nav main-tab nav-justified\" role=\"tablist\">\r\n          <li role=\"presentation\" class=\"active\">\r\n            <a href=\"#tab1\" role=\"tab\" data-toggle=\"tab\" aria-controls=\"tab1\" aria-expanded=\"true\">2004 - 2009</a>\r\n          </li>\r\n          <li role=\"presentation\">\r\n            <a href=\"#tab2\" role=\"tab\" data-toggle=\"tab\" aria-controls=\"tab2\" aria-expanded=\"false\">2009 - 2013</a>\r\n          </li>\r\n          <li role=\"presentation\">\r\n            <a href=\"#tab3\" role=\"tab\" data-toggle=\"tab\" aria-controls=\"tab3\" aria-expanded=\"false\">2013 - 2015</a>\r\n          </li>\r\n          <li role=\"presentation\">\r\n            <a href=\"#tab4\" role=\"tab\" data-toggle=\"tab\" aria-controls=\"tab4\" aria-expanded=\"false\">2015 - 2017</a>\r\n          </li>\r\n        </ul>\r\n        <div id=\"tab-content\" class=\"tab-content\">\r\n          <div role=\"tabpanel\" class=\"tab-pane fade active in\" id=\"tab1\" aria-labelledby=\"tab1\">\r\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\r\n            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters readable English.</p>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab2\" aria-labelledby=\"tab2\">\r\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\r\n            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters readable English.</p>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab3\" aria-labelledby=\"tab3\">\r\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\r\n            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters readable English.</p>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab4\" aria-labelledby=\"tab3\">\r\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>\r\n            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters readable English.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<!--<h1>{{ title }}</h1>-->\r\n\r\n<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n<!--<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>-->\r\n\r\n<app-about></app-about>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
            /* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _components_staticComponents_news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/staticComponents/news/news.component */ "./src/app/components/staticComponents/news/news.component.ts");
            /* harmony import */ var _components_staticComponents_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/staticComponents/products/products.component */ "./src/app/components/staticComponents/products/products.component.ts");
            /* harmony import */ var _components_staticComponents_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/staticComponents/contact/contact.component */ "./src/app/components/staticComponents/contact/contact.component.ts");
            /* harmony import */ var _components_staticComponents_price_price_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/staticComponents/price/price.component */ "./src/app/components/staticComponents/price/price.component.ts");
            /* harmony import */ var _components_staticComponents_team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/staticComponents/team/team.component */ "./src/app/components/staticComponents/team/team.component.ts");
            var routes = [
                { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
                { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                { path: 'products', component: _components_staticComponents_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"] },
                { path: 'news', component: _components_staticComponents_news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"] },
                { path: 'contacts', component: _components_staticComponents_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
                { path: 'price', component: _components_staticComponents_price_price_component__WEBPACK_IMPORTED_MODULE_9__["PriceComponent"] },
                { path: 'team', component: _components_staticComponents_team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authService) {
                    this.authService = authService;
                    this.authService.initializeAuthenticationState();
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
            /* harmony import */ var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptors/jwt.interceptor */ "./src/app/core/interceptors/jwt.interceptor.ts");
            /* harmony import */ var _core_interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/interceptors/base-url.interceptor */ "./src/app/core/interceptors/base-url.interceptor.ts");
            /* harmony import */ var _components_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shared/nav-bar/nav-bar.component */ "./src/app/components/shared/nav-bar/nav-bar.component.ts");
            /* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
            /* harmony import */ var _components_staticComponents_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/staticComponents/contact/contact.component */ "./src/app/components/staticComponents/contact/contact.component.ts");
            /* harmony import */ var _components_staticComponents_team_team_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/staticComponents/team/team.component */ "./src/app/components/staticComponents/team/team.component.ts");
            /* harmony import */ var _components_staticComponents_price_price_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/staticComponents/price/price.component */ "./src/app/components/staticComponents/price/price.component.ts");
            /* harmony import */ var _components_staticComponents_about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/staticComponents/about/about.component */ "./src/app/components/staticComponents/about/about.component.ts");
            /* harmony import */ var _components_staticComponents_products_products_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/staticComponents/products/products.component */ "./src/app/components/staticComponents/products/products.component.ts");
            /* harmony import */ var _components_staticComponents_news_news_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/staticComponents/news/news.component */ "./src/app/components/staticComponents/news/news.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                        _components_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
                        _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                        _components_staticComponents_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
                        _components_staticComponents_team_team_component__WEBPACK_IMPORTED_MODULE_17__["TeamComponent"],
                        _components_staticComponents_price_price_component__WEBPACK_IMPORTED_MODULE_18__["PriceComponent"],
                        _components_staticComponents_about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
                        _components_staticComponents_products_products_component__WEBPACK_IMPORTED_MODULE_20__["ProductsComponent"],
                        _components_staticComponents_news_news_component__WEBPACK_IMPORTED_MODULE_21__["NewsComponent"],
                    ],
                    entryComponents: [],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
                    ],
                    providers: [
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_13__["BaseUrlInterceptor"], multi: true },
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.css": 
        /*!************************************************!*\
          !*** ./src/app/auth/login/login.component.css ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n    width: 300px;\r\n  }\r\n  \r\n  form {\r\n    padding: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/auth/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(fb, authService, router) {
                    this.fb = fb;
                    this.authService = authService;
                    this.router = router;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.fb.group({
                        username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
                    });
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    var _a = this.loginForm.value, username = _a.username, password = _a.password;
                    this.authService.login(username, password)
                        .subscribe(function (token) {
                        _this.authService.setToken(token);
                        _this.authService.initializeAuthenticationState();
                        _this.router.navigate(['/']);
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/signup/signup.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/auth/signup/signup.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n    width: 300px;\r\n  }\r\n  \r\n  form {\r\n    padding: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgXHJcbiAgZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/auth/signup/signup.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/auth/signup/signup.component.ts ***!
          \*************************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(fb, authService, router) {
                    this.fb = fb;
                    this.authService = authService;
                    this.router = router;
                }
                SignupComponent.prototype.ngOnInit = function () {
                    this.signupForm = this.fb.group({
                        email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
                    });
                };
                SignupComponent.prototype.signup = function () {
                    var _this = this;
                    var _a = this.signupForm.value, email = _a.email, password = _a.password, username = _a.username;
                    this.authService.register(email, password, username)
                        .subscribe(function (_) {
                        _this.router.navigate(['/login']);
                    });
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/common/global-constants.ts": 
        /*!********************************************!*\
          !*** ./src/app/common/global-constants.ts ***!
          \********************************************/
        /*! exports provided: globalConstants */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalConstants", function () { return globalConstants; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var globalConstants = {
                jwtTokenKey: "token",
                pagination: {
                    defaultPage: 1,
                    itemsPerPage: 10
                }
            };
            /***/ 
        }),
        /***/ "./src/app/components/shared/footer/footer.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/components/shared/footer/footer.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/shared/footer/footer.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/components/shared/footer/footer.component.ts ***!
          \**************************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                    this.today = new Date();
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/shared/nav-bar/nav-bar.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/shared/nav-bar/nav-bar.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/shared/nav-bar/nav-bar.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/components/shared/nav-bar/nav-bar.component.ts ***!
          \****************************************************************/
        /*! exports provided: NavBarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () { return NavBarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            var NavBarComponent = /** @class */ (function () {
                function NavBarComponent(authService) {
                    var _this = this;
                    this.authService = authService;
                    this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.isAuth = false;
                    this.isAdmin = false;
                    this.isAdmin = authService.isAdmin;
                    this.isAuth = authService.isAuth;
                    this.authService.isAuthChanged.subscribe(function () {
                        _this.isAuth = _this.authService.isAuth;
                        _this.isAdmin = _this.authService.isAdmin;
                    });
                }
                NavBarComponent.prototype.toggleSidenav = function () {
                    this.sidenavToggle.emit();
                };
                NavBarComponent.prototype.logout = function () {
                    this.authService.logout();
                    this.authService.initializeAuthenticationState();
                };
                return NavBarComponent;
            }());
            NavBarComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], NavBarComponent.prototype, "sidenavToggle", void 0);
            NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav-bar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/nav-bar/nav-bar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/shared/nav-bar/nav-bar.component.css")).default]
                })
            ], NavBarComponent);
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/about/about.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/staticComponents/about/about.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGljQ29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/about/about.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/staticComponents/about/about.component.ts ***!
          \**********************************************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/components/staticComponents/about/about.component.css")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/contact/contact.component.css": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/staticComponents/contact/contact.component.css ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGljQ29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/contact/contact.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/staticComponents/contact/contact.component.ts ***!
          \**************************************************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/components/staticComponents/contact/contact.component.css")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/news/news.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/staticComponents/news/news.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGljQ29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/news/news.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/components/staticComponents/news/news.component.ts ***!
          \********************************************************************/
        /*! exports provided: NewsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function () { return NewsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NewsComponent = /** @class */ (function () {
                function NewsComponent() {
                }
                NewsComponent.prototype.ngOnInit = function () {
                };
                return NewsComponent;
            }());
            NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-news',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/news/news.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.css */ "./src/app/components/staticComponents/news/news.component.css")).default]
                })
            ], NewsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/price/price.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/staticComponents/price/price.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGljQ29tcG9uZW50cy9wcmljZS9wcmljZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/price/price.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/staticComponents/price/price.component.ts ***!
          \**********************************************************************/
        /*! exports provided: PriceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function () { return PriceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PriceComponent = /** @class */ (function () {
                function PriceComponent() {
                }
                PriceComponent.prototype.ngOnInit = function () {
                };
                return PriceComponent;
            }());
            PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-price',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./price.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/price/price.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./price.component.css */ "./src/app/components/staticComponents/price/price.component.css")).default]
                })
            ], PriceComponent);
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/products/products.component.css": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/staticComponents/products/products.component.css ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGljQ29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/products/products.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/staticComponents/products/products.component.ts ***!
          \****************************************************************************/
        /*! exports provided: ProductsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () { return ProductsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProductsComponent = /** @class */ (function () {
                function ProductsComponent() {
                }
                ProductsComponent.prototype.ngOnInit = function () {
                };
                return ProductsComponent;
            }());
            ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-products',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/products/products.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.css */ "./src/app/components/staticComponents/products/products.component.css")).default]
                })
            ], ProductsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/team/team.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/staticComponents/team/team.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGljQ29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/staticComponents/team/team.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/components/staticComponents/team/team.component.ts ***!
          \********************************************************************/
        /*! exports provided: TeamComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function () { return TeamComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TeamComponent = /** @class */ (function () {
                function TeamComponent() {
                }
                TeamComponent.prototype.ngOnInit = function () {
                };
                return TeamComponent;
            }());
            TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-team',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/staticComponents/team/team.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team.component.css */ "./src/app/components/staticComponents/team/team.component.css")).default]
                })
            ], TeamComponent);
            /***/ 
        }),
        /***/ "./src/app/core/interceptors/base-url.interceptor.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/core/interceptors/base-url.interceptor.ts ***!
          \***********************************************************/
        /*! exports provided: BaseUrlInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUrlInterceptor", function () { return BaseUrlInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
            var BaseUrlInterceptor = /** @class */ (function () {
                function BaseUrlInterceptor(authService) {
                    this.authService = authService;
                }
                BaseUrlInterceptor.prototype.intercept = function (req, next) {
                    return next.handle(req.clone({
                        url: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/" + req.url
                    }));
                };
                return BaseUrlInterceptor;
            }());
            BaseUrlInterceptor.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            BaseUrlInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaseUrlInterceptor);
            /***/ 
        }),
        /***/ "./src/app/core/interceptors/jwt.interceptor.ts": 
        /*!******************************************************!*\
          !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
          \******************************************************/
        /*! exports provided: JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return JwtInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
            var JwtInterceptor = /** @class */ (function () {
                function JwtInterceptor(authService) {
                    this.authService = authService;
                }
                JwtInterceptor.prototype.intercept = function (req, next) {
                    var token = this.authService.getToken();
                    if (token) {
                        req = req.clone({
                            setHeaders: {
                                Authorization: "Bearer " + token
                            }
                        });
                    }
                    return next.handle(req);
                };
                return JwtInterceptor;
            }());
            JwtInterceptor.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], JwtInterceptor);
            /***/ 
        }),
        /***/ "./src/app/core/services/auth.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/core/services/auth.service.ts ***!
          \***********************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/global-constants */ "./src/app/common/global-constants.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
            /* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);
            var AuthService = /** @class */ (function () {
                function AuthService(router, http) {
                    this.router = router;
                    this.http = http;
                    this.isAuth = false;
                    this.isAdmin = false;
                    this.isAuthChanged = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                }
                AuthService.prototype.initializeAuthenticationState = function () {
                    var token = this.getToken();
                    if (!token) {
                        this.isAuth = false;
                        this.isAdmin = false;
                        this.username = "";
                    }
                    else {
                        try {
                            var tokenData = jwt_decode__WEBPACK_IMPORTED_MODULE_6__(token);
                            this.username = tokenData['unique_name'];
                            this.isAuth = true;
                            this.isAdmin = tokenData["role"] === "Administrator";
                        }
                        catch (Error) {
                            this.isAuth = false;
                            this.isAdmin = false;
                            this.username = "";
                        }
                    }
                    this.isAuthChanged.next(true);
                };
                AuthService.prototype.getToken = function () {
                    return localStorage.getItem(src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_3__["globalConstants"].jwtTokenKey);
                };
                AuthService.prototype.setToken = function (token) {
                    return localStorage.setItem(src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_3__["globalConstants"].jwtTokenKey, token);
                };
                AuthService.prototype.register = function (email, password, username) {
                    return this.http.post("Account/Register", { email: email, password: password, username: username, confirmPassword: password });
                };
                AuthService.prototype.login = function (username, password) {
                    return this.http.post("Account/Login", { username: username, password: password });
                };
                AuthService.prototype.logout = function () {
                    localStorage.clear();
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                    this.title = 'My first AGM project';
                    this.lat = 51.678418;
                    this.lng = 7.809007;
                }
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                apiUrl: 'https://localhost:44350'
                //apiUrl: 'https://localhost:5001'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! G:\Firm\Eurosys\Online\client\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map