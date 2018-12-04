#!/bin/sh
#sass --watch sass/styles.scss css/styles.css
sass --watch sass:css
#bundle exec sass -r sass-globbing --watch sass:css

