# Installation

## Prerequisites

Before you start, you need to install the prerequisites.

- [Laravel 8.x Server Requirements](https://laravel.com/docs/8.x/deployment#server-requirements)
- [Composer](https://getcomposer.org)
- ImageMagick PHP Extension
- MySQL or PostgreSQL (with JSON support)
- Redis

## Clone the Repository

We recommend that you use the [latest stable version](https://github.com/galaxyofdrones/galaxyofdrones/releases).

``` bash
$ git clone git@github.com:galaxyofdrones/galaxyofdrones.git
$ cd galaxyofdrones
$ git tag -l

v1.0.0
v1.0.0-alpha1
v1.0.0-alpha2
v1.0.0-beta1
v1.0.0-beta2
v1.0.1
v1.1.0
v1.2.0
v1.3.0

$ git checkout v1.3.0
```

## Copy the Configuration

By default Galaxy of Drones Online comes with an example configuration file.

``` bash
$ cp .env.example .env
```

## Configuring a Database

You can edit these values in the newly created `.env` file.

``` bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

## Configuring the Redis

You can edit these values in the `.env` file.

``` bash
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
REDIS_DB=0
REDIS_CACHE_DB=1
```

## Install Dependencies

Next you need to install the dependencies with Composer.

::: tip
If you want to run in developer mode, don't use the `--no-dev` option.
:::

``` bash
$ composer install -o --no-dev
```

## Set the Application key

You need to set the application key with this command. 

``` bash
$ php artisan key:generate
```

## Create the Passport keys

Next you need to generate the Laravel Passport keys.

``` bash
$ php artisan passport:keys
```

## Run the Migrations

This command will run the database migrations with seeds.

``` bash
$ php artisan migrate --seed
```

## Run the Horizon

You need to run the Laravel Horizon for queue jobs.

::: tip
We recommend that you use the [Supervisord](http://supervisord.org) for this command.
:::

``` bash
$ php artisan horizon
```

## Run the Scheduler

You need to add the following Cron entry to your server.

``` bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

## Configuring the Laravel Websockets

You can edit these values in the `.env` file.

``` bash
PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
```

Next you need to add the `/ws` path to your nginx site configuration.

``` bash
location /ws {
    proxy_pass http://127.0.0.1:6001/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

## Run the Laravel Websockets

This command will start the Laravel Websockets.

::: tip
We recommend that you use the [Supervisord](http://supervisord.org) for this command.
:::

``` bash
$ php artisan websockets:serve
```

## Generate the Starmap

Estimated time: `~1 hour`, Estimated size: `~4 GB`

``` bash
$ php artisan starmap:generate
```

## Final Step

You can login with the following credentials.

``` bash
username: koodilab
password: havefun
```
