import { getAll } from '../models/handlers.js';
import { setHeader } from './auth.js'
import commonPartials from './partials.js'


export function getHome(ctx) {
    setHeader(ctx);
    getAll()
        .then(res => {
            const events = res.docs.map(x => x = { ...x.data(), id: x.id })
            console.log(events);
            ctx.events = events
            ctx.loadPartials(commonPartials).partial('./view/home.hbs')
        })
}