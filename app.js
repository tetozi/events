import { getCreate, postCreate, getDetail, getEdit, postEdit, getClose ,getJoin} from './UniEnt_Resources/controllers/event.js';
import { getHome } from './UniEnt_Resources/controllers/home.js'
import { getLogin, getRegister, getProfie, postRegister, postLogin, getLogout } from './UniEnt_Resources/controllers/user.js'


const app = Sammy("body", function () {
    this.use("Handlebars", "hbs");

    this.get('#/home', getHome)
    this.get('#/login', getLogin)
    this.get('#/profile', getProfie)
    this.get('#/register', getRegister);

    this.post('#/register', postRegister)
    this.post('#/login', postLogin);
    this.get('#/logout', getLogout)

    this.get('#/create', getCreate);
    this.post('#/create', postCreate)

    this.get('#/details/:id', getDetail)

    this.get('#/edit/:id', getEdit)
    this.post('#/edit/:id', postEdit)

    this.get('#/close/:id', getClose)

    this.get('#/join/:id', getJoin)
    
});
app.run('#/home');