Express site template
=====================

Core packages
-------------
 * Express (~3.0.0rc5)
 * Jade (jade ~0.27.6)
 * Stylus (stylus ~0.29.0)
 * Logging (winston ~0.6.2)
 * Session support (connect-redis ~1.4.4)
 * Redis (redis ~0.8.1)
 * Mongo (mongodb ~1.1.10)

Preconfigureg middleware (in order)
-----------------------------------
 * favicon
 * logger
 * bodyParser
 * methodOverride
 * session (with `connect-redis`)
 * express `app.router`
 * stylus
 * static
