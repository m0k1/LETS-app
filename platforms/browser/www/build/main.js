webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltersBuilderComponent = (function () {
    function FiltersBuilderComponent(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FiltersBuilderComponent.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.options = this.navParams.data.options;
            this.operation = this.navParams.data.operation;
        }
    };
    FiltersBuilderComponent.prototype.goToPage = function (option) {
        var page = option.page;
        if (page) {
            // this.navCtrl.popToRoot();
            this.navCtrl.push(page, option.params);
            this.viewCtrl.dismiss();
        }
    };
    FiltersBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'filters-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/filtersBuilder/filtersBuilder.html"*/'<div class="app-confirm-operation">\n	<ion-list>\n	  <ion-item *ngFor="let option of options" (click)="goToPage(option)">\n	  	<i [class]="option.icon" item-left></i>\n	    <ion-label>{{ option.title }}</ion-label>\n	  </ion-item>\n	</ion-list>\n</div>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/filtersBuilder/filtersBuilder.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FiltersBuilderComponent);
    return FiltersBuilderComponent;
}());
//# sourceMappingURL=filtersBuilder.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, formBuilder, settings, authService, alertService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.settings = settings;
        this.authService = authService;
        this.alertService = alertService;
        this.formErrors = {
            'username': '',
            'password': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Email is required.'
            },
            'password': {
                'required': 'Password is required.'
            }
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginPage.prototype.ngAfterContentInit = function () {
        __WEBPACK_IMPORTED_MODULE_7_jquery__('div.page-login').height(__WEBPACK_IMPORTED_MODULE_7_jquery__('page-login').height());
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.rememberMe = this.loginForm.value.rememberMe;
        this.authService.doLogin(this.username, this.password, this.rememberMe).subscribe(function (response) { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]); }, function (error) { return _this.alertService.showError('Error with credentials. Please try again.\n' + error); });
    };
    LoginPage.prototype.goToFullSite = function () {
        window.open(this.settings.WEB_SITE_URL, '_system', 'location=yes');
    };
    LoginPage.prototype.buildForm = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            'username': [this.username, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'password': [this.password, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'rememberMe': [this.rememberMe],
        });
        this.loginForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    LoginPage.prototype.onValueChanged = function (data) {
        if (!this.loginForm) {
            return;
        }
        var form = this.loginForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n  	<ion-title>Welcome</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content scroll="false">\n	<div class="page-login">\n		<ion-slides [pager]="true" [autoplay]="3000" [loop]="true">\n		  <ion-slide>\n				<div class="image-wrapper">\n					<div class="image">\n						<img alt="logo" src="assets/images/ces_logo.png">\n						<h1 class="logo-title">Community</h1>\n						<h1 class="logo-title">Exchange</h1>\n					</div>\n				</div>\n		  </ion-slide>\n		  <ion-slide>\n				<div class="image-wrapper">\n					<div class="image">\n						<img alt="logo" src="assets/images/ces_logo.png">\n						<h1 class="logo-title">CES</h1>\n						<h1 class="logo-title">Australia</h1>\n					</div>\n				</div>\n		  </ion-slide>\n		</ion-slides>\n		<form [formGroup]="loginForm">\n			<ion-list>\n			  <ion-item>\n			    <ion-label>\n			   		<i class="ion-person"></i>\n			   	</ion-label>\n			    <ion-input type="text" placeholder="Username" required formControlName="username"></ion-input>\n			  </ion-item>\n			  <ion-item class="form-error" *ngIf="formErrors.username">\n				  <p>{{ formErrors.username }}</p>\n			  </ion-item>\n			  <ion-item>\n			    <ion-label>\n			   		<i class="ion-locked"></i>\n			   	</ion-label>\n			    <ion-input type="password" placeholder="Password" required formControlName="password"></ion-input>\n			  </ion-item>\n			  <ion-item class="form-error" *ngIf="formErrors.password">\n				  <p>{{ formErrors.password }}</p>\n			  </ion-item>\n			  <ion-item>\n				  <ion-label>Remember me</ion-label>\n				  <ion-checkbox checked="true" formControlName="rememberMe"></ion-checkbox>\n				</ion-item>\n			</ion-list>\n			<button ion-button full [disabled]="!loginForm.valid" (click)="doLogin()">Sign in</button>\n	  	<p>This is the mobile site</p>\n	  	<p>\n	  		<a href="#" (click)="goToFullSite()">Go to full site</a>\n	  	</p>\n		</form>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/login/login.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_4__services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__services_AlertService__["a" /* AlertService */]])
    ], LoginPage);
    return LoginPage;
}());
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_offers_offers__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_addOffer_addOffer__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_wants_wants__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_addWant_addWant__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addTransaction_addTransaction__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_members_members__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_userProfile_userProfile__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_option__ = __webpack_require__(649);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = (function () {
    function HomePage(viewCtrl, navCtrl, popoverCtrl, authService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userInfo.subscribe(function (userInfo) {
            _this.member = userInfo;
            _this.menus = [
                {
                    header: 'I need something',
                    menu_items: [
                        {
                            title: 'Browse offers',
                            icon: 'ion-pricetag',
                            page: __WEBPACK_IMPORTED_MODULE_4__pages_offers_offers__["a" /* OffersPage */],
                        },
                        {
                            title: 'Post my need',
                            icon: 'ion-edit',
                            page: __WEBPACK_IMPORTED_MODULE_7__pages_addWant_addWant__["a" /* AddWantPage */],
                        }
                    ]
                },
                {
                    header: 'I have something to offer',
                    menu_items: [
                        {
                            title: 'Browse needs',
                            page: __WEBPACK_IMPORTED_MODULE_6__pages_wants_wants__["a" /* WantsPage */]
                        },
                        {
                            title: 'Post my offer',
                            page: __WEBPACK_IMPORTED_MODULE_5__pages_addOffer_addOffer__["a" /* AddOfferPage */]
                        }
                    ]
                },
                {
                    header: 'Transactions',
                    menu_items: [
                        {
                            title: 'I bought something',
                            icon: 'cart',
                            page: __WEBPACK_IMPORTED_MODULE_8__pages_addTransaction_addTransaction__["a" /* AddTransactionPage */],
                            params: {
                                title: 'As Buyer',
                                fields: {
                                    payer: {
                                        default: _this.member.name,
                                        disabled: true
                                    }
                                },
                            }
                        },
                        {
                            title: 'I sold something',
                            icon: 'ion-briefcase',
                            page: __WEBPACK_IMPORTED_MODULE_8__pages_addTransaction_addTransaction__["a" /* AddTransactionPage */],
                            params: {
                                title: 'As Seller',
                                fields: {
                                    payee: {
                                        default: _this.member.name,
                                        disabled: true
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    header: 'Other',
                    menu_items: [
                        {
                            title: 'Browse members',
                            icon: 'ion-person',
                            page: __WEBPACK_IMPORTED_MODULE_10__pages_members_members__["a" /* MembersPage */]
                        },
                        {
                            title: 'Trading History',
                            icon: 'ion-stats-bars',
                            page: __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__["a" /* TransactionsPage */]
                        },
                    ]
                },
                {
                    header: 'My Account',
                    menu_items: [
                        {
                            title: 'Edit my profile',
                            icon: 'ion-home',
                            page: __WEBPACK_IMPORTED_MODULE_11__pages_userProfile_userProfile__["a" /* ProfilePage */]
                        },
                        {
                            title: 'My offers',
                            page: __WEBPACK_IMPORTED_MODULE_4__pages_offers_offers__["a" /* OffersPage */],
                            params: {
                                filter: "&user_id=" + _this.member.id,
                                filterName: "user: " + _this.member.name,
                                myActions: true
                            },
                        },
                        {
                            title: 'My wants',
                            page: __WEBPACK_IMPORTED_MODULE_6__pages_wants_wants__["a" /* WantsPage */],
                            params: {
                                filter: "&user_id=" + _this.member.id,
                                filterName: "user: " + _this.member.name,
                                myActions: true
                            }
                        }]
                }];
        });
    };
    HomePage.prototype.goToPage = function (menuEntry) {
        var page = menuEntry.page;
        if (page) {
            this.navCtrl.push(page, menuEntry.params);
        }
    };
    HomePage.prototype.showOptions = function (menuEntry, $event) {
        if (menuEntry.options && menuEntry.options.length) {
            this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_12__menu_option__["a" /* MenuOptionPopover */], {
                options: menuEntry.options
            });
            this.popover.present({
                ev: $event
            });
        }
    };
    HomePage.prototype.doLogout = function () {
        var _this = this;
        this.authService.doLogout().subscribe(function (response) { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>What do you want to do?</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content scroll="false">\n  <ion-list class="home-header">\n    <ion-item>\n      <ion-avatar item-left>\n        <img [src]="member && member.image || \'assets/images/default_user.jpg\'">\n      </ion-avatar>\n    </ion-item>\n    <ion-item>\n      <h2>{{ member && member.name }}</h2>\n      <p>{{ member && member.mail }}</p>\n    </ion-item>\n  </ion-list>\n\n<ion-list class="home-nav">\n	<ng-container *ngFor="let menu of menus">\n\n		<ion-list-header *ngIf="menu.header">{{ menu.header }}</ion-list-header>\n\n		<ion-item *ngFor="let menuEntry of menu.menu_items" (click)="goToPage(menuEntry);showOptions(menuEntry, $event)">\n      <i [class]="menuEntry.icon" item-left></i>\n			{{ menuEntry.title }}\n      <i class="ion-arrow-down-b" *ngIf="menuEntry.options && menuEntry.options.length" item-right></i>\n    </ion-item>\n\n  </ng-container>\n\n	<ion-item (click)="doLogout()">\n		<i class="ion-log-out" item-left></i> Log Out\n	</ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_OfferService__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offerDetail_offerDetail__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addOffer_addOffer__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categories_categories__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__keywords_keywords__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_filtersBuilder_filtersBuilder__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var OffersPage = (function () {
    function OffersPage(viewCtrl, navCtrl, navParams, loadingCtrl, popoverCtrl, offerService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.offerService = offerService;
        this.alertService = alertService;
        this.canPost = false;
    }
    OffersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setPagination();
        if (this.navParams.data) {
            this.filter = this.navParams.data.filter;
            this.filterName = this.navParams.data.filterName;
            this.myActions = this.navParams.data.myActions;
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (_this.deleteOfferConfirmDialog) {
                return;
            }
            _this.initPage();
        });
    };
    OffersPage.prototype.initPage = function () {
        var _this = this;
        this.page = 1;
        this.hasNoMoreData = false;
        this.isLoading = false;
        this.offers = [];
        this.offerService.describe().subscribe(function (response) {
            _this.definitionOffer = response;
            _this.canPost = !!_this.definitionOffer.POST;
            if (_this.canPost) {
                __WEBPACK_IMPORTED_MODULE_10_jquery__('page-offers ion-content.content').children().css('margin-bottom', '90px');
            }
        }, function (error) { return _this.alertService.showError(error); });
        this.loadOffers();
    };
    OffersPage.prototype.setPagination = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_10_jquery__('page-offers .scroll-content').on('scroll', function (ev) {
            if (_this.hasNoMoreData || _this.isLoading) {
                return;
            }
            if ((ev.target.scrollHeight - ev.target.scrollTop) < 600) {
                _this.loadOffers();
            }
        });
    };
    OffersPage.prototype.loadOffers = function () {
        var _this = this;
        if (this.hasNoMoreData || this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loader.present();
        this.offerService.list(this.page, this.filter).subscribe(function (response) {
            if (!response.length) {
                _this.hasNoMoreData = true;
            }
            _this.offers = _this.offers.concat(response);
            _this.page++;
            _this.loader.dismiss();
            _this.isLoading = false;
        }, function (error) {
            _this.alertService.showError(error);
            _this.loader.dismiss();
            _this.isLoading = false;
        });
    };
    OffersPage.prototype.showDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__offerDetail_offerDetail__["a" /* OfferDetailPage */], {
            id: id
        });
    };
    OffersPage.prototype.addOffer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addOffer_addOffer__["a" /* AddOfferPage */]);
    };
    OffersPage.prototype.editOffer = function (offer) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addOffer_addOffer__["a" /* AddOfferPage */], {
            offer: offer
        });
    };
    OffersPage.prototype.deleteOffer = function (id) {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionOffer.POST,
            operation: 'Delete Offer'
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.deleteOfferConfirmDialog = true;
        this.popover.onDidDismiss(function (data) {
            _this.deleteOfferConfirmDialog = false;
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                _this.loader.present();
                _this.offerService.delete(id).subscribe(function (response) {
                    _this.loader.dismiss();
                    _this.initPage();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    OffersPage.prototype.showFilters = function () {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */], {
            options: [{
                    // 	title: 'Show Latest',
                    // 	page: OffersPage
                    // }, {
                    title: 'Show By Categories',
                    page: __WEBPACK_IMPORTED_MODULE_6__categories_categories__["a" /* CategoriesFilterPage */],
                    params: {
                        categories: Object(__WEBPACK_IMPORTED_MODULE_11_lodash__["map"])(this.definitionOffer.POST.category.options, function (category, key) {
                            return { id: key, name: category };
                        }),
                        title: 'Offerings',
                        page: OffersPage
                    }
                }, {
                    title: 'Show By Keyword',
                    page: __WEBPACK_IMPORTED_MODULE_7__keywords_keywords__["a" /* KeywordsFilterPage */],
                    params: {
                        title: 'Offerings',
                        page: OffersPage
                    }
                }, {
                    title: 'Clear Filters',
                    page: OffersPage
                }]
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: true
        });
        this.popover.present();
    };
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-offers',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offers/offers.html"*/'<ion-header>\n  <ion-navbar>\n		<ion-title>Offerings</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list class="app-filters" *ngIf="filterName">\n    <ion-item>\n      Offerings currently listed in {{ filterName }}\n    </ion-item>\n  </ion-list>\n  <ion-list class="app-items">\n    <ion-item *ngFor="let offer of offers">\n      <ion-thumbnail item-left>\n        <img [src]="offer.image || \'assets/images/default.jpg\'">\n      </ion-thumbnail>\n      <h6>{{ offer.title }}</h6>\n      <p class="description" *ngIf="!myActions">{{ offer.description }}</p>\n      <button ion-button (click)="showDetails(offer.id)" *ngIf="!myActions">View</button>\n      <button class="my-actions view" ion-button (click)="showDetails(offer.id)" *ngIf="myActions">View</button>\n      <button class="my-actions edit" ion-button (click)="editOffer(offer)" *ngIf="myActions">Edit</button>\n      <button class="my-actions delete" ion-button (click)="deleteOffer(offer.id)" *ngIf="myActions">Delete</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item *ngIf="canPost">\n      <button (click)="addOffer()">Add Offer</button>\n    </ion-item>\n    <ion-item>\n      <button (click)="showFilters()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offers/offers.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_OfferService__["a" /* OfferService */], __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
    ], OffersPage);
    return OffersPage;
}());
//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OfferService = (function () {
    function OfferService(settings, httpBasicAuth) {
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
        this.pageSize = 20;
    }
    OfferService.prototype.list = function (page, filter) {
        if (filter === void 0) { filter = ''; }
        var offset = this.pageSize * (page - 1);
        return this.httpBasicAuth.getWithAuth(this.settings.URL.offers + "?depth=1&offset=" + offset + "&limit=" + this.pageSize + "&sort=expires,desc" + filter)
            .map(function (response) {
            response = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"])(response, function (offer, key) {
                if (!offer.id) {
                    offer.id = key;
                }
                return offer;
            });
            return response;
        });
    };
    OfferService.prototype.get = function (id) {
        return this.httpBasicAuth.getWithAuth(this.settings.URL.offers + "/" + id + "?depth=2");
    };
    OfferService.prototype.delete = function (id) {
        return this.httpBasicAuth.delete(this.settings.URL.offers + "/" + id);
    };
    OfferService.prototype.post = function (offer) {
        return this.httpBasicAuth.postWithAuth(this.settings.URL.offers, offer);
    };
    OfferService.prototype.describe = function () {
        return this.httpBasicAuth.options(this.settings.URL.offers);
    };
    OfferService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
    ], OfferService);
    return OfferService;
}());
//# sourceMappingURL=OfferService.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_MemberService__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberDetailPage = (function () {
    function MemberDetailPage(params, viewCtrl, loadingCtrl, memberService, alertService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.memberService = memberService;
        this.alertService = alertService;
    }
    MemberDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.viewCtrl.didEnter.subscribe(function (response) {
            _this.loader = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            _this.loader.present();
            _this.memberService.get(_this.params.get('id')).subscribe(function (response) {
                _this.member = response;
                _this.loader.dismiss();
            }, function (error) {
                _this.alertService.showError(error);
                _this.loader.dismiss();
            });
        });
    };
    MemberDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-memberDetail',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/memberDetail/memberDetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Member Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card class="app-item-details" *ngIf="member">\n    <ion-item class="item-avatar item-avatar-title">\n      <ion-avatar item-left>\n        <img [src]="member.portrait || \'assets/images/default_user.jpg\'">\n      </ion-avatar>\n    </ion-item>\n    <ion-item class="item-title">\n      <h2 class="title">{{ member.name }}</h2>\n      <p class="subtitle">{{ member.mail }}</p>\n      <p class="subtitle">{{ member.phone }}</p>\n    </ion-item>\n    <p class="description">{{ member.aboutme }}</p>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <p><b>Address:</b> {{ member.street_address }}</p>\n          <p><b>Locality:</b> {{ member.locality }}</p>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showActions()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/memberDetail/memberDetail.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__services_MemberService__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
    ], MemberDetailPage);
    return MemberDetailPage;
}());
//# sourceMappingURL=memberDetail.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberService = (function () {
    function MemberService(settings, httpBasicAuth) {
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
        this.pageSize = 20;
    }
    MemberService.prototype.list = function (page, filter) {
        if (filter === void 0) { filter = ''; }
        var offset = this.pageSize * (page - 1);
        return this.httpBasicAuth.getWithAuth(this.settings.URL.members + "?depth=1&offset=" + offset + "&limit=" + this.pageSize + "&sort=name,desc" + filter)
            .map(function (response) {
            response = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"])(response, function (member, key) {
                if (!member.id) {
                    member.id = key;
                }
                return member;
            });
            return response;
        });
    };
    MemberService.prototype.get = function (id) {
        return this.httpBasicAuth.getWithAuth(this.settings.URL.members + "/" + id + "?depth=1");
    };
    MemberService.prototype.post = function (member) {
        return this.httpBasicAuth.postWithAuth(this.settings.URL.members, member);
    };
    MemberService.prototype.patch = function (member) {
        // console.log('patching member');
        // console.log(member);
        return this.httpBasicAuth.patchWithAuth(this.settings.URL.members + "/" + member.id, member);
    };
    MemberService.prototype.describe = function (member) {
        if (member === void 0) { member = {}; }
        return this.httpBasicAuth.options(this.settings.URL.members + "/" + member.id);
    };
    MemberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
    ], MemberService);
    return MemberService;
}());
//# sourceMappingURL=MemberService.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordsFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeywordsFilterPage = (function () {
    function KeywordsFilterPage(viewCtrl, formBuilder, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formErrors = {
            'keywords': ''
        };
        this.validationMessages = {
            'keywords': {
                'required': 'Email is required.'
            }
        };
    }
    KeywordsFilterPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.title = this.navParams.data.title;
            this.page = this.navParams.data.page;
        }
        this.buildForm();
    };
    KeywordsFilterPage.prototype.buildForm = function () {
        var _this = this;
        this.keywordsForm = this.formBuilder.group({
            'keywords': [this.keywords, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.keywordsForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    KeywordsFilterPage.prototype.onValueChanged = function (data) {
        if (!this.keywordsForm) {
            return;
        }
        var form = this.keywordsForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    KeywordsFilterPage.prototype.setFilter = function () {
        this.keywords = this.keywordsForm.value.keywords;
        // this.viewCtrl.dismiss();
        this.navCtrl.popToRoot();
        this.navCtrl.push(this.page, {
            filter: "&fragment=" + this.keywords,
            filterName: "'" + this.keywords + "'"
        });
    };
    KeywordsFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-keywords',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/keywords/keywords.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<form class="app-form" [formGroup]="keywordsForm">\n		<ion-list>\n	  	<ion-item>\n	  		<ion-input type="text" placeholder="Keyword" formControlName="keywords"></ion-input>\n	  	</ion-item>\n	  </ion-list>\n	  <button class="confirm-button" ion-button full [disabled]="!keywordsForm.valid" (click)="setFilter()">Search</button>\n	</form>\n</ion-content>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/keywords/keywords.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], KeywordsFilterPage);
    return KeywordsFilterPage;
}());
//# sourceMappingURL=keywords.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_WantService__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wantDetail_wantDetail__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addWant_addWant__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categories_categories__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__keywords_keywords__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_filtersBuilder_filtersBuilder__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var WantsPage = (function () {
    function WantsPage(viewCtrl, navCtrl, navParams, loadingCtrl, popoverCtrl, wantService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.wantService = wantService;
        this.alertService = alertService;
        this.canPost = false;
    }
    WantsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setPagination();
        if (this.navParams.data) {
            this.filter = this.navParams.data.filter;
            this.filterName = this.navParams.data.filterName;
            this.myActions = this.navParams.data.myActions;
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (_this.deleteWantConfirmDialog) {
                return;
            }
            _this.initPage();
        });
    };
    WantsPage.prototype.initPage = function () {
        var _this = this;
        this.page = 1;
        this.hasNoMoreData = false;
        this.isLoading = false;
        this.wants = [];
        this.wantService.describe().subscribe(function (response) {
            _this.definitionWant = response;
            _this.canPost = !!_this.definitionWant.POST;
            if (_this.canPost) {
                __WEBPACK_IMPORTED_MODULE_10_jquery__('page-wants ion-content.content').children().css('margin-bottom', '90px');
            }
        }, function (error) { return _this.alertService.showError(error); });
        this.loadWants();
    };
    WantsPage.prototype.setPagination = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_10_jquery__('page-wants .scroll-content').on('scroll', function (ev) {
            if (_this.hasNoMoreData || _this.isLoading) {
                return;
            }
            if ((ev.target.scrollHeight - ev.target.scrollTop) < 600) {
                _this.loadWants();
            }
        });
    };
    WantsPage.prototype.loadWants = function () {
        var _this = this;
        if (this.hasNoMoreData || this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loader.present();
        this.wantService.list(this.page, this.filter).subscribe(function (response) {
            if (!response.length) {
                _this.hasNoMoreData = true;
            }
            _this.wants = _this.wants.concat(response);
            _this.page++;
            _this.loader.dismiss();
            _this.isLoading = false;
        }, function (error) {
            _this.alertService.showError(error);
            _this.loader.dismiss();
            _this.isLoading = false;
        });
    };
    WantsPage.prototype.showDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wantDetail_wantDetail__["a" /* WantDetailPage */], {
            id: id
        });
    };
    WantsPage.prototype.addWant = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addWant_addWant__["a" /* AddWantPage */]);
    };
    WantsPage.prototype.editWant = function (want) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addWant_addWant__["a" /* AddWantPage */], {
            want: want
        });
    };
    WantsPage.prototype.deleteWant = function (id) {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionWant.POST,
            operation: 'Delete Want'
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.deleteWantConfirmDialog = true;
        this.popover.onDidDismiss(function (data) {
            _this.deleteWantConfirmDialog = false;
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                _this.loader.present();
                _this.wantService.delete(id).subscribe(function (response) {
                    _this.loader.dismiss();
                    _this.initPage();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    WantsPage.prototype.showFilters = function () {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */], {
            options: [{
                    // 	title: 'Show Latest',
                    // 	page: WantsPage
                    // }, {
                    title: 'Show By Categories',
                    page: __WEBPACK_IMPORTED_MODULE_6__categories_categories__["a" /* CategoriesFilterPage */],
                    params: {
                        categories: Object(__WEBPACK_IMPORTED_MODULE_11_lodash__["map"])(this.definitionWant.POST.category.options, function (category, key) {
                            return { id: key, name: category };
                        }),
                        title: 'Wants',
                        page: WantsPage
                    }
                }, {
                    title: 'Show By Keyword',
                    page: __WEBPACK_IMPORTED_MODULE_7__keywords_keywords__["a" /* KeywordsFilterPage */],
                    params: {
                        title: 'Wants',
                        page: WantsPage
                    }
                }, {
                    title: 'Clear Filters',
                    page: WantsPage
                }]
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: true
        });
        this.popover.present();
    };
    WantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wants',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wants/wants.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Wants</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list class="app-filters" *ngIf="filterName">\n    <ion-item>\n      Wants currently listed in {{ filterName }}\n    </ion-item>\n  </ion-list>\n  <ion-list class="app-items">\n    <ion-item *ngFor="let want of wants">\n      <ion-thumbnail item-left>\n        <img [src]="want.image || \'assets/images/default.jpg\'">\n      </ion-thumbnail>\n      <h6>{{ want.title }}</h6>\n      <p class="description">{{ want.description }}</p>\n      <button ion-button (click)="showDetails(want.id)" *ngIf="!myActions">View</button>\n      <button class="my-actions view" ion-button (click)="showDetails(want.id)" *ngIf="myActions">View</button>\n      <button class="my-actions edit" ion-button (click)="editWant(want)" *ngIf="myActions">Edit</button>\n      <button class="my-actions delete" ion-button (click)="deleteWant(want.id)" *ngIf="myActions">Delete</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item *ngIf="canPost">\n      <button (click)="addWant()">Add Want</button>\n    </ion-item>\n    <ion-item>\n      <button (click)="showFilters()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wants/wants.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_WantService__["a" /* WantService */], __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
    ], WantsPage);
    return WantsPage;
}());
//# sourceMappingURL=wants.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WantService = (function () {
    function WantService(settings, httpBasicAuth) {
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
        this.pageSize = 20;
    }
    WantService.prototype.list = function (page, filter) {
        if (filter === void 0) { filter = ''; }
        var offset = this.pageSize * (page - 1);
        return this.httpBasicAuth.getWithAuth(this.settings.URL.wants + "?depth=1&offset=" + offset + "&limit=" + this.pageSize + "&sort=expires,desc" + filter)
            .map(function (response) {
            response = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"])(response, function (want, key) {
                if (!want.id) {
                    want.id = key;
                }
                return want;
            });
            return response;
        });
    };
    WantService.prototype.get = function (id) {
        return this.httpBasicAuth.getWithAuth(this.settings.URL.wants + "/" + id + "?depth=2");
    };
    WantService.prototype.delete = function (id) {
        return this.httpBasicAuth.delete(this.settings.URL.wants + "/" + id);
    };
    WantService.prototype.post = function (want) {
        return this.httpBasicAuth.postWithAuth(this.settings.URL.wants, want);
    };
    WantService.prototype.describe = function () {
        return this.httpBasicAuth.options(this.settings.URL.wants);
    };
    WantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
    ], WantService);
    return WantService;
}());
//# sourceMappingURL=WantService.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = (function () {
    function AlertService(toastCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    AlertService.prototype.showError = function (message) {
        console.error(message);
        return this.alertCtrl.create({
            title: 'Error!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertService);
    return AlertService;
}());
//# sourceMappingURL=AlertService.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_OfferService__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_offers_offers__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddOfferPage = (function () {
    function AddOfferPage(viewCtrl, navParams, loadingCtrl, popoverCtrl, authService, offerService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.offerService = offerService;
        this.alertService = alertService;
        this.isValid = false;
        this.isLoaded = false;
    }
    AddOfferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoaded = false;
        if (this.navParams.data) {
            this.editOffer = this.navParams.data.offer;
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (!_this.isLoaded) {
                _this.loader = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                _this.loader.present();
                _this.authService.userInfo.subscribe(function (userInfo) {
                    _this.offerService.describe().subscribe(function (response) {
                        _this.isLoaded = true;
                        _this.definitionOffer = response;
                        if (_this.definitionOffer.POST.user_id) {
                            _this.definitionOffer.POST.user_id.default = userInfo.name;
                        }
                        console.log(_this.editOffer);
                        if (_this.editOffer) {
                            for (var i in _this.editOffer) {
                                if (_this.editOffer[i] && _this.definitionOffer.POST[i]) {
                                    _this.definitionOffer.POST[i].default = _this.editOffer[i];
                                }
                            }
                        }
                        _this.fields = _this.definitionOffer.POST;
                        _this.loader.dismiss();
                    }, function (error) {
                        _this.alertService.showError(error);
                        _this.loader.dismiss();
                    });
                });
            }
        });
    };
    AddOfferPage.prototype.onChanged = function (options) {
        this.offer = options.value;
        this.isValid = options.isValid;
    };
    AddOfferPage.prototype.addOffer = function () {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionOffer.POST,
            operation: 'Offer'
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.popover.onDidDismiss(function (data) {
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                _this.loader.present();
                _this.offerService.post(_this.offer).subscribe(function (response) {
                    _this.loader.dismiss();
                    _this.popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */], {
                        operation: 'Offer',
                        options: [{
                                title: 'Record Offer',
                                icon: 'ion-edit',
                                page: AddOfferPage
                            }, {
                                title: 'List Offerings',
                                icon: 'ion-pricetag',
                                page: __WEBPACK_IMPORTED_MODULE_7__pages_offers_offers__["a" /* OffersPage */]
                            }]
                    }, {
                        cssClass: 'confirm-popover',
                        enableBackdropDismiss: false
                    });
                    _this.popover.present();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    AddOfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-offer',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addOffer/addOffer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Offer</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="addOffer()">Submit</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addOffer/addOffer.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_OfferService__["a" /* OfferService */], __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
    ], AddOfferPage);
    return AddOfferPage;
}());
//# sourceMappingURL=addOffer.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesFilterPage = (function () {
    function CategoriesFilterPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CategoriesFilterPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.categories = this.navParams.data.categories;
            this.title = this.navParams.data.title;
            this.page = this.navParams.data.page;
        }
    };
    CategoriesFilterPage.prototype.setFilter = function (category) {
        // this.viewCtrl.dismiss();
        this.navCtrl.popToRoot();
        this.navCtrl.push(this.page, {
            filter: "&cat_id=" + category.id,
            filterName: category.name
        });
    };
    CategoriesFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list class="app-items">\n    <ion-item *ngFor="let category of categories" (click)="setFilter(category)">\n      <h5>{{ category.name }}</h5>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/categories/categories.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CategoriesFilterPage);
    return CategoriesFilterPage;
}());
//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_WantService__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wants_wants__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddWantPage = (function () {
    function AddWantPage(viewCtrl, navParams, loadingCtrl, popoverCtrl, authService, wantService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.wantService = wantService;
        this.alertService = alertService;
        this.isValid = false;
        this.isLoaded = false;
    }
    AddWantPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoaded = false;
        if (this.navParams.data) {
            this.editWant = this.navParams.data.want;
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (!_this.isLoaded) {
                _this.loader = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                _this.loader.present();
                _this.authService.userInfo.subscribe(function (userInfo) {
                    _this.wantService.describe().subscribe(function (response) {
                        _this.isLoaded = true;
                        _this.definitionWant = response;
                        if (_this.definitionWant.POST.user_id) {
                            _this.definitionWant.POST.user_id.default = userInfo.name;
                        }
                        if (_this.editWant) {
                            for (var i in _this.editWant) {
                                if (_this.editWant[i] && _this.definitionWant.POST[i]) {
                                    _this.definitionWant.POST[i].default = _this.editWant[i];
                                }
                            }
                        }
                        _this.fields = _this.definitionWant.POST;
                        _this.loader.dismiss();
                    }, function (error) {
                        _this.alertService.showError(error);
                        _this.loader.dismiss();
                    });
                });
            }
        });
    };
    AddWantPage.prototype.onChanged = function (options) {
        this.want = options.value;
        this.isValid = options.isValid;
    };
    AddWantPage.prototype.addWant = function () {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionWant.POST,
            operation: 'Want'
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.popover.onDidDismiss(function (data) {
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                _this.loader.present();
                _this.wantService.post(_this.want).subscribe(function (response) {
                    _this.loader.dismiss();
                    _this.popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */], {
                        operation: 'Want',
                        options: [{
                                title: 'Record Want',
                                icon: 'ion-edit',
                                page: AddWantPage
                            }, {
                                title: 'List Wantings',
                                icon: 'ion-pin',
                                page: __WEBPACK_IMPORTED_MODULE_7__pages_wants_wants__["a" /* WantsPage */]
                            }]
                    }, {
                        cssClass: 'confirm-popover',
                        enableBackdropDismiss: false
                    });
                    _this.popover.present();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    AddWantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-want',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addWant/addWant.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Want</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="addWant()">Submit</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addWant/addWant.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_WantService__["a" /* WantService */], __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
    ], AddWantPage);
    return AddWantPage;
}());
//# sourceMappingURL=addWant.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddTransactionPage = (function () {
    function AddTransactionPage(viewCtrl, navParams, loadingCtrl, popoverCtrl, authService, transactionService, alertService) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.transactionService = transactionService;
        this.alertService = alertService;
        this.isValid = false;
        this.isLoaded = false;
        this.authService.userInfo.subscribe(function (userInfo) { return _this.member = userInfo; });
    }
    AddTransactionPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.navParams.data) {
            this.title = this.navParams.data.title;
        }
        this.isLoaded = false;
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (!_this.isLoaded) {
                _this.loader = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                _this.loader.present();
                _this.transactionService.describe().subscribe(function (response) {
                    _this.isLoaded = true;
                    _this.definitionTransaction = response;
                    if (_this.definitionTransaction.POST && _this.navParams.data && _this.navParams.data.fields) {
                        for (var i in _this.navParams.data.fields) {
                            if (_this.definitionTransaction.POST[i]) {
                                Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["assign"])(_this.definitionTransaction.POST[i], _this.navParams.data.fields[i]);
                            }
                        }
                    }
                    _this.fields = _this.definitionTransaction.POST;
                    _this.loader.dismiss();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
    };
    AddTransactionPage.prototype.onChanged = function (options) {
        this.transaction = options.value;
        this.isValid = options.isValid;
    };
    AddTransactionPage.prototype.addTransaction = function () {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionTransaction.POST,
            operation: 'Transaction'
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.popover.onDidDismiss(function (data) {
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                _this.loader.present();
                _this.transactionService.post(_this.transaction).subscribe(function (response) {
                    _this.loader.dismiss();
                    _this.popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */], {
                        operation: 'Transaction',
                        options: [{
                                title: 'Record Transaction - as a Seller',
                                icon: 'ion-edit',
                                page: AddTransactionPage,
                                params: {
                                    title: 'as Seller',
                                    fields: {
                                        payee: {
                                            default: _this.member.name,
                                            disabled: true
                                        }
                                    }
                                }
                            }, {
                                title: 'Record Transaction - as a Buyer',
                                icon: 'ion-edit',
                                page: AddTransactionPage,
                                params: {
                                    title: 'as Buyer',
                                    fields: {
                                        payer: {
                                            default: _this.member.name,
                                            disabled: true
                                        }
                                    }
                                }
                            }]
                    }, {
                        cssClass: 'confirm-popover',
                        enableBackdropDismiss: false
                    });
                    _this.popover.present();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    AddTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-transaction',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addTransaction/addTransaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Record Transaction - {{ title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="addTransaction()">Submit</button>\n    </ion-item>\n  </ion-list>\n</ion-footer>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/addTransaction/addTransaction.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
    ], AddTransactionPage);
    return AddTransactionPage;
}());
//# sourceMappingURL=addTransaction.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionService = (function () {
    function TransactionService(settings, httpBasicAuth) {
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
    }
    TransactionService.prototype.list = function () {
        return this.httpBasicAuth.getWithAuth(this.settings.URL.transactions + "?depth=1")
            .map(function (response) {
            response = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"])(response, function (transaction, key) {
                if (!transaction.id) {
                    transaction.id = key;
                }
                return transaction;
            });
            return response;
        });
    };
    TransactionService.prototype.get = function (id) {
        return this.httpBasicAuth.getWithAuth(this.settings.URL.transactions + "/" + id + "?depth=1");
    };
    TransactionService.prototype.post = function (transaction) {
        return this.httpBasicAuth.postWithAuth(this.settings.URL.transactions, transaction);
    };
    TransactionService.prototype.describe = function () {
        return this.httpBasicAuth.options(this.settings.URL.transactions)
            .map(function (response) {
            return response;
        });
    };
    TransactionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__app_app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_2__HttpBasicAuth__["a" /* HttpBasicAuth */]])
    ], TransactionService);
    return TransactionService;
}());
//# sourceMappingURL=TransactionService.js.map

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 278;

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HttpBasicAuth__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(settings, httpBasicAuth) {
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
        this.LOCAL_TOKEN_KEY = 'local_token';
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.hasToken = false;
        this.loadToken();
    }
    AuthService.prototype.loadToken = function () {
        var token = window.localStorage.getItem(this.LOCAL_TOKEN_KEY);
        if (!token) {
            token = window.sessionStorage.getItem(this.LOCAL_TOKEN_KEY);
        }
        if (token) {
            this.setToken(JSON.parse(token));
        }
    };
    AuthService.prototype.storeToken = function (token, rememberMe) {
        if (rememberMe) {
            window.localStorage.setItem(this.LOCAL_TOKEN_KEY, JSON.stringify(token));
        }
        else {
            window.sessionStorage.setItem(this.LOCAL_TOKEN_KEY, JSON.stringify(token));
        }
        this.setToken(token);
    };
    AuthService.prototype.destroyToken = function () {
        this.hasToken = false;
        window.localStorage.removeItem(this.LOCAL_TOKEN_KEY);
        window.sessionStorage.removeItem(this.LOCAL_TOKEN_KEY);
    };
    AuthService.prototype.setToken = function (token) {
        this.hasToken = true;
        this.userInfo.next(token);
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.hasToken;
    };
    AuthService.prototype.requestUserInfo = function (username, rememberMe) {
        var _this = this;
        //console.log(this.isAuthenticated());
        return this.httpBasicAuth
            .getWithAuth(this.settings.URL.members + "?fragment=" + username + "&depth=1")
            .map(function (response) {
            for (var id in response) {
                _this.storeToken(response[id], rememberMe);
                break;
            }
            return response;
        });
    };
    AuthService.prototype.doLogin = function (username, password, rememberMe) {
        this.httpBasicAuth.setAuthorizationToken(username, password, rememberMe);
        return this.requestUserInfo(username, rememberMe);
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.destroyToken();
            _this.httpBasicAuth.logout();
            observer.next('');
            observer.complete();
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_4__HttpBasicAuth__["a" /* HttpBasicAuth */]])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings.prototype, "WEB_SITE_URL", {
        get: function () {
            return 'http://hamlets.communityforge.net';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings.prototype, "SERVER_URL", {
        get: function () {
            return this.WEB_SITE_URL + "/commex";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings.prototype, "URL", {
        get: function () {
            return {
                config: "" + this.SERVER_URL,
                transactions: this.SERVER_URL + "/transaction",
                offers: this.SERVER_URL + "/offer",
                wants: this.SERVER_URL + "/want",
                members: this.SERVER_URL + "/member"
            };
        },
        enumerable: true,
        configurable: true
    });
    AppSettings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AppSettings);
    return AppSettings;
}());
//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpBasicAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpBasicAuth = (function () {
    function HttpBasicAuth(http, settings) {
        this.http = http;
        this.settings = settings;
        this.AUTH_TOKEN_KEY = 'auth_token';
        this.loadToken();
    }
    HttpBasicAuth.prototype.loadToken = function () {
        var token = window.localStorage.getItem(this.AUTH_TOKEN_KEY);
        if (!token) {
            token = window.sessionStorage.getItem(this.AUTH_TOKEN_KEY);
        }
        if (token) {
            this.setToken(JSON.parse(token));
        }
    };
    HttpBasicAuth.prototype.storeToken = function (token, rememberMe) {
        if (rememberMe) {
            window.localStorage.setItem(this.AUTH_TOKEN_KEY, JSON.stringify(token));
        }
        else {
            window.sessionStorage.setItem(this.AUTH_TOKEN_KEY, JSON.stringify(token));
        }
        this.setToken(token);
    };
    HttpBasicAuth.prototype.destroyToken = function () {
        window.localStorage.removeItem(this.AUTH_TOKEN_KEY);
        window.sessionStorage.removeItem(this.AUTH_TOKEN_KEY);
    };
    HttpBasicAuth.prototype.setToken = function (token) {
        this.authorizationToken = token;
    };
    HttpBasicAuth.prototype.setAuthorizationToken = function (username, password, rememberMe) {
        this.authorizationToken = "Basic " + btoa(username + ":" + password);
        //console.log(this.authorizationToken)
        this.storeToken(this.authorizationToken, rememberMe);
    };
    HttpBasicAuth.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', this.authorizationToken);
    };
    HttpBasicAuth.prototype.createAcceptHeader = function (headers) {
        headers.append('Accept', 'application/json');
    };
    HttpBasicAuth.prototype.extractData = function (response) {
        var body = response.json();
        return body || {};
    };
    HttpBasicAuth.prototype.extractError = function (error) {
        throw error._body;
    };
    HttpBasicAuth.prototype.getWithAuth = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        //console.log(headers);
        return this.get(url, headers);
    };
    HttpBasicAuth.prototype.get = function (url, headers) {
        if (headers === void 0) { headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](); }
        this.createAcceptHeader(headers);
        return this.http.get(url, {
            headers: headers
        }).map(this.extractData)
            .catch(this.extractError);
    };
    HttpBasicAuth.prototype.getAutocomplete = function (resource, autocomplete, fragment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.get(this.settings.SERVER_URL + "/" + resource + "?" + autocomplete + fragment + "&limit=3", headers)
            .map(function (response) {
            response = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["map"])(response, function (item, key) {
                var newItem;
                if (typeof item !== 'object') {
                    newItem = {
                        value: item
                    };
                }
                else {
                    newItem = item;
                }
                if (!newItem.id) {
                    newItem.id = key;
                }
                return newItem;
            });
            return response;
        });
    };
    HttpBasicAuth.prototype.postWithAuth = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.post(url, data, headers);
    };
    HttpBasicAuth.prototype.post = function (url, data, headers) {
        if (headers === void 0) { headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](); }
        this.createAcceptHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        }).map(this.extractData)
            .catch(this.extractError);
    };
    HttpBasicAuth.prototype.patchWithAuth = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.patch(url, data, headers);
    };
    HttpBasicAuth.prototype.patch = function (url, data, headers) {
        if (headers === void 0) { headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](); }
        this.createAcceptHeader(headers);
        return this.http.patch(url, data, {
            headers: headers
        }).map(this.extractData)
            .catch(this.extractError);
    };
    HttpBasicAuth.prototype.deleteWithAuth = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.delete(url, headers);
    };
    HttpBasicAuth.prototype.delete = function (url, headers) {
        if (headers === void 0) { headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](); }
        this.createAcceptHeader(headers);
        return this.http.delete(url, {
            headers: headers
        }).map(this.extractData)
            .catch(this.extractError);
    };
    HttpBasicAuth.prototype.options = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        this.createAcceptHeader(headers);
        //console.log(headers);
        return this.http.options(url, {
            headers: headers
        }).map(this.extractData)
            .catch(this.extractError);
    };
    HttpBasicAuth.prototype.logout = function () {
        this.destroyToken();
    };
    HttpBasicAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */]])
    ], HttpBasicAuth);
    return HttpBasicAuth;
}());
//# sourceMappingURL=HttpBasicAuth.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_OfferService__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OfferDetailPage = (function () {
    function OfferDetailPage(params, viewCtrl, navCtrl, loadingCtrl, popoverCtrl, offerService, alertService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.offerService = offerService;
        this.alertService = alertService;
    }
    OfferDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.viewCtrl.didEnter.subscribe(function (response) {
            _this.imageExpanded = false;
            _this.loader = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            _this.loader.present();
            _this.offerService.describe().subscribe(function (response) {
                _this.definitionOffer = response;
                _this.offerService.get(_this.params.get('id')).subscribe(function (response) {
                    var _loop_1 = function(i) {
                        var field = _this.definitionOffer.POST[i];
                        if (field.type === 'select') {
                            if (field.multiple) {
                                response[("$" + i)] = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["map"])(response[i], function (option) { return field.options[option]; }).join(', ');
                            }
                            else {
                                response[("$" + i)] = field.options[response[i]];
                            }
                        }
                    };
                    for (var i in _this.definitionOffer.POST) {
                        _loop_1(i);
                    }
                    _this.offer = response;
                    _this.loader.dismiss();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }, function (error) {
                _this.alertService.showError(error);
                _this.loader.dismiss();
            });
        });
    };
    OfferDetailPage.prototype.showMember = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__["a" /* MemberDetailPage */], {
            id: userId
        });
    };
    OfferDetailPage.prototype.expandImage = function () {
        this.imageExpanded = !this.imageExpanded;
    };
    OfferDetailPage.prototype.showActions = function () {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */], {
            operation: 'Offer',
            status: 'Menu',
            options: []
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: true
        });
        this.popover.present();
    };
    OfferDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-offer-detail',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offerDetail/offerDetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Offering Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card class="app-item-details" *ngIf="offer">\n    <h2 class="title">{{ offer.title }}</h2>\n    <div class="image" [class.expanded]="imageExpanded" (click)="expandImage()">\n      <img [src]="offer.image || \'assets/images/default.jpg\'">\n      <div class="posted">Posted {{ offer.changed | unixTimeToMoment }}</div>\n    </div>\n    <p class="description">{{ offer.description }}</p>\n    <ion-row>\n      <ion-col col-6 (click)="showMember(offer.user_id.id)">\n        <ion-item class="item-avatar">\n          <ion-avatar item-left>\n            <img [src]="offer.user_id.portrait || \'assets/images/default_user.jpg\'">\n          </ion-avatar>\n        </ion-item>\n        <ion-item>\n          <h6>{{ offer.user_id.name }}</h6>\n          <p>{{ offer.user_id.mail }}</p>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <p><b>Category:</b> {{ offer.$category }}</p>\n          <p><b>Expires:</b> {{ offer.expires | unixTimeToMoment }}</p>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showActions()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/offerDetail/offerDetail.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_OfferService__["a" /* OfferService */], __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
    ], OfferDetailPage);
    return OfferDetailPage;
}());
//# sourceMappingURL=offerDetail.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WantDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_WantService__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WantDetailPage = (function () {
    function WantDetailPage(params, viewCtrl, navCtrl, loadingCtrl, wantService, alertService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.wantService = wantService;
        this.alertService = alertService;
    }
    WantDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.viewCtrl.didEnter.subscribe(function (response) {
            _this.imageExpanded = false;
            _this.loader = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            _this.loader.present();
            _this.wantService.describe().subscribe(function (response) {
                _this.definitionWant = response;
                _this.wantService.get(_this.params.get('id')).subscribe(function (response) {
                    var _loop_1 = function(i) {
                        var field = _this.definitionWant.POST[i];
                        if (field.type === 'select') {
                            if (field.multiple) {
                                response[("$" + i)] = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["map"])(response[i], function (option) { return field.options[option]; }).join(', ');
                            }
                            else {
                                response[("$" + i)] = field.options[response[i]];
                            }
                        }
                    };
                    for (var i in _this.definitionWant.POST) {
                        _loop_1(i);
                    }
                    _this.want = response;
                    _this.loader.dismiss();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }, function (error) {
                _this.alertService.showError(error);
                _this.loader.dismiss();
            });
        });
    };
    WantDetailPage.prototype.showMember = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__["a" /* MemberDetailPage */], {
            id: userId
        });
    };
    WantDetailPage.prototype.expandImage = function () {
        this.imageExpanded = !this.imageExpanded;
    };
    WantDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-want-detail',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wantDetail/wantDetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Want Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card class="app-item-details" *ngIf="want">\n    <h2 class="title">{{ want.title }}</h2>\n    <div class="image" [class.expanded]="imageExpanded" (click)="expandImage()">\n      <img [src]="want.image || \'assets/images/default.jpg\'">\n      <div class="posted">Posted {{ want.changed | unixTimeToMoment }}</div>\n    </div>\n    <p class="description">{{ want.description }}</p>\n    <ion-row>\n      <ion-col col-6 (click)="showMember(offer.user_id.id)">\n        <ion-item class="item-avatar">\n          <ion-avatar item-left>\n            <img [src]="want.user_id.portrait || \'assets/images/default_user.jpg\'">\n          </ion-avatar>\n        </ion-item>\n        <ion-item>\n          <h6>{{ want.user_id.name }}</h6>\n          <p>{{ want.user_id.mail }}</p>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <p><b>Category:</b> {{ want.$category }}</p>\n          <p><b>Expires:</b> {{ want.expires | unixTimeToMoment }}</p>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showActions()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/wantDetail/wantDetail.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__services_WantService__["a" /* WantService */], __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
    ], WantDetailPage);
    return WantDetailPage;
}());
//# sourceMappingURL=wantDetail.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addTransaction_addTransaction__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransactionsPage = (function () {
    function TransactionsPage(menuCtrl, modalCtrl, authService, transactionService, alertService) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.transactionService = transactionService;
        this.alertService = alertService;
        this.canPost = false;
        this.success = false;
        this.menuCtrl.enable(true, 'app-menu');
        this.authService.userInfo.subscribe(function (userInfo) {
            _this.username = userInfo.name;
        });
    }
    TransactionsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionService.describe()
            .subscribe(function (response) {
            _this.definitionTransaction = response;
            _this.canPost = !!_this.definitionTransaction.POST;
        }, function (error) { return _this.alertService.showError('Connection problem!'); });
        this.loadTransactions();
    };
    TransactionsPage.prototype.loadTransactions = function () {
        var _this = this;
        this.transactionService.list()
            .subscribe(function (response) { return _this.transactions = response; }, function (error) { return _this.alertService.showError('Connection problem!'); });
    };
    TransactionsPage.prototype.addTransaction = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__addTransaction_addTransaction__["a" /* AddTransactionPage */]);
        modal.onDidDismiss(function (data) {
            if (data === void 0) { data = {}; }
            _this.success = data.success;
            _this.loadTransactions();
        });
        modal.present();
    };
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transactions',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/transactions/transactions.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <h2 class="ui header">Welcome, {{ username }}</h2>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="ui success message" *ngIf="success">\n    <i class="close icon"></i>\n    <div class="header">Success!</div>\n    <p>New transaction created.</p>\n  </div>\n  <div class="ui one column grid">\n    <div class="ui column" *ngFor="let transaction of transactions">\n      <div class="ui card">\n        <div class="content">\n          <h3 class="ui header">{{ transaction.description }}</h3>\n          <div class="description">\n            <p><b (click)="showMember(transaction.payer)">{{ transaction.payer_name }}</b> paid <b (click)="showMember(transaction.payee)">{{ transaction.payee_name }}</b><br>\n            {{ transaction.amount }} hour(s)</p>\n          </div>\n        </div>\n        <div class="extra content">\n          <button class="ui small fluid green button">Action</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <button *ngIf="canPost" class="ui add-new button" (click)="addTransaction()">\n    <i class="plus icon"></i> New Transaction\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/transactions/transactions.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_TransactionService__["a" /* TransactionService */], __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
    ], TransactionsPage);
    return TransactionsPage;
}());
//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_MemberService__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keywords_keywords__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_filtersBuilder_filtersBuilder__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MembersPage = (function () {
    function MembersPage(viewCtrl, navCtrl, navParams, loadingCtrl, popoverCtrl, memberService, alertService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.memberService = memberService;
        this.alertService = alertService;
    }
    MembersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setPagination();
        if (this.navParams.data) {
            this.filter = this.navParams.data.filter;
            this.filterName = this.navParams.data.filterName;
        }
        this.viewCtrl.didEnter.subscribe(function (response) {
            _this.page = 1;
            _this.hasNoMoreData = false;
            _this.isLoading = false;
            _this.members = [];
            _this.loadMembers();
        });
    };
    MembersPage.prototype.setPagination = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_jquery__('page-members .scroll-content').on('scroll', function (ev) {
            if (_this.hasNoMoreData || _this.isLoading) {
                return;
            }
            if ((ev.target.scrollHeight - ev.target.scrollTop) < 700) {
                _this.loadMembers();
            }
        });
    };
    MembersPage.prototype.loadMembers = function () {
        var _this = this;
        if (this.hasNoMoreData || this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loader.present();
        this.memberService.list(this.page, this.filter).subscribe(function (response) {
            if (!response.length) {
                _this.hasNoMoreData = true;
            }
            _this.members = _this.members.concat(response);
            _this.page++;
            _this.loader.dismiss();
            _this.isLoading = false;
        }, function (error) {
            _this.alertService.showError(error);
            _this.loader.dismiss();
            _this.isLoading = false;
        });
    };
    MembersPage.prototype.showDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__memberDetail_memberDetail__["a" /* MemberDetailPage */], {
            id: id
        });
    };
    MembersPage.prototype.showFilters = function () {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */], {
            options: [{
                    title: 'Show By Keyword',
                    page: __WEBPACK_IMPORTED_MODULE_5__keywords_keywords__["a" /* KeywordsFilterPage */],
                    params: {
                        title: 'Members',
                        page: MembersPage
                    }
                }, {
                    title: 'Clear Filters',
                    page: MembersPage
                }]
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: true
        });
        this.popover.present();
    };
    MembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-members',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/members/members.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Members</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list class="app-filters" *ngIf="filterName">\n    <ion-item>\n      Members currently listed in {{ filterName }}\n    </ion-item>\n  </ion-list>\n  <ion-list class="app-items small">\n    <ion-item *ngFor="let member of members" (click)="showDetails(member.id)">\n      <ion-avatar item-left>\n        <img [src]="member.portrait || \'assets/images/default_user.jpg\'">\n      </ion-avatar>\n      <h6>{{ member.name }}</h6>\n      <ion-note item-right>{{ member.locality }}</ion-note>\n      <p class="description">{{ member.aboutme }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button (click)="showFilters()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/members/members.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_MemberService__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_3__services_AlertService__["a" /* AlertService */]])
    ], MembersPage);
    return MembersPage;
}());
//# sourceMappingURL=members.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MemberService__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_filtersBuilder_filtersBuilder__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wants_wants__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_offers_offers__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProfilePage = (function () {
    function ProfilePage(viewCtrl, loadingCtrl, popoverCtrl, authService, memberService, alertService) {
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.authService = authService;
        this.memberService = memberService;
        this.alertService = alertService;
        this.isValid = false;
        this.isLoaded = false;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoaded = false;
        this.viewCtrl.didEnter.subscribe(function (response) {
            if (!_this.isLoaded) {
                _this.loader = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                _this.loader.present();
                _this.authService.userInfo.subscribe(function (userInfo) {
                    _this.user = userInfo;
                    _this.memberService.describe(_this.user).subscribe(function (response) {
                        _this.isLoaded = true;
                        _this.definitionMember = response;
                        for (var i in _this.user) {
                            if (_this.user[i] && _this.definitionMember.PATCH[i]) {
                                _this.definitionMember.PATCH[i].default = _this.user[i];
                            }
                        }
                        _this.fields = _this.definitionMember.PATCH;
                        _this.loader.dismiss();
                    }, function (error) {
                        //console.log(error);
                        _this.alertService.showError(error);
                        _this.loader.dismiss();
                    });
                });
            }
        });
    };
    ProfilePage.prototype.onChanged = function (options) {
        this.member = options.value;
        this.isValid = options.isValid;
    };
    ProfilePage.prototype.editProfile = function () {
        var _this = this;
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */], {
            fields: this.definitionMember.PATCH,
            operation: 'My Account'
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: false
        });
        this.popover.onDidDismiss(function (data) {
            if (data && data.hasConfirmed) {
                _this.loader = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                _this.loader.present();
                _this.member.id = _this.user.id;
                _this.memberService.patch(_this.member).subscribe(function (response) {
                    _this.loader.dismiss();
                    _this.popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */], {
                        operation: 'Offer',
                        options: [{
                                title: 'List Offerings',
                                icon: 'ion-pricetag',
                                page: __WEBPACK_IMPORTED_MODULE_9__pages_offers_offers__["a" /* OffersPage */]
                            }, {
                                title: 'List Wants',
                                icon: 'ion-pin',
                                page: __WEBPACK_IMPORTED_MODULE_8__pages_wants_wants__["a" /* WantsPage */]
                            }]
                    }, {
                        cssClass: 'confirm-popover',
                        enableBackdropDismiss: false
                    });
                    _this.popover.present();
                }, function (error) {
                    _this.alertService.showError(error);
                    _this.loader.dismiss();
                });
            }
        });
        this.popover.present();
    };
    ProfilePage.prototype.showActions = function () {
        this.popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */], {
            options: [{
                    title: 'Show My Offerings',
                    page: __WEBPACK_IMPORTED_MODULE_9__pages_offers_offers__["a" /* OffersPage */],
                    params: {
                        filter: "&user_id=" + this.user.id,
                        filterName: "user: " + this.user.name,
                        myActions: true
                    }
                }, {
                    title: 'Show My Wants',
                    page: __WEBPACK_IMPORTED_MODULE_8__pages_wants_wants__["a" /* WantsPage */],
                    params: {
                        filter: "&user_id=" + this.user.id,
                        filterName: "user: " + this.user.name,
                        myActions: true
                    }
                }]
        }, {
            cssClass: 'confirm-popover',
            enableBackdropDismiss: true
        });
        this.popover.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-profile',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/userProfile/userProfile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list class="home-header">\n    <ion-item>\n      <ion-avatar item-left>\n        <img [src]="user && user.image || \'assets/images/default_user.jpg\'">\n      </ion-avatar>\n    </ion-item>\n    <ion-item>\n      <h2>{{ user && user.name }}</h2>\n      <p>{{ user && user.mail }}</p>\n    </ion-item>\n    <ion-item class="balance">\n			<ion-avatar item-left>\n      	<ion-icon name="trending-up"></ion-icon>\n    	</ion-avatar>\n			<p [innerHTML]="user && user.balance"></p>\n		</ion-item>\n  </ion-list>\n\n  <form-builder-component [fields]="fields" (changed)="onChanged($event)"></form-builder-component>\n\n</ion-content>\n\n<ion-footer>\n  <ion-list>\n    <ion-item>\n      <button [disabled]="!isValid" (click)="editProfile()">Submit</button>\n    </ion-item>\n    <ion-item>\n      <button (click)="showActions()">\n        <i class="ion-navicon-round"></i>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-footer>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/userProfile/userProfile.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_MemberService__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_4__services_AlertService__["a" /* AlertService */]])
    ], ProfilePage);
    return ProfilePage;
}());
//# sourceMappingURL=userProfile.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuOptionPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuOptionPopover = (function () {
    function MenuOptionPopover(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuOptionPopover.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('ion-backdrop').css('background', 'none');
        if (this.navParams.data) {
            this.options = this.navParams.data.options;
        }
    };
    MenuOptionPopover.prototype.goToPage = function (option) {
        var page = option.page;
        if (page) {
            this.navCtrl.push(page, option.params);
            this.viewCtrl.dismiss();
        }
    };
    MenuOptionPopover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'popover-menu-option',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/menu-option.html"*/'<ion-list class="options-popover">\n  <ion-item *ngFor="let option of options" (click)="goToPage(option)">\n    <ion-label>{{ option.title }}</ion-label>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/pages/home/menu-option.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MenuOptionPopover);
    return MenuOptionPopover;
}());
//# sourceMappingURL=menu-option.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(748);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationBuilderComponent = (function () {
    function ConfirmationBuilderComponent(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    ConfirmationBuilderComponent.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.fields = this.navParams.data.fields;
            this.operation = this.navParams.data.operation;
        }
    };
    ConfirmationBuilderComponent.prototype.doCancel = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmationBuilderComponent.prototype.doConfirm = function () {
        this.viewCtrl.dismiss({
            hasConfirmed: true
        });
    };
    ConfirmationBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'confirmation-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/confirmationBuilder/confirmationBuilder.html"*/'<div class="app-confirm-operation">\n	<h6>Confirm {{ operation }}</h6>\n	<ion-grid>\n	  <ion-row *ngFor="let field of fields | keys">\n	    <ion-col class="label" col-6 *ngIf="field.$value">{{ field.label }}</ion-col>\n	    <ion-col class="value" col-6 *ngIf="field.$value" [ngSwitch]="field.type" >\n	    	<div *ngSwitchCase="\'image\'" class="image">\n					<img *ngIf="field.$value" [src]="field.$value">\n				</div>\n				<div *ngSwitchDefault>{{ field.$value }}</div>\n	    </ion-col>\n	  </ion-row>\n	  <ion-row class="actions">\n	  	<ion-col col-6>\n	  		<button class="cancel" (click)="doCancel()">\n	  			<i class="ion-ios-arrow-back"></i> Back\n	  		</button>\n	  	</ion-col>\n	  	<ion-col col-6>\n	  		<button class="confim" (click)="doConfirm()">Confirm</button>\n	  	</ion-col>\n	  </ion-row>\n	</ion-grid>\n</div>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/confirmationBuilder/confirmationBuilder.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConfirmationBuilderComponent);
    return ConfirmationBuilderComponent;
}());
//# sourceMappingURL=confirmationBuilder.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_ConfigService__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_TransactionService__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_OfferService__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_WantService__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_MemberService__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_HttpBasicAuth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_formBuilder_formBuilder__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_fieldBuilder_fieldBuilder__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_confirmationBuilder_confirmationBuilder__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_moreActionsBuilder_moreActionsBuilder__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_filtersBuilder_filtersBuilder__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_menu_option__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_addTransaction_addTransaction__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_transactions_transactions__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_offers_offers__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_offerDetail_offerDetail__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_addOffer_addOffer__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_wants_wants__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_wantDetail_wantDetail__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_addWant_addWant__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_categories_categories__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_keywords_keywords__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_UnixTimeToMoment__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_ObjectKeys__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_members_members__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_memberDetail_memberDetail__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_userProfile_userProfile__ = __webpack_require__(648);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






































Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])(); // workaround for error "Expression has changed after it was checked"
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        // workaround for error "Expression has changed after it was checked"
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* LetsApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_menu_option__["a" /* MenuOptionPopover */],
                __WEBPACK_IMPORTED_MODULE_22__pages_addTransaction_addTransaction__["a" /* AddTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_offerDetail_offerDetail__["a" /* OfferDetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_addOffer_addOffer__["a" /* AddOfferPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_wants_wants__["a" /* WantsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_wantDetail_wantDetail__["a" /* WantDetailPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_addWant_addWant__["a" /* AddWantPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_categories_categories__["a" /* CategoriesFilterPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_keywords_keywords__["a" /* KeywordsFilterPage */],
                __WEBPACK_IMPORTED_MODULE_32__pipes_UnixTimeToMoment__["a" /* UnixTimeToMoment */],
                __WEBPACK_IMPORTED_MODULE_33__pipes_ObjectKeys__["a" /* ObjectKeys */],
                __WEBPACK_IMPORTED_MODULE_34__pages_members_members__["a" /* MembersPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_memberDetail_memberDetail__["a" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_formBuilder_formBuilder__["a" /* FormBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_fieldBuilder_fieldBuilder__["a" /* FieldBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_userProfile_userProfile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* LetsApp */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_moment__["MomentModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* LetsApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_menu_option__["a" /* MenuOptionPopover */],
                __WEBPACK_IMPORTED_MODULE_16__components_confirmationBuilder_confirmationBuilder__["a" /* ConfirmationBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_moreActionsBuilder_moreActionsBuilder__["a" /* MoreActionsBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_filtersBuilder_filtersBuilder__["a" /* FiltersBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_addTransaction_addTransaction__["a" /* AddTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_offerDetail_offerDetail__["a" /* OfferDetailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_addOffer_addOffer__["a" /* AddOfferPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_wants_wants__["a" /* WantsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_wantDetail_wantDetail__["a" /* WantDetailPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_addWant_addWant__["a" /* AddWantPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_categories_categories__["a" /* CategoriesFilterPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_keywords_keywords__["a" /* KeywordsFilterPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_members_members__["a" /* MembersPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_memberDetail_memberDetail__["a" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_userProfile_userProfile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */],
                __WEBPACK_IMPORTED_MODULE_6__services_AuthService__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_7__services_ConfigService__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_8__services_TransactionService__["a" /* TransactionService */],
                __WEBPACK_IMPORTED_MODULE_9__services_OfferService__["a" /* OfferService */],
                __WEBPACK_IMPORTED_MODULE_10__services_WantService__["a" /* WantService */],
                __WEBPACK_IMPORTED_MODULE_11__services_AlertService__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_13__services_HttpBasicAuth__["a" /* HttpBasicAuth */],
                __WEBPACK_IMPORTED_MODULE_12__services_MemberService__["a" /* MemberService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 405,
	"./af.js": 405,
	"./ar": 406,
	"./ar-dz": 407,
	"./ar-dz.js": 407,
	"./ar-ly": 408,
	"./ar-ly.js": 408,
	"./ar-ma": 409,
	"./ar-ma.js": 409,
	"./ar-sa": 410,
	"./ar-sa.js": 410,
	"./ar-tn": 411,
	"./ar-tn.js": 411,
	"./ar.js": 406,
	"./az": 412,
	"./az.js": 412,
	"./be": 413,
	"./be.js": 413,
	"./bg": 414,
	"./bg.js": 414,
	"./bn": 415,
	"./bn.js": 415,
	"./bo": 416,
	"./bo.js": 416,
	"./br": 417,
	"./br.js": 417,
	"./bs": 418,
	"./bs.js": 418,
	"./ca": 419,
	"./ca.js": 419,
	"./cs": 420,
	"./cs.js": 420,
	"./cv": 421,
	"./cv.js": 421,
	"./cy": 422,
	"./cy.js": 422,
	"./da": 423,
	"./da.js": 423,
	"./de": 424,
	"./de-at": 425,
	"./de-at.js": 425,
	"./de.js": 424,
	"./dv": 426,
	"./dv.js": 426,
	"./el": 427,
	"./el.js": 427,
	"./en-au": 428,
	"./en-au.js": 428,
	"./en-ca": 429,
	"./en-ca.js": 429,
	"./en-gb": 430,
	"./en-gb.js": 430,
	"./en-ie": 431,
	"./en-ie.js": 431,
	"./en-nz": 432,
	"./en-nz.js": 432,
	"./eo": 433,
	"./eo.js": 433,
	"./es": 434,
	"./es-do": 435,
	"./es-do.js": 435,
	"./es.js": 434,
	"./et": 436,
	"./et.js": 436,
	"./eu": 437,
	"./eu.js": 437,
	"./fa": 438,
	"./fa.js": 438,
	"./fi": 439,
	"./fi.js": 439,
	"./fo": 440,
	"./fo.js": 440,
	"./fr": 441,
	"./fr-ca": 442,
	"./fr-ca.js": 442,
	"./fr-ch": 443,
	"./fr-ch.js": 443,
	"./fr.js": 441,
	"./fy": 444,
	"./fy.js": 444,
	"./gd": 445,
	"./gd.js": 445,
	"./gl": 446,
	"./gl.js": 446,
	"./he": 447,
	"./he.js": 447,
	"./hi": 448,
	"./hi.js": 448,
	"./hr": 449,
	"./hr.js": 449,
	"./hu": 450,
	"./hu.js": 450,
	"./hy-am": 451,
	"./hy-am.js": 451,
	"./id": 452,
	"./id.js": 452,
	"./is": 453,
	"./is.js": 453,
	"./it": 454,
	"./it.js": 454,
	"./ja": 455,
	"./ja.js": 455,
	"./jv": 456,
	"./jv.js": 456,
	"./ka": 457,
	"./ka.js": 457,
	"./kk": 458,
	"./kk.js": 458,
	"./km": 459,
	"./km.js": 459,
	"./ko": 460,
	"./ko.js": 460,
	"./ky": 461,
	"./ky.js": 461,
	"./lb": 462,
	"./lb.js": 462,
	"./lo": 463,
	"./lo.js": 463,
	"./lt": 464,
	"./lt.js": 464,
	"./lv": 465,
	"./lv.js": 465,
	"./me": 466,
	"./me.js": 466,
	"./mi": 467,
	"./mi.js": 467,
	"./mk": 468,
	"./mk.js": 468,
	"./ml": 469,
	"./ml.js": 469,
	"./mr": 470,
	"./mr.js": 470,
	"./ms": 471,
	"./ms-my": 472,
	"./ms-my.js": 472,
	"./ms.js": 471,
	"./my": 473,
	"./my.js": 473,
	"./nb": 474,
	"./nb.js": 474,
	"./ne": 475,
	"./ne.js": 475,
	"./nl": 476,
	"./nl-be": 477,
	"./nl-be.js": 477,
	"./nl.js": 476,
	"./nn": 478,
	"./nn.js": 478,
	"./pa-in": 479,
	"./pa-in.js": 479,
	"./pl": 480,
	"./pl.js": 480,
	"./pt": 481,
	"./pt-br": 482,
	"./pt-br.js": 482,
	"./pt.js": 481,
	"./ro": 483,
	"./ro.js": 483,
	"./ru": 484,
	"./ru.js": 484,
	"./se": 485,
	"./se.js": 485,
	"./si": 486,
	"./si.js": 486,
	"./sk": 487,
	"./sk.js": 487,
	"./sl": 488,
	"./sl.js": 488,
	"./sq": 489,
	"./sq.js": 489,
	"./sr": 490,
	"./sr-cyrl": 491,
	"./sr-cyrl.js": 491,
	"./sr.js": 490,
	"./ss": 492,
	"./ss.js": 492,
	"./sv": 493,
	"./sv.js": 493,
	"./sw": 494,
	"./sw.js": 494,
	"./ta": 495,
	"./ta.js": 495,
	"./te": 496,
	"./te.js": 496,
	"./tet": 497,
	"./tet.js": 497,
	"./th": 498,
	"./th.js": 498,
	"./tl-ph": 499,
	"./tl-ph.js": 499,
	"./tlh": 500,
	"./tlh.js": 500,
	"./tr": 501,
	"./tr.js": 501,
	"./tzl": 502,
	"./tzl.js": 502,
	"./tzm": 503,
	"./tzm-latn": 504,
	"./tzm-latn.js": 504,
	"./tzm.js": 503,
	"./uk": 505,
	"./uk.js": 505,
	"./uz": 506,
	"./uz.js": 506,
	"./vi": 507,
	"./vi.js": 507,
	"./x-pseudo": 508,
	"./x-pseudo.js": 508,
	"./yo": 509,
	"./yo.js": 509,
	"./zh-cn": 510,
	"./zh-cn.js": 510,
	"./zh-hk": 511,
	"./zh-hk.js": 511,
	"./zh-tw": 512,
	"./zh-tw.js": 512
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 789;

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetsApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operators_ts__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LetsApp = (function () {
    function LetsApp(platform, authService) {
        this.platform = platform;
        this.authService = authService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.authService.loadToken();
        if (this.authService.isAuthenticated()) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        }
        this.initializeApp();
    }
    LetsApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    };
    LetsApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/app/app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__services_AuthService__["a" /* AuthService */]])
    ], LetsApp);
    return LetsApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable







//# sourceMappingURL=rxjs-operators.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreActionsBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MoreActionsBuilderComponent = (function () {
    function MoreActionsBuilderComponent(viewCtrl, navCtrl, navParams, authService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
    }
    MoreActionsBuilderComponent.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.options = this.navParams.data.options;
            this.operation = this.navParams.data.operation;
            this.status = this.navParams.data.status || 'was saved';
        }
    };
    MoreActionsBuilderComponent.prototype.goToPage = function (option) {
        var page = option.page;
        if (page) {
            this.navCtrl.popToRoot();
            this.navCtrl.push(page, option.params);
            this.viewCtrl.dismiss();
        }
    };
    MoreActionsBuilderComponent.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        this.viewCtrl.dismiss();
    };
    MoreActionsBuilderComponent.prototype.doLogout = function () {
        var _this = this;
        this.authService.doLogout().subscribe(function (response) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
            _this.viewCtrl.dismiss();
        });
    };
    MoreActionsBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'more-actions-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/moreActionsBuilder/moreActionsBuilder.html"*/'<div class="app-confirm-operation">\n	<h6>{{ operation }} {{ status }}</h6>\n	<ion-list>\n	  <ion-item *ngFor="let option of options" (click)="goToPage(option)">\n	  	<i [class]="option.icon" item-left></i>\n	    <ion-label>{{ option.title }}</ion-label>\n	  </ion-item>\n	  <ion-item (click)="goToHome()">\n	  	<i class="ion-home" item-left></i>\n	    <ion-label>Main Menu</ion-label>\n	  </ion-item>\n	</ion-list>\n</div>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/moreActionsBuilder/moreActionsBuilder.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */]])
    ], MoreActionsBuilderComponent);
    return MoreActionsBuilderComponent;
}());
//# sourceMappingURL=moreActionsBuilder.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HttpBasicAuth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AlertService__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfigService = (function () {
    function ConfigService(settings, httpBasicAuth, alertService) {
        var _this = this;
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
        this.alertService = alertService;
        this.appConfig = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.requestAppConfig().subscribe(function (response) { return _this.appConfig.next(response); }, function (error) { return _this.alertService.showError(error); });
    }
    ConfigService.prototype.requestAppConfig = function () {
        return this.httpBasicAuth.get(this.settings.URL.config);
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_3__HttpBasicAuth__["a" /* HttpBasicAuth */], __WEBPACK_IMPORTED_MODULE_4__AlertService__["a" /* AlertService */]])
    ], ConfigService);
    return ConfigService;
}());
//# sourceMappingURL=ConfigService.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormBuilderComponent = (function () {
    function FormBuilderComponent() {
        this.isValid = false;
        this.formValue = {};
        this.changed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormBuilderComponent.prototype.onValueChanged = function (field) {
        this.formValue[field.name] = field.value;
        this.fields[field.name].valid = field.valid;
        this.validateForm();
        this.changed.emit({ value: this.formValue, isValid: this.isValid });
    };
    FormBuilderComponent.prototype.validateForm = function () {
        var isValid = true;
        Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"])(this.fields, function (field) { return isValid = isValid && field.valid; });
        this.isValid = isValid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FormBuilderComponent.prototype, "fields", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], FormBuilderComponent.prototype, "changed", void 0);
    FormBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/formBuilder/formBuilder.html"*/'<form class="app-form">\n	<ion-list>\n  	<field-builder-component *ngFor="let field of fields | keys" [field]="field" (changed)="onValueChanged($event)"></field-builder-component>\n  </ion-list>\n</form>'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/formBuilder/formBuilder.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());
//# sourceMappingURL=formBuilder.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_HttpBasicAuth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AlertService__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FieldBuilderComponent = (function () {
    function FieldBuilderComponent(loadingCtrl, settings, httpBasicAuth, formBuilder, alertService) {
        this.loadingCtrl = loadingCtrl;
        this.settings = settings;
        this.httpBasicAuth = httpBasicAuth;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.changed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.validationMessages = {};
        this.formValue = {};
    }
    FieldBuilderComponent.prototype.ngOnInit = function () {
        this.hasSelectedOption = false;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.buildForm();
    };
    FieldBuilderComponent.prototype.buildForm = function () {
        var _this = this;
        var formFields = {};
        var validations = [];
        this.field.$placeholder = this.field.placeholder || this.field.label + (this.field.required === true ? ' (*)' : '');
        this.field.type = this.field.type || 'textfield';
        switch (this.field.type) {
            case 'date':
                if (this.field.min) {
                    var minDate = this.parseDate(this.field.min);
                    this.field.parsedMin = __WEBPACK_IMPORTED_MODULE_7_moment__(minDate).format('YYYY-MM-DD');
                }
                if (this.field.max) {
                    var maxDate = this.parseDate(this.field.max);
                    this.field.parsedMax = __WEBPACK_IMPORTED_MODULE_7_moment__(maxDate).format('YYYY-MM-DD');
                }
                var defaultValue = this.parseDate(this.field.default || this.field.min || 'today');
                this.field.default = __WEBPACK_IMPORTED_MODULE_7_moment__(defaultValue).unix();
                formFields[("$date" + this.field.name)] = [__WEBPACK_IMPORTED_MODULE_7_moment__(defaultValue).format('YYYY-MM-DD')];
                break;
            case 'image':
                if (this.field.default) {
                    this.field.imgSrc = this.field.default;
                }
                break;
        }
        if (typeof this.field.type === 'object') {
            Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["forEach"])(this.field.type, function (childField) { return childField.label = _this.field.$placeholder; });
        }
        var initValue;
        if (this.field.default) {
            initValue = this.field.default;
        }
        else {
            initValue = this[this.field.name];
        }
        if (this.field.disabled) {
            validations.push({
                value: initValue,
                disabled: true
            });
        }
        else {
            validations.push(initValue);
        }
        if (this.field.required === true) {
            validations.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
            this.validationMessages.required = this.field.label + " is required.";
        }
        formFields[this.field.name] = validations;
        this.fieldForm = this.formBuilder.group(formFields);
        this.fieldForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    FieldBuilderComponent.prototype.onValueChanged = function (data) {
        var _this = this;
        if (!this.fieldForm) {
            return;
        }
        var form = this.fieldForm;
        // clear previous error message (if any)
        this.field.errors = '';
        var control = form.get(this.field.name);
        if (control && control.dirty && !control.valid) {
            var messages = this.validationMessages;
            for (var key in control.errors) {
                this.field.errors += messages[key] + ' ';
            }
        }
        if (this.fieldForm.value[this.field.name]) {
            switch (this.field.type) {
                case 'select':
                    if (this.field.multiple) {
                        this.field.$value = Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["map"])(this.fieldForm.value[this.field.name], function (option) { return _this.field.options[option]; }).join(', ');
                    }
                    else {
                        this.field.$value = this.field.options[this.fieldForm.value[this.field.name]];
                    }
                    break;
                case 'date':
                    this.field.$value = __WEBPACK_IMPORTED_MODULE_7_moment__(this.parseDate(this.fieldForm.value[this.field.name])).format('MMM DD, YYYY');
                    break;
                default:
                    this.field.$value = this.fieldForm.value[this.field.name];
            }
        }
        if (data && this.field.type === 'textfield' && this.field.autocomplete) {
            this.autocompleteSearch(this.fieldForm.value[this.field.name]);
        }
        this.changed.emit({
            name: this.field.name,
            valid: this.fieldForm.valid || this.fieldForm.value[this.field.name],
            value: this.fieldForm.value[this.field.name]
        });
    };
    FieldBuilderComponent.prototype.parseDate = function (date) {
        var parsedDate;
        if (typeof date === 'number') {
            parsedDate = __WEBPACK_IMPORTED_MODULE_7_moment__(date * 1000);
        }
        else {
            var tokens = date.split(':');
            while (tokens.length) {
                switch (tokens.shift()) {
                    case 'today':
                        parsedDate = __WEBPACK_IMPORTED_MODULE_7_moment__();
                        break;
                    case 'add':
                        if (!parsedDate) {
                            parsedDate = __WEBPACK_IMPORTED_MODULE_7_moment__();
                        }
                        parsedDate.add(tokens.shift(), tokens.shift());
                        break;
                }
            }
        }
        return parsedDate.toDate();
    };
    FieldBuilderComponent.prototype.addImage = function () {
        this.addImageToField(0); // PHOTOLIBRARY
    };
    FieldBuilderComponent.prototype.takePhoto = function () {
        this.addImageToField(1); // CAMERA
    };
    FieldBuilderComponent.prototype.addImageToField = function (sourceType) {
        var _this = this;
        this.loader.present();
        navigator.camera.getPicture(function (image) {
            _this.field.imgSrc = "data:image/jpeg;base64," + image;
            var fieldValue = {};
            fieldValue[_this.field.name] = _this.field.imgSrc;
            _this.fieldForm.setValue(fieldValue);
            _this.loader.dismiss();
        }, function (error) { return _this.loader.dismiss(); }, {
            destinationType: 0,
            mediaType: 0,
            sourceType: sourceType
        });
    };
    FieldBuilderComponent.prototype.autocompleteSearch = function (value) {
        var _this = this;
        if (!value) {
            this.field.$options = [];
            return;
        }
        if (this.hasSelectedOption) {
            this.hasSelectedOption = false;
            return;
        }
        this.httpBasicAuth.getAutocomplete(this.field.resource, this.field.autocomplete, value).subscribe(function (response) { return _this.field.$options = response; }, function (error) { return _this.alertService.showError(error); });
    };
    FieldBuilderComponent.prototype.selectOption = function (option) {
        var fieldValue = {};
        fieldValue[this.field.name] = option.value;
        this.field.$options = [];
        this.hasSelectedOption = true;
        this.fieldForm.setValue(fieldValue);
    };
    FieldBuilderComponent.prototype.childFieldChange = function (childField) {
        this.formValue[childField.name] = childField.value;
        this.field.type[childField.name].valid = childField.valid;
        var formValue = [];
        Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["forEach"])(this.formValue, function (value) { return formValue.push(value); });
        var fieldValue = {};
        fieldValue[this.field.name] = formValue;
        this.fieldForm.setValue(fieldValue);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FieldBuilderComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], FieldBuilderComponent.prototype, "changed", void 0);
    FieldBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'field-builder-component',template:/*ion-inline-start:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/fieldBuilder/fieldBuilder.html"*/'<ion-item [formGroup]="fieldForm" [ngSwitch]="field.type">\n\n  <ion-label *ngIf="field.placeholder">{{ field.label }}</ion-label>\n\n	<ion-textarea *ngSwitchCase="\'textarea\'" [placeholder]="field.$placeholder" [required]="field.required === true" [formControlName]="field.name" [attr.rows]="field.lines || 2"></ion-textarea>\n\n	<input *ngSwitchCase="\'date\'" type="hidden" [required]="field.required === true" [formControlName]="field.name">\n	<ion-datetime *ngSwitchCase="\'date\'" [required]="field.required === true" [min]="field.parsedMin" [max]="field.parsedMax" [formControlName]="\'$date\' + field.name"></ion-datetime>\n\n	<ion-select *ngSwitchCase="\'select\'" [placeholder]="field.$placeholder" [required]="field.required === true" [formControlName]="field.name" [multiple]="field.multiple">\n    <ion-option [value]="option.name" *ngFor="let option of field.options | keys">{{ option }}</ion-option>\n  </ion-select>\n\n	<input *ngSwitchCase="\'image\'" type="hidden" [required]="field.required === true" [formControlName]="field.name">\n	<div *ngSwitchCase="\'image\'">\n		<div class="image" *ngIf="field.imgSrc">\n			<img [src]="field.imgSrc">\n		</div>\n	</div>\n	<button *ngSwitchCase="\'image\'" ion-button full (click)="addImage()"><i class="image icon"></i>Add Image</button>\n	<button *ngSwitchCase="\'image\'" ion-button full (click)="takePhoto()"><i class="photo icon"></i>Take Photo</button>\n\n	<ion-input *ngSwitchCase="\'textfield\'" type="text" [placeholder]="field.$placeholder" [required]="field.required === true" [formControlName]="field.name"></ion-input>\n\n	<ion-input *ngSwitchCase="\'number\'" type="number" [placeholder]="field.$placeholder" [required]="field.required === true" [formControlName]="field.name" [min]="field.min" [max]="field.max"></ion-input>\n\n	<ion-row *ngSwitchDefault>\n		<ion-col *ngFor="let childfield of field.type | keys">\n			<field-builder-component [field]="childfield" (changed)="childFieldChange($event)"></field-builder-component>\n		</ion-col>\n	</ion-row>\n\n</ion-item>\n\n<ion-list class="app-items mini" *ngIf="field.$options">\n  <ion-item *ngFor="let option of field.$options" (click)="selectOption(option)">\n  	<ion-avatar item-left>\n      <img [src]="option.portrait || option.image || \'assets/images/default_user.jpg\'">\n    </ion-avatar>\n    <h6>{{ option.value }}</h6>\n  </ion-item>\n</ion-list>\n\n<ion-item class="form-error" *ngIf="field.errors">\n  <p>{{ field.errors }}</p>\n</ion-item>\n'/*ion-inline-end:"/Users/me/Documents/CODE/LETS-app-mayel/src/components/fieldBuilder/fieldBuilder.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_4__services_HttpBasicAuth__["a" /* HttpBasicAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__services_AlertService__["a" /* AlertService */]])
    ], FieldBuilderComponent);
    return FieldBuilderComponent;
}());
//# sourceMappingURL=fieldBuilder.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnixTimeToMoment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnixTimeToMoment = (function () {
    function UnixTimeToMoment() {
    }
    UnixTimeToMoment.prototype.transform = function (unixTime) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(parseInt(unixTime + "000")).format('DD/MM/YYYY');
    };
    UnixTimeToMoment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'unixTimeToMoment' }), 
        __metadata('design:paramtypes', [])
    ], UnixTimeToMoment);
    return UnixTimeToMoment;
}());
//# sourceMappingURL=UnixTimeToMoment.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectKeys; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjectKeys = (function () {
    function ObjectKeys() {
    }
    ObjectKeys.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push(Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])(value[key], {
                name: key
            }));
        }
        return keys;
    };
    ObjectKeys = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' }), 
        __metadata('design:paramtypes', [])
    ], ObjectKeys);
    return ObjectKeys;
}());
//# sourceMappingURL=ObjectKeys.js.map

/***/ })

},[650]);
//# sourceMappingURL=main.js.map