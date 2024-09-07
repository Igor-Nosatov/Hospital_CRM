FROM php:8.2-fpm

WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    mariadb-client \
    libpng-dev \
    libonig-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    libzip-dev \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    gnupg

# Install PHP extensions
RUN docker-php-ext-install \
    bcmath \
    sockets

# Add Confluent APT repository for librdkafka
RUN curl -fsSL https://packages.confluent.io/deb/7.0/archive.key | apt-key add - \
    && echo "deb [arch=amd64] https://packages.confluent.io/deb/7.0 stable main" > /etc/apt/sources.list.d/confluent.list \
    && apt-get update

# Install librdkafka and libssl for SSL/TLS support
RUN apt-get install -y librdkafka-dev libssl-dev

# Clean up the package cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd pdo_mysql mbstring exif pcntl bcmath zip

# Install librdkafka and the PHP rdkafka extension
RUN pecl install rdkafka \
    && docker-php-ext-enable rdkafka

# Install the redis PHP extension
RUN pecl install redis \
    && docker-php-ext-enable redis

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set recommended PHP.ini settings for Laravel
RUN echo "memory_limit = 4G" > /usr/local/etc/php/conf.d/laravel.ini

# Switch to non-root user
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Copy application files
COPY --chown=www:www . /var/www

USER www

EXPOSE 9000
CMD ["php-fpm"]
