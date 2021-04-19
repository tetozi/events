import { login, logout, registerUser } from '../models/user.js'
import { saveUserInfo , setHeader} from './auth.js'
import commonPartials from './partials.js'


export function getLogin (ctx) {
  setHeader(ctx)
  ctx.loadPartials(commonPartials).partial('./view/user/login.hbs')
}

export function getProfie (ctx) {
  setHeader(ctx)
  ctx.loadPartials(commonPartials).partial('./view/user/profile.hbs')
};

export function getRegister(ctx) {
  setHeader(ctx)
  ctx.loadPartials(commonPartials).partial('./view/user/register.hbs')
};


export function postRegister(ctx) {

  const {email, password, rePassword, gender} = ctx.params
  if (password !== rePassword) {
    throw new Error('Password as not match!')
  }
  registerUser(username,email, password, rePassword, gender)
  .then(res => {
    console.log(res);
    saveUserInfo(res.user.email)
    ctx.redirect('#/home')
  })
  .catch(e => console.log(e));
}

export function postLogin(ctx) {
  const {email, password} = ctx.params
  login(email, password).
  then( res => {
    saveUserInfo(res.user.email)
    ctx.redirect('#/home')
  }).catch(e => console.log(e));
}


export function getLogout(ctx) {

  logout()
  .then( () => {
    sessionStorage.clear()
    ctx.redirect('#/home')
  }).catch(e => console.log(e));
}