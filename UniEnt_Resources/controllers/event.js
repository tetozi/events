
import { setHeader } from "./auth.js"
import commonPartials from './partials.js'
import { close, create, get, update } from '../models/handlers.js'

export function getCreate(ctx) {
  setHeader(ctx)
  ctx.loadPartials(commonPartials).partial('./view/events/create.hbs')
}

export function postCreate(ctx) {
  const { title, description, dateTime, imageURL } = ctx.params
  // make one more property organizer
  const organizer = sessionStorage.getItem('user')
  create({ title, description, dateTime, imageURL, organizer, intersetedIn: 0 })
    .then(res => {
      console.log(res);
      ctx.redirect('#/home')
    }).catch(e => console.log(e))
}
//details

export function getDetail(ctx) {
  setHeader(ctx)
  //take id from firebase
  const id = ctx.params.id
  get(id)
    .then(res => {
      const event = { ...res.data(), id: res.id }
      // chek for wich one is organizer 
      ctx.isOrganizer = event.organizer === sessionStorage.getItem('user')
      ctx.event = event
      console.log(event);
      ctx.loadPartials(commonPartials).partial('./view/events/details.hbs')
    }).catch(e => console.log(e))
}

export function getEdit(ctx) {
  const id = ctx.params.id

  get(id)
    .then(res => {
      const event = { ...res.data(), id: res.id }
      ctx.event = event

      ctx.loadPartials(commonPartials).partial('./view/events/edit.hbs')
    }).catch(e => console.log(e))

}


export function postEdit(ctx) {
  const { name, description, dateTime, imageURL, } = ctx.params
  const id = ctx.params.id
  update(id, { name, description, dateTime, imageURL, })
    .then(res => {
      console.log(res);
      ctx.redirect(`#/details/${id}`)
    }).catch(e => console.log(e));
}


export function getClose(ctx) {
  const id = ctx.params.id
  close(id)
    .then(res => {
      console.log(res);
      ctx.redirect('#/home')
    })
}

export function getJoin(ctx) {
  const id = ctx.params.id

  get(id)
    .then(res => {
       res.data()
     
        .then(() => {
          ctx.redirect(`#/details/${id}`)
        }).catch(e => console.log(e))
    }).catch(e => console.log(e))
}