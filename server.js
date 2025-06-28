const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')
const { uptime } = require('process')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.use(cookieParser())

    //Logger middleware
    server.use((req, res, next) => {
        console.log(`${req.method} ${req.url}`)
        next()
    })

    // Auth middleware
    const isAuthenticated = (req) => req.cookies?.auth_token === 'valid-token'

    server.get('/dashboard', (req, res) => {
        if(!isAuthenticated(req)) {
            return res.redirect('/login')
        }
        return app.render(req, res, '/dashboard', req.query)
    })

    server.get('/login', (req, res) => {
        if(isAuthenticated(req)) {
            return res.redirect('/dashboard')
        }
        return app.render(req, res, '/login', req.query)
    })

    // API route
    server.get('/api/health', (req, res) => {
        res.json({status: 'Healthy', uptime: process.uptime() })
    })

    // Custom 404 for unknown routes
    server.all('*', (req, res) => {
        return handle(req, res)
    })

    const PORT = 3000
    server.listen(PORT, () => {
        console.log(`> Server running on http://localhost:${PORT}`)
    })
})