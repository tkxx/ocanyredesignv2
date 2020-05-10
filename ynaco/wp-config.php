<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ocanyv2' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5}K9rG&X%}QBj5g*5H7PEv[hp!LVEZ9W`CIQF.0kJr|y,O(g)<oH/@W0ixek/9Rr' );
define( 'SECURE_AUTH_KEY',  't*.v/~Sy|m&86ATlmj.{&:^]&1o<<DEPX|[NG 6u_/3[t(R29LlJ~o>o678ANMWY' );
define( 'LOGGED_IN_KEY',    '8Bmx!2q~K/!aU3BKj0<.2L$jm0!J-bTUh&<|?]gyqP?>nog-4~m3WOA7<&|ljx?Z' );
define( 'NONCE_KEY',        'Q ;(%eV1)|y6RRwynx(r^T{eS>q]Ah5G.26NWZu)zGq/D3Rv0$ctd|vy<kFTeDf5' );
define( 'AUTH_SALT',        'X*{;6 AlYOQ@^J1r.o(^x|3^pUnvu3Bb:z-vk=D.*vQ{&Qk#^e=N}Zd0)ETUO[+V' );
define( 'SECURE_AUTH_SALT', 'CTNoAw#-*Hcq<E3DfguT5hW3FzUu=.A4-S]j5p(*.[8wRk4L2Cn3wCVXK8&?et$+' );
define( 'LOGGED_IN_SALT',   '^WD$sioA74m28<D/=J.vz=#0|@s1w{R|u5Uz3b!K%-Jr!l+OWRl1CK7VA1CH1oPZ' );
define( 'NONCE_SALT',       'ili5,&HKK%Z(2bvy9FEM}fOA0W{KS:*]ZUhv]A-L5@u{Pr&/ioW_{5Q#fv?205u<' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';


// Hardcoding site URL.
define('WP_HOME', 'http://ocanywp.org');
define('WP_SITEURL', 'http://ocanywp.org');
